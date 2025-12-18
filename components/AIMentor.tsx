
import React, { useState, useRef, useEffect } from 'react';
import { Bot, Send, Loader2, Sparkles } from 'lucide-react';
import { geminiService } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIMentor: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Halo Sobat wondr! Ada yang bisa saya bantu terkait investasi atau program referral wondr-Nation hari ini?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    // Format history for Gemini API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await geminiService.sendMessage(userMsg, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-mentor" className="max-w-3xl mx-auto py-24 px-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#00CED1]/10 rounded-2xl">
            <Bot size={32} className="text-[#00CED1]" />
          </div>
          <div>
            <h2 className="font-black uppercase text-lg tracking-widest text-[#005E6A]">wondr AI Mentor</h2>
            <div className="flex items-center gap-1.5">
               <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
               <span className="text-[10px] font-bold text-slate-400 uppercase">Online & Ready to help</span>
            </div>
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 bg-[#D9FA50]/20 px-4 py-2 rounded-full">
            <Sparkles size={14} className="text-[#FF8800]" />
            <span className="text-[10px] font-black text-[#005E6A] uppercase">Powered by Gemini 3</span>
        </div>
      </div>

      <div className="bg-[#E5DDD5] rounded-[40px] border-4 border-[#00CED1] shadow-2xl relative overflow-hidden flex flex-col h-[500px]">
        {/* Chat Window */}
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto p-6 space-y-4 scroll-smooth"
        >
          {messages.map((msg, idx) => (
            <div 
              key={idx}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[85%] p-4 rounded-2xl shadow-sm text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-[#DCF8C6] rounded-tr-none border-r-4 border-[#00CED1] font-medium' 
                    : 'bg-white rounded-tl-none border-l-4 border-[#D9FA50]'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-4 rounded-2xl rounded-tl-none border-l-4 border-[#D9FA50] flex items-center gap-2">
                <Loader2 className="animate-spin text-[#00CED1]" size={16} />
                <span className="text-xs italic text-slate-400">Mengetik...</span>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-slate-200">
          <div className="flex items-center gap-2 bg-white rounded-full border border-slate-200 p-1 pl-4">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Tanya soal investasi..."
              className="flex-1 bg-transparent border-none outline-none text-sm py-2"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-[#00CED1] text-white p-3 rounded-full hover:bg-[#005E6A] transition-colors disabled:opacity-50"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIMentor;
