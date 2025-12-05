import { Routes, Route, Navigate } from "react-router-dom";

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

export default function App() {
  return (
    <>
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
