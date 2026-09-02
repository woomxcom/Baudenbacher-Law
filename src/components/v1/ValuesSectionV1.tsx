import React from 'react';
import { Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { ArrowRight, Award } from 'lucide-react';

interface ValuesSectionV1Props {
  language?: Language;
  onOpenValuesDetail: () => void;
}

export const ValuesSectionV1: React.FC<ValuesSectionV1Props> = ({
  language = 'de',
  onOpenValuesDetail
}) => {
  const { ui } = getLocalizedData(language);

  return (
    <section
      id="values-section-v1"
      className="py-24 md:py-32 bg-[#213134] text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Text (Matching PDF exactly) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            
            {/* Eyebrow */}
            <div className="mb-4">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                {ui.values.eyebrow}
              </span>
            </div>

            {/* Main Headline in Georgia serif */}
            <h2 className="font-serif text-3xl sm:text-4xl md:text-[44px] leading-[1.18] font-normal text-white tracking-tight mb-8">
              {ui.values.heading}
            </h2>

            {/* Paragraph 1 */}
            <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 leading-relaxed font-light mb-6">
              {ui.values.p1}
            </p>

            {/* Paragraph 2 */}
            <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 leading-relaxed font-light mb-8">
              {ui.values.p2}
            </p>

            {/* CTA Link matching PDF: "Mehr über unsere Werte  →" */}
            <div className="pt-2">
              <button
                id="v1-values-cta-btn"
                onClick={onOpenValuesDetail}
                className="inline-flex items-center gap-3 text-sm font-sans font-medium text-[#C6A15B] hover:text-white tracking-wider uppercase transition-colors group"
              >
                <span className="border-b border-[#C6A15B]/50 group-hover:border-white pb-0.5">
                  {ui.values.cta}
                </span>
                <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right Column: Law Firm Interior */}
          <div className="lg:col-span-6">
            <div className="relative overflow-hidden shadow-2xl border border-[#374e52] group">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#182527]">
                <img
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=85"
                  alt="Baudenbacher Law Kanzleiräume und Bibliothek"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center filter brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#213134]/80 via-transparent to-black/20"></div>
                
                {/* Floating Architectural Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#213134]/90 backdrop-blur-xs border border-[#C6A15B]/40 flex items-center justify-between">
                  <div>
                    <div className="font-serif text-sm text-white font-medium">{ui.values.badgeTitle}</div>
                    <div className="text-[11px] font-sans text-[#E4D9CC]/75 mt-0.5">{ui.values.badgeSubtitle}</div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#C6A15B]/20 flex items-center justify-center border border-[#C6A15B]/50">
                    <Award className="w-4 h-4 text-[#C6A15B]" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
