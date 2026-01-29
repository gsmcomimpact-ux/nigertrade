
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { getBusinessInsight } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Language } from '../App';

interface AIConsultantProps {
  lang: Language;
}

const AIConsultant: React.FC<AIConsultantProps> = ({ lang }) => {
  const intro = lang === 'fr' 
    ? "Bonjour ! Je suis l'expert virtuel de Niger Trade. Comment puis-je vous aider à explorer les opportunités d'affaires au Niger aujourd'hui ?"
    : "Hello! I am Niger Trade's virtual expert. How can I help you explore business opportunities in Niger today?";

  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: intro }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: intro }]);
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const context = `User language: ${lang}. Response should be in ${lang === 'fr' ? 'French' : 'English'}.`;
    const aiResponse = await getBusinessInsight(`${context} ${input}`);
    setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    setIsLoading(false);
  };

  const suggestions = lang === 'fr' 
    ? ["Secteurs porteurs au Niger ?", "Avantages fiscaux PME ?", "Créer une entreprise à Niamey ?"]
    : ["Key sectors in Niger?", "Tax benefits for SMEs?", "Start a business in Niamey?"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="flex items-center gap-2 text-green-400 font-bold mb-4">
            <Sparkles className="w-5 h-5" /> {lang === 'fr' ? 'Intelligence Économique' : 'Economic Intelligence'}
          </div>
          <h2 className="text-4xl font-extrabold mb-6">{lang === 'fr' ? 'Consultez notre Expert Virtuel' : 'Consult our Virtual Expert'}</h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            {lang === 'fr' 
              ? "Grâce à l'intelligence artificielle, posez vos premières questions sur le marché nigérien : régimes fiscaux, secteurs d'investissement, ou démarches administratives."
              : "Thanks to artificial intelligence, ask your first questions about the Nigerien market: tax regimes, investment sectors, or administrative procedures."}
          </p>
          <div className="flex flex-wrap gap-4">
             {suggestions.map((s, idx) => (
               <button 
                 key={idx} 
                 onClick={() => setInput(s)}
                 className="bg-white/10 px-4 py-2 rounded-lg text-sm border border-white/20 hover:bg-white/20 transition-colors"
               >
                 {s}
               </button>
             ))}
          </div>
        </div>

        <div className="lg:w-1/2 w-full max-w-xl">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px]">
            <div className="bg-gray-100 p-4 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-niger-blue p-2 rounded-full">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm">Consultant Niger Trade</h4>
                  <p className="text-green-600 text-[10px] font-bold uppercase">{lang === 'fr' ? 'En ligne • IA' : 'Online • AI'}</p>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-4 bg-gray-50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white ${msg.role === 'user' ? 'bg-niger-green' : 'bg-niger-blue'}`}>
                      {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div className={`p-3 rounded-2xl text-sm shadow-sm ${msg.role === 'user' ? 'bg-niger-green text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'}`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="flex gap-3">
                    <div className="bg-niger-blue w-8 h-8 rounded-full flex items-center justify-center text-white">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="bg-white border border-gray-100 p-3 rounded-2xl shadow-sm text-gray-400">
                      <Loader2 className="w-5 h-5 animate-spin" />
                    </div>
                   </div>
                </div>
              )}
            </div>

            <div className="p-4 border-t border-gray-100 bg-white">
              <div className="relative">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={lang === 'fr' ? "Posez votre question ici..." : "Ask your question here..."}
                  className="w-full pl-4 pr-12 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-niger-blue/50 text-gray-900 placeholder-gray-400"
                />
                <button 
                  onClick={handleSend}
                  className="absolute right-2 top-1.5 p-2 bg-niger-blue text-white rounded-lg hover:bg-blue-900 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
