
import React from 'react';
import { ArrowRight, CheckCircle, TrendingUp, Shield, Globe } from 'lucide-react';
import { Language } from '../App';
import { TRANSLATIONS } from '../constants';

interface HeroProps {
  lang: Language;
}

const Hero: React.FC<HeroProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].hero;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative bg-niger-blue pt-20 pb-32 overflow-hidden">
      {/* Abstract Background Decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-niger-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-3/5 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-niger-green/20 border border-niger-green/30 text-green-400 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            {t.badge}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            {t.title} <span className="text-niger-orange">{t.titleSuffix}</span>
          </h1>
          <p className="text-lg md:text-xl text-blue-50 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            {t.desc}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={() => scrollToSection('services')}
              className="bg-niger-green hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all transform hover:scale-105 shadow-xl"
            >
              {t.btnServices} <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('apropos')}
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-10 py-4 rounded-xl font-bold transition-all backdrop-blur-sm"
            >
              {t.btnMore}
            </button>
          </div>
          <div className="mt-12 flex flex-wrap justify-center lg:justify-start gap-8 text-blue-100 text-sm font-medium">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-niger-green" /> {t.check1}
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-niger-green" /> {t.check2}
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-5 h-5 text-niger-green" /> {t.check3}
            </div>
          </div>
        </div>

        <div className="lg:w-2/5 w-full hidden lg:flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center">
              <TrendingUp className="w-10 h-10 text-niger-green mb-4" />
              <p className="text-white font-black text-2xl">Growth</p>
              <p className="text-blue-200 text-xs uppercase font-bold tracking-tighter">Opportunities</p>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl flex flex-col items-center text-center mt-8">
              <Shield className="w-10 h-10 text-niger-green mb-4" />
              <p className="text-white font-black text-2xl">Secure</p>
              <p className="text-blue-200 text-xs uppercase font-bold tracking-tighter">Investments</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl flex items-center gap-6 border border-gray-100 self-end max-w-xs">
            <div className="bg-niger-blue/10 p-4 rounded-2xl">
              <Globe className="w-8 h-8 text-niger-blue" />
            </div>
            <div>
              <p className="text-niger-blue font-black text-3xl">100%</p>
              <p className="text-gray-500 text-[10px] font-bold uppercase tracking-wider">{t.statLabel}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;