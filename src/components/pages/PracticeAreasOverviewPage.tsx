import React from 'react';
import { Language, PracticeArea } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { HeaderV1 } from '../v1/HeaderV1';
import { FooterV1 } from '../v1/FooterV1';
import { 
  ArrowRight, 
  ArrowLeft, 
  Shield, 
  Briefcase, 
  Scale, 
  Globe, 
  Landmark, 
  CheckCircle2, 
  Users, 
  BookOpen,
  Building,
  Gavel,
  Compass
} from 'lucide-react';

interface PracticeAreasOverviewPageProps {
  language: Language;
  onBackToHome: () => void;
  onSelectPractice: (practiceId: string) => void;
  onOpenContact: (officeCity?: string, practice?: string) => void;
  onNavigateToTeamMember?: (memberId: string) => void;
  onNavigateToTeamOverview?: () => void;
  onNavigateToContactPage?: () => void;
  onOpenElementorGuide: () => void;
}

export const PracticeAreasOverviewPage: React.FC<PracticeAreasOverviewPageProps> = ({
  language = 'de',
  onBackToHome,
  onSelectPractice,
  onOpenContact,
  onNavigateToTeamMember,
  onNavigateToTeamOverview,
  onNavigateToContactPage,
  onOpenElementorGuide
}) => {
  const isEn = language === 'en';
  const { practices, otherPractices } = getLocalizedData(language);

  // Helper to render practice area icon
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
    <div className="min-h-screen bg-[#F8F6F2] text-[#213134] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      {/* Header V1 */}
      <HeaderV1
        language={language}
        onOpenContact={onNavigateToContactPage || (() => onOpenContact())}
        onOpenElementorGuide={onOpenElementorGuide}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview}
        onNavigateToPracticesOverview={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onNavigateToContactPage={onNavigateToContactPage || (() => onOpenContact())}
      />

      <main className="flex-1">
        {/* Page Hero Section */}
        <section className="bg-[#213134] text-white pt-24 sm:pt-28 pb-16 md:pb-20 border-b border-[#31464a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back Navigation */}
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
                <Compass className="w-4 h-4 text-[#C6A15B]" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                  {isEn ? 'Areas of Practice · Overview' : 'Tätigkeitsgebiete · Übersicht'}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
                {isEn ? 'Our Practice Areas' : 'Unsere Fachgebiete'}
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#E4D9CC]/90 font-light leading-relaxed mb-6">
                {isEn
                  ? 'Baudenbacher Law AG provides focused legal counsel and dispute representation in high-stakes domestic and cross-border commercial affairs, international sanctions, European law, and arbitration.'
                  : 'Baudenbacher Law AG berät und vertritt Unternehmen, Führungsorgane und Privatpersonen in komplexen wirtschaftsrechtlichen Streitigkeiten, internationalen Sanktionsfragen, im Europarecht und in Schiedsverfahren.'}
              </p>

              {/* Relevant Action & Navigation Buttons in Hero */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                {onNavigateToTeamOverview && (
                  <button
                    type="button"
                    onClick={onNavigateToTeamOverview}
                    className="px-5 py-2.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] text-xs font-sans uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2 shadow-xs min-h-[42px] cursor-pointer"
                  >
                    <Users className="w-4 h-4 text-[#213134]" />
                    <span>{isEn ? 'Meet Our Legal Team' : 'Unser Team kennenlernen'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  type="button"
                  onClick={onNavigateToContactPage || (() => onOpenContact())}
                  className="px-5 py-2.5 bg-[#2a3c40] hover:bg-[#32484d] text-white border border-[#445b60] text-xs font-sans uppercase tracking-wider font-medium transition-colors inline-flex items-center gap-2 min-h-[42px] cursor-pointer"
                >
                  <Building className="w-4 h-4 text-[#C6A15B]" />
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

        {/* Section 1: Core Practice Areas in Simple Grid Layout like Homepage */}
        <section className="py-20 md:py-28 bg-[#F8F6F2] text-[#213134]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="mb-14 md:mb-18 max-w-3xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                {isEn ? 'CORE DISCIPLINES' : 'KERNBEREICHE'}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#213134] font-normal">
                {isEn ? 'Strategic Focus Areas' : 'Schwerpunkte unserer anwaltlichen Praxis'}
              </h2>
              <div className="w-12 h-[2px] bg-[#C6A15B] mt-4"></div>
            </div>

            {/* 5-Column Simple Grid Layout matching Homepage */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6 divide-y sm:divide-y-0 lg:divide-x divide-[#E4D9CC]">
              {practices.map((area, index) => (
                <div
                  key={area.id}
                  id={`practice-card-grid-${area.id}`}
                  onClick={() => onSelectPractice(area.id)}
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
                  <div className="mt-auto pt-4 flex items-center justify-between text-xs font-sans text-[#C6A15B] group-hover:text-[#213134] transition-colors">
                    <span className="font-medium">{isEn ? 'View Dossier' : 'Dossier ansehen'}</span>
                    <span className="text-lg font-light group-hover:translate-x-1.5 transition-transform duration-300">
                      →
                    </span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 2: Further Specialized Practice Areas in simple clean grid */}
        <section className="py-16 md:py-20 bg-white border-t border-[#E4D9CC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                {isEn ? 'SPECIALIZED MANDATES' : 'WEITERE SPEZIALGEBIETE'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal">
                {isEn ? 'Additional Practice Concentrations' : 'Ergänzende Beratungsfelder'}
              </h2>
              <p className="font-sans text-sm text-[#213134]/75 font-light mt-2 max-w-2xl">
                {isEn
                  ? 'In addition to our core disciplines, we frequently represent corporate leaders, investors, and family offices in specialized regulatory and reputational contexts.'
                  : 'Neben unseren Kerngebieten begleiten wir Unternehmen, Investoren und Führungskräfte in ausgewählten aufsichtsrechtlichen, wettbewerblichen und strategischen Angelegenheiten.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {otherPractices.map((other, oIdx) => (
                <div
                  key={oIdx}
                  className="p-6 bg-[#F8F6F2] border border-[#E4D9CC] flex flex-col justify-between hover:border-[#C6A15B] transition-colors"
                >
                  <div>
                    <div className="w-8 h-[2px] bg-[#C6A15B] mb-4"></div>
                    <h3 className="font-serif text-lg text-[#213134] font-normal mb-2 leading-snug">
                      {other.title}
                    </h3>
                    <p className="font-sans text-xs text-[#213134]/75 leading-relaxed font-light mb-4">
                      {other.desc}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onOpenContact('Zürich', other.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-sans text-[#8a6828] hover:text-[#213134] font-medium transition-colors"
                  >
                    <span>{isEn ? 'Inquire' : 'Anfragen'}</span>
                    <ArrowRight className="w-3 h-3 text-[#C6A15B]" />
                  </button>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 3: The Baudenbacher Advantage (Tripartite Strategy) */}
        <section className="bg-[#213134] text-white py-16 md:py-20 border-t border-[#31464a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-sans font-semibold block mb-2">
                {isEn ? 'STRATEGIC ADVANTAGE' : 'DER BAUDENBACHER-VORTEIL'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-normal">
                {isEn
                  ? 'Why International Clients Retain Baudenbacher Law'
                  : 'Warum Mandanten auf unsere Kanzlei vertrauen'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-[#283d41] border border-white/10">
                <div className="text-xs font-sans uppercase tracking-widest text-[#C6A15B] mb-2 font-semibold">
                  01 · {isEn ? 'Judicial Perspective' : 'Gerichtserfahrung aus erster Hand'}
                </div>
                <h3 className="font-serif text-lg text-white mb-2">
                  {isEn ? 'Supreme Court & Institutional Insight' : 'Einblick an den obersten Gerichten'}
                </h3>
                <p className="font-sans text-xs text-[#E4D9CC]/80 font-light leading-relaxed">
                  {isEn
                    ? 'Decades of experience presiding over supranational courts and government competition commissions grant our clients unique foresight in complex litigation.'
                    : 'Jahrzehntelange Erfahrung an der Spitze supranationaler Gerichte und Wettbewerbsbehörden ermöglichen uns, behördliche und richterliche Entscheidungen präzise zu antizipieren.'}
                </p>
              </div>

              <div className="p-6 bg-[#283d41] border border-white/10">
                <div className="text-xs font-sans uppercase tracking-widest text-[#C6A15B] mb-2 font-semibold">
                  02 · {isEn ? 'Tripartite Network' : 'Zürich · Brüssel · Oslo Triangel'}
                </div>
                <h3 className="font-serif text-lg text-white mb-2">
                  {isEn ? 'Direct European Presence' : 'Direkte europäische Schaltstellen'}
                </h3>
                <p className="font-sans text-xs text-[#E4D9CC]/80 font-light leading-relaxed">
                  {isEn
                    ? 'With permanent presence in Switzerland, the heart of the European Union, and the EEA, we operate without jurisdictional friction.'
                    : 'Mit festen Standorten in der Schweiz, am Sitz der europäischen Institutionen in Brüssel und im EWR-Raum agieren wir grenzüberschreitend ohne Reibungsverluste.'}
                </p>
              </div>

              <div className="p-6 bg-[#283d41] border border-white/10">
                <div className="text-xs font-sans uppercase tracking-widest text-[#C6A15B] mb-2 font-semibold">
                  03 · {isEn ? 'Discreet Senior Counsel' : 'Persönliche Begleitung'}
                </div>
                <h3 className="font-serif text-lg text-white mb-2">
                  {isEn ? 'Partner-Led Strategic Advisory' : 'Partner-geführte Mandatsführung'}
                </h3>
                <p className="font-sans text-xs text-[#E4D9CC]/80 font-light leading-relaxed">
                  {isEn
                    ? 'No delegation to anonymous teams. Every client receives hands-on strategic direction directly from our senior partners and counsel.'
                    : 'Keine unübersichtlichen Grosskanzlei-Strukturen. Jedes Mandat wird unmittelbar von erfahrenen Partnern persönlich und mit voller Aufmerksamkeit geführt.'}
                </p>
              </div>
            </div>

            {/* Bottom Callout */}
            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs sm:text-sm text-[#E4D9CC]/80 font-light">
                {isEn
                  ? 'Do you have an inquiry regarding a specific jurisdiction or regulatory inquiry?'
                  : 'Haben Sie ein konkretes rechtliches Anliegen in einem unserer Fachgebiete?'}
              </span>
              <button
                type="button"
                onClick={() => onOpenContact()}
                className="px-6 py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] text-xs font-sans uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2 shadow-xs min-h-[44px]"
              >
                <span>{isEn ? 'Contact Practice Leads' : 'Spezialisten kontaktieren'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </section>

      </main>

      {/* Footer V1 */}
      <FooterV1 language={language} onOpenContact={() => onOpenContact()} />
    </div>
  );
};
