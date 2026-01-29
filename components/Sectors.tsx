
import React from 'react';
import { SECTORS_DATA, TRANSLATIONS } from '../constants';
import { Language } from '../App';
import { CheckCircle2 } from 'lucide-react';

interface SectorsProps {
  lang: Language;
}

const Sectors: React.FC<SectorsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].sectors;
  const sectors = SECTORS_DATA[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-niger-green font-bold text-sm uppercase tracking-widest mb-4">{t.badge}</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-niger-blue mb-6">{t.title}</h3>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sectors.map((sector) => (
          <div 
            key={sector.id}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col md:flex-row gap-8"
          >
            <div className="flex-shrink-0">
              <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center text-niger-blue group-hover:bg-niger-blue group-hover:text-white transition-all duration-300 shadow-inner">
                {sector.icon}
              </div>
            </div>
            
            <div className="flex-grow">
              <h4 className="text-2xl font-extrabold text-niger-blue mb-4 group-hover:text-niger-blue transition-colors">
                {sector.name}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed mb-6 font-light">
                {sector.description}
              </p>
              
              <div className="bg-gray-50/50 p-6 rounded-2xl border border-gray-100">
                <h5 className="text-niger-green font-black uppercase text-[10px] tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-niger-green rounded-full"></span>
                  {t.labelHighlights}
                </h5>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {sector.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-[13px] font-medium text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-niger-green flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 text-niger-blue font-bold border-b-2 border-niger-green pb-1 hover:text-niger-green transition-all"
        >
          {t.btnAll} <span className="text-xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default Sectors;
