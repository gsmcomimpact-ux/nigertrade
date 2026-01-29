
import React, { useState } from 'react';
import { SERVICES_DATA, TRANSLATIONS } from '../constants';
import { ServiceItem } from '../types';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '../App';

interface ServicesProps {
  lang: Language;
}

const Services: React.FC<ServicesProps> = ({ lang }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const t = TRANSLATIONS[lang].services;
  const services = SERVICES_DATA[lang];

  const closeModal = () => setSelectedService(null);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-20">
        <h2 className="text-niger-green font-bold text-sm uppercase tracking-widest mb-4">{t.badge}</h2>
        <h3 className="text-3xl md:text-5xl font-extrabold text-niger-blue mb-6">{t.title}</h3>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
          {t.desc}
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s) => (
          <div 
            key={s.id} 
            className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all group hover:-translate-y-3 duration-300 flex flex-col h-full"
          >
            <div className="bg-gray-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-niger-blue transition-all duration-300 shadow-inner">
              <div className="group-hover:text-white transition-colors">
                {s.icon}
              </div>
            </div>
            <h4 className="text-xl font-extrabold text-niger-blue mb-4 group-hover:text-niger-blue">{s.title}</h4>
            <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
              {s.description}
            </p>
            <button 
              onClick={() => setSelectedService(s)}
              className="text-niger-green font-black text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-3 transition-all mt-auto"
            >
              {t.btnDiscover} <span className="text-xl">→</span>
            </button>
          </div>
        ))}
      </div>
      
      {/* Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="bg-white rounded-[2rem] shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden relative animate-in zoom-in-95 duration-300">
            <div className="bg-niger-blue p-8 text-white relative">
              <button 
                onClick={closeModal}
                className="absolute top-6 right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-white/20 p-3 rounded-xl">
                  {/* Added explicit type cast to React.ReactElement<any> to allow className prop injection via cloneElement */}
                  {React.cloneElement(selectedService.icon as React.ReactElement<any>, { className: "w-8 h-8 text-white" })}
                </div>
                <h3 className="text-2xl md:text-3xl font-black">{selectedService.title}</h3>
              </div>
              <p className="text-blue-100 font-medium leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            <div className="p-8 md:p-10 overflow-y-auto max-h-[calc(90vh-200px)]">
              <div className="mb-8">
                <h4 className="text-niger-blue font-black uppercase text-xs tracking-widest mb-6 border-l-4 border-niger-green pl-4">{t.modalPerform}</h4>
                <ul className="grid grid-cols-1 gap-4">
                  {selectedService.details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700 bg-gray-50 p-4 rounded-xl border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-niger-green flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-niger-green/5 p-6 rounded-2xl border border-niger-green/10 mb-8">
                <h4 className="text-niger-green font-black uppercase text-xs tracking-widest mb-2">{t.modalBenefit}</h4>
                <p className="text-gray-800 text-sm italic font-medium">"{selectedService.benefits}"</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => {
                    closeModal();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="flex-grow bg-niger-blue text-white py-4 rounded-xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-2 hover:bg-blue-900 transition-all shadow-lg"
                >
                  {t.btnRequest} <ArrowRight className="w-4 h-4" />
                </button>
                <button 
                  onClick={closeModal}
                  className="px-8 py-4 border-2 border-gray-200 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-gray-50 transition-all"
                >
                  {t.btnClose}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      
      <div className="mt-24 bg-niger-blue rounded-[3rem] p-10 md:p-20 text-center text-white relative overflow-hidden shadow-2xl">
        <div className="relative z-10">
          <h4 className="text-3xl md:text-5xl font-extrabold mb-6">{t.ctaTitle}</h4>
          <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg md:text-xl font-light leading-relaxed">
            {t.ctaDesc}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button 
              onClick={() => document.getElementById('consultant')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-niger-blue px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-blue-50 transition-all shadow-xl"
            >
              {t.ctaBtn1}
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-niger-green text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-green-700 transition-all shadow-xl border border-white/10"
            >
              {t.ctaBtn2}
            </button>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-niger-green/10 rounded-full -ml-48 -mb-48 blur-3xl"></div>
      </div>
    </div>
  );
};

export default Services;
