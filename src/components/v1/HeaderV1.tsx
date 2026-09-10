import React, { useState, useEffect } from 'react';
import { Logo } from '../Logo';
import { ArrowRight, X } from 'lucide-react';
import { HomePageVersion, Language } from '../../types';
import { getLocalizedData } from '../../data/translations';

interface HeaderV1Props {
  pageVersion: HomePageVersion;
  language?: Language;
  onSelectVersion: (v: HomePageVersion) => void;
  onOpenContact: () => void;
  onOpenElementorGuide: () => void;
  onBackToHome?: () => void;
}

export const HeaderV1: React.FC<HeaderV1Props> = ({
  pageVersion,
  language = 'de',
  onSelectVersion,
  onOpenContact,
  onOpenElementorGuide,
  onBackToHome
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { ui } = getLocalizedData(language);

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
      <header
        id="v1-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#213134]/98 backdrop-blur-md shadow-md border-b border-[#31464a]'
            : 'bg-[#213134] border-b border-[#2a3c40]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Left: Classic Menu Toggle matching PDF */}
          <div className="w-36 sm:w-48 flex items-center justify-start">
            <button
              id="v1-menu-btn"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center gap-2.5 px-2.5 py-1.5 text-xs font-sans tracking-widest uppercase text-[#E4D9CC] hover:text-white hover:bg-[#283d41] transition-colors rounded-xs group"
              aria-label={ui.nav.menu}
            >
              <div className="flex flex-col gap-1.5 w-5 justify-center">
                <span className="h-[1.5px] w-5 bg-[#C6A15B] transition-all"></span>
                <span className="h-[1.5px] w-3.5 bg-white transition-all group-hover:w-5"></span>
                <span className="h-[1.5px] w-5 bg-[#C6A15B] transition-all"></span>
              </div>
              <span className="hidden sm:inline font-sans text-xs tracking-widest text-[#E4D9CC]">
                {ui.nav.menu}
              </span>
            </button>
          </div>

          {/* Center: Brand Monogram and Wordmark (Centered) */}
          <div className="flex justify-center flex-1">
            <Logo
              variant="light"
              size="md"
              onClick={() => {
                if (onBackToHome) onBackToHome();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            />
          </div>

          {/* Right: Kontakt Link */}
          <div className="w-36 sm:w-48 flex items-center justify-end">
            <button
              id="v1-contact-link"
              onClick={onOpenContact}
              className="text-[#E4D9CC] hover:text-white font-sans text-xs sm:text-sm tracking-widest uppercase transition-colors px-2.5 py-1 relative group"
            >
              <span>{ui.nav.contact}</span>
              <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-[#C6A15B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>

        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      <div
        id="v1-navigation-drawer"
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/65 backdrop-blur-xs"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        <div
          className={`absolute top-0 left-0 bottom-0 w-full max-w-md bg-[#213134] text-white p-8 sm:p-10 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 border-r border-[#31464a] ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#31464a]">
              <Logo variant="light" size="sm" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#E4D9CC] hover:text-white hover:bg-[#2a3e42] rounded-full transition-colors"
                aria-label={ui.nav.closeMenu}
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="mt-8 flex flex-col space-y-3">
              <button
                onClick={() => scrollTo('hero-section-v1')}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>{ui.nav.home}</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-all" />
              </button>
              
              <button
                onClick={() => {
                  const targetId = pageVersion === 'version2' ? 'team-section-v2' : 'team-section-v1';
                  scrollTo(targetId);
                }}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>{ui.nav.team}</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-all" />
              </button>

              <button
                onClick={() => {
                  const targetId = pageVersion === 'version2' ? 'values-section-v2' : 'values-section-v1';
                  scrollTo(targetId);
                }}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>{ui.nav.values}</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-all" />
              </button>

              <button
                onClick={() => {
                  const targetId = pageVersion === 'version2' ? 'practice-areas-section-v2' : 'practice-areas-section-v1';
                  scrollTo(targetId);
                }}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>{ui.nav.practices}</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-all" />
              </button>

              <button
                onClick={() => {
                  const targetId = pageVersion === 'version2' ? 'offices-section-v2' : 'offices-section-v1';
                  scrollTo(targetId);
                }}
                className="text-left font-serif text-xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>{ui.nav.offices}</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-all" />
              </button>
            </nav>
          </div>

          <div className="pt-6 border-t border-[#31464a] text-xs text-[#E4D9CC]/80 space-y-2 font-sans">
            <div className="text-[11px] tracking-widest uppercase text-[#C6A15B] font-semibold">
              Baudenbacher Law AG
            </div>
            <p>{ui.nav.subtitle}</p>
            <p>kontakt@baudenbacher.law</p>
            <p>+41 44 260 88 00</p>
          </div>
        </div>
      </div>
    </>
  );
};
