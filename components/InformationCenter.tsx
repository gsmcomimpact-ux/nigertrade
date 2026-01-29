
import React, { useState } from 'react';
import { FAQ_DATA, RESOURCE_CARDS, TRANSLATIONS } from '../constants';
import { ChevronDown, ChevronUp, Download, Info, ExternalLink } from 'lucide-react';
import { Language } from '../App';

interface InfoCenterProps {
  lang: Language;
}

const InformationCenter: React.FC<InfoCenterProps> = ({ lang }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const t = TRANSLATIONS[lang].info;
  const faqs = FAQ_DATA[lang];
  const resources = RESOURCE_CARDS[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* FAQ Section */}
        <div>
          <h2 className="text-niger-green font-bold text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
            <Info className="w-4 h-4" /> {t.faqBadge}
          </h2>
          <h3 className="text-3xl font-extrabold text-niger-blue mb-8">{t.faqTitle}</h3>
          <div className="space-y-4">
            {faqs.map((item, index) => (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${openIndex === index ? 'border-niger-green bg-white shadow-lg' : 'border-gray-100 bg-gray-50'}`}
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex justify-between items-center"
                >
                  <span className={`font-bold text-sm md:text-base ${openIndex === index ? 'text-niger-blue' : 'text-gray-700'}`}>
                    {item.question}
                  </span>
                  {openIndex === index ? <ChevronUp className="w-5 h-5 text-niger-green" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6 animate-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Resources & Guides */}
        <div>
          <h2 className="text-niger-green font-bold text-sm uppercase tracking-widest mb-4">{t.resBadge}</h2>
          <h3 className="text-3xl font-extrabold text-niger-blue mb-8">{t.resTitle}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {resources.map((card, index) => (
              <div key={index} className="bg-white border border-gray-100 p-6 rounded-3xl hover:shadow-xl transition-all group cursor-pointer">
                <div className={`${card.color} w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                  {card.icon}
                </div>
                <h4 className="font-bold text-niger-blue mb-1">{card.title}</h4>
                <p className="text-gray-500 text-xs mb-6 leading-relaxed">{card.desc}</p>
                <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-niger-green hover:text-niger-blue transition-colors">
                  {t.resBtn} <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-niger-blue rounded-3xl p-6 text-white flex items-center justify-between shadow-2xl relative overflow-hidden">
             <div className="relative z-10">
                <p className="text-blue-200 text-xs font-bold uppercase tracking-widest mb-1">{t.statsLabel}</p>
                <h4 className="text-xl font-black italic">{t.statsQuote}</h4>
             </div>
             <div className="relative z-10 bg-white/10 p-3 rounded-xl backdrop-blur-sm border border-white/20">
                <Download className="w-6 h-6" />
             </div>
             <div className="absolute top-0 right-0 w-32 h-32 bg-niger-green/20 rounded-full -mr-16 -mt-16"></div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InformationCenter;
