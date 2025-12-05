import { Link } from "react-router-dom";
import { 
  Brain, 
  Route, 
  Bot, 
  Target, 
  Zap, 
  Users, 
  BookOpen, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Sparkles
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: <Route className="w-8 h-8" />,
      title: "AI-Powered Roadmaps",
      description: "Get personalized step-by-step learning paths tailored to your career goals",
      color: "blue"
    },
    {
      icon: <Bot className="w-8 h-8" />,
      title: "24/7 AI Assistant",
      description: "Ask questions anytime and get instant guidance from RoboGuide AI",
      color: "purple"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Career Tracking",
      description: "Save and track your progress across multiple career paths",
      color: "green"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Fast Learning",
      description: "Accelerate your career growth with curated resources and links",
      color: "yellow"
    }
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "50+", label: "Career Paths" },
    { number: "100K+", label: "Roadmaps Generated" },
    { number: "24/7", label: "AI Support" }
  ];

  const benefits = [
    "Personalized learning paths",
    "Industry-relevant resources",
    "Progress tracking",
    "Expert AI guidance",
    "Multiple career domains",
    "Mobile-friendly access"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A202C] via-[#1F2937] to-[#111827] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                <Sparkles className="w-4 h-4 text-[#EC4899]" />
                <span className="text-sm font-medium text-white">Powered by AI</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                Build your future with{" "}
                <span className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] bg-clip-text text-transparent">
                  AI-powered
                </span>{" "}
                roadmaps
              </h1>

              <p className="text-xl md:text-2xl text-[#E2E8F0] leading-relaxed">
                CareerPath AI creates personalized step-by-step learning paths, 
                provides instant AI assistance, and guides you toward your dream career.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/register"
                  className="group px-8 py-4 bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white rounded-xl shadow-2xl hover:shadow-[#3B82F6]/50 transition-all transform hover:scale-105 font-semibold text-lg flex items-center gap-2"
                >
                  Get Started Free
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/login"
                  className="px-8 py-4 bg-[#1F2937] backdrop-blur-sm text-white rounded-xl border-2 border-[#374151] hover:bg-[#374151] transition-all font-semibold text-lg"
                >
                  Sign In
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8">
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-[#3B82F6]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-[#94A3B8] mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image/Illustration */}
            <div className="relative">
              <div className="relative z-10">
                <div className="bg-[#1F2937] rounded-3xl p-8 backdrop-blur-sm border border-[#374151] shadow-2xl">
                  <div className="bg-[#1A202C] rounded-2xl p-6 space-y-4 border border-[#374151]">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
                        <Brain className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-white">RoboGuide AI</div>
                        <div className="text-sm text-[#94A3B8]">Your Career Assistant</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="bg-[#1F2937] rounded-lg p-3 text-sm text-[#E2E8F0] border border-[#374151]">
                        💡 "What skills do I need for web development?"
                      </div>
                      <div className="bg-gradient-to-r from-[#3B82F6]/30 to-[#8B5CF6]/30 rounded-lg p-3 text-sm ml-8 text-white border border-[#3B82F6]/20">
                        I'll help you create a personalized roadmap...
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-[#EC4899]/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-[#8B5CF6]/20 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#1F2937] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-[#94A3B8]">
              Powerful features designed to accelerate your career growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => {
              const gradientMap = {
                blue: 'from-[#3B82F6] to-[#2563EB]',
                purple: 'from-[#8B5CF6] to-[#7C3AED]',
                green: 'from-[#10B981] to-[#059669]',
                yellow: 'from-[#F59E0B] to-[#D97706]',
              };
              return (
                <div
                  key={idx}
                  className="group bg-[#1A202C] p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-[#374151]"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${gradientMap[feature.color]} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#94A3B8]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-[#1A202C] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why choose CareerPath AI?
              </h2>
              <p className="text-xl text-[#E2E8F0] mb-8">
                Join thousands of professionals accelerating their careers with our AI-powered platform.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0" />
                    <span className="text-[#E2E8F0] font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#1F2937] border border-[#374151] rounded-2xl p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-lg text-white">Community</div>
                      <div className="text-[#94A3B8]">10K+ active learners</div>
                    </div>
                  </div>
                  <div className="h-2 bg-[#374151] rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] rounded-full w-3/4"></div>
                  </div>
                  <div className="text-sm text-[#94A3B8]">
                    Join our growing community of career-focused professionals
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to start your career journey?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Join thousands of professionals building their future with AI-powered roadmaps
          </p>
          <Link
            to="/register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#3B82F6] rounded-xl shadow-2xl hover:shadow-white/50 transition-all transform hover:scale-105 font-semibold text-lg"
          >
            Get Started Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
