import React, { useState } from 'react';
import { TeamMember, Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import {
  ArrowRight,
  Mail,
  Phone,
  ExternalLink,
  Award,
  Sparkles,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Globe,
  ChevronRight,
  Layers,
  UserCheck
} from 'lucide-react';

interface TeamSectionV2Props {
  language?: Language;
  onSelectMember: (member: TeamMember) => void;
  onViewAllTeam: () => void;
}

export const TeamSectionV2: React.FC<TeamSectionV2Props> = ({
  language = 'de',
  onSelectMember,
  onViewAllTeam
}) => {
  const { team: teamMembers, ui } = getLocalizedData(language);
  const [activeMemberId, setActiveMemberId] = useState<string>(teamMembers[0].id);
  const [viewMode, setViewMode] = useState<'spotlight' | 'grid'>('spotlight');

  const activeMember = teamMembers.find(m => m.id === activeMemberId) || teamMembers[0];

  return (
    <section
      id="team-section-v2"
      className="py-24 md:py-32 bg-[#FAF8F5] text-[#213134] border-t border-[#E4D9CC] relative overflow-hidden"
    >
      {/* Subtle architectural background watermark */}
      <div className="absolute right-0 top-1/4 -bottom-10 w-96 opacity-5 pointer-events-none select-none">
        <span className="font-serif text-[300px] leading-none text-[#213134]">B</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#8a6828] font-semibold">
                {ui.team.eyebrow}
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#213134] tracking-tight">
              {ui.team.title}
            </h2>
            <p className="font-sans text-xs sm:text-sm text-[#213134]/75 max-w-xl mt-3 font-light leading-relaxed">
              {ui.team.subtitle}
            </p>
          </div>

          {/* Creative View Mode Switcher (Spotlight Dossier vs 4-Card Editorial Grid) */}
          <div className="flex items-center gap-2 bg-[#EFEAE4] p-1 rounded-xl border border-[#E4D9CC] self-start md:self-auto shadow-xs">
            <button
              onClick={() => setViewMode('spotlight')}
              className={`px-3.5 py-1.5 text-xs font-sans rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === 'spotlight'
                  ? 'bg-[#213134] text-white shadow-xs font-medium'
                  : 'text-[#213134]/70 hover:text-[#213134]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C6A15B]" />
              <span>{ui.team.spotlightMode}</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`px-3.5 py-1.5 text-xs font-sans rounded-lg transition-all flex items-center gap-1.5 ${
                viewMode === 'grid'
                  ? 'bg-[#213134] text-white shadow-xs font-medium'
                  : 'text-[#213134]/70 hover:text-[#213134]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{ui.team.gridMode}</span>
            </button>
          </div>
        </div>

        {/* --- VIEW MODE 1: Interactive Spotlight Leadership Dossier --- */}
        {viewMode === 'spotlight' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Featured Member Spotlight Stage */}
            <div className="bg-white border border-[#E4D9CC] rounded-2xl shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Portrait & Direct Connect */}
              <div className="lg:col-span-5 bg-[#213134] text-white p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
                
                {/* Top Badge: Location & Role */}
                <div className="flex items-center justify-between gap-3 mb-6 relative z-10">
                  <span className="text-[10px] font-sans uppercase tracking-[0.2em] px-3 py-1 bg-[#182426] text-[#C6A15B] border border-[#C6A15B]/30 rounded-full font-semibold">
                    {activeMember.location}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-[#E4D9CC]/75">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>{activeMember.category === 'partner' ? 'Partner' : activeMember.category === 'counsel' ? 'Counsel' : 'Associate'}</span>
                  </div>
                </div>

                {/* Portrait Frame */}
                <div
                  onClick={() => onSelectMember(activeMember)}
                  className="relative aspect-[4/4.5] w-full max-w-xs mx-auto rounded-xl overflow-hidden border-2 border-[#C6A15B]/40 shadow-2xl cursor-pointer group mb-6"
                >
                  <img
                    src={activeMember.imageUrl}
                    alt={activeMember.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#213134]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <span className="inline-flex items-center gap-2 text-xs text-white font-sans bg-[#213134]/80 px-3 py-1.5 rounded-full border border-[#C6A15B]/40">
                      <span>{ui.team.fullProfile}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </span>
                  </div>
                </div>

                {/* Direct Contact Bar */}
                <div className="pt-4 border-t border-[#31464a] flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2">
                    <a
                      href={`mailto:${activeMember.email}`}
                      className="p-2.5 bg-[#182426] hover:bg-[#C6A15B] hover:text-[#213134] text-[#E4D9CC] rounded-lg transition-colors border border-[#395055]"
                      title={`${ui.team.email}: ${activeMember.email}`}
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${activeMember.phone.replace(/\s+/g, '')}`}
                      className="p-2.5 bg-[#182426] hover:bg-[#C6A15B] hover:text-[#213134] text-[#E4D9CC] rounded-lg transition-colors border border-[#395055]"
                      title={`${ui.team.phone}: ${activeMember.phone}`}
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>

                  <button
                    onClick={() => onSelectMember(activeMember)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-[#C6A15B] hover:text-white font-medium transition-colors"
                  >
                    <span>{ui.team.viewProfile}</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

              {/* Right Column: Executive Dossier & Credentials */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between bg-white">
                
                <div>
                  {/* Eyebrow / Appointment Highlight */}
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F4F0EA] text-[#8a6828] text-[11px] font-sans font-semibold rounded-md mb-3 border border-[#E4D9CC]">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span className="truncate">
                      {activeMember.id === 'laura-baudenbacher'
                        ? ui.team.accolades.laura
                        : activeMember.id === 'carl-baudenbacher'
                        ? ui.team.accolades.carl
                        : activeMember.id === 'mads-andenas'
                        ? ui.team.accolades.mads
                        : ui.team.accolades.mohamed}
                    </span>
                  </div>

                  {/* Name & Title */}
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#213134] tracking-tight mb-2">
                    {activeMember.name}
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-[#8a6828] font-medium mb-5">
                    {activeMember.title}
                  </p>

                  {/* Executive Bio */}
                  <p className="font-sans text-xs sm:text-sm text-[#213134]/85 font-light leading-relaxed mb-6">
                    {activeMember.bio}
                  </p>

                  {/* Focus Areas */}
                  <div className="mb-6 p-4 rounded-xl bg-[#FAF8F5] border border-[#E4D9CC]">
                    <h4 className="text-xs font-sans uppercase tracking-wider text-[#213134] font-semibold mb-3 flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>{ui.team.specializations}</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {activeMember.specializations.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-white rounded-lg text-xs font-sans text-[#213134] border border-[#E4D9CC] shadow-2xs font-light"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Education & Admissions Preview */}
                  <div className="mb-6">
                    <h4 className="text-xs font-sans uppercase tracking-wider text-[#213134] font-semibold mb-2 flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#C6A15B]" />
                      <span>{ui.team.education}</span>
                    </h4>
                    <ul className="space-y-1.5 text-xs font-sans text-[#213134]/80 font-light">
                      {activeMember.education.map((edu, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] mt-1.5 flex-shrink-0"></span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Working Languages */}
                  <div className="flex items-center gap-2 text-xs font-sans text-[#213134]/70 mb-6">
                    <Globe className="w-3.5 h-3.5 text-[#C6A15B] flex-shrink-0" />
                    <span className="font-medium text-[#213134]">{ui.team.languages}:</span>
                    <span>{activeMember.languages.join(' · ')}</span>
                  </div>
                </div>

                {/* Primary Action Button */}
                <div className="pt-6 border-t border-[#EFEAE4] flex items-center justify-between">
                  <span className="text-xs font-sans text-[#213134]/60 font-light hidden sm:inline">
                    Baudenbacher Law AG · {activeMember.location}
                  </span>
                  <button
                    onClick={() => onSelectMember(activeMember)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase rounded-lg shadow-md transition-all ml-auto"
                  >
                    <span>{ui.team.fullProfile}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>

            </div>

            {/* Interactive 4-Member Masterclass Selector Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {teamMembers.map((member) => {
                const isActive = member.id === activeMemberId;
                return (
                  <div
                    key={member.id}
                    onClick={() => setActiveMemberId(member.id)}
                    className={`cursor-pointer p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border ${
                      isActive
                        ? 'bg-[#213134] text-white border-[#C6A15B] shadow-lg scale-[1.02]'
                        : 'bg-white text-[#213134] border-[#E4D9CC] hover:border-[#C6A15B]/60 hover:bg-[#FDFBF7] shadow-xs'
                    }`}
                  >
                    {/* Thumbnail with Active Ring */}
                    <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-[#C6A15B]/50">
                      <img
                        src={member.imageUrl}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Member Quick Bio */}
                    <div className="flex-1 min-w-0">
                      <h4 className={`font-serif text-sm font-medium truncate ${isActive ? 'text-white' : 'text-[#213134]'}`}>
                        {member.name}
                      </h4>
                      <p className={`font-sans text-xs truncate mt-0.5 ${isActive ? 'text-[#C6A15B]' : 'text-[#8a6828]'}`}>
                        {member.location}
                      </p>
                      <span className={`text-[10px] uppercase font-sans tracking-wider block mt-1 ${isActive ? 'text-[#E4D9CC]/70' : 'text-[#213134]/60'}`}>
                        {member.category === 'partner' ? 'Partner' : member.category === 'counsel' ? 'Of Counsel' : 'Associate'}
                      </span>
                    </div>

                    {/* Indicator Icon */}
                    <ChevronRight className={`w-4 h-4 flex-shrink-0 transition-transform ${isActive ? 'text-[#C6A15B] translate-x-1' : 'text-[#213134]/40'}`} />
                  </div>
                );
              })}
            </div>

          </div>
        )}

        {/* --- VIEW MODE 2: 4-Column Modern Editorial Team Gallery --- */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 animate-fadeIn">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                id={`v2-team-card-${member.id}`}
                className="group bg-white border border-[#E4D9CC]/80 hover:border-[#C6A15B] rounded-xl overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Portrait Container */}
                  <div
                    className="relative aspect-[3/4] w-full overflow-hidden bg-[#213134]/10 cursor-pointer"
                    onClick={() => onSelectMember(member)}
                  >
                    <img
                      src={member.imageUrl}
                      alt={member.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    
                    {/* Subtle Gradient & Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#213134]/85 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                      <span className="text-xs text-white font-sans font-medium flex items-center gap-1.5">
                        <span>{ui.team.fullProfile}</span>
                        <ExternalLink className="w-3.5 h-3.5 text-[#C6A15B]" />
                      </span>
                    </div>

                    {/* Location Tag */}
                    <div className="absolute top-3 right-3 bg-[#213134]/90 backdrop-blur-xs text-[#E4D9CC] text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md border border-[#C6A15B]/40 font-sans shadow-sm">
                      {member.location}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3
                      onClick={() => onSelectMember(member)}
                      className="font-serif text-lg sm:text-xl font-normal text-[#213134] group-hover:text-[#8a6828] transition-colors leading-snug cursor-pointer mb-1.5"
                    >
                      {member.name}
                    </h3>
                    
                    <p className="font-sans text-xs text-[#213134]/80 leading-relaxed font-light mb-3 min-h-[36px]">
                      {member.title}
                    </p>

                    {/* Specialization Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {member.specializations.slice(0, 2).map((spec, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-sans px-2 py-0.5 rounded bg-[#F4F0EA] text-[#213134]/80 border border-[#E4D9CC]/60"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="p-5 pt-0 border-t border-[#F0EBE3] flex items-center justify-between mt-auto">
                  <button
                    onClick={() => onSelectMember(member)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-[#8a6828] group-hover:text-[#213134] font-semibold transition-colors"
                  >
                    <span>{ui.team.openProfile}</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>

                  <div className="flex items-center gap-1">
                    <a
                      href={`mailto:${member.email}`}
                      className="p-1.5 text-[#213134]/60 hover:text-[#C6A15B] hover:bg-[#F4F0EA] rounded transition-colors"
                      title={`${ui.team.email}: ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`tel:${member.phone.replace(/\s+/g, '')}`}
                      className="p-1.5 text-[#213134]/60 hover:text-[#C6A15B] hover:bg-[#F4F0EA] rounded transition-colors"
                      title={`${ui.team.phone}: ${member.phone}`}
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Highlight Banner on Bottom */}
        <div className="mt-14 p-6 sm:p-8 bg-gradient-to-r from-[#213134] to-[#182527] rounded-2xl text-white border border-[#C6A15B]/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#C6A15B]/20 border border-[#C6A15B]/50 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-[#C6A15B]" />
            </div>
            <div>
              <h4 className="font-serif text-lg sm:text-xl text-white font-medium">
                {ui.team.bannerTitle}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light mt-0.5">
                {ui.team.bannerDesc}
              </p>
            </div>
          </div>

          <button
            onClick={onViewAllTeam}
            className="flex-shrink-0 px-6 py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase rounded-lg shadow-md transition-colors"
          >
            {ui.team.bannerCta}
          </button>
        </div>

      </div>
    </section>
  );
};
