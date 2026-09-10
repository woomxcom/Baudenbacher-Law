import React from 'react';
import { TeamMember, Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface TeamSectionV1Props {
  language?: Language;
  onSelectMember: (member: TeamMember) => void;
  onOpenMemberDetails: (memberId: string) => void;
  onViewAllTeam: () => void;
}

export const TeamSectionV1: React.FC<TeamSectionV1Props> = ({
  language = 'de',
  onSelectMember,
  onOpenMemberDetails,
  onViewAllTeam
}) => {
  const { team: teamMembers, ui } = getLocalizedData(language);

  return (
    <section
      id="team-section-v1"
      className="py-20 md:py-28 bg-[#F8F6F2] text-[#213134] border-t border-[#E4D9CC]/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching PDF */}
        <div className="mb-12 md:mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#213134] tracking-tight">
            {ui.team.title}
          </h2>
          <div className="w-12 h-[2px] bg-[#C6A15B] mt-4"></div>
        </div>

        {/* 4-Column Team Grid matching PDF layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              id={`team-card-v1-${member.id}`}
              className="flex flex-col bg-transparent transition-all duration-300"
            >
              {/* Image Container with portrait ratio - ONLY Image & Overlay Button trigger Quickview popup */}
              <div
                onClick={() => onSelectMember(member)}
                className="relative aspect-[3/4] w-full overflow-hidden bg-[#213134]/10 mb-5 shadow-xs hover:shadow-md transition-shadow cursor-pointer group"
                title={`${language === 'en' ? 'Quick View' : 'Schnellansicht'}: ${member.name}`}
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Subtle overlay on hover with Quickview button */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#213134]/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectMember(member);
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-white font-medium bg-[#213134]/90 px-3 py-1.5 border border-[#C6A15B]/50 hover:bg-[#C6A15B] hover:text-[#213134] transition-colors"
                  >
                    <span>{language === 'en' ? 'Quick View' : 'Schnellansicht'}</span>
                    <ExternalLink className="w-3 h-3 text-[#C6A15B]" />
                  </button>
                </div>

                {/* Location Pill */}
                <div className="absolute top-3 right-3 bg-[#213134]/85 text-[#E4D9CC] text-[10px] uppercase tracking-wider px-2 py-0.5 font-sans pointer-events-none">
                  {member.location}
                </div>
              </div>

              {/* Name in Georgia serif - LINKED WITH DETAILS PAGE */}
              <div className="flex flex-col flex-1">
                <h3
                  onClick={() => onOpenMemberDetails(member.id)}
                  className="font-serif text-lg sm:text-xl font-normal text-[#213134] hover:text-[#8a6828] cursor-pointer transition-colors leading-snug mb-1.5"
                >
                  {member.name}
                </h3>
                
                {/* Title / Role */}
                <p className="font-sans text-xs text-[#213134]/75 line-clamp-2 leading-relaxed font-light mb-3">
                  {member.title}
                </p>

                {/* Direct link trigger - LINKED WITH DETAILS PAGE */}
                <div className="mt-auto pt-2">
                  <button
                    type="button"
                    onClick={() => onOpenMemberDetails(member.id)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-[#C6A15B] hover:text-[#213134] font-medium transition-colors cursor-pointer group"
                  >
                    <span>{ui.team.openProfile}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link matching PDF: "Gesamtes Team ansehen  →" */}
        <div className="mt-14 md:mt-18 pt-6 border-t border-[#E4D9CC]">
          <button
            id="v1-view-all-team-btn"
            onClick={onViewAllTeam}
            className="inline-flex items-center gap-2.5 text-sm font-sans font-medium text-[#213134] hover:text-[#C6A15B] tracking-wider uppercase transition-colors group"
          >
            <span className="border-b border-transparent group-hover:border-[#C6A15B] pb-0.5">
              {ui.team.viewAll}
            </span>
            <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
