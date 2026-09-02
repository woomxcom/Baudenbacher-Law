import React, { useState, useEffect, useRef } from 'react';
import { CITY_SLIDES, HERO_TEXT } from '../../data/content';
import { ArrowRight, MapPin, Play, Pause, ChevronRight, Sparkles, Compass, ShieldCheck } from 'lucide-react';

interface HeroSectionV2Props {
  onOpenContact: () => void;
}

export const HeroSectionV2: React.FC<HeroSectionV2Props> = ({ onOpenContact }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

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
    const el = document.getElementById('team-section-v2');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-section-v2"
      className="relative w-full min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16 bg-[#1b2729]"
    >
      {/* ------------------------------------------------------------- */}
      {/* 3-IMAGE BACKGROUND SLIDESHOW (Zurich, Brussels, Oslo)         */}
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
              {/* Dynamic luxury gradient overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-[#1d2c2f]/40 to-black/70 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-[#213134]/35 backdrop-brightness-95"></div>
            </div>
          );
        })}
      </div>

      {/* Floating Interactive City Navigator at Bottom Left */}
      <div className="absolute bottom-8 left-4 sm:left-10 z-20 flex flex-col gap-2">
        
        {/* City selection pills */}
        <div className="flex items-center gap-1.5 p-1 bg-[#182527]/90 backdrop-blur-md rounded-full border border-[#C6A15B]/40 shadow-xl">
          {CITY_SLIDES.map((slide, idx) => {
            const isSelected = idx === currentSlideIndex;
            return (
              <button
                key={slide.id}
                onClick={() => handleCitySelect(idx)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-sans transition-all duration-300 ${
                  isSelected
                    ? 'bg-[#C6A15B] text-[#213134] font-semibold shadow-sm'
                    : 'text-[#E4D9CC]/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <MapPin className={`w-3 h-3 ${isSelected ? 'text-[#213134]' : 'text-[#C6A15B]'}`} />
                <span>{slide.name}</span>
              </button>
            );
          })}

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-1.5 text-[#E4D9CC]/70 hover:text-white transition-colors rounded-full hover:bg-white/10 ml-0.5"
            title={isPlaying ? 'Diashow pausieren' : 'Diashow fortsetzen'}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
        </div>

        {/* City coordinate / description tag */}
        <div className="hidden sm:flex items-center gap-2 text-[11px] font-sans text-[#E4D9CC]/85 bg-[#182527]/75 backdrop-blur-xs px-3 py-1 rounded border border-white/10 w-fit">
          <Compass className="w-3 h-3 text-[#C6A15B]" />
          <span>{currentCity.description}</span>
          <span className="text-[#C6A15B]">·</span>
          <span className="font-mono text-[10px] text-[#C6A15B]">{currentCity.coordinates}</span>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FIXED CONTENT BOX (MODERN CREATIVE ARCHITECTURE)             */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex justify-end">
        <div
          id="hero-v2-box"
          className="w-full max-w-2xl bg-[#1c2b2e]/92 backdrop-blur-xl text-white p-8 sm:p-12 md:p-14 shadow-2xl border border-[#C6A15B]/40 rounded-xl relative overflow-hidden transition-all duration-500"
        >
          {/* Subtle ambient lighting accent in corner */}
          <div className="absolute -right-24 -top-24 w-64 h-64 bg-[#C6A15B]/15 rounded-full blur-3xl pointer-events-none"></div>

          {/* Eyebrow badge */}
          <div className="flex items-center gap-2 mb-5">
            <span className="h-[1px] w-6 bg-[#C6A15B]"></span>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-medium">
              Internationale Spitzenkanzlei
            </span>
          </div>

          {/* Main Headline with refined contrast */}
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

          {/* Dual Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <button
              id="v2-hero-contact-btn"
              onClick={onOpenContact}
              className="inline-flex items-center gap-2.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold px-6 py-3.5 rounded text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 group"
            >
              <span>Erstberatung anfragen</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              id="v2-hero-team-btn"
              onClick={scrollToTeam}
              className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-[#E4D9CC] hover:text-white px-5 py-3.5 rounded text-sm font-sans tracking-wider border border-white/20 hover:border-white/40 transition-all duration-300"
            >
              <span>Kanzlei entdecken</span>
              <ChevronRight className="w-4 h-4 text-[#C6A15B]" />
            </button>
          </div>

          {/* 3 Strategic Hubs Quick Cards */}
          <div className="pt-6 border-t border-[#374e52] grid grid-cols-3 gap-4 text-left">
            <div>
              <div className="font-serif text-base sm:text-lg text-white font-semibold">Zürich</div>
              <div className="text-[11px] text-[#E4D9CC]/75 font-sans mt-0.5">Finanz- & Wirtschaftsrecht</div>
            </div>
            <div className="border-l border-[#374e52] pl-3 sm:pl-4">
              <div className="font-serif text-base sm:text-lg text-white font-semibold">Brüssel</div>
              <div className="text-[11px] text-[#E4D9CC]/75 font-sans mt-0.5">EU- & Sanktionsrecht</div>
            </div>
            <div className="border-l border-[#374e52] pl-3 sm:pl-4">
              <div className="font-serif text-base sm:text-lg text-white font-semibold">Oslo</div>
              <div className="text-[11px] text-[#E4D9CC]/75 font-sans mt-0.5">EWR & Schiedsverfahren</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
