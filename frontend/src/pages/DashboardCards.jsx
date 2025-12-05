import { Link } from "react-router-dom";
import { Brain, Sparkles, User, Bookmark, ArrowRight, TrendingUp } from "lucide-react";

export default function DashboardCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      <FeatureCard
        icon={<Brain className="h-8 w-8" />}
        title="Roadmap Generator"
        description="Generate a custom learning path for web, cyber, data science, cloud and more."
        to="/generate"
        linkLabel="Create Roadmap"
        gradient="from-[#3B82F6] to-[#2563EB]"
        color="blue"
      />
      <FeatureCard
        icon={<Sparkles className="h-8 w-8" />}
        title="AI Assistant"
        description="Chat with RoboGuide for instant career and learning advice."
        to="/assistant"
        linkLabel="Start Chat"
        gradient="from-[#8B5CF6] to-[#7C3AED]"
        color="purple"
      />
      <FeatureCard
        icon={<User className="h-8 w-8" />}
        title="Profile"
        description="Capture your interests and goals to personalise suggestions."
        to="/profile"
        linkLabel="Edit Profile"
        gradient="from-[#10B981] to-[#059669]"
        color="green"
      />
      <FeatureCard
        icon={<Bookmark className="h-8 w-8" />}
        title="Saved Roadmaps"
        description="View and manage all your saved career roadmaps."
        to="/saved"
        linkLabel="View Saved"
        gradient="from-[#F97316] to-[#EA580C]"
        color="orange"
      />
      <FeatureCard
        icon={<TrendingUp className="h-8 w-8" />}
        title="Progress Tracker"
        description="Track your learning progress and achievements."
        to="/dashboard"
        linkLabel="View Progress"
        gradient="from-[#EC4899] to-[#DB2777]"
        color="pink"
      />
    </div>
  );
}

function FeatureCard({ icon, title, description, to, linkLabel, gradient, color }) {
  const colorClasses = {
    blue: "text-[#3B82F6]",
    purple: "text-[#8B5CF6]",
    green: "text-[#10B981]",
    orange: "text-[#F97316]",
    pink: "text-[#EC4899]",
  };

  return (
    <Link to={to}>
      <div className="group p-6 rounded-2xl bg-[#1F2937] shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[#374151] h-full flex flex-col animate-fade-in">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
          {icon}
        </div>
        <h2 className="text-xl font-bold mt-2 text-white mb-2">{title}</h2>
        <p className="text-[#94A3B8] text-sm mb-4 flex-grow">{description}</p>
        <div className={`flex items-center gap-2 ${colorClasses[color]} font-semibold text-sm group-hover:gap-3 transition-all`}>
          {linkLabel}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
