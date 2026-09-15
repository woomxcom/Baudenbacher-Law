import React from 'react';
import { Language, TeamMember } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { HeaderV1 } from '../v1/HeaderV1';
import { FooterV1 } from '../v1/FooterV1';
import { 
  ArrowRight, 
  ArrowLeft, 
  ShieldCheck, 
  Quote, 
  ExternalLink,
  Briefcase,
  Building2
} from 'lucide-react';

interface TeamOverviewPageProps {
  language: Language;
  onBackToHome: () => void;
  onOpenMemberDetails: (memberId: string) => void;
  onSelectMember?: (member: TeamMember) => void;
  onOpenContact: (officeCity?: string) => void;
  onNavigateToPracticesOverview?: () => void;
  onNavigateToContactPage?: () => void;
  onOpenElementorGuide: () => void;
}

export const TeamOverviewPage: React.FC<TeamOverviewPageProps> = ({
  language = 'de',
  onBackToHome,
  onOpenMemberDetails,
  onSelectMember,
  onOpenContact,
  onNavigateToPracticesOverview,
  onNavigateToContactPage,
  onOpenElementorGuide
}) => {
  const isEn = language === 'en';
  const { team: allMembers, ui } = getLocalizedData(language);

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#213134] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      {/* Header V1 */}
      <HeaderV1
        language={language}
        onOpenContact={onNavigateToContactPage || (() => onOpenContact())}
        onOpenElementorGuide={onOpenElementorGuide}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview}
        onNavigateToContactPage={onNavigateToContactPage || (() => onOpenContact())}
      />

      <main className="flex-1">
        {/* Page Hero Section */}
        <section className="bg-[#213134] text-white pt-24 sm:pt-28 pb-16 md:pb-20 border-b border-[#31464a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Button */}
            <div className="mb-6">
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-[#C6A15B] hover:text-white transition-colors cursor-pointer group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>{isEn ? 'Back to Home' : 'Zurück zur Startseite'}</span>
              </button>
            </div>

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="w-4 h-4 text-[#C6A15B]" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                  {isEn ? 'Baudenbacher Law AG · Team' : 'Baudenbacher Law AG · Kanzleiteam'}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
                {isEn ? 'Our Entire Team' : 'Unser gesamtes Team'}
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#E4D9CC]/90 font-light leading-relaxed mb-8">
                {isEn
                  ? 'A dedicated team of senior litigators, former court presidents, associates, and promising legal substitutes. We combine rigorous academic foundation with decisive courtroom and regulatory strategy across Zurich, Brussels, and Oslo.'
                  : 'Ein eingespieltes Team aus erfahrenen Parteivertretern, ehemaligen Gerichtspräsidenten, Rechtsanwälten und engagierten Substitutinnen und Substituten. Wir verbinden wissenschaftliche Präzision mit entschlossener Praxisstärke an unseren Standorten in Zürich, Brüssel und Oslo.'}
              </p>

              {/* Related Page Link Buttons in Hero Section */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                {onNavigateToPracticesOverview && (
                  <button
                    type="button"
                    onClick={onNavigateToPracticesOverview}
                    className="px-5 py-2.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] text-xs font-sans uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2 shadow-xs min-h-[42px] cursor-pointer"
                  >
                    <Briefcase className="w-4 h-4 text-[#213134]" />
                    <span>{isEn ? 'Explore Practice Areas' : 'Fachgebiete ansehen'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={onNavigateToContactPage || (() => onOpenContact())}
                  className="px-5 py-2.5 bg-[#2a3c40] hover:bg-[#32484d] text-white border border-[#445b60] text-xs font-sans uppercase tracking-wider font-medium transition-colors inline-flex items-center gap-2 min-h-[42px] cursor-pointer"
                >
                  <Building2 className="w-4 h-4 text-[#C6A15B]" />
                  <span>{isEn ? 'Contact & Offices' : 'Standorte & Kontakt'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                </button>

                <button
                  type="button"
                  onClick={onBackToHome}
                  className="px-4 py-2.5 bg-transparent hover:bg-white/5 text-[#E4D9CC] border border-white/20 text-xs font-sans uppercase tracking-wider transition-colors inline-flex items-center gap-2 min-h-[42px] cursor-pointer"
                >
                  <span>{isEn ? 'Home' : 'Startseite'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Team Grid Section - Unchanged Card Style matching Homepage */}
        <section className="py-20 md:py-28 bg-[#F8F6F2] text-[#213134]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section intro header */}
            <div className="mb-12 md:mb-16">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#8a6828] font-semibold block mb-2">
                {isEn ? 'ATTORNEYS & JURISTS' : 'ANWÄLTINNEN & ANWÄLTE'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#213134] tracking-tight">
                {isEn ? 'The Members of Our Firm' : 'Die Persönlichkeiten unserer Kanzlei'}
              </h2>
              <div className="w-12 h-[2px] bg-[#C6A15B] mt-4"></div>
            </div>

            {/* Grid of Team Cards matching Homepage layout & styling */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
              {allMembers.map((member) => (
                <div
                  key={member.id}
                  id={`team-card-v1-${member.id}`}
                  className="flex flex-col bg-transparent transition-all duration-300"
                >
                  {/* Image Container with portrait ratio */}
                  <div
                    onClick={() => {
                      if (onSelectMember) onSelectMember(member);
                      else onOpenMemberDetails(member.id);
                    }}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-[#213134]/80 via-transparent to-transparent opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (onSelectMember) onSelectMember(member);
                          else onOpenMemberDetails(member.id);
                        }}
                        className="inline-flex items-center gap-1.5 text-xs font-sans text-white font-medium bg-[#213134]/90 px-3 py-1.5 border border-[#C6A15B]/50 hover:bg-[#C6A15B] hover:text-[#213134] transition-colors min-h-[36px]"
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

          </div>
        </section>

        {/* Closing Quote & Design Element */}
        <section className="bg-[#213134] text-white py-16 md:py-20 border-t border-b border-[#31464a] relative overflow-hidden">
          {/* Subtle background accent mark */}
          <div className="absolute -right-10 -bottom-10 text-white/[0.03] select-none pointer-events-none font-serif text-[280px] leading-none">
            §
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/40 mb-6">
                <Quote className="w-6 h-6 text-[#C6A15B]" />
              </div>

              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl font-light text-[#E4D9CC] leading-relaxed max-w-4xl mx-auto mb-6 italic">
                {isEn
                  ? '“We measure the excellence of our firm not merely by procedural outcomes, but by the intellectual depth of our counsel, the absolute discretion of our advocacy, and the enduring clarity we bring to sensitive cross-border affairs.”'
                  : '«Wir messen die Qualität unserer Kanzlei nicht allein am Verfahrensausgang, sondern an der geistigen Tiefe unserer Beratung, der absoluten Diskretion unserer Begleitung und der nachhaltigen Klarheit, die wir in sensiblen Angelegenheiten schaffen.»'}
              </blockquote>

              <div className="flex flex-col items-center justify-center">
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#C6A15B] font-semibold">
                  Baudenbacher Law AG
                </span>
                <span className="font-sans text-xs text-[#E4D9CC]/70 mt-1">
                  Zürich · Brüssel · Oslo
                </span>
              </div>

              {/* Consultation Callout */}
              <div className="mt-10 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <span className="text-xs sm:text-sm text-[#E4D9CC]/80 font-light">
                  {isEn
                    ? 'Would you like to discuss a mandate or arrange a confidential exchange?'
                    : 'Möchten Sie ein Anliegen besprechen oder ein vertrauliches Gespräch vereinbaren?'}
                </span>
                <button
                  type="button"
                  onClick={onNavigateToContactPage || (() => onOpenContact())}
                  className="px-5 py-2.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] text-xs font-sans uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2 shadow-xs min-h-[40px] cursor-pointer"
                >
                  <span>{isEn ? 'Contact Our Team' : 'Kontakt aufnehmen'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer V1 */}
      <FooterV1
        language={language}
        onOpenContact={onNavigateToContactPage || (() => onOpenContact())}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview}
        onNavigateToContactPage={onNavigateToContactPage || (() => onOpenContact())}
      />
    </div>
  );
};
