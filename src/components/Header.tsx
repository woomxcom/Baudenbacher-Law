import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, Mail, Globe, MapPin, ArrowRight, Layers, Sliders } from 'lucide-react';
import { HeroVersion } from '../types';

interface HeaderProps {
  heroVersion: HeroVersion;
  onSelectHeroVersion: (version: HeroVersion) => void;
  onOpenContact: () => void;
  onOpenElementorGuide: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  heroVersion,
  onSelectHeroVersion,
  onOpenContact,
  onOpenElementorGuide
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

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Top Bar for Version Switcher & Quick Controls (Optional / Floating notification for client review) */}
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#213134]/95 backdrop-blur-md shadow-lg border-b border-[#31464a]'
            : 'bg-[#213134] border-b border-[#2d4145]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Left: Navigation Menu Toggle with custom elegant icon */}
          <div className="w-36 sm:w-48 flex items-center justify-start">
            <button
              id="menu-toggle-btn"
              onClick={() => setIsMenuOpen(true)}
              className="inline-flex items-center gap-2.5 px-3 py-2 text-sm font-sans tracking-wider uppercase text-[#E4D9CC] hover:text-white hover:bg-[#2a3e42] transition-colors rounded-sm group"
              aria-label="Menü öffnen"
            >
              <div className="flex flex-col gap-1.5 w-5 justify-center items-start">
                <span className="h-[1.5px] w-5 bg-[#C6A15B] transition-all group-hover:w-5"></span>
                <span className="h-[1.5px] w-3.5 bg-white transition-all group-hover:w-5"></span>
                <span className="h-[1.5px] w-5 bg-[#C6A15B] transition-all group-hover:w-5"></span>
              </div>
              <span className="hidden sm:inline-block font-sans text-xs tracking-widest text-[#E4D9CC]">
                Menü
              </span>
            </button>
          </div>

          {/* Center: Monogram & Brand Logo (Centered) */}
          <div className="flex justify-center flex-1">
            <Logo
              variant="light"
              size="md"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>

          {/* Right: Contact Link */}
          <div className="w-36 sm:w-48 flex items-center justify-end">
            <button
              id="header-contact-btn"
              onClick={onOpenContact}
              className="text-[#E4D9CC] hover:text-white font-sans text-sm tracking-widest uppercase transition-colors px-3 py-1.5 relative group"
            >
              <span>Kontakt</span>
              <span className="absolute bottom-0 left-3 right-3 h-[1px] bg-[#C6A15B] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </div>
        </div>
      </header>

      {/* Slide-out Navigation Drawer */}
      <div
        id="navigation-drawer"
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>

        {/* Drawer Content */}
        <div
          className={`absolute top-0 left-0 bottom-0 w-full max-w-md bg-[#213134] text-white p-8 sm:p-10 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 border-r border-[#31464a] ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          {/* Top of drawer */}
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#31464a]">
              <Logo variant="light" size="sm" />
              <button
                id="close-menu-btn"
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-[#E4D9CC] hover:text-white hover:bg-[#2a3e42] rounded-full transition-colors"
                aria-label="Menü schließen"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Main Navigation links */}
            <nav className="mt-8 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('hero-section')}
                className="text-left font-serif text-2xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>Startseite</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
              
              <button
                onClick={() => scrollToSection('team-section')}
                className="text-left font-serif text-2xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>Unser Team</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={() => scrollToSection('values-section')}
                className="text-left font-serif text-2xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>Wofür wir stehen</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={() => scrollToSection('practice-areas-section')}
                className="text-left font-serif text-2xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>Unsere Fachgebiete</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>

              <button
                onClick={() => scrollToSection('offices-section')}
                className="text-left font-serif text-2xl text-white hover:text-[#C6A15B] transition-colors flex items-center justify-between group py-2 border-b border-white/5"
              >
                <span>Standorte & Kontakt</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
              </button>
            </nav>

            {/* Design version switcher inside mobile menu */}
            <div className="mt-8 p-4 bg-[#182527] rounded-lg border border-[#31464a]">
              <div className="text-xs uppercase tracking-widest text-[#C6A15B] font-sans mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                Hero Design Version:
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => {
                    onSelectHeroVersion('version1');
                    setIsMenuOpen(false);
                  }}
                  className={`py-2 px-3 text-xs font-sans rounded transition-all text-center ${
                    heroVersion === 'version1'
                      ? 'bg-[#C6A15B] text-[#213134] font-bold'
                      : 'bg-[#213134] text-white hover:bg-[#2d4246]'
                  }`}
                >
                  Version 1 (PDF)
                </button>
                <button
                  onClick={() => {
                    onSelectHeroVersion('version2');
                    setIsMenuOpen(false);
                  }}
                  className={`py-2 px-3 text-xs font-sans rounded transition-all text-center ${
                    heroVersion === 'version2'
                      ? 'bg-[#C6A15B] text-[#213134] font-bold'
                      : 'bg-[#213134] text-white hover:bg-[#2d4246]'
                  }`}
                >
                  Version 2 (Modern)
                </button>
              </div>
            </div>
          </div>

          {/* Bottom of drawer: Hubs and quick contact */}
          <div className="pt-6 border-t border-[#31464a] text-sm text-[#E4D9CC]/80 space-y-3 font-sans">
            <div className="text-xs tracking-widest uppercase text-[#C6A15B] font-semibold">
              Kanzleistandorte
            </div>
            <div className="flex items-center gap-2 text-xs">
              <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>Zürich · Brüssel · Oslo</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Mail className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>kontakt@baudenbacher.law</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <Phone className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>+41 44 260 88 00</span>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
