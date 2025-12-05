import { Laptop, ShieldCheck, Brain, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-blue-900 to-gray-900 text-white px-4">
      <div className="text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="w-12 h-12 text-yellow-400 animate-pulse" />
        </div>
        <h1 className="text-5xl font-extrabold mb-4">
          Welcome to <span className="text-blue-400">CareerPath AI</span>
        </h1>
        <p className="text-xl mb-8 text-gray-300 max-w-xl mx-auto">
          🚀 Discover personalized roadmaps and AI-driven career guidance to build your future with confidence.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
          <div className="flex flex-col items-center hover:scale-110 transition">
            <Laptop className="w-14 h-14 mb-2 text-blue-300" />
            <span>Web Development</span>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition">
            <ShieldCheck className="w-14 h-14 mb-2 text-green-300" />
            <span>Cyber Security</span>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition">
            <Brain className="w-14 h-14 mb-2 text-yellow-300" />
            <span>AI & Data Science</span>
          </div>
        </div>

        <div className="flex gap-6 justify-center">
          <Link
            to="/login"
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="border border-blue-400 px-6 py-3 rounded-lg hover:bg-blue-400 hover:text-white transition"
          >
            Register
          </Link>
        </div>
      </div>

      <div className="mt-16 text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-3 text-yellow-400">🤖 Meet Your AI Career Assistant</h2>
        <p className="text-gray-300 text-lg">
          Ask questions like “What should I learn after React?” or “How to switch from Web Dev to Cybersecurity?”  
          and let <span className="text-blue-400">CareerPath AI</span> guide you instantly!
        </p>
      </div>
    </div>
  );
}
