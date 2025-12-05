import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Brain, User, LogOut, ChevronDown, Menu, Route, Bot, LayoutDashboard, Home, Sparkles, Bell, CheckCircle, AlertCircle, Info, X } from "lucide-react";
import axios from "axios";
import { api } from "../api";
import { getAvatarUrl, getGenderColor, detectGenderFromName, detectGenderFromEmail } from "../utils/genderDetection";
import { useSidebar } from "../context/SidebarContext";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const { openSidebar } = useSidebar();
  const navigate = useNavigate();
  const location = useLocation();
  const profileMenuRef = useRef(null);
  const notificationMenuRef = useRef(null);

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/generate", label: "Roadmap", icon: Route, requireAuth: true },
    { path: "/assistant", label: "AI Assistant", icon: Bot, requireAuth: true },
    { path: "/dashboard", label: "Dashboard", icon: LayoutDashboard, requireAuth: true },
  ];

  // Sample notifications - in a real app, these would come from an API
  const [notifications] = useState([
    {
      id: 1,
      type: "success",
      title: "Roadmap Generated",
      message: "Your Web Development roadmap is ready!",
      time: "2 minutes ago",
      icon: CheckCircle,
    },
    {
      id: 2,
      type: "info",
      title: "New Feature Available",
      message: "Check out the new AI Assistant features",
      time: "1 hour ago",
      icon: Info,
    },
    {
      id: 3,
      type: "alert",
      title: "Progress Update",
      message: "You're 75% complete with your learning path",
      time: "3 hours ago",
      icon: AlertCircle,
    },
  ]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      fetchUserProfile();
    }

    // Close menus when clicking outside
    const handleClickOutside = (event) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(event.target)) {
        setShowProfileMenu(false);
      }
      if (notificationMenuRef.current && !notificationMenuRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const fetchUserProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${api.baseUrl}/api/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(res.data);
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
      localStorage.removeItem("token");
      setIsLoggedIn(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    setUser(null);
    navigate("/");
  };

  const getInitials = (name) => {
    if (!name) return "U";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const getUserGender = () => {
    if (user?.gender) return user.gender;
    return detectGenderFromName(user?.name) || detectGenderFromEmail(user?.email) || null;
  };

  const getProfileBorderColor = () => {
    const userGender = getUserGender();
    const colors = getGenderColor(userGender);
    return colors.border;
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-gradient-to-r from-[#1E293B] via-[#1F2937] to-[#1E293B] text-white px-6 md:px-8 py-4 shadow-xl flex justify-between items-center sticky top-0 z-50 border-b border-[#374151] backdrop-blur-sm">
      {/* Hamburger Menu & Logo */}
      <div className="flex items-center gap-4">
        {isLoggedIn && (
          <button
            type="button"
            onClick={openSidebar}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#374151] bg-[#1F2937] shadow-sm hover:bg-[#374151] hover:border-[#3B82F6] text-white transition-all"
          >
            <Menu size={18} />
          </button>
        )}
        <Link to="/" className="flex items-center gap-3 text-xl md:text-2xl font-bold hover:opacity-90 transition group">
          <div className="relative">
            <Brain size={30} className="text-[#3B82F6] group-hover:scale-110 transition-transform" />
            <Sparkles size={12} className="absolute -top-1 -right-1 text-[#EC4899] animate-pulse" />
          </div>
          <span>
            CareerPath <span className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] bg-clip-text text-transparent">AI</span>
          </span>
        </Link>
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center gap-2">
        {navItems.map((item) => {
          if (item.requireAuth && !isLoggedIn) return null;
          const Icon = item.icon;
          const active = isActive(item.path);
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                active
                  ? "bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white shadow-lg shadow-[#3B82F6]/30"
                  : "hover:bg-[#374151] text-[#E2E8F0] hover:text-white"
              }`}
            >
              <Icon size={18} />
              <span className="font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Auth buttons / User Profile */}
      <div className="flex gap-3 items-center">
        {isLoggedIn && user ? (
          <>
            {/* Notifications Icon */}
            <div className="relative" ref={notificationMenuRef}>
              <button
                onClick={() => {
                  setShowNotifications(!showNotifications);
                  setShowProfileMenu(false);
                }}
                className="relative p-2 rounded-lg hover:bg-[#374151] transition-all group"
              >
                <Bell size={20} className={`transition-colors ${showNotifications ? 'text-[#3B82F6]' : 'text-[#94A3B8] group-hover:text-[#3B82F6]'}`} />
                {notifications.length > 0 && (
                  <span className="absolute top-1 right-1 w-2 h-2 bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] rounded-full animate-pulse"></span>
                )}
              </button>

              {/* Notifications Dropdown */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-[#1F2937] rounded-xl shadow-2xl border border-[#374151] z-50 backdrop-blur-sm max-h-96 overflow-hidden flex flex-col">
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-[#374151] bg-gradient-to-r from-[#1F2937] to-[#1A202C] flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-white">Notifications</h3>
                      <p className="text-xs text-[#94A3B8]">{notifications.length} new</p>
                    </div>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-[#94A3B8] hover:text-white transition"
                    >
                      <X size={16} />
                    </button>
                  </div>

                  {/* Notifications List */}
                  <div className="overflow-y-auto max-h-80">
                    {notifications.length > 0 ? (
                      <div className="divide-y divide-[#374151]">
                        {notifications.map((notification) => {
                          const Icon = notification.icon;
                          const iconColors = {
                            success: "text-[#10B981]",
                            info: "text-[#3B82F6]",
                            alert: "text-[#F59E0B]",
                          };
                          return (
                            <div
                              key={notification.id}
                              className="px-4 py-3 hover:bg-[#374151] transition cursor-pointer"
                              onClick={() => {
                                setShowNotifications(false);
                                // Navigate or perform action based on notification
                              }}
                            >
                              <div className="flex gap-3">
                                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#1A202C] flex items-center justify-center ${iconColors[notification.type] || iconColors.info}`}>
                                  <Icon size={16} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="text-sm font-medium text-white">{notification.title}</p>
                                  <p className="text-xs text-[#94A3B8] mt-1 line-clamp-2">{notification.message}</p>
                                  <p className="text-xs text-[#6B7280] mt-1">{notification.time}</p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="px-4 py-8 text-center">
                        <Bell size={32} className="mx-auto text-[#374151] mb-2" />
                        <p className="text-sm text-[#94A3B8]">No new notifications</p>
                      </div>
                    )}
                  </div>

                  {/* Footer */}
                  {notifications.length > 0 && (
                    <div className="px-4 py-2 border-t border-[#374151] bg-[#1A202C]">
                      <button
                        onClick={() => {
                          // Mark all as read functionality
                          setShowNotifications(false);
                        }}
                        className="w-full text-xs text-[#3B82F6] hover:text-[#60A5FA] transition text-center py-1"
                      >
                        Mark all as read
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            <div className="relative" ref={profileMenuRef}>
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-[#374151] transition-all border border-transparent hover:border-[#3B82F6]/30"
              >
                <div className={`w-10 h-10 rounded-full overflow-hidden border-2 ${getProfileBorderColor()} shadow-lg bg-gradient-to-br ${getGenderColor(getUserGender()).gradient} flex items-center justify-center ring-2 ring-[#1F2937]`}>
                  {user.profileImage ? (
                    <img 
                      src={user.profileImage} 
                      alt={user.name} 
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={getAvatarUrl(getUserGender(), user.name || user.email)} 
                      alt={user.name} 
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="hidden lg:flex flex-col items-start">
                  <span className="font-medium text-sm text-white">{user.name}</span>
                  <span className="text-xs text-[#94A3B8]">Online</span>
                </div>
                <ChevronDown size={18} className={`transition-transform text-[#94A3B8] ${showProfileMenu ? 'rotate-180' : ''}`} />
              </button>

              {showProfileMenu && (
              <div className="absolute right-0 mt-2 w-56 bg-[#1F2937] rounded-xl shadow-2xl border border-[#374151] py-2 z-50 backdrop-blur-sm">
                <div className="px-4 py-3 border-b border-[#374151] bg-gradient-to-r from-[#1F2937] to-[#1A202C]">
                  <p className="text-sm font-semibold text-white">{user.name}</p>
                  <p className="text-xs text-[#94A3B8] truncate">{user.email}</p>
                </div>
                <Link
                  to="/profile"
                  className="flex items-center gap-3 px-4 py-2.5 hover:bg-[#374151] transition text-[#E2E8F0] hover:text-white"
                  onClick={() => setShowProfileMenu(false)}
                >
                  <User size={18} className="text-[#3B82F6]" />
                  <span>Profile</span>
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setShowProfileMenu(false);
                  }}
                  className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-[#4A1E1E] transition text-[#F87171] hover:text-[#EF4444]"
                >
                  <LogOut size={18} />
                  <span>Logout</span>
                </button>
              </div>
              )}
            </div>
          </>
        ) : (
          <>
            <Link 
              className="px-4 py-2 rounded-lg hover:text-[#3B82F6] transition text-[#E2E8F0] font-medium" 
              to="/login"
            >
              Login
            </Link>
            <Link
              className="px-5 py-2 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-lg hover:from-[#2563EB] hover:to-[#7C3AED] transition text-white font-semibold shadow-lg shadow-[#3B82F6]/30 hover:shadow-[#3B82F6]/50"
              to="/register"
            >
              Get Started
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
