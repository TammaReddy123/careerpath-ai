import { useState, useEffect } from "react";
import axios from "axios";
import { api } from "../api";
import DashboardLayout from "../components/DashboardLayout";
import { User, Upload, X, Save, Mail, UserCircle } from "lucide-react";
import { getAvatarUrl, getGenderColor, detectGenderFromName, detectGenderFromEmail } from "../utils/genderDetection";

export default function Profile() {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [gender, setGender] = useState("");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${api.baseUrl}/api/auth/me`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUser(res.data);
      setName(res.data.name);
      setBio(res.data.bio || "");
      setGender(res.data.gender || "");
      setProfileImagePreview(res.data.profileImage);
    } catch (err) {
      console.error("Failed to fetch profile:", err);
    } finally {
      setLoading(false);
    }
  };

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

  const getUserGender = () => {
    if (gender) return gender;
    if (user?.gender) return user.gender;
    return detectGenderFromName(user?.name) || detectGenderFromEmail(user?.email) || null;
  };

  const getProfileBorderColor = () => {
    const userGender = getUserGender();
    const colors = getGenderColor(userGender);
    return colors.border;
  };

  const getProfileGradient = () => {
    const userGender = getUserGender();
    const colors = getGenderColor(userGender);
    return colors.gradient;
  };

  const handleSave = async () => {
    try {
      setSaving(true);
      setMsg("");
      setIsError(false);

      const token = localStorage.getItem("token");
      const finalImage = profileImage || profileImagePreview;
      
      const res = await axios.put(
        `${api.baseUrl}/api/auth/me`,
        {
          name,
          bio,
          gender,
          profile_image: finalImage,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setUser(res.data.user);
      setProfileImagePreview(res.data.user.profile_image);
      setMsg("Profile updated successfully! ✅");
      setIsError(false);
    } catch (err) {
      setMsg(err.response?.data?.msg || "Failed to update profile");
      setIsError(true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <DashboardLayout title="Profile">
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout title="My Profile">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 space-y-6">
          {/* Profile Image Section */}
          <div className="flex flex-col items-center pb-6 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <div className={`w-32 h-32 rounded-full overflow-hidden border-4 ${getProfileBorderColor()} shadow-xl bg-gradient-to-br ${getProfileGradient()} flex items-center justify-center`}>
                {profileImagePreview ? (
                  <img 
                    src={profileImagePreview} 
                    alt={name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <img 
                    src={getAvatarUrl(getUserGender(), name || user?.email)} 
                    alt="Avatar" 
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              {profileImagePreview && (
                <button
                  onClick={removeImage}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition shadow-lg"
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
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 dark:bg-gray-700 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-100 dark:hover:bg-gray-600 transition">
                <Upload size={18} />
                <span className="text-sm font-medium">Change Photo</span>
              </div>
            </label>
          </div>

          {/* Form Fields */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <User size={18} />
                Full Name
              </label>
              <input
                className="input w-full"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300 flex items-center gap-2">
                <Mail size={18} />
                Email
              </label>
              <input
                className="input w-full bg-gray-50 dark:bg-gray-900 cursor-not-allowed"
                value={user?.email || ""}
                disabled
                type="email"
              />
              <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Gender
              </label>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setGender('male')}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition ${
                    gender === 'male'
                      ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-blue-300'
                  }`}
                >
                  👨 Male
                </button>
                <button
                  type="button"
                  onClick={() => setGender('female')}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition ${
                    gender === 'female'
                      ? 'border-pink-500 bg-pink-50 dark:bg-pink-900/30 text-pink-700 dark:text-pink-300'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-pink-300'
                  }`}
                >
                  👩 Female
                </button>
                <button
                  type="button"
                  onClick={() => setGender('other')}
                  className={`flex-1 py-2 px-4 rounded-lg border-2 transition ${
                    gender === 'other'
                      ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300'
                      : 'border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-300'
                  }`}
                >
                  Other
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                Bio / About Me
              </label>
              <textarea
                className="input w-full min-h-[100px]"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                placeholder="Tell us about yourself, your interests, and career goals..."
              />
            </div>
          </div>

          {msg && (
            <div className={`p-4 rounded-lg ${
              isError 
                ? 'bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400' 
                : 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400'
            }`}>
              {msg}
            </div>
          )}

          <button 
            className="btn-primary w-full py-3 text-lg font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
            onClick={handleSave}
            disabled={saving}
          >
            <Save size={20} />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
}
