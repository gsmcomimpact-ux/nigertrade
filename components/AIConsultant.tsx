
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles, Key } from 'lucide-react';
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
  const [needsKey, setNeedsKey] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: intro }]);
  }, [lang]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleConnectKey = async () => {
    if (window.aistudio && window.aistudio.openSelectKey) {
      await window.aistudio.openSelectKey();
      setNeedsKey(false);
      // On réinitialise pour encourager le nouvel essai
    } else {
      alert("Veuillez configurer l'API_KEY dans vos variables d'environnement Vercel.");
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: ChatMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    const context = `User language: ${lang}.`;
    const aiResponse = await getBusinessInsight(`${context} ${input}`);

    if (aiResponse === "CONFIG_REQUIRED" || aiResponse === "KEY_RESET_REQUIRED") {
      setNeedsKey(true);
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: lang === 'fr' 
          ? "Pour activer mes capacités d'analyse, veuillez connecter votre service Google GenAI." 
          : "To enable my analysis capabilities, please connect your Google GenAI service." 
      }]);
    } else {
      setMessages(prev => [...prev, { role: 'assistant', content: aiResponse }]);
    }
    
    setIsLoading(false);
  };

  const suggestions = lang === 'fr' 
    ? ["Secteurs porteurs au Niger ?", "Guide de l'investisseur ?", "Avantages du Code des Investissements ?"]
    : ["Growing sectors in Niger?", "Investor guide?", "Investment Code benefits?"];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <div className="flex items-center gap-2 text-green-400 font-bold mb-4">
            <Sparkles className="w-5 h-5" /> {lang === 'fr' ? 'Intelligence Économique' : 'Economic Intelligence'}
          </div>
          <h2 className="text-4xl font-extrabold mb-6">
            {lang === 'fr' ? 'Expert Virtuel Niger Trade' : 'Niger Trade Virtual Expert'}
          </h2>
          <p className="text-blue-100 text-lg mb-8 leading-relaxed">
            {lang === 'fr' 
              ? "Posez vos questions sur le marché nigérien : régimes fiscaux, secteurs d'investissement, ou démarches administratives. Notre IA vous répond instantanément."
              : "Ask your questions about the Nigerien market: tax regimes, investment sectors, or administrative procedures. Our AI answers you instantly."}
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
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col h-[550px] border border-white/10">
            <div className="bg-gray-100 p-5 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="bg-niger-blue p-2 rounded-xl">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="text-gray-900 font-bold text-sm">Consultant Niger Trade</h4>
                  <p className="text-green-600 text-[10px] font-bold uppercase tracking-widest">
                    {lang === 'fr' ? 'Opérationnel • IA Flash' : 'Operational • AI Flash'}
                  </p>
                </div>
              </div>
            </div>

            <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-gray-50/50">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-white shadow-sm ${msg.role === 'user' ? 'bg-niger-green' : 'bg-niger-blue'}`}>
                      {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                    </div>
                    <div className={`p-4 rounded-2xl text-sm shadow-sm leading-relaxed ${msg.role === 'user' ? 'bg-niger-green text-white rounded-tr-none' : 'bg-white text-gray-800 rounded-tl-none border border-gray-100'}`}>
                      {msg.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                   <div className="flex gap-3">
                    <div className="bg-niger-blue w-9 h-9 rounded-xl flex items-center justify-center text-white">
                      <Bot className="w-5 h-5" />
                    </div>
                    <div className="bg-white border border-gray-100 p-4 rounded-2xl shadow-sm">
                      <Loader2 className="w-5 h-5 animate-spin text-niger-blue" />
                    </div>
                   </div>
                </div>
              )}
            </div>

            <div className="p-5 border-t border-gray-100 bg-white">
              {needsKey ? (
                <button 
                  onClick={handleConnectKey}
                  className="w-full bg-niger-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-blue-900 transition-all shadow-lg animate-bounce"
                >
                  <Key className="w-5 h-5" /> {lang === 'fr' ? 'Activer l\'Expert Virtuel' : 'Activate Virtual Expert'}
                </button>
              ) : (
                <div className="relative">
                  <input 
                    type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    placeholder={lang === 'fr' ? "Quelle est votre question ?" : "What is your question?"}
                    className="w-full pl-5 pr-14 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-niger-blue/20 text-gray-900 placeholder-gray-400 bg-gray-50"
                  />
                  <button 
                    onClick={handleSend}
                    disabled={isLoading}
                    className="absolute right-2 top-2 p-2.5 bg-niger-blue text-white rounded-xl hover:bg-blue-900 transition-colors disabled:opacity-50"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIConsultant;
