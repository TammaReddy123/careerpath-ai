import { useState } from "react";
import axios from "axios";
import { api } from "../api";
import { AlertCircle } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);

  const loginUser = async () => {
    setMsg("");
    setIsError(false);
    
    if (!email.trim() || !password.trim()) {
      setMsg("Please enter both email and password");
      setIsError(true);
      return;
    }

    try {
      const res = await axios.post(`${api.baseUrl}/api/auth/login`, {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      setMsg("Login successful! ✅");
      setIsError(false);
      
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 500);
    } catch (err) {
      let errorMsg = "Invalid email or password";
      
      if (err.response) {
        // Server responded with error status
        errorMsg = err.response.data?.msg || `Server error: ${err.response.status}`;
      } else if (err.request) {
        // Request was made but no response received
        const isProduction = import.meta.env.PROD;
        if (isProduction) {
          if (!api.isConfigured || !api.baseUrl) {
            errorMsg = "⚠️ Backend not configured. The VITE_API_BASE_URL environment variable is missing. Please set it in your deployment platform (Vercel/Netlify) to your Render backend URL (e.g., https://your-backend.onrender.com) and redeploy.";
          } else {
            errorMsg = `Cannot connect to backend server at ${api.baseUrl}. Please check: 1) Backend is running, 2) CORS is configured, 3) Your internet connection.`;
          }
        } else {
          errorMsg = "Cannot connect to server. Please make sure the backend is running on port 5000.";
        }
      } else {
        errorMsg = err.message || errorMsg;
      }
      
      setMsg(errorMsg);
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#1E293B] via-[#1A202C] to-[#0F172A] p-4">
      <div className="bg-[#1F2937] shadow-2xl rounded-2xl p-10 w-full max-w-md transform transition-all hover:scale-[1.02] animate-fade-in border border-[#374151]">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-white mb-2">
            Welcome Back
          </h2>
          <p className="text-[#94A3B8]">Sign in to continue your career journey</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2 text-[#E2E8F0]">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && loginUser()}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 text-[#E2E8F0]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && loginUser()}
            />
          </div>
        </div>

        <button
          onClick={loginUser}
          className="btn-primary w-full mt-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
        >
          Sign In
        </button>

        {msg && (
          <div className={`mt-4 p-4 rounded-lg ${
            isError 
              ? 'bg-[#4A1E1E] border border-[#7F1D1D] text-[#F87171]' 
              : 'bg-[#1E3A2E] border border-[#10B981] text-[#10B981]'
          }`}>
            <div className="flex items-start gap-2">
              {isError && <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />}
              <div className="flex-1">
                <p className="text-sm font-medium">{msg}</p>
                {isError && import.meta.env.PROD && (!api.isConfigured || !api.baseUrl) && (
                  <div className="mt-3 pt-3 border-t border-[#7F1D1D]">
                    <p className="text-xs text-[#FCA5A5] mb-2">Quick Fix:</p>
                    <ol className="text-xs text-[#FCA5A5] list-decimal list-inside space-y-1">
                      <li>Go to Vercel/Netlify dashboard</li>
                      <li>Settings → Environment Variables</li>
                      <li>Add: <code className="bg-[#1F2937] px-1 rounded">VITE_API_BASE_URL</code> = your Render backend URL</li>
                      <li>Redeploy your frontend</li>
                    </ol>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        <p className="text-center mt-6 text-sm text-[#94A3B8]">
          Don't have an account?{" "}
          <a href="/register" className="text-[#3B82F6] hover:text-[#60A5FA] hover:underline font-medium transition">
            Create one now
          </a>
        </p>
      </div>
    </div>
  );
}
