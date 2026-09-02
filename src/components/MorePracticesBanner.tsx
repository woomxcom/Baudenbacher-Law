import React from 'react';
import { ArrowRight, BookOpen, Layers } from 'lucide-react';

interface MorePracticesBannerProps {
  onExploreAll: () => void;
}

export const MorePracticesBanner: React.FC<MorePracticesBannerProps> = ({ onExploreAll }) => {
  return (
    <section className="bg-[#F8F6F2] pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Banner Box matching PDF */}
        <div
          id="more-practices-banner"
          onClick={onExploreAll}
          className="group cursor-pointer bg-[#EFEAE4] hover:bg-[#E4D9CC]/50 border border-[#E4D9CC] transition-all duration-300 p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm hover:shadow-md"
        >
          {/* Left Side: Thumbnail visual & text content */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Image Thumbnail matching PDF */}
            <div className="w-24 h-20 sm:w-28 sm:h-24 rounded-none overflow-hidden flex-shrink-0 bg-[#213134]/10 border border-[#E4D9CC]">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80"
                alt="Rechtsarchitektur"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Text description */}
            <div className="flex flex-col">
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#8a6828] font-semibold mb-1">
                ALLE RECHTSGEBIETE
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#213134] group-hover:text-[#8a6828] transition-colors mb-1.5">
                Weitere Rechtsgebiete
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#213134]/75 font-light max-w-xl">
                Erfahren Sie mehr über unser breiteres Leistungsspektrum und weitere Spezialisierungen.
              </p>
            </div>
          </div>

          {/* Right Side: CTA Button */}
          <div className="flex-shrink-0 self-end sm:self-auto">
            <span className="inline-flex items-center gap-2 font-sans text-xs sm:text-sm font-medium text-[#213134] group-hover:text-[#8a6828] uppercase tracking-wider transition-colors">
              <span className="border-b border-transparent group-hover:border-[#8a6828] pb-0.5">
                Alle Rechtsgebiete entdecken
              </span>
              <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform" />
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
