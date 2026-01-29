
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sectors from './components/Sectors';
import AIConsultant from './components/AIConsultant';
import InformationCenter from './components/InformationCenter';
import Contact from './components/Contact';
import Footer from './components/Footer';

export type Language = 'fr' | 'en';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>('fr');

  const toggleLang = (newLang: Language) => {
    setLang(newLang);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen} 
        lang={lang} 
        toggleLang={toggleLang} 
      />
      
      <main className="flex-grow">
        <div id="accueil">
          <Hero lang={lang} />
        </div>
        
        <div id="apropos" className="py-20 bg-white">
          <About lang={lang} />
        </div>

        <div id="services" className="py-20 bg-gray-50">
          <Services lang={lang} />
        </div>

        <div id="secteurs" className="py-20 bg-white border-b border-gray-50">
          <Sectors lang={lang} />
        </div>

        <div id="informations" className="py-24 bg-white">
          <InformationCenter lang={lang} />
        </div>

        <div id="consultant" className="py-24 bg-niger-blue text-white overflow-hidden relative">
          <AIConsultant lang={lang} />
        </div>

        <div id="contact" className="py-24 bg-white">
          <Contact lang={lang} />
        </div>
      </main>

      <Footer lang={lang} />
      
      {/* Floating Action Button for WhatsApp */}
      <a 
        href="https://wa.me/22791179675" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all transform hover:scale-110 flex items-center justify-center"
        aria-label="Contact via WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
      </a>
    </div>
  );
};

export default App;
