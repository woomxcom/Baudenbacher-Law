import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { ArrowRight, MapPin, Play, Pause } from 'lucide-react';

interface HeroSectionV1Props {
  language?: Language;
  onOpenContact: () => void;
}

export const HeroSectionV1: React.FC<HeroSectionV1Props> = ({
  language = 'de',
  onOpenContact
}) => {
  const { slides: citySlides, ui } = getLocalizedData(language);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Background slideshow logic: rotate every 6.5 seconds
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % citySlides.length);
      }, 6500);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, citySlides.length]);

  const currentCity = citySlides[currentSlideIndex] || citySlides[0];

  const handleCitySelect = (index: number) => {
    setCurrentSlideIndex(index);
  };

  const scrollToValues = () => {
    const el = document.getElementById('values-section-v1') || document.getElementById('values-section-v2');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero-section-v1"
      className="relative w-full min-h-[90vh] lg:min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-[#213134]"
    >
      {/* ------------------------------------------------------------- */}
      {/* 3-IMAGE BACKGROUND SLIDESHOW (Zurich, Brussels, Oslo)         */}
      {/* ------------------------------------------------------------- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {citySlides.map((slide, index) => {
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
              {/* Subtle atmospheric vignette to enhance image clarity & depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-black/25"></div>
              <div className="absolute inset-0 bg-[#213134]/15"></div>
            </div>
          );
        })}
      </div>

      {/* City Location Indicator on Bottom Left */}
      <div className="absolute bottom-8 left-6 sm:left-12 z-20 flex items-center gap-3">
        <div className="flex items-center gap-2 bg-[#213134]/90 backdrop-blur-xs px-3.5 py-1.5 border border-[#C6A15B]/30 shadow-lg text-white">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
          <span className="text-xs font-sans tracking-wider uppercase text-white font-medium">
            {currentCity.name}, {currentCity.country}
          </span>
          <span className="text-[#C6A15B] text-xs">·</span>
          <span className="text-[11px] text-[#E4D9CC]/90 hidden sm:inline">
            {currentCity.subtitle}
          </span>
        </div>

        {/* Slideshow Progress / Dots */}
        <div className="flex items-center gap-1.5 bg-[#213134]/85 px-2.5 py-1.5 border border-white/10">
          {citySlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleCitySelect(idx)}
              className={`h-2 rounded-none transition-all duration-300 ${
                idx === currentSlideIndex
                  ? 'w-6 bg-[#C6A15B]'
                  : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              title={`${ui.hero.switchImage} ${slide.name}`}
              aria-label={`${ui.hero.switchImage} ${slide.name}`}
            />
          ))}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="ml-1 text-[#E4D9CC]/70 hover:text-white transition-colors p-0.5"
            title={isPlaying ? ui.hero.pauseSlideshow : ui.hero.playSlideshow}
            aria-label={isPlaying ? ui.hero.pauseSlideshow : ui.hero.playSlideshow}
          >
            {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FIXED CONTENT BOX (EXACT PDF REPLICA)                         */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-end">
        <div
          id="hero-v1-box"
          className="w-full max-w-xl bg-[#213134] text-white p-8 sm:p-12 md:p-14 shadow-2xl border border-[#31484d] relative"
        >
          {/* Subtle top gold accent line */}
          <div className="absolute top-0 left-0 w-24 h-[2px] bg-[#C6A15B]"></div>

          {/* Headline in Georgia serif verbatim */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-[42px] leading-[1.18] font-normal text-white tracking-normal mb-6">
            {ui.hero.heading1}
            <br />
            <span className="italic text-[#E4D9CC]">
              {ui.hero.heading2}
            </span>
          </h1>

          {/* Body Text in Arial */}
          <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 leading-relaxed font-light mb-8 max-w-lg">
            {ui.hero.paragraph}
          </p>

          {/* CTA Button */}
          <div>
            <button
              id="v1-hero-cta"
              onClick={scrollToValues}
              className="inline-flex items-center gap-3 bg-transparent hover:bg-[#C6A15B]/10 text-white hover:text-[#C6A15B] border border-[#C6A15B] px-6 py-3.5 text-sm font-sans font-medium tracking-wider transition-all duration-300 group"
            >
              <span>{ui.hero.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs text-[#E4D9CC]/60 font-sans">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
              {ui.hero.cityTagline}
            </span>
            <span>{ui.hero.firmTagline}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
