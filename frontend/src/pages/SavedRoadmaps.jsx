import { useEffect, useState } from "react";
import axios from "axios";
import { api } from "../api";
import DashboardLayout from "../components/DashboardLayout";

export default function SavedRoadmaps() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const token = localStorage.getItem("token");

  const fetchRoadmaps = async () => {
    try {
      setLoading(true);
      setError("");
      const res = await axios.get(`${api.baseUrl}/api/roadmap/all`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems(res.data);
    } catch (err) {
      console.error(err);
      setError("Unable to load saved roadmaps.");
    } finally {
      setLoading(false);
    }
  };

  const deleteRoadmap = async (id) => {
    try {
      await axios.delete(`${api.baseUrl}/api/roadmap/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setItems((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete roadmap.");
    }
  };

  useEffect(() => {
    if (token) {
      fetchRoadmaps();
    }
    // token is stable from localStorage for this session
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DashboardLayout title="Saved Roadmaps">
      {loading && (
        <div className="flex items-center justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#3B82F6]"></div>
        </div>
      )}
      
      {error && (
        <div className="bg-[#4A1E1E] border border-[#7F1D1D] rounded-lg p-4 mb-6">
          <p className="text-[#F87171] font-medium">{error}</p>
        </div>
      )}

      {!loading && items.length === 0 && !error && (
        <div className="bg-[#1F2937] border border-[#374151] rounded-2xl p-12 text-center">
          <p className="text-[#94A3B8] text-lg mb-2">
            You don't have any saved roadmaps yet.
          </p>
          <p className="text-[#E2E8F0]">
            Generate one and save it to see it here.
          </p>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <div
            key={item._id}
            className="bg-[#1F2937] border border-[#374151] rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-all transform hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-xl font-bold text-white">
                  {item.domain}
                </h3>
                <span className="px-3 py-1 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white text-xs font-semibold rounded-full">
                  {item.level}
                </span>
              </div>

              <ul className="space-y-2 text-sm">
                {item.steps.slice(0, 4).map((step, idx) => (
                  <li key={idx} className="text-[#E2E8F0] flex items-start gap-2">
                    <span className="text-[#3B82F6] font-bold mt-0.5">{idx + 1}.</span>
                    <div>
                      <span className="font-semibold text-white">{step.stage}:</span>
                      <span className="text-[#94A3B8] ml-1">{step.skill}</span>
                    </div>
                  </li>
                ))}
                {item.steps.length > 4 && (
                  <li className="text-xs text-[#94A3B8] mt-2">
                    + {item.steps.length - 4} more steps...
                  </li>
                )}
              </ul>
            </div>

            <button
              onClick={() => deleteRoadmap(item._id)}
              className="mt-4 text-sm text-[#F87171] hover:text-[#EF4444] hover:bg-[#4A1E1E] px-3 py-2 rounded-lg transition self-start"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </DashboardLayout>
  );
}


