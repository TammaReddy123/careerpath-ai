import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, Sparkles } from "lucide-react";
import { api } from "../api";

export default function FloatingAssistant() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([
    { from: "bot", text: "🤖 Greetings! I am RoboGuide AI. How may I assist you with your career journey today?" }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!query.trim()) return;

    const newMsgs = [...messages, { from: "user", text: query }];
    setMessages(newMsgs);
    setQuery("");
    setLoading(true);

    try {
      const res = await fetch(`${api.baseUrl}/api/ai/ask`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });

      const data = await res.json();
      const reply = data.reply;

      setMessages([...newMsgs, { from: "bot", text: reply }]);
    } catch {
      setMessages([...newMsgs, { from: "bot", text: "⚠️ Error connecting to AI. Please try again." }]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Robot Icon */}
      {!open && (
        <div
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-gradient-to-br from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white rounded-full p-4 cursor-pointer shadow-2xl border-2 border-white/20 hover:scale-110 hover:shadow-[#3B82F6]/50 transition-all z-50 group"
          title="Ask RoboGuide AI"
        >
          <div className="relative">
            <Bot className="w-8 h-8" />
            <Sparkles className="absolute -top-1 -right-1 w-4 h-4 text-yellow-300 animate-pulse" />
          </div>
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] opacity-0 group-hover:opacity-100 blur-xl transition-opacity"></div>
        </div>
      )}

      {/* Panel */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-[#1F2937] border border-[#374151] rounded-2xl shadow-2xl z-50 overflow-hidden backdrop-blur-sm">
          {/* Header */}
          <div className="flex justify-between items-center bg-gradient-to-r from-[#3B82F6] via-[#8B5CF6] to-[#EC4899] text-white px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <span className="font-bold text-sm">RoboGuide AI</span>
                <p className="text-xs text-white/80">Your Career Assistant</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="hover:bg-white/20 rounded-full p-1.5 transition"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="p-4 h-64 md:h-80 overflow-y-auto space-y-3 bg-gradient-to-b from-[#1A202C] to-[#1F2937]">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex gap-2 ${m.from === "user" ? "justify-end" : "justify-start"} animate-fade-in`}
              >
                {m.from === "bot" && (
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-xl ${
                    m.from === "bot"
                      ? "bg-[#1F2937] text-[#E2E8F0] border border-[#374151]"
                      : "bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] text-white"
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex items-center gap-2 text-[#94A3B8] text-sm">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                  <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                  <div className="w-2 h-2 bg-[#EC4899] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
                <span>RoboGuide is thinking...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3 border-t border-[#374151] bg-[#1F2937] flex gap-2">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
              className="flex-1 p-2.5 border border-[#374151] rounded-lg bg-[#1A202C] text-white placeholder-[#94A3B8] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:border-transparent"
              placeholder="Ask RoboGuide anything…"
            />
            <button
              onClick={sendMessage}
              disabled={loading || !query.trim()}
              className="bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] text-white px-4 py-2.5 rounded-lg hover:from-[#2563EB] hover:to-[#7C3AED] disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center gap-2 shadow-lg shadow-[#3B82F6]/30"
            >
              <Send size={16} />
              <span className="hidden sm:inline">Send</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
