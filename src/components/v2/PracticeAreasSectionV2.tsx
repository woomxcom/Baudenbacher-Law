import React from 'react';
import { PracticeArea, Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { Shield, Briefcase, Scale, Globe, Landmark, ArrowRight, ChevronRight, Layers } from 'lucide-react';

interface PracticeAreasSectionV2Props {
  language?: Language;
  onSelectPractice: (practice: PracticeArea) => void;
  onExploreAll: () => void;
}

export const PracticeAreasSectionV2: React.FC<PracticeAreasSectionV2Props> = ({
  language = 'de',
  onSelectPractice,
  onExploreAll
}) => {
  const { practices: practiceAreas, ui } = getLocalizedData(language);

  const getIcon = (iconName: string) => {
    const iconClass = "w-6 h-6 text-[#C6A15B]";
    switch (iconName) {
      case 'shield':
        return <Shield className={iconClass} />;
      case 'briefcase':
        return <Briefcase className={iconClass} />;
      case 'scale':
        return <Scale className={iconClass} />;
      case 'globe':
        return <Globe className={iconClass} />;
      case 'landmark':
        return <Landmark className={iconClass} />;
      default:
        return <Scale className={iconClass} />;
    }
  };

  return (
    <section
      id="practice-areas-section-v2"
      className="py-24 md:py-32 bg-[#F4F0EA] text-[#213134] border-t border-[#E4D9CC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#8a6828]"></span>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#8a6828] font-semibold">
                {ui.practices.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#213134] tracking-tight leading-[1.18]">
              {ui.practices.headingPart1}
              <br />
              <span className="text-[#8a6828] italic">
                {ui.practices.headingPart2}
              </span>
            </h2>
          </div>

          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#213134] hover:bg-[#2c4246] text-white rounded font-sans text-xs font-semibold uppercase tracking-wider transition-colors shadow-xs"
          >
            <Layers className="w-3.5 h-3.5 text-[#C6A15B]" />
            <span>{ui.practices.allOverview}</span>
          </button>
        </div>

        {/* 5-Column Bento Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              id={`v2-practice-card-${area.id}`}
              onClick={() => onSelectPractice(area)}
              className="group cursor-pointer bg-white p-8 rounded-xl border border-[#E4D9CC] hover:border-[#C6A15B] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#213134] flex items-center justify-center group-hover:bg-[#C6A15B] transition-colors">
                    <span className="group-hover:text-[#213134] transition-colors">
                      {getIcon(area.iconName)}
                    </span>
                  </div>

                  {area.badge && (
                    <span className="font-sans text-[10px] uppercase tracking-wider px-2.5 py-1 rounded bg-[#F4F0EA] text-[#213134]/80 font-medium border border-[#E4D9CC]">
                      {area.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#213134] group-hover:text-[#8a6828] transition-colors mb-3">
                  {area.title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-[#213134]/75 font-light leading-relaxed mb-6">
                  {area.shortDesc}
                </p>

                {/* Key focus topics mini list */}
                <div className="space-y-1.5 pt-4 border-t border-[#F0EBE3] mb-6">
                  {area.keyTopics.slice(0, 2).map((topic, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs font-sans text-[#213134]/70">
                      <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#F0EBE3] flex items-center justify-between text-xs font-sans text-[#8a6828] group-hover:text-[#213134] font-semibold transition-colors">
                <span>{ui.practices.detailsLink}</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}

          {/* 6th Tile: Quick Access / Consultation Tile */}
          <div
            onClick={onExploreAll}
            className="cursor-pointer bg-gradient-to-br from-[#213134] to-[#162224] p-8 rounded-xl border border-[#C6A15B]/40 text-white flex flex-col justify-between shadow-md hover:shadow-xl transition-all"
          >
            <div>
              <span className="font-sans text-[11px] tracking-[0.2em] uppercase text-[#C6A15B] font-semibold block mb-3">
                {ui.practices.customConsultation}
              </span>
              <h3 className="font-serif text-2xl font-normal text-white mb-3">
                {ui.practices.tailoredTitle}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light leading-relaxed">
                {ui.practices.tailoredDesc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-xs font-sans text-[#C6A15B] font-semibold">
              <span>{ui.practices.tailoredCta}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
