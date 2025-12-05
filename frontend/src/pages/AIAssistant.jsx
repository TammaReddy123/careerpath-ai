import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { api } from "../api";
import DashboardLayout from "../components/DashboardLayout";
import { Bot, Send, Sparkles, MessageSquare, User as UserIcon } from "lucide-react";

export default function AIAssistant() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const askAI = async () => {
    if (!input.trim()) return;

    const nextMessages = [...messages, { role: "user", text: input }];
    setMessages(nextMessages);
    setInput("");
    setError("");
    setLoading(true);

    try {
      const res = await axios.post(`${api.baseUrl}/api/ai/ask`, {
        query: input,
      });

      setMessages([
        ...nextMessages,
        { role: "ai", text: res.data.reply || "I couldn't generate a response." },
      ]);
    } catch (err) {
      console.error(err);
      setError("There was a problem talking to the AI. Please try again.");
      setMessages([
        ...nextMessages,
        { role: "ai", text: "⚠️ I’m having trouble connecting right now." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <DashboardLayout title="RoboGuide AI Assistant">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-br from-[#8B5CF6] via-[#3B82F6] to-[#EC4899] rounded-2xl p-6 mb-6 text-white shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Bot className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">RoboGuide AI</h2>
              <p className="text-purple-100 text-sm">Your 24/7 career assistant</p>
            </div>
          </div>
        </div>

        {/* Chat Container */}
        <div className="bg-[#1F2937] shadow-2xl rounded-2xl overflow-hidden border border-[#374151]">
          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-[#1A202C] to-[#1F2937]">
            {messages.length === 0 && (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center mb-4">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Welcome to RoboGuide AI!
                </h3>
                <p className="text-[#94A3B8] max-w-md">
                  Ask anything about careers, skills, learning paths, or get personalized advice. 
                  I'm here to help you succeed!
                </p>
              </div>
            )}

            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-3 ${m.role === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                {m.role === "ai" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center flex-shrink-0">
                    <Bot className="w-5 h-5 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] rounded-2xl p-4 shadow-lg ${
                    m.role === "user"
                      ? "bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white"
                      : "bg-[#1F2937] text-white border border-[#374151]"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {m.role === "user" ? (
                      <UserIcon className="w-4 h-4" />
                    ) : (
                      <MessageSquare className="w-4 h-4" />
                    )}
                    <span className="text-xs font-semibold opacity-80">
                      {m.role === "user" ? "You" : "RoboGuide"}
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                </div>
                {m.role === "user" && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-5 h-5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {loading && (
              <div className="flex gap-3 justify-start animate-fade-in">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-[#1F2937] rounded-2xl p-4 shadow-lg border border-[#374151]">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                      <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                      <div className="w-2 h-2 bg-[#EC4899] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                    </div>
                    <span className="text-sm text-[#94A3B8] ml-2">RoboGuide is thinking...</span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-[#374151] p-4 bg-[#1F2937]">
            {error && (
              <div className="mb-3 p-3 bg-[#4A1E1E] border border-[#7F1D1D] rounded-lg">
                <p className="text-sm text-[#F87171]">{error}</p>
              </div>
            )}
            <div className="flex gap-3">
              <input
                className="input flex-1 text-base"
                placeholder="Ask RoboGuide anything about careers, skills, or learning..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && askAI()}
              />
              <button
                className="btn-primary px-6 py-3 flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
                onClick={askAI}
                disabled={loading || !input.trim()}
              >
                <Send className="w-4 h-4" />
                {loading ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
