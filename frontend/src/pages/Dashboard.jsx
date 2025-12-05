import DashboardLayout from "../components/DashboardLayout";
import DashboardCards from "./DashboardCards";
import { Sparkles, Target, TrendingUp } from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout title="Dashboard">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] rounded-2xl p-8 mb-8 text-white shadow-xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Sparkles className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-1">Welcome Back!</h2>
              <p className="text-blue-100">Your career journey starts here</p>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg border border-[#374151]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm mb-1">Roadmaps Created</p>
                <p className="text-3xl font-bold text-white">0</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#1E3A5F] flex items-center justify-center">
                <Target className="w-6 h-6 text-[#3B82F6]" />
              </div>
            </div>
          </div>
          <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg border border-[#374151]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm mb-1">Progress</p>
                <p className="text-3xl font-bold text-white">0%</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#1E3A2E] flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#10B981]" />
              </div>
            </div>
          </div>
          <div className="bg-[#1F2937] rounded-xl p-6 shadow-lg border border-[#374151]">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[#94A3B8] text-sm mb-1">AI Conversations</p>
                <p className="text-3xl font-bold text-white">0</p>
              </div>
              <div className="w-12 h-12 rounded-lg bg-[#3D1E4A] flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-[#8B5CF6]" />
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6">
            Quick Actions
          </h3>
          <DashboardCards />
        </div>
      </div>
    </DashboardLayout>
  );
}
