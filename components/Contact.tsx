
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
        <h3 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">{t.title}</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          {t.desc}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Phone / WhatsApp Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
          <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center text-niger-blue mb-6 group-hover:bg-niger-blue group-hover:text-white transition-all">
            <Phone className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">{t.labelPhone}</h4>
          <p className="text-gray-600 font-medium text-lg mb-4">{COMPANY_INFO.phone}</p>
          <a 
            href={`https://wa.me/${COMPANY_INFO.whatsapp}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-niger-green text-white px-6 py-2.5 rounded-xl text-sm font-bold hover:bg-green-700 transition-all"
          >
            {t.btnChat} <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Email Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
          <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center text-niger-blue mb-6 group-hover:bg-niger-blue group-hover:text-white transition-all">
            <Mail className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">{t.labelEmail}</h4>
          <a 
            href={`mailto:${COMPANY_INFO.email}`} 
            className="text-niger-blue font-medium text-lg hover:underline break-all"
          >
            {COMPANY_INFO.email}
          </a>
          <p className="text-gray-400 text-xs mt-4 uppercase tracking-widest font-bold">Réponse sous 24h</p>
        </div>

        {/* Location Card */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group">
          <div className="bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center text-niger-blue mb-6 group-hover:bg-niger-blue group-hover:text-white transition-all">
            <MapPin className="w-6 h-6" />
          </div>
          <h4 className="text-xl font-bold text-gray-900 mb-2">{t.labelLoc}</h4>
          <p className="text-gray-600 font-medium text-lg">{COMPANY_INFO.location}</p>
          <p className="text-gray-400 text-xs mt-4 uppercase tracking-widest font-bold">Niamey, Niger</p>
        </div>
      </div>

      {/* Business Hours Banner */}
      <div className="mt-12 bg-niger-blue rounded-[2rem] p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="bg-white/10 p-4 rounded-2xl backdrop-blur-sm">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div>
              <h4 className="text-2xl font-bold mb-1">{t.labelHours}</h4>
              <p className="text-blue-100 font-light italic">Nous restons à votre écoute pour toute urgence stratégique.</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full md:w-auto">
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-blue-200 font-bold mb-1">{t.monFri}</p>
              <p className="text-lg font-bold">08h00 - 18h00</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-blue-200 font-bold mb-1">{t.sat}</p>
              <p className="text-lg font-bold">09h00 - 13h00</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-xs uppercase tracking-widest text-niger-orange font-bold mb-1">{t.sun}</p>
              <p className="text-lg font-bold italic">{t.closed}</p>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Contact;
