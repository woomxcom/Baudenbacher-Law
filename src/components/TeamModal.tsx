import React from 'react';
import { TeamMember, Language } from '../types';
import { getLocalizedData } from '../data/translations';
import { X, Mail, Phone, MapPin, Award, BookOpen, Globe2, CheckCircle2 } from 'lucide-react';

interface TeamModalProps {
  member: TeamMember | null;
  language?: Language;
  onClose: () => void;
  onOpenContact: () => void;
}

export const TeamModal: React.FC<TeamModalProps> = ({
  member,
  language = 'de',
  onClose,
  onOpenContact
}) => {
  if (!member) return null;

  const { team: localizedTeam, ui } = getLocalizedData(language);
  const activeLocalizedMember = localizedTeam.find(m => m.id === member.id) || member;

  return (
    <div
      id="team-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-[#213134] text-white border border-[#C6A15B]/40 shadow-2xl overflow-hidden z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#E4D9CC] hover:text-white bg-[#182426]/80 hover:bg-[#2c4044] rounded-full transition-colors"
          aria-label={ui.modals.close}
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Portrait & Quick info */}
          <div className="md:col-span-5 bg-[#1a2729] p-6 sm:p-8 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-[#31464a]">
            <div className="relative aspect-[3/4] w-full max-w-[260px] overflow-hidden shadow-lg mb-6 border border-[#C6A15B]/30">
              <img
                src={activeLocalizedMember.imageUrl}
                alt={activeLocalizedMember.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top"
              />
            </div>

            <h3 className="font-serif text-xl sm:text-2xl font-normal text-white mb-1">
              {activeLocalizedMember.name}
            </h3>
            <p className="font-sans text-xs text-[#C6A15B] font-light mb-4">
              {activeLocalizedMember.title}
            </p>

            <div className="w-full pt-4 border-t border-[#31464a] space-y-2.5 text-xs text-[#E4D9CC]/90 font-sans text-left">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0" />
                <span>{ui.modals.officeTab}: {activeLocalizedMember.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0" />
                <a href={`mailto:${activeLocalizedMember.email}`} className="hover:text-white truncate">
                  {activeLocalizedMember.email}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0" />
                <a href={`tel:${activeLocalizedMember.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {activeLocalizedMember.phone}
                </a>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenContact();
              }}
              className="mt-6 w-full py-2.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors rounded-none"
            >
              {ui.modals.directContact}
            </button>
          </div>

          {/* Right Column: Bio, Specializations, Education */}
          <div className="md:col-span-7 p-6 sm:p-8 md:p-10 space-y-6">
            
            <div>
              <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-sans font-semibold block mb-2">
                {ui.modals.profileBackground}
              </span>
              <p className="font-sans text-sm text-[#E4D9CC]/90 font-light leading-relaxed">
                {activeLocalizedMember.bio}
              </p>
            </div>

            {/* Specializations */}
            <div>
              <h4 className="font-serif text-lg text-white font-medium mb-3 flex items-center gap-2">
                <Award className="w-4 h-4 text-[#C6A15B]" />
                {ui.modals.specializations}
              </h4>
              <ul className="space-y-2">
                {activeLocalizedMember.specializations.map((spec, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#E4D9CC]/85 font-sans font-light">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div>
              <h4 className="font-serif text-lg text-white font-medium mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-[#C6A15B]" />
                {ui.modals.education}
              </h4>
              <ul className="space-y-2">
                {activeLocalizedMember.education.map((edu, i) => (
                  <li key={i} className="text-xs sm:text-sm text-[#E4D9CC]/80 font-sans font-light pl-3 border-l border-[#C6A15B]/40">
                    {edu}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h4 className="font-serif text-lg text-white font-medium mb-2 flex items-center gap-2">
                <Globe2 className="w-4 h-4 text-[#C6A15B]" />
                {ui.modals.languages}
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeLocalizedMember.languages.map((lang, i) => (
                  <span key={i} className="bg-[#182426] border border-[#374e52] px-2.5 py-1 text-xs text-[#E4D9CC] font-sans">
                    {lang}
                  </span>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
