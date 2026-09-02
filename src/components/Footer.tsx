import React from 'react';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenContact: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#182426] text-white border-t border-[#293d40] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#293d40]">
          
          {/* Brand Column */}
          <div className="md:col-span-4 flex flex-col items-start">
            <Logo variant="light" size="lg" onClick={scrollToTop} />
            <p className="mt-6 text-xs sm:text-sm text-[#E4D9CC]/75 font-sans font-light leading-relaxed max-w-sm">
              Baudenbacher Law berät Unternehmen und Privatpersonen in anspruchsvollen nationalen und internationalen Rechtsfragen – präzise, diskret und mit strategischem Weitblick.
            </p>
            <div className="mt-6 flex items-center gap-2 text-xs font-sans text-[#C6A15B]">
              <ShieldCheck className="w-4 h-4" />
              <span>Zugelassen an Schweizer und Europäischen Gerichten</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-base text-white font-medium tracking-wide mb-5">
              Kanzlei & Navigation
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light">
              <li>
                <button onClick={() => scrollTo('hero-section')} className="hover:text-[#C6A15B] transition-colors">
                  Startseite
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('team-section')} className="hover:text-[#C6A15B] transition-colors">
                  Unser Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('values-section')} className="hover:text-[#C6A15B] transition-colors">
                  Wofür wir stehen
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('practice-areas-section')} className="hover:text-[#C6A15B] transition-colors">
                  Unsere Fachgebiete
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('offices-section')} className="hover:text-[#C6A15B] transition-colors">
                  Standorte & Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div className="md:col-span-5">
            <h4 className="font-serif text-base text-white font-medium tracking-wide mb-5">
              Kanzleistandorte
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 font-sans text-xs text-[#E4D9CC]/80 font-light">
              <div>
                <div className="font-serif text-sm text-white font-medium mb-1">Zürich</div>
                <p>Hottingerstrasse 12</p>
                <p>8032 Zürich, Schweiz</p>
                <p className="mt-2 text-[#C6A15B]">+41 44 260 88 00</p>
              </div>
              <div>
                <div className="font-serif text-sm text-white font-medium mb-1">Brüssel</div>
                <p>Rue de la Loi 227</p>
                <p>1040 Brüssel, Belgien</p>
                <p className="mt-2 text-[#C6A15B]">+32 2 280 44 50</p>
              </div>
              <div>
                <div className="font-serif text-sm text-white font-medium mb-1">Oslo</div>
                <p>Dronning Eufemias gate 16</p>
                <p>0191 Oslo, Norwegen</p>
                <p className="mt-2 text-[#C6A15B]">+47 22 83 90 00</p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#25373a] flex items-center justify-between">
              <span className="text-xs text-[#E4D9CC]/60 font-sans">
                Zentrale Anfragen: <a href="mailto:kontakt@baudenbacher.law" className="text-[#C6A15B] hover:underline">kontakt@baudenbacher.law</a>
              </span>
              <button
                onClick={onOpenContact}
                className="text-xs font-sans uppercase tracking-wider text-[#C6A15B] hover:text-white transition-colors"
              >
                Kontaktformular →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#E4D9CC]/55 font-light">
          <div>
            © {new Date().getFullYear()} Baudenbacher Law AG. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Impressum</span>
            <span className="hover:text-white cursor-pointer transition-colors">Datenschutzerklärung</span>
            <span className="hover:text-white cursor-pointer transition-colors">Cookie-Einstellungen</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-[#213134] hover:bg-[#C6A15B] hover:text-[#213134] transition-colors ml-4"
              aria-label="Nach oben scrollen"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
