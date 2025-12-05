import { Router } from "express";
import dotenv from "dotenv";
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();

const router = Router();
const genAI = process.env.GEMINI_API_KEY
  ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
  : null;

router.post("/ask", async (req, res) => {
  const { query } = req.body;
  if (!query) return res.status(400).json({ reply: "Please provide a question." });

  try {
    if (!genAI) {
      throw new Error("GEMINI_API_KEY not configured");
    }

    const model = genAI.getGenerativeModel({ model: "gemini-2.0-pro" });
    const result = await model.generateContent(query);
    res.json({ reply: result.response.text() });
  } catch (err) {
    console.error(err.message);

    // Fallback simple rule-based guidance for common career questions
    const lower = query.toLowerCase();
    let fallback = "";

    if (lower.includes("fullstack") || lower.includes("full stack")) {
      fallback =
        "Full‑stack development means you work on both the frontend (what the user sees) and the backend (server, database, APIs).\n\n" +
        "A solid full‑stack path usually looks like:\n" +
        "1) HTML, CSS, and core JavaScript\n" +
        "2) A frontend framework like React\n" +
        "3) Git and GitHub for version control\n" +
        "4) Node.js + Express for backend APIs\n" +
        "5) A database such as MongoDB\n" +
        "6) Deployment on platforms like Vercel/Render\n\n" +
        "You can then specialise in performance, testing, or DevOps as you grow.";
    } else if (lower.includes("web") || lower.includes("frontend")) {
      fallback =
        "For modern web development, start with strong fundamentals in HTML, CSS, and JavaScript, then move into React or another framework.\n" +
        "Next steps: learn state management, APIs (REST/JSON), authentication, and basic accessibility. Finally, learn deployment and performance optimisation.";
    } else if (lower.includes("cyber") || lower.includes("security")) {
      fallback =
        "For cyber security, begin with networking basics and Linux, then move into security concepts, tools, and hands‑on labs like TryHackMe. " +
        "Over time you can focus on penetration testing, forensics, or incident response.";
    } else {
      fallback =
        "I’m having trouble connecting to the AI model right now, but here’s a general tip: break your goal into stages (fundamentals → tools → projects → deployment) " +
        "and make a simple roadmap with weekly milestones. You can also use the Roadmap page to generate a structured learning path.";
    }

    res.status(200).json({ reply: fallback });
  }
});

export default router;
