import dotenv from "dotenv";
// Load env FIRST before anything else
dotenv.config();

import express from "express";
import cors from "cors";
import morgan from "morgan";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import roadmapRoutes from "./routes/roadmapRoutes.js";
import aiRoutes from "./routes/aiRoutes.js";

// ✅ initialize app FIRST
const app = express();

app.use(express.json());

// CORS configuration - allow multiple origins for production
const allowedOrigins = process.env.FRONTEND_URL 
  ? process.env.FRONTEND_URL.split(',').map(url => url.trim())
  : ["http://localhost:5173", "http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, Postman, etc.)
      if (!origin) return callback(null, true);
      
      if (allowedOrigins.indexOf(origin) !== -1 || process.env.NODE_ENV !== 'production') {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);
app.use(morgan(process.env.NODE_ENV === 'production' ? 'combined' : 'dev'));

// Debug middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`🔍 ${req.method} ${req.originalUrl}`);
  next();
});

// ✅ then use your routes
app.get("/", (req, res) => {
  res.send("Backend Running ✅");
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "Backend is running" });
});

// Register routes
app.use("/api/auth", authRoutes);
app.use("/api/roadmap", roadmapRoutes);
app.use("/api/ai", aiRoutes);

// Debug: Log registered routes
console.log("📋 Registered API routes:");
console.log("   POST /api/auth/register");
console.log("   POST /api/auth/login");
console.log("   POST /api/roadmap/generate");
console.log("   POST /api/roadmap/save");
console.log("   GET  /api/roadmap/all");
console.log("   DELETE /api/roadmap/:id");
console.log("   POST /api/ai/ask");
console.log("   GET  /api/health");

// 404 handler for unmatched routes (must be last, after all other routes)
app.use((req, res) => {
  if (req.path.startsWith('/api/')) {
    return res.status(404).json({ 
      msg: `Route not found: ${req.method} ${req.originalUrl}`,
      availableRoutes: [
        "POST /api/auth/register",
        "POST /api/auth/login",
        "POST /api/roadmap/generate",
        "POST /api/roadmap/save",
        "GET  /api/roadmap/all",
        "DELETE /api/roadmap/:id",
        "POST /api/ai/ask",
        "GET  /api/health"
      ]
    });
  }
  res.status(404).send("Not Found");
});

// ✅ finally start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`API routes available at: http://localhost:${PORT}/api/*`);
  // Connect to database (non-blocking - server continues even if DB fails)
  connectDB().catch(err => {
    console.error("Database connection failed, but server is still running");
  });
});
