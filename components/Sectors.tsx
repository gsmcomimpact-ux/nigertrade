
import React from 'react';
import { SECTORS_DATA, TRANSLATIONS } from '../constants';
import { Language } from '../App';

interface SectorsProps {
  lang: Language;
}

const Sectors: React.FC<SectorsProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].sectors;
  const sectors = SECTORS_DATA[lang];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-xl">
          <h2 className="text-niger-green font-bold text-sm uppercase tracking-widest mb-4">{t.badge}</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{t.title}</h3>
          <p className="text-gray-600 text-lg">
            {t.desc}
          </p>
        </div>
        <button className="text-niger-blue font-bold border-b-2 border-niger-green pb-1">{t.btnAll}</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {sectors.map((sector) => (
          <div 
            key={sector.id}
            className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-niger-green transition-all hover:bg-white hover:shadow-lg text-center flex flex-col items-center"
          >
            <div className="bg-white p-4 rounded-full shadow-sm text-niger-blue mb-4">
              {sector.icon}
            </div>
            <h4 className="font-bold text-gray-900 mb-2">{sector.name}</h4>
            <p className="text-gray-500 text-xs">{sector.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sectors;
