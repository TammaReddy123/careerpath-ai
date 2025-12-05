import { LayoutDashboard, Bot, User, Route, LogOut, Bookmark, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ open, onClose }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div
      className={`fixed top-16 bottom-0 left-0 w-64 bg-[#1F2937] shadow-xl p-6 flex flex-col transform transition-transform duration-300 z-40 border-r border-[#374151] ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Logo */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-2xl font-bold text-white leading-tight">
          CareerPath
          <br />
          <span className="text-[#3B82F6]">AI</span>
        </h2>
        <button
          onClick={onClose}
          className="md:hidden inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-[#374151] text-white"
        >
          <X size={18} />
        </button>
      </div>

      {/* Links */}
      <div className="flex flex-col gap-6 flex-1">

        <Link className="sidebar-link" to="/dashboard">
          <LayoutDashboard size={20} /> Dashboard
        </Link>

        <Link className="sidebar-link" to="/generate">
          <Route size={20} /> Roadmap
        </Link>

        <Link className="sidebar-link" to="/assistant">
          <Bot size={20} /> AI Assistant
        </Link>

        <Link className="sidebar-link" to="/saved">
          <Bookmark size={20} /> Saved Roadmaps
        </Link>

        <Link className="sidebar-link" to="/profile">
          <User size={20} /> Profile
        </Link>
      </div>

      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="sidebar-link mt-auto text-[#F87171] hover:text-[#EF4444] hover:bg-[#4A1E1E]"
      >
        <LogOut size={20} /> Logout
      </button>

    </div>
  );
}
