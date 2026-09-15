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
      {/* 3-IMAGE BACKGROUND SLIDESHOW (Desktop & Tablet screens)       */}
      {/* ------------------------------------------------------------- */}
      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden pointer-events-none">
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

      {/* City Location Indicator on Bottom Left (Desktop & Tablet) */}
      <div className="hidden md:flex absolute bottom-8 left-6 sm:left-12 z-20 items-center gap-3">
        <div className="flex items-center gap-2 bg-[#213134]/90 backdrop-blur-xs px-3.5 py-1.5 border border-[#C6A15B]/30 shadow-lg text-white">
          <MapPin className="w-3.5 h-3.5 text-[#C6A15B] shrink-0" />
          <span className="text-xs font-sans tracking-wider uppercase text-white font-medium">
            {currentCity.name}
          </span>
          <span className="text-[#C6A15B] text-xs">·</span>
          <span className="text-[11px] text-[#E4D9CC]/90">
            {currentCity.country}
          </span>
        </div>

        {/* Slideshow Progress / Dots */}
        <div className="flex items-center gap-1.5 bg-[#213134]/85 px-2.5 py-1.5 border border-white/10">
          {citySlides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => handleCitySelect(idx)}
              className={`h-2 rounded-none transition-all duration-300 min-h-[24px] flex items-center ${
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
            className="ml-1 text-[#E4D9CC]/70 hover:text-white transition-colors p-1 min-h-[24px] min-w-[24px] flex items-center justify-center"
            title={isPlaying ? ui.hero.pauseSlideshow : ui.hero.playSlideshow}
            aria-label={isPlaying ? ui.hero.pauseSlideshow : ui.hero.playSlideshow}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* MOBILE HERO IMAGE SHOWCASE (< md screens)                     */}
      {/* Guarantees image visibility on mobile phones:                 */}
      {/* Displays city photography with location pin & interactive     */}
      {/* city tabs directly at the top before the text card            */}
      {/* ------------------------------------------------------------- */}
      <div className="md:hidden w-full max-w-xl px-3 pt-2">
        <div className="relative w-full h-60 sm:h-72 overflow-hidden border border-[#31484d] border-b-0 bg-[#182426]">
          {citySlides.map((slide, index) => {
            const isActive = index === currentSlideIndex;
            return (
              <div
                key={`mobile-${slide.id}`}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
              >
                <img
                  src={slide.imageUrl}
                  alt={`${slide.name} - ${slide.country}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#213134] via-black/15 to-black/35"></div>
              </div>
            );
          })}

          {/* Floating Location Pill on Mobile Image */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 bg-[#213134]/92 backdrop-blur-xs px-2.5 py-1 border border-[#C6A15B]/40 text-white shadow-lg">
            <MapPin className="w-3 h-3 text-[#C6A15B] shrink-0" />
            <span className="text-[11px] font-sans tracking-wider uppercase font-semibold text-white">
              {currentCity.name}
            </span>
            <span className="text-[#C6A15B] text-xs">·</span>
            <span className="text-[10px] text-[#E4D9CC]/90">
              {currentCity.country}
            </span>
          </div>

          {/* Mobile Interactive City Switcher & Play/Pause Button on Image */}
          <div className="absolute bottom-3 left-3 right-3 z-10 flex items-center justify-between">
            <div className="flex items-center gap-1 bg-[#213134]/90 backdrop-blur-xs p-1 border border-white/15">
              {citySlides.map((slide, idx) => (
                <button
                  key={`m-btn-${slide.id}`}
                  onClick={() => handleCitySelect(idx)}
                  className={`px-2.5 py-1 text-[10px] font-sans uppercase tracking-wider transition-all min-h-[30px] flex items-center ${
                    idx === currentSlideIndex
                      ? 'bg-[#C6A15B] text-[#213134] font-bold shadow-xs'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                  aria-label={`${ui.hero.switchImage} ${slide.name}`}
                >
                  {slide.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="bg-[#213134]/90 backdrop-blur-xs text-[#E4D9CC] hover:text-white p-1.5 border border-white/15 min-h-[32px] min-w-[32px] flex items-center justify-center transition-colors"
              title={isPlaying ? ui.hero.pauseSlideshow : ui.hero.playSlideshow}
              aria-label={isPlaying ? ui.hero.pauseSlideshow : ui.hero.playSlideshow}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-[#C6A15B]" /> : <Play className="w-3.5 h-3.5 text-[#C6A15B]" />}
            </button>
          </div>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* FIXED CONTENT BOX (EXACT PDF REPLICA)                         */}
      {/* ------------------------------------------------------------- */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 pb-8 pt-0 md:py-12 flex justify-end">
        <div
          id="hero-v1-box"
          className="w-full max-w-xl bg-[#213134] text-white p-6 sm:p-10 md:p-14 shadow-2xl border border-[#31484d] border-t-0 md:border-t relative mb-10 md:mb-0"
        >
          {/* Subtle top gold accent line */}
          <div className="absolute top-0 left-0 w-20 sm:w-24 h-[2px] bg-[#C6A15B]"></div>

          {/* Headline in Georgia serif verbatim */}
          <h1 className="font-serif text-2xl sm:text-3xl md:text-[42px] leading-[1.2] font-normal text-white tracking-normal mb-4 sm:mb-6">
            {ui.hero.heading1}
            <br />
            <span className="italic text-[#E4D9CC]">
              {ui.hero.heading2}
            </span>
          </h1>

          {/* Body Text in Arial */}
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#E4D9CC]/90 leading-relaxed font-light mb-6 sm:mb-8 max-w-lg">
            {ui.hero.paragraph}
          </p>

          {/* CTA Button */}
          <div>
            <button
              id="v1-hero-cta"
              onClick={scrollToValues}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-transparent hover:bg-[#C6A15B]/10 text-white hover:text-[#C6A15B] border border-[#C6A15B] px-5 sm:px-6 py-3 sm:py-3.5 text-xs sm:text-sm font-sans font-medium tracking-wider transition-all duration-300 group min-h-[44px]"
            >
              <span>{ui.hero.cta}</span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform duration-300" />
            </button>
          </div>

          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between text-[11px] sm:text-xs text-[#E4D9CC]/60 font-sans gap-2 sm:gap-0">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0"></span>
              {ui.hero.cityTagline}
            </span>
            <span>{ui.hero.firmTagline}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
