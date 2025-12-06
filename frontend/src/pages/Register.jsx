import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../api";
import { User, Upload, X, AlertCircle } from "lucide-react";
import { detectGenderFromName, detectGenderFromEmail, getAvatarUrl } from "../utils/genderDetection";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);

  // Auto-detect gender from name or email
  useEffect(() => {
    if (!gender && (name || email)) {
      const detectedGender = detectGenderFromName(name) || detectGenderFromEmail(email);
      if (detectedGender) {
        setGender(detectedGender);
      }
    }
  }, [name, email, gender]);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setMsg("Image size should be less than 2MB");
        setIsError(true);
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setProfileImage(null);
    setProfileImagePreview(null);
  };

  const getDefaultAvatar = (gender) => {
    return getAvatarUrl(gender, name || email);
  };

  const registerUser = async () => {
    setMsg("");
    setIsError(false);
    
    // Basic validation
    if (!name.trim() || !email.trim() || !password.trim()) {
      setMsg("Please fill in all fields");
      setIsError(true);
      return;
    }

    if (password.length < 6) {
      setMsg("Password must be at least 6 characters");
      setIsError(true);
      return;
    }

    try {
      const url = `${api.baseUrl}/api/auth/register`;
      console.log("Registering user at:", url);
      
      // Use default avatar if no image uploaded
      const finalImage = profileImage || (gender ? getDefaultAvatar(gender) : null);
      
      const res = await axios.post(url, {
        name,
        email,
        password,
        gender: gender || null,
        profile_image: finalImage,
      });

      setMsg(res.data.msg || "Registration complete! ✅");
      setIsError(false);
      
      // Clear form after successful registration
      setName("");
      setEmail("");
      setPassword("");
      setGender("");
      setProfileImage(null);
      setProfileImagePreview(null);
      
      // Redirect to login after 2 seconds
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } catch (err) {
      console.error("Registration error:", err);
      
      let errorMsg = "Registration failed. Please try again.";
      
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
            // Check if it's a CORS or network error
            const attemptedUrl = api.baseUrl + '/api/auth/register';
            errorMsg = `Cannot connect to backend server at ${api.baseUrl}. Please check: 1) Backend is running on Render, 2) CORS is configured correctly, 3) Your internet connection.`;
          }
        } else {
          errorMsg = "Cannot connect to server. Please make sure the backend is running on port 5000.";
        }
      } else {
        // Something else happened
        errorMsg = err.message || errorMsg;
      }
      
      setMsg(errorMsg);
      setIsError(true);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#1E293B] via-[#1A202C] to-[#0F172A] p-4">
      <div className="bg-[#1F2937] shadow-2xl rounded-2xl p-8 w-full max-w-md transform transition-all hover:scale-[1.02] border border-[#374151]">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-white mb-2">
            Create Account
          </h2>
          <p className="text-[#94A3B8]">Start your career journey today</p>
        </div>

        {/* Profile Image Upload */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-[#3B82F6] shadow-lg bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
              {profileImagePreview ? (
                <img 
                  src={profileImagePreview} 
                  alt="Profile" 
                  className="w-full h-full object-cover"
                />
              ) : gender ? (
                <img 
                  src={getDefaultAvatar(gender)} 
                  alt="Avatar" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <User size={40} className="text-white" />
              )}
            </div>
            {profileImagePreview && (
              <button
                onClick={removeImage}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600 transition"
              >
                <X size={16} />
              </button>
            )}
          </div>
          <label className="mt-4 cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
              <div className="flex items-center gap-2 px-4 py-2 bg-[#374151] text-[#3B82F6] rounded-lg hover:bg-[#4B5563] transition">
                <Upload size={18} />
                <span className="text-sm font-medium">Upload Photo</span>
              </div>
          </label>
        </div>

        {/* Gender Selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2 text-[#E2E8F0]">
            Gender (Optional)
          </label>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setGender('male')}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition ${
                    gender === 'male'
                      ? 'border-[#3B82F6] bg-[#1E3A5F] text-[#60A5FA]'
                      : 'border-[#374151] text-[#E2E8F0] hover:border-[#3B82F6] bg-[#1F2937]'
                  }`}
            >
              👨 Male
            </button>
            <button
              type="button"
              onClick={() => setGender('female')}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition ${
                    gender === 'female'
                      ? 'border-[#EC4899] bg-[#4A1E3D] text-[#F472B6]'
                      : 'border-[#374151] text-[#E2E8F0] hover:border-[#EC4899] bg-[#1F2937]'
                  }`}
            >
              👩 Female
            </button>
            <button
              type="button"
              onClick={() => setGender('other')}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition ${
                    gender === 'other'
                      ? 'border-[#8B5CF6] bg-[#3D1E4A] text-[#A78BFA]'
                      : 'border-[#374151] text-[#E2E8F0] hover:border-[#8B5CF6] bg-[#1F2937]'
                  }`}
            >
              Other
            </button>
          </div>
        </div>

        <input 
          className="input w-full" 
          placeholder="Full Name" 
          value={name}
          onChange={(e) => setName(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && registerUser()}
        />
        <input 
          className="input w-full mt-4" 
          placeholder="Email Address" 
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && registerUser()}
        />
        <input 
          className="input w-full mt-4" 
          type="password" 
          placeholder="Password (min. 6 characters)" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && registerUser()}
        />

        <button 
          className="btn-primary w-full mt-6 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all" 
          onClick={registerUser}
        >
          Create Account
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
          Already have an account?{" "}
          <a href="/login" className="text-[#3B82F6] hover:text-[#60A5FA] hover:underline font-medium transition">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
