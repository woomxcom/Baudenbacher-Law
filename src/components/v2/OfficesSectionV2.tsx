import React, { useState, useEffect } from 'react';
import { Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { MapPin, Phone, Mail, Clock, ArrowUpRight, Navigation, Globe } from 'lucide-react';

interface OfficesSectionV2Props {
  language?: Language;
  onSelectOffice: (city: string) => void;
}

export const OfficesSectionV2: React.FC<OfficesSectionV2Props> = ({
  language = 'de',
  onSelectOffice
}) => {
  const { offices, ui } = getLocalizedData(language);
  const [time, setTime] = useState({
    zurich: '',
    brussels: '',
    oslo: ''
  });

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      setTime({
        zurich: now.toLocaleTimeString('de-CH', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit' }),
        brussels: now.toLocaleTimeString('de-DE', { timeZone: 'Europe/Brussels', hour: '2-digit', minute: '2-digit' }),
        oslo: now.toLocaleTimeString('no-NO', { timeZone: 'Europe/Oslo', hour: '2-digit', minute: '2-digit' })
      });
    };

    updateClocks();
    const interval = setInterval(updateClocks, 10000);
    return () => clearInterval(interval);
  }, []);

  const getCityTime = (city: string) => {
    switch (city.toLowerCase()) {
      case 'zürich':
      case 'zurich':
        return time.zurich || '14:00';
      case 'brüssel':
      case 'brussels':
        return time.brussels || '14:00';
      case 'oslo':
        return time.oslo || '14:00';
      default:
        return '14:00';
    }
  };

  return (
    <section
      id="offices-section-v2"
      className="py-24 md:py-32 bg-[#182527] text-white border-t border-[#293d40] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-[#2d4246]">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                {ui.offices.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
              {ui.offices.heading}
            </h2>
          </div>

          <div className="flex items-center gap-4 text-xs font-sans text-[#E4D9CC]/80 bg-[#213134] px-4 py-2 rounded-lg border border-[#31484d]">
            <Globe className="w-4 h-4 text-[#C6A15B]" />
            <span>{ui.offices.badgeText}</span>
          </div>
        </div>

        {/* 3 Modern Office Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div
              key={office.city}
              id={`v2-office-card-${office.city.toLowerCase()}`}
              className="bg-[#213134] border border-[#364e52] hover:border-[#C6A15B] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Photo with live clock overlay */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#182527]">
                <img
                  src={office.image}
                  alt={`Baudenbacher Law ${office.city}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#213134] via-transparent to-black/30"></div>
                
                {/* Live Clock Badge */}
                <div className="absolute top-3 right-3 bg-[#182426]/90 backdrop-blur-xs text-[#E4D9CC] text-[11px] px-3 py-1 rounded-full border border-white/10 font-mono flex items-center gap-1.5">
                  <Clock className="w-3 h-3 text-[#C6A15B]" />
                  <span>{getCityTime(office.city)} CET</span>
                </div>

                <div className="absolute bottom-3 left-4">
                  <span className="font-sans text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold">
                    {office.country}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-medium">
                    {office.city}
                  </h3>
                </div>
              </div>

              {/* Office Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between">
                <div className="space-y-3.5 font-sans text-xs sm:text-sm text-[#E4D9CC]/85 font-light mb-6">
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

                <div className="pt-4 border-t border-[#2e4347] flex items-center justify-between">
                  <button
                    onClick={() => onSelectOffice(office.city)}
                    className="text-xs font-sans uppercase tracking-wider text-[#C6A15B] hover:text-white font-semibold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>{ui.offices.contactOffice}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(office.mapQuery)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 text-[#E4D9CC]/60 hover:text-white transition-colors"
                    title={ui.offices.openMaps}
                  >
                    <Navigation className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
