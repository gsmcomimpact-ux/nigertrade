
import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ExternalLink } from 'lucide-react';
import { COMPANY_INFO, TRANSLATIONS } from '../constants';
import { Language } from '../App';

interface ContactProps {
  lang: Language;
}

const Contact: React.FC<ContactProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].contact;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-niger-blue font-bold text-sm uppercase tracking-widest mb-4">{t.badge}</h2>
        <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Contact Info */}
        <div className="space-y-8">
          <div className="flex gap-4">
            <div className="flex-shrink-0 bg-gray-50 p-4 rounded-xl text-niger-blue">
              <Phone className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{t.labelPhone}</h4>
              <p className="text-gray-600 font-medium">{COMPANY_INFO.phone}</p>
              <a 
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
                className="text-niger-green text-sm font-bold inline-flex items-center gap-1 mt-1 hover:underline"
              >
                {t.btnChat} <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 bg-gray-50 p-4 rounded-xl text-niger-blue">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{t.labelLoc}</h4>
              <p className="text-gray-600">{COMPANY_INFO.location}</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-shrink-0 bg-gray-50 p-4 rounded-xl text-niger-blue">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900">{t.labelEmail}</h4>
              <p className="text-gray-600">{COMPANY_INFO.email}</p>
            </div>
          </div>

          <div className="bg-niger-blue/5 p-8 rounded-2xl border border-niger-blue/10">
            <h4 className="text-niger-blue font-bold mb-4 flex items-center gap-2">
              <MessageSquare className="w-5 h-5" /> {t.labelHours}
            </h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex justify-between"><span>{t.monFri}</span> <span>08h00 - 18h00</span></li>
              <li className="flex justify-between"><span>{t.sat}</span> <span>09h00 - 13h00</span></li>
              <li className="flex justify-between font-bold text-niger-green italic"><span>{t.sun}</span> <span>{t.closed}</span></li>
            </ul>
          </div>
        </div>

        {/* Contact Form - Styled with dark background and white text */}
        <div className="lg:col-span-2 bg-niger-blue rounded-3xl shadow-2xl p-8 md:p-12 text-white relative overflow-hidden">
          {/* Subtle background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-100">{t.formName}</label>
              <input 
                type="text" 
                placeholder="Ex: Jean Dupont" 
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-niger-green focus:ring-2 focus:ring-niger-green/20 outline-none text-white placeholder-blue-200/50 transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-blue-100">{t.formEmail}</label>
              <input 
                type="email" 
                placeholder="email@compagnie.com" 
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-niger-green focus:ring-2 focus:ring-niger-green/20 outline-none text-white placeholder-blue-200/50 transition-all"
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-blue-100">{t.formSubject}</label>
              <select className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-niger-green focus:ring-2 focus:ring-niger-green/20 outline-none text-white appearance-none transition-all cursor-pointer">
                <option className="bg-niger-blue text-white">{t.opt1}</option>
                <option className="bg-niger-blue text-white">{t.opt2}</option>
                <option className="bg-niger-blue text-white">{t.opt3}</option>
                <option className="bg-niger-blue text-white">{t.opt4}</option>
              </select>
            </div>
            <div className="space-y-2 md:col-span-2">
              <label className="text-sm font-bold text-blue-100">{t.formMsg}</label>
              <textarea 
                rows={5} 
                placeholder="..." 
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-niger-green focus:ring-2 focus:ring-niger-green/20 outline-none text-white placeholder-blue-200/50 transition-all"
              ></textarea>
            </div>
            <div className="md:col-span-2">
              <button 
                type="submit"
                className="w-full md:w-auto bg-niger-green text-white px-12 py-4 rounded-xl font-bold hover:bg-green-700 transition-all shadow-lg flex items-center justify-center gap-2 border border-white/10"
              >
                {t.formSubmit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
