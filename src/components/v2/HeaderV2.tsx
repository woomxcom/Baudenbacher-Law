import React, { useState, useEffect } from 'react';
import { Logo } from '../Logo';
import { ArrowRight, X, Phone, Mail, MapPin, Sliders, Sparkles, Shield, ChevronDown } from 'lucide-react';
import { HomePageVersion } from '../../types';

interface HeaderV2Props {
  pageVersion: HomePageVersion;
  onSelectVersion: (v: HomePageVersion) => void;
  onOpenContact: () => void;
  onOpenElementorGuide: () => void;
  onBackToHome?: () => void;
}

export const HeaderV2: React.FC<HeaderV2Props> = ({
  pageVersion,
  onSelectVersion,
  onOpenContact,
  onOpenElementorGuide,
  onBackToHome
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Modern floating top header with gold accent line */}
      <header
        id="v2-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#182527]/95 backdrop-blur-md shadow-xl border-b border-[#C6A15B]/30 py-3'
            : 'bg-gradient-to-b from-[#182527]/95 to-[#213134]/90 backdrop-blur-xs border-b border-[#31484d] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Left: Navigation Anchors (Desktop) & Menu Toggle (Mobile) */}
          <div className="flex items-center gap-6 flex-1 justify-start">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 text-[#E4D9CC] hover:text-white rounded hover:bg-[#2a3e42] transition-colors"
              aria-label="Menü öffnen"
            >
              <div className="flex flex-col gap-1 w-5 justify-center">
                <span className="h-[2px] w-5 bg-[#C6A15B]"></span>
                <span className="h-[2px] w-3.5 bg-white"></span>
                <span className="h-[2px] w-5 bg-[#C6A15B]"></span>
              </div>
            </button>

            <nav className="hidden lg:flex items-center gap-6 font-sans text-xs tracking-wider uppercase text-[#E4D9CC]/85">
              <button
                onClick={() => scrollTo('team-section-v2')}
                className="hover:text-[#C6A15B] transition-colors py-1 relative group"
              >
                <span>Team</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C6A15B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
              <button
                onClick={() => scrollTo('values-section-v2')}
                className="hover:text-[#C6A15B] transition-colors py-1 relative group"
              >
                <span>Werte</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C6A15B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
              <button
                onClick={() => scrollTo('practice-areas-section-v2')}
                className="hover:text-[#C6A15B] transition-colors py-1 relative group"
              >
                <span>Fachgebiete</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C6A15B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
              <button
                onClick={() => scrollTo('offices-section-v2')}
                className="hover:text-[#C6A15B] transition-colors py-1 relative group"
              >
                <span>Standorte</span>
                <span className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#C6A15B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </button>
            </nav>
          </div>

          {/* Center: Brand Identity & Monogram (Centered) */}
          <div className="flex justify-center shrink-0 px-4">
            <Logo
              variant="light"
              size="md"
              onClick={() => {
                if (onBackToHome) onBackToHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Right: Primary CTA (Kontakt / Mandat anfragen) */}
          <div className="flex items-center justify-end gap-3 flex-1">
            <button
              id="v2-header-cta"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs uppercase tracking-wider rounded transition-all shadow-sm group"
            >
              <span>Mandat anfragen</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </header>

      {/* Mobile / Responsive Slide Drawer */}
      <div
        id="v2-navigation-drawer"
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-md bg-[#1d2c2f] text-white p-8 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 border-l border-[#C6A15B]/40 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#31464a]">
              <Logo variant="light" size="sm" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#E4D9CC] hover:text-white hover:bg-[#2a3e42] rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-4">
              <button
                onClick={() => scrollTo('hero-section-v2')}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>Startseite & Hubs</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
              <button
                onClick={() => scrollTo('team-section-v2')}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>Unser Team & Partner</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
              <button
                onClick={() => scrollTo('values-section-v2')}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>Wofür wir stehen</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
              <button
                onClick={() => scrollTo('practice-areas-section-v2')}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>Unsere Fachgebiete</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
              <button
                onClick={() => scrollTo('offices-section-v2')}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between py-2 border-b border-white/5"
              >
                <span>Standorte & Kontakt</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
            </nav>

            {/* Version Switcher in Mobile Drawer */}
            <div className="mt-8 p-4 bg-[#182426] rounded border border-[#31464a]">
              <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold block mb-2">
                Homepage Version wählen:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onSelectVersion('version1');
                    setIsMenuOpen(false);
                  }}
                  className="py-2 px-3 text-xs bg-[#213134] text-white hover:bg-[#2c4044] rounded text-center"
                >
                  V1: PDF Replikation
                </button>
                <button
                  onClick={() => {
                    onSelectVersion('version2');
                    setIsMenuOpen(false);
                  }}
                  className="py-2 px-3 text-xs bg-[#C6A15B] text-[#213134] font-bold rounded text-center"
                >
                  V2: Modern Creative
                </button>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-[#31464a] text-xs text-[#E4D9CC]/80 space-y-2 font-sans">
            <p className="font-serif text-white font-medium">Baudenbacher Law AG</p>
            <p>Zürich · Brüssel · Oslo</p>
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onOpenContact();
              }}
              className="w-full mt-2 py-2.5 bg-[#C6A15B] text-[#213134] font-semibold text-xs tracking-wider uppercase rounded"
            >
              Erstberatung anfragen
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
