import { Routes, Route, Navigate } from "react-router-dom";
import { AlertTriangle, X } from "lucide-react";
import { useState, useEffect } from "react";
import { api } from "./api";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import GenerateRoadmap from "./pages/GenerateRoadmap";
import AIAssistant from "./pages/AIAssistant";
import Profile from "./pages/Profile";
import SavedRoadmaps from "./pages/SavedRoadmaps";

import Navbar from "./components/Navbar";
import FloatingAssistant from "./components/FloatingAssistant";

function ConfigWarning() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    // Only show warning in production if API is not configured
    if (import.meta.env.PROD && (!api.isConfigured || !api.baseUrl)) {
      setShowWarning(true);
    }
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#DC2626] to-[#B91C1C] text-white shadow-lg border-b border-[#991B1B]">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3 flex-1">
          <AlertTriangle className="w-5 h-5 flex-shrink-0" />
          <div className="flex-1">
            <p className="font-semibold text-sm">⚠️ Backend Not Configured</p>
            <p className="text-xs text-red-100 mt-0.5">
              VITE_API_BASE_URL is missing. Set it in Vercel/Netlify → Settings → Environment Variables → Add: VITE_API_BASE_URL = your Render backend URL → Redeploy
            </p>
          </div>
        </div>
        <button
          onClick={() => setShowWarning(false)}
          className="ml-4 p-1 hover:bg-red-700 rounded transition"
          aria-label="Close warning"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <ConfigWarning />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Protected><Dashboard /></Protected>} />
        <Route path="/profile" element={<Protected><Profile /></Protected>} />
        <Route path="/saved" element={<Protected><SavedRoadmaps /></Protected>} />

        <Route path="/generate" element={<Protected><GenerateRoadmap /></Protected>} />
        <Route path="/assistant" element={<Protected><AIAssistant /></Protected>} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* Floating AI Assistant - Available on all pages */}
      <FloatingAssistant />
    </>
  );
}

function Protected({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/login" />;
}
