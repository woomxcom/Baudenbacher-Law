import React, { useState, useEffect, useRef } from 'react';
import { CITY_SLIDES, HERO_TEXT } from '../data/content';
import { HeroVersion } from '../types';
import { ArrowRight, MapPin, Play, Pause, ChevronRight, Compass, ShieldCheck, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  version: HeroVersion;
  onSelectVersion: (version: HeroVersion) => void;
  onOpenContact: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  version,
  onSelectVersion,
  onOpenContact
}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Background slideshow logic: rotate every 6.5 seconds
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % CITY_SLIDES.length);
      }, 6500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying]);

  const currentCity = CITY_SLIDES[currentSlideIndex];

  const handleCitySelect = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const scrollToTeam = () => {
    const el = document.getElementById('team-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToValues = () => {
    const el = document.getElementById('values-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#213134]"
    >
      {/* ------------------------------------------------------------- */}
      {/* BACKGROUND SLIDESHOW (Zurich, Brussels, Oslo)                 */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {CITY_SLIDES.map((slide, index) => {
          const isActive = index === currentSlideIndex;
          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={slide.imageUrl}
                alt={`${slide.name} - ${slide.country}`}
                referrerPolicy="no-referrer"
                className={`w-full h-full object-cover object-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
              />
              {/* Refined gradient overlay for flawless legibility and depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-[#213134]/30 to-black/60 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[#213134]/40 backdrop-brightness-90"></div>
            </div>
          );
        })}
      </div>

      {/* City Location Indicator Pill on Bottom Left */}
      <div className="absolute bottom-8 left-6 sm:left-12 z-20 flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#213134]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C6A15B]/30 shadow-lg text-white">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span className="text-xs font-sans tracking-wider uppercase text-white font-medium">
            {currentCity.name}, {currentCity.country}
          </span>
          <span className="text-[#C6A15B] text-xs">·</span>
          <span className="text-[11px] text-[#E4D9CC]/90 hidden md:inline">
            {currentCity.subtitle}
          </span>
        </div>

        {/* City Slide Selectors / Progress Dots */}
        <div className="flex items-center gap-1.5 bg-[#213134]/80 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10">
          {CITY_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleCitySelect(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentSlideIndex
                  ? 'w-6 bg-[#C6A15B]'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              title={`Wechsle zu ${slide.name}`}
              aria-label={`Bild von ${slide.name} anzeigen`}
            />
          ))}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-1 text-[#E4D9CC]/70 hover:text-white transition-colors p-0.5"
            title={isPlaying ? 'Slideshow pausieren' : 'Slideshow abspielen'}
            aria-label={isPlaying ? 'Slideshow pausieren' : 'Slideshow abspielen'}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* Floating Design Version Selector Switcher Badge (Top Right) */}
      <div className="absolute top-24 right-4 sm:right-8 z-30 flex items-center gap-2 bg-[#182527]/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-[#C6A15B]/40 shadow-xl">
        <span className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold hidden sm:inline flex items-center gap-1">
          <Sparkles className="w-3 h-3" /> Design-Vergleich:
        </span>
        <button
          onClick={() => onSelectVersion('version1')}
          className={`text-xs px-3 py-1 rounded-full font-sans transition-all ${
            version === 'version1'
              ? 'bg-[#C6A15B] text-[#213134] font-bold shadow-sm'
              : 'text-[#E4D9CC] hover:text-white hover:bg-white/10'
          }`}
        >
          Version 1 (PDF)
        </button>
        <button
          onClick={() => onSelectVersion('version2')}
          className={`text-xs px-3 py-1 rounded-full font-sans transition-all ${
            version === 'version2'
              ? 'bg-[#C6A15B] text-[#213134] font-bold shadow-sm'
              : 'text-[#E4D9CC] hover:text-white hover:bg-white/10'
          }`}
        >
          Version 2 (Modern)
        </button>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FIXED CONTENT BOXES (TWO DESIGN VERSIONS)                     */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-end">
        
        {/* ========================================================= */}
        {/* VERSION 1: PDF EXACT REPLICA (Clean, Classic & Elegant)   */}
        {/* ========================================================= */}
        {version === 'version1' && (
          <div
            id="hero-content-box-v1"
            className="w-full max-w-xl bg-[#213134] text-white p-8 sm:p-12 md:p-14 shadow-2xl border border-[#31484d] rounded-none animate-fadeIn transition-all duration-500 relative"
          >
            {/* Subtle luxury top gold hairline */}
            <div className="absolute top-0 left-0 w-24 h-[2px] bg-[#C6A15B]"></div>

            {/* Main Headline in Georgia serif (Matching PDF verbatim) */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-[1.18] font-normal text-white tracking-normal mb-6">
              {HERO_TEXT.heading1}
              <br />
              <span className="italic text-[#E4D9CC]">
                {HERO_TEXT.heading2}
              </span>
            </h1>

            {/* Body Text in Arial (Matching PDF verbatim) */}
            <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 leading-relaxed font-light mb-8 max-w-lg">
              {HERO_TEXT.paragraph}
            </p>

            {/* CTA Button matching PDF: "Mehr erfahren  →" */}
            <div>
              <button
                id="hero-v1-cta-btn"
                onClick={scrollToValues}
                className="inline-flex items-center gap-3 bg-transparent hover:bg-[#C6A15B]/10 text-white hover:text-[#C6A15B] border border-[#C6A15B] hover:border-[#C6A15B] px-6 py-3.5 text-sm font-sans font-medium tracking-wider transition-all duration-300 group"
              >
                <span>{HERO_TEXT.cta}</span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>
            </div>

            {/* Micro footer hint for Elementor context */}
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#E4D9CC]/60 font-sans">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
                Zürich · Brüssel · Oslo
              </span>
              <span>Rechtsanwälte & Advisors</span>
            </div>
          </div>
        )}

        {/* ========================================================= */}
        {/* VERSION 2: MODERN / CREATIVE ALTERNATIVE                  */}
        {/* ========================================================= */}
        {version === 'version2' && (
          <div
            id="hero-content-box-v2"
            className="w-full max-w-2xl bg-[#1d2c2f]/92 backdrop-blur-xl text-white p-8 sm:p-12 md:p-14 shadow-2xl border border-[#C6A15B]/40 rounded-xl animate-fadeIn transition-all duration-500 relative overflow-hidden"
          >
            {/* Ambient gold glow highlight */}
            <div className="absolute -right-20 -top-20 w-60 h-60 bg-[#C6A15B]/15 rounded-full blur-3xl pointer-events-none"></div>

            {/* Eyebrow with decorative badge */}
            <div className="flex items-center gap-2 mb-5">
              <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-medium">
                Internationale Spitzenkanzlei
              </span>
            </div>

            {/* Main Headline in Georgia with modern typographic contrast */}
            <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] leading-[1.15] font-normal text-white tracking-tight mb-6">
              {HERO_TEXT.heading1}
              <br />
              <span className="text-[#C6A15B] font-serif italic">
                {HERO_TEXT.heading2}
              </span>
            </h1>

            {/* Body Text */}
            <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 leading-relaxed font-light mb-8 max-w-xl">
              {HERO_TEXT.paragraph}
            </p>

            {/* Dual CTA Actions for high engagement */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                id="hero-v2-contact-btn"
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold px-6 py-3.5 rounded text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 group"
              >
                <span>Erstberatung anfragen</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="hero-v2-more-btn"
                onClick={scrollToTeam}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-[#E4D9CC] hover:text-white px-5 py-3.5 rounded text-sm font-sans tracking-wider border border-white/20 hover:border-white/40 transition-all duration-300"
              >
                <span>Kanzlei entdecken</span>
                <ChevronRight className="w-4 h-4 text-[#C6A15B]" />
              </button>
            </div>

            {/* 3 Strategic Key Metrics / Location Badges */}
            <div className="mt-10 pt-6 border-t border-[#374e52] grid grid-cols-3 gap-4 text-left">
              <div>
                <div className="font-serif text-lg text-white font-semibold">Zürich</div>
                <div className="text-[11px] text-[#E4D9CC]/70 font-sans">Finanz- & Wirtschaftsrecht</div>
              </div>
              <div className="border-l border-[#374e52] pl-4">
                <div className="font-serif text-lg text-white font-semibold">Brüssel</div>
                <div className="text-[11px] text-[#E4D9CC]/70 font-sans">EU- & Sanktionsrecht</div>
              </div>
              <div className="border-l border-[#374e52] pl-4">
                <div className="font-serif text-lg text-white font-semibold">Oslo</div>
                <div className="text-[11px] text-[#E4D9CC]/70 font-sans">EWR & Schiedsverfahren</div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
