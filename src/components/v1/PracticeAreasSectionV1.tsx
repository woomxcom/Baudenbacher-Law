import React from 'react';
import { PracticeArea, Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { Shield, Briefcase, Scale, Globe, Landmark } from 'lucide-react';

interface PracticeAreasSectionV1Props {
  language?: Language;
  onSelectPractice: (practice: PracticeArea) => void;
  onExploreAll: () => void;
}

export const PracticeAreasSectionV1: React.FC<PracticeAreasSectionV1Props> = ({
  language = 'de',
  onSelectPractice,
  onExploreAll
}) => {
  const { practices: practiceAreas, ui } = getLocalizedData(language);

  const renderIcon = (iconName: string) => {
    const iconClass = "w-7 h-7 text-[#213134] group-hover:text-[#C6A15B] transition-colors stroke-[1.3]";
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
      id="practice-areas-section-v1"
      className="py-24 md:py-32 bg-[#F8F6F2] text-[#213134] border-t border-[#E4D9CC]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching PDF */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#8a6828] font-semibold block mb-3">
            {ui.practices.eyebrow}
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#213134] tracking-tight leading-[1.18] mb-6">
            {ui.practices.headingPart1}
            <br />
            <span className="italic text-[#4a5f63]">
              {ui.practices.headingPart2}
            </span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#213134]/80 leading-relaxed font-light">
            {ui.practices.description}
          </p>
        </div>

        {/* 5-Column Cards Layout with subtle vertical dividers matching PDF */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#E4D9CC]">
          {practiceAreas.map((area, index) => (
            <div
              key={area.id}
              id={`v1-practice-card-${area.id}`}
              onClick={() => onSelectPractice(area)}
              className={`group cursor-pointer flex flex-col justify-between pt-6 sm:pt-0 ${
                index > 0 ? 'lg:pl-6' : ''
              } transition-all duration-300 hover:translate-y-[-2px]`}
            >
              <div>
                {/* Minimalist Line Icon */}
                <div className="mb-6 inline-flex p-2.5 bg-[#E4D9CC]/30 group-hover:bg-[#C6A15B]/15 transition-colors">
                  {renderIcon(area.iconName)}
                </div>

                {/* Title in Georgia serif */}
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#213134] group-hover:text-[#8a6828] transition-colors mb-3.5">
                  {area.title}
                </h3>

                {/* Short Description */}
                <p className="font-sans text-xs sm:text-[13px] text-[#213134]/75 leading-relaxed font-light mb-6">
                  {area.shortDesc}
                </p>
              </div>

              {/* Arrow CTA link */}
              <div className="mt-auto pt-4 flex items-center text-sm text-[#C6A15B] group-hover:text-[#213134] transition-colors">
                <span className="text-lg font-light group-hover:translate-x-1.5 transition-transform duration-300">
                  →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
