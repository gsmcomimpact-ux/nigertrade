
import React from 'react';
import { Target, Shield, Users, Award, BarChart, Landmark } from 'lucide-react';
import { COMPANY_INFO, TRANSLATIONS } from '../constants';
import { Language } from '../App';

interface AboutProps {
  lang: Language;
}

const About: React.FC<AboutProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].about;
  
  const values = [
    { title: t.val1, desc: t.val1Desc, icon: <Shield className="w-8 h-8" /> },
    { title: t.val2, desc: t.val2Desc, icon: <Target className="w-8 h-8" /> },
    { title: t.val3, desc: t.val3Desc, icon: <Users className="w-8 h-8" /> }
  ];

  const highlights = [
    { label: "Expertise", icon: <Award className="w-5 h-5" /> },
    { label: "Local Insight", icon: <Landmark className="w-5 h-5" /> },
    { label: "Growth", icon: <BarChart className="w-5 h-5" /> }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
        <div className="lg:w-1/2">
          <h2 className="text-niger-green font-bold text-sm uppercase tracking-[0.2em] mb-4">{t.badge}</h2>
          <h3 className="text-3xl md:text-5xl font-extrabold text-niger-blue mb-8 leading-tight">
            {t.title} <span className="text-niger-green underline decoration-wavy decoration-2 underline-offset-8">{t.titleSuffix}</span>
          </h3>
          <p className="text-gray-700 mb-6 text-lg leading-relaxed">
            {t.p1.replace('NIGER TRADE', COMPANY_INFO.name)}
          </p>
          <p className="text-gray-700 mb-10 text-lg leading-relaxed">
            {t.p2}
          </p>

          <div className="flex flex-wrap gap-6 mt-8">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full border border-gray-100 text-niger-blue font-bold text-sm">
                <span className="text-niger-green">{h.icon}</span>
                {h.label}
              </div>
            ))}
          </div>
        </div>
        
        <div className="lg:w-1/2 w-full grid grid-cols-1 gap-6">
          {values.map((v, index) => (
            <div 
              key={v.title} 
              className={`p-8 rounded-[2rem] border transition-all duration-300 flex items-center gap-8 ${
                index === 1 ? 'bg-niger-blue text-white border-niger-blue shadow-2xl scale-105 z-10' : 'bg-white border-gray-100 shadow-sm hover:shadow-md'
              }`}
            >
              <div className={`p-4 rounded-2xl flex-shrink-0 ${index === 1 ? 'bg-white/10' : 'bg-gray-50 text-niger-green'}`}>
                {v.icon}
              </div>
              <div>
                <h4 className={`text-xl font-extrabold mb-2 ${index === 1 ? 'text-white' : 'text-niger-blue'}`}>{v.title}</h4>
                <p className={`text-sm leading-relaxed ${index === 1 ? 'text-blue-100' : 'text-gray-600'}`}>{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
