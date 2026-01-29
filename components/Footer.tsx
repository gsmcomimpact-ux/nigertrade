
import React from 'react';
import { COMPANY_INFO, TRANSLATIONS } from '../constants';
import { Language } from '../App';

interface FooterProps {
  lang: Language;
}

const Footer: React.FC<FooterProps> = ({ lang }) => {
  const currentYear = new Date().getFullYear();
  const t = TRANSLATIONS[lang].footer;
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="bg-niger-orange text-white w-12 h-12 rounded-xl flex items-center justify-center font-black text-2xl shadow-lg">N</div>
              <span className="font-black text-2xl tracking-tighter uppercase">
                <span className="text-niger-orange">NIGER</span> TRADE
              </span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              {t.desc}
            </p>
          </div>
          
          <div>
            <h4 className="font-extrabold text-white text-lg mb-8 uppercase tracking-widest text-sm">{t.nav}</h4>
            <ul className="space-y-5 text-slate-400 text-sm">
              <li><button onClick={() => scrollToSection('accueil')} className="hover:text-niger-green transition-colors flex items-center gap-2"><span>•</span> {lang === 'fr' ? 'Accueil' : 'Home'}</button></li>
              <li><button onClick={() => scrollToSection('apropos')} className="hover:text-niger-green transition-colors flex items-center gap-2"><span>•</span> {lang === 'fr' ? 'À Propos' : 'About'}</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-niger-green transition-colors flex items-center gap-2"><span>•</span> {lang === 'fr' ? 'Nos Services' : 'Our Services'}</button></li>
              <li><button onClick={() => scrollToSection('secteurs')} className="hover:text-niger-green transition-colors flex items-center gap-2"><span>•</span> {lang === 'fr' ? 'Secteurs' : 'Sectors'}</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-niger-green transition-colors flex items-center gap-2"><span>•</span> Contact</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-extrabold text-white text-lg mb-8 uppercase tracking-widest text-sm">{t.info}</h4>
            <ul className="space-y-5 text-slate-400 text-sm">
              <li><button onClick={() => scrollToSection('informations')} className="hover:text-white transition-colors">FAQ</button></li>
              <li><button onClick={() => scrollToSection('informations')} className="hover:text-white transition-colors">{lang === 'fr' ? 'Guides Investisseurs' : 'Investor Guides'}</button></li>
              <li><button onClick={() => scrollToSection('informations')} className="hover:text-white transition-colors">{lang === 'fr' ? 'Code des Investissements' : 'Investment Code'}</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-extrabold text-white text-lg mb-8 uppercase tracking-widest text-sm">{t.news}</h4>
            <p className="text-slate-400 text-sm mb-6 font-light">{t.newsDesc}</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-slate-900 border border-slate-800 rounded-xl px-5 py-3 text-sm w-full focus:ring-2 focus:ring-niger-green outline-none text-white transition-all"
              />
              <button className="bg-niger-green hover:bg-green-700 text-white px-5 py-3 rounded-xl text-sm font-black uppercase tracking-widest transition-all">{t.newsBtn}</button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
          <p>© {currentYear} {COMPANY_INFO.name}. {t.rights}</p>
          <div className="flex gap-8">
             <span className="flex items-center gap-2 text-slate-400"><span className="text-niger-orange">•</span> NIAMEY, NIGER</span>
             <span className="flex items-center gap-2 text-slate-400"><span className="text-niger-green">•</span> {COMPANY_INFO.phone}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;