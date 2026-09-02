import React from 'react';
import { Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { ArrowRight, Sparkles } from 'lucide-react';

interface MorePracticesBannerV2Props {
  language?: Language;
  onExploreAll: () => void;
}

export const MorePracticesBannerV2: React.FC<MorePracticesBannerV2Props> = ({
  language = 'de',
  onExploreAll
}) => {
  const { ui } = getLocalizedData(language);

  return (
    <section className="bg-[#F4F0EA] pb-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Creative panoramic banner */}
        <div
          id="v2-more-practices-banner"
          onClick={onExploreAll}
          className="group cursor-pointer bg-gradient-to-r from-[#213134] via-[#283e42] to-[#213134] rounded-2xl p-8 sm:p-12 text-white border border-[#C6A15B]/40 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
        >
          {/* Subtle architectural background texture */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-15 pointer-events-none hidden md:block">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
              alt="Architektur"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-[#C6A15B]" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                  {ui.morePractices.eyebrow}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-white mb-3">
                {ui.morePractices.heading}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/90 font-light leading-relaxed mb-4">
                {ui.morePractices.description}
              </p>

              {/* Specialization tags */}
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-sans text-[#E4D9CC] border border-white/10">
                  {ui.morePractices.tag1}
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-sans text-[#E4D9CC] border border-white/10">
                  {ui.morePractices.tag2}
                </span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-sans text-[#E4D9CC] border border-white/10">
                  {ui.morePractices.tag3}
                </span>
              </div>
            </div>

            <div className="flex-shrink-0">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onExploreAll();
                }}
                className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] rounded-lg font-sans font-semibold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
              >
                <span>{ui.morePractices.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
