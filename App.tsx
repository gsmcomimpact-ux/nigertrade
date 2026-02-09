
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Sectors from './components/Sectors';
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

        <div id="secteurs" className="py-20 bg-white">
          <Sectors lang={lang} />
        </div>

        <div id="contact" className="py-24 bg-gray-50">
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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/><path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/></svg>
      </a>
    </div>
  );
};

export default App;
