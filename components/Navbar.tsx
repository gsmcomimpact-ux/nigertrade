
import React from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { Language } from '../App';

interface NavbarProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (val: boolean) => void;
  lang: Language;
  toggleLang: (lang: Language) => void;
}

const Navbar: React.FC<NavbarProps> = ({ isMenuOpen, setIsMenuOpen, lang, toggleLang }) => {
  const navLinks = [
    { name: lang === 'fr' ? 'Accueil' : 'Home', href: '#accueil' },
    { name: lang === 'fr' ? 'À Propos' : 'About', href: '#apropos' },
    { name: lang === 'fr' ? 'Nos Services' : 'Our Services', href: '#services' },
    { name: lang === 'fr' ? 'Secteurs' : 'Sectors', href: '#secteurs' },
    { name: lang === 'fr' ? 'Contact' : 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('#accueil')}>
              <div className="bg-niger-orange w-10 h-10 rounded flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="font-extrabold text-2xl tracking-tighter uppercase">
                <span className="text-niger-orange">NIGER</span>
                <span className="text-niger-blue"> TRADE</span>
              </span>
            </div>
            <div className="hidden md:ml-10 md:flex md:space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-600 hover:text-niger-blue px-3 py-2 text-sm font-medium transition-colors border-b-2 border-transparent hover:border-niger-green"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-gray-50 rounded-full">
              <button 
                onClick={() => toggleLang('fr')}
                className={`text-[10px] font-bold ${lang === 'fr' ? 'text-niger-blue' : 'text-gray-400'}`}
              >
                FR
              </button>
              <div className="w-px h-3 bg-gray-300"></div>
              <button 
                onClick={() => toggleLang('en')}
                className={`text-[10px] font-bold ${lang === 'en' ? 'text-niger-blue' : 'text-gray-400'}`}
              >
                EN
              </button>
            </div>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="bg-niger-green text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-green-800 transition-all shadow-sm"
            >
              {lang === 'fr' ? 'Devenir Partenaire' : 'Become a Partner'}
            </button>
          </div>
          <div className="-mr-2 flex items-center md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-in slide-in-from-top-4 duration-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left px-3 py-4 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-niger-blue"
              >
                {link.name}
              </button>
            ))}
            <div className="flex justify-center py-4 gap-4">
              <button onClick={() => toggleLang('fr')} className={`font-bold ${lang === 'fr' ? 'text-niger-blue' : 'text-gray-400'}`}>FR</button>
              <span className="text-gray-200">|</span>
              <button onClick={() => toggleLang('en')} className={`font-bold ${lang === 'en' ? 'text-niger-blue' : 'text-gray-400'}`}>EN</button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;