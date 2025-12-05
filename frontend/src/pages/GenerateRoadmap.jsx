import { useState } from "react";
import axios from "axios";
import { api } from "../api";
import DashboardLayout from "../components/DashboardLayout";
import { Route, Sparkles, Download, BookOpen, ExternalLink, CheckCircle2 } from "lucide-react";

export default function GenerateRoadmap() {
  const DOMAINS = [
    "Web Development",
    "Cyber Security",
    "Data Science",
    "Cloud Engineering",
    "Mobile Development",
    "AI/ML Engineering",
    "DevOps & SRE",
    "UI/UX Design",
    "Product Management",
  ];
  const LEVELS = ["Beginner", "Intermediate", "Advanced"];

  const [domain, setDomain] = useState(DOMAINS[0]);
  const [level, setLevel] = useState(LEVELS[0]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const generate = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.post(`${api.baseUrl}/api/roadmap/generate`, {
        domain,
        level,
      });
      setData(res.data);
    } catch (err) {
      setError(err.response?.data?.msg || "Failed to fetch roadmap");
    } finally {
      setLoading(false);
    }
  };

  const saveRoadmap = async () => {
    if (!data) return;
    try {
      const token = localStorage.getItem("token");
      await axios.post(
        `${api.baseUrl}/api/roadmap/save`,
        { domain: data.domain, level: data.level, steps: data.steps },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      alert("Roadmap saved successfully! ✅");
    } catch (err) {
      alert("Failed to save roadmap");
    }
  };

  return (
    <DashboardLayout title="Generate Your Career Roadmap">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Route className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">Create Your Learning Path</h2>
              <p className="text-blue-100 text-sm">AI-powered personalized roadmaps</p>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="bg-[#1F2937] rounded-xl shadow-lg p-6 mb-8 border border-[#374151]">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-[#E2E8F0]">
                Career Domain
              </label>
              <select
                className="w-full border border-[#374151] bg-[#1F2937] text-white p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
              >
                {DOMAINS.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium mb-2 text-[#E2E8F0]">
                Experience Level
              </label>
              <select
                className="w-full border border-[#374151] bg-[#1F2937] text-white p-3 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
              >
                {LEVELS.map((l) => (
                  <option key={l}>{l}</option>
                ))}
              </select>
            </div>

            <div className="flex items-end">
              <button
                onClick={generate}
                disabled={loading}
                className="btn-primary px-8 py-3 w-full sm:w-auto flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    Generate Roadmap
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-[#4A1E1E] border border-[#7F1D1D] rounded-lg p-4 mb-8">
            <p className="text-[#F87171] font-medium">{error}</p>
          </div>
        )}

      {data && (
        <div className="space-y-6 animate-fade-in">
          <div className="bg-[#1F2937] shadow-2xl rounded-2xl overflow-hidden border border-[#374151]">
            <div className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] px-6 py-5 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-1">
                  {data.domain} - {data.level} Roadmap
                </h2>
                <p className="text-blue-100 text-sm">{data.steps.length} steps to success</p>
              </div>
              <button
                onClick={saveRoadmap}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-lg transition flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Save
              </button>
            </div>
            
            <div className="p-6">
              <div className="space-y-6">
                {data.steps.map((s, i) => (
                  <div
                    key={i}
                    className="border-l-4 border-[#3B82F6] pl-6 pb-6 last:pb-0"
                  >
                    <div className="flex items-start gap-4 mb-3">
                      <div className="flex-shrink-0 relative">
                        <span className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white flex items-center justify-center font-bold text-sm shadow-lg">
                          {i + 1}
                        </span>
                        {i < data.steps.length - 1 && (
                          <div className="absolute left-1/2 top-10 w-0.5 h-6 bg-gradient-to-b from-[#3B82F6] to-[#8B5CF6] transform -translate-x-1/2"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981]" />
                          <h3 className="text-xl font-bold text-white">
                            {s.stage}
                          </h3>
                        </div>
                        <p className="text-[#E2E8F0] font-medium mb-4 text-lg">
                          {s.skill}
                        </p>
                        
                        {s.resources && s.resources.length > 0 && (
                          <div className="mt-4">
                            <h4 className="text-sm font-semibold text-[#94A3B8] mb-2">
                              Learning Resources:
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              {s.resources.map((r, idx) => (
                                <a
                                  key={idx}
                                  href={r.url}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="group inline-flex items-center px-5 py-3 bg-gradient-to-r from-[#1E3A5F] to-[#3D1E4A] text-[#60A5FA] rounded-xl hover:from-[#2563EB] hover:to-[#7C3AED] transition-all border border-[#374151] font-medium text-sm shadow-sm hover:shadow-md transform hover:-translate-y-0.5"
                                >
                                  <BookOpen className="w-4 h-4 mr-2" />
                                  <span>{r.name}</span>
                                  <ExternalLink className="w-3 h-3 ml-2 opacity-0 group-hover:opacity-100 transition" />
                                </a>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      </div>
    </DashboardLayout>
  );
}
