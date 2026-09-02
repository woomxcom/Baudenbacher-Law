import React from 'react';
import { OFFICES } from '../data/content';
import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react';

interface OfficesSectionProps {
  onSelectOffice: (city: string) => void;
}

export const OfficesSection: React.FC<OfficesSectionProps> = ({ onSelectOffice }) => {
  return (
    <section
      id="offices-section"
      className="py-20 md:py-28 bg-[#1e2d30] text-white border-t border-[#2d4246]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-[#2e4347]">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold block mb-2">
              INTERNATIONALE PRÄSENZ
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              Unsere Standorte
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/75 max-w-md mt-4 md:mt-0 font-light">
            In den wichtigsten europäischen und schweizerischen Rechts- und Wirtschaftsmetropolen für Sie vor Ort.
          </p>
        </div>

        {/* 3 Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {OFFICES.map((office) => (
            <div
              key={office.city}
              id={`office-card-${office.city.toLowerCase()}`}
              className="bg-[#213134] border border-[#344b50] hover:border-[#C6A15B]/60 transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#182527]">
                <img
                  src={office.image}
                  alt={`Baudenbacher Law ${office.city}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#213134] via-transparent to-black/30"></div>
                <div className="absolute top-3 left-3 bg-[#213134]/90 backdrop-blur-xs px-2.5 py-1 text-xs font-serif text-white border border-[#C6A15B]/40">
                  {office.country}
                </div>
              </div>

              {/* Office Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-1">
                <h3 className="font-serif text-2xl font-normal text-white group-hover:text-[#C6A15B] transition-colors mb-4">
                  {office.city}
                </h3>

                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#E4D9CC]/85 font-light mb-6 flex-1">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                    <span>{office.address}, {office.postalCode}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                    <a href={`tel:${office.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="hover:text-white transition-colors">
                      {office.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => onSelectOffice(office.city)}
                  className="mt-auto pt-4 border-t border-[#31464a] text-xs font-sans uppercase tracking-wider text-[#C6A15B] group-hover:text-white inline-flex items-center justify-between transition-colors"
                >
                  <span>Kontakt aufnehmen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
