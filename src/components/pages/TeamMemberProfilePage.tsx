import React, { useState } from 'react';
import { Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { HeaderV1 } from '../v1/HeaderV1';
import { FooterV1 } from '../v1/FooterV1';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ChevronDown, 
  ChevronUp, 
  ArrowRight, 
  ArrowLeft, 
  Award, 
  GraduationCap, 
  Briefcase, 
  BookOpen, 
  Mic2, 
  Globe2, 
  CheckCircle2, 
  Share2, 
  Printer, 
  ShieldCheck, 
  Building2,
  ExternalLink
} from 'lucide-react';

interface TeamMemberProfilePageProps {
  language: Language;
  selectedMemberId?: string;
  onBackToHome: () => void;
  onBackToOverview?: () => void;
  onOpenContact: (officeCity?: string) => void;
  onNavigateToPractice: (practiceId: string) => void;
  onSelectOtherMember?: (memberId: string) => void;
  onNavigateToTeamOverview?: () => void;
  onNavigateToPracticesOverview?: () => void;
  onNavigateToContactPage?: () => void;
  onOpenElementorGuide: () => void;
}

export const TeamMemberProfilePage: React.FC<TeamMemberProfilePageProps> = ({
  language = 'de',
  selectedMemberId = 'laura-baudenbacher',
  onBackToHome,
  onBackToOverview,
  onOpenContact,
  onNavigateToPractice,
  onSelectOtherMember,
  onNavigateToTeamOverview,
  onNavigateToPracticesOverview,
  onNavigateToContactPage,
  onOpenElementorGuide
}) => {
  const { team, ui } = getLocalizedData(language);
  const isEn = language === 'en';

  // Selected team member or fallback to Dr. Laura Melusine Baudenbacher as reference template
  const member = team.find(m => m.id === selectedMemberId) || team.find(m => m.id === 'laura-baudenbacher') || team[0];

  // Accordion state - allows multiple open or all expanded/collapsed
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    education: true,
    appointments: true,
    publications: false,
    speeches: false,
    memberships: false,
    languages: true
  });

  const [copiedLink, setCopiedLink] = useState(false);

  const toggleSection = (key: string) => {
    setOpenSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const expandAll = () => {
    setOpenSections({
      education: true,
      appointments: true,
      publications: true,
      speeches: true,
      memberships: true,
      languages: true
    });
  };

  const collapseAll = () => {
    setOpenSections({
      education: false,
      appointments: false,
      publications: false,
      speeches: false,
      memberships: false,
      languages: false
    });
  };

  // vCard generator
  const downloadVCard = () => {
    const vCardData = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N:Baudenbacher;Laura Melusine;Dr.;;',
      'FN:Dr. Laura Melusine Baudenbacher',
      'ORG:Baudenbacher Law AG',
      'TITLE:Partnerin / Rechtsanwältin',
      'TEL;TYPE=WORK,VOICE:+41 44 260 88 00',
      'EMAIL;TYPE=PREF,INTERNET:laura.baudenbacher@baudenbacher.law',
      'URL:https://baudenbacher.law/members/dr-laura-melusine-baudenbacher/',
      'ADR;TYPE=WORK:;;Hottingerstrasse 14;Zürich;;8032;Schweiz',
      'END:VCARD'
    ].join('\r\n');

    const blob = new Blob([vCardData], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'Dr_Laura_Melusine_Baudenbacher.vcf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#213134] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      
      {/* Header V1 */}
      <HeaderV1
        language={language}
        onOpenContact={onNavigateToContactPage || (() => onOpenContact())}
        onOpenElementorGuide={onOpenElementorGuide}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview || onBackToOverview}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview}
        onNavigateToContactPage={onNavigateToContactPage || (() => onOpenContact())}
      />

      {/* Main Profile Page Body */}
      <main className="flex-1 pb-20">

        {/* Profile Hero Header / Identity Banner */}
        <section className="bg-[#213134] text-white border-b border-[#31464a] pt-24 sm:pt-28 pb-12 md:pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Direct Back to Home / Team navigation */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              {(onBackToOverview || onNavigateToTeamOverview) && (
                <button
                  type="button"
                  onClick={onBackToOverview || onNavigateToTeamOverview}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#283d41] hover:bg-[#344d52] border border-[#445b60] text-xs font-sans tracking-wider uppercase text-[#C6A15B] hover:text-white transition-colors cursor-pointer group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>{isEn ? 'Entire Team Overview' : 'Gesamtes Team'}</span>
                </button>
              )}

              {onNavigateToPracticesOverview && (
                <button
                  type="button"
                  onClick={onNavigateToPracticesOverview}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#283d41] hover:bg-[#344d52] border border-[#445b60] text-xs font-sans tracking-wider uppercase text-[#E4D9CC] hover:text-white transition-colors cursor-pointer"
                >
                  <Briefcase className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>{isEn ? 'Practice Areas' : 'Fachgebiete'}</span>
                </button>
              )}

              {onNavigateToContactPage && (
                <button
                  type="button"
                  onClick={onNavigateToContactPage}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#283d41] hover:bg-[#344d52] border border-[#445b60] text-xs font-sans tracking-wider uppercase text-[#E4D9CC] hover:text-white transition-colors cursor-pointer"
                >
                  <Building2 className="w-3.5 h-3.5 text-[#C6A15B]" />
                  <span>{isEn ? 'Contact' : 'Kontakt'}</span>
                </button>
              )}

              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-transparent hover:bg-white/5 border border-white/15 text-xs font-sans tracking-wider uppercase text-[#E4D9CC]/75 hover:text-white transition-colors cursor-pointer"
              >
                <span>{isEn ? 'Home' : 'Startseite'}</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Left Side: Photo with Gold Border Accent */}
              <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative aspect-[3/4] w-full max-w-[300px] sm:max-w-[320px] bg-[#182426] border-2 border-[#C6A15B]/50 shadow-2xl overflow-hidden group">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#213134]/80 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 bg-[#213134]/90 px-3 py-1 text-[11px] font-sans text-[#C6A15B] border border-[#C6A15B]/30 font-medium">
                    {member.location}
                  </div>
                </div>
              </div>

              {/* Right Side: Identity, Titles, & Action Buttons */}
              <div className="lg:col-span-8 flex flex-col">
                
                {/* Office & Category Tag */}
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                    {member.category === 'partner'
                      ? (isEn ? 'Attorney-at-Law · Partner' : 'Rechtsanwalt / Rechtsanwältin · Partner')
                      : member.category === 'counsel'
                      ? (isEn ? 'Of Counsel' : 'Of Counsel')
                      : (isEn ? 'Associate' : 'Associate')}
                  </span>
                  <span className="text-[#31464a]">•</span>
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#E4D9CC]/90 font-sans">
                    <MapPin className="w-3.5 h-3.5 text-[#C6A15B]" />
                    <span>{member.location}</span>
                  </div>
                </div>

                {/* Name */}
                <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-2 leading-tight">
                  {member.name}
                </h1>

                {/* Primary Position / Distinction */}
                <p className="font-serif text-lg sm:text-xl text-[#C6A15B] font-light mb-4">
                  {member.id === 'laura-baudenbacher'
                    ? (isEn 
                      ? 'Dr. iur., LL.M. (Harvard) · Former President of the Swiss Competition Commission (COMCO)'
                      : 'Dr. iur., LL.M. (Harvard) · Präsidentin der Schweizer Wettbewerbskommission (WEKO) a.D.')
                    : member.title}
                </p>

                {/* Quick Bio Lead */}
                <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 font-light leading-relaxed max-w-2xl mb-8">
                  {member.bio}
                </p>

                {/* Action Bar (White & Case style: Contact, vCard, Print, Share) */}
                <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-4 border-t border-[#31464a]">
                  
                  {/* Primary Mandate Button */}
                  <button
                    onClick={() => onOpenContact('Zürich')}
                    className="w-full sm:w-auto justify-center px-5 py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2 shadow-sm min-h-[44px]"
                  >
                    <span>{isEn ? 'Request Consultation' : 'Mandat anfragen'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Direct Email */}
                  <a
                    href={`mailto:${member.email}`}
                    className="w-full sm:w-auto justify-center px-4 py-3 bg-[#182426] hover:bg-[#283c40] text-white border border-[#395055] font-sans text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2 min-h-[44px]"
                  >
                    <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </a>

                  {/* Direct Phone */}
                  <a
                    href={`tel:${member.phone.replace(/\s+/g, '')}`}
                    className="w-full sm:w-auto justify-center px-4 py-3 bg-[#182426] hover:bg-[#283c40] text-white border border-[#395055] font-sans text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2 min-h-[44px]"
                  >
                    <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                    <span>{member.phone}</span>
                  </a>

                  {/* Utility icon buttons */}
                  <div className="flex items-center gap-2 w-full sm:w-auto justify-end sm:justify-start pt-1 sm:pt-0">
                    {/* vCard Download */}
                    <button
                      onClick={downloadVCard}
                      className="p-3 bg-[#182426] hover:bg-[#283c40] text-[#E4D9CC] hover:text-white border border-[#395055] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      title={isEn ? 'Download vCard' : 'Visitenkarte herunterladen (vCard)'}
                      aria-label="Download vCard"
                    >
                      <Download className="w-4 h-4 text-[#C6A15B]" />
                    </button>

                    {/* Print */}
                    <button
                      onClick={handlePrint}
                      className="p-3 bg-[#182426] hover:bg-[#283c40] text-[#E4D9CC] hover:text-white border border-[#395055] transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                      title={isEn ? 'Print profile' : 'Profil drucken'}
                      aria-label="Print profile"
                    >
                      <Printer className="w-4 h-4 text-[#C6A15B]" />
                    </button>

                    {/* Share / Copy link */}
                    <button
                      onClick={handleShare}
                      className="p-3 bg-[#182426] hover:bg-[#283c40] text-[#E4D9CC] hover:text-white border border-[#395055] transition-colors relative min-h-[44px] min-w-[44px] flex items-center justify-center"
                      title={isEn ? 'Copy profile link' : 'Link kopieren'}
                      aria-label="Copy profile link"
                    >
                      <Share2 className="w-4 h-4 text-[#C6A15B]" />
                      {copiedLink && (
                        <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-[#C6A15B] text-[#213134] text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap shadow">
                          {isEn ? 'Link copied!' : 'Kopiert!'}
                        </span>
                      )}
                    </button>
                  </div>

                </div>

              </div>

            </div>
          </div>
        </section>

        {/* Two-Column Content Grid: Left Narrative & Right Dropdown Accordions */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* ======================================================== */}
            {/* LEFT COLUMN: Narrative, Overview, Key Focus, Practice Links */}
            {/* ======================================================== */}
            <div className="lg:col-span-7 space-y-12">
              
              {/* Detailed Biographical Narrative */}
              <section className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? 'Professional Profile' : 'Profil & Werdegang'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-6 pb-4 border-b border-[#E4D9CC]">
                  {isEn ? 'About Dr. Laura Melusine Baudenbacher' : 'Über Dr. Laura Melusine Baudenbacher'}
                </h2>

                <div className="space-y-4 font-sans text-sm text-[#213134]/85 font-light leading-relaxed">
                  <p>
                    {isEn
                      ? 'Dr. Laura Melusine Baudenbacher advises and represents domestic and multinational companies, financial institutions, and public authorities in high-stakes antitrust, competition, and regulatory matters, as well as complex commercial disputes and international arbitration.'
                      : 'Dr. Laura Melusine Baudenbacher berät und vertritt nationale und internationale Unternehmen, Finanzinstitute und Behörden in anspruchsvollen kartell-, wettbewerbs- und wirtschaftsrechtlichen Fragestellungen sowie in komplexen regulatorischen Verfahren und Schiedsstreitigkeiten.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Her exceptional forensic and institutional background includes serving as President of the Swiss Competition Commission (WEKO). In this capacity, she oversaw landmark antitrust investigations, merger control reviews, and market regulatory policies in Switzerland and across European interfaces.'
                      : 'Zu ihren prägenden institutionellen Stationen zählt ihr Amt als Präsidentin der Schweizer Wettbewerbskommission (WEKO). In dieser Funktion prägte sie wegweisende kartellrechtliche Untersuchungen, Fusionskontrollverfahren und marktregulatorische Leitentscheide an der Schnittstelle von Schweizer und europäischem Wirtschaftsrecht.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Prior to founding Baudenbacher Law with Prof. Dr. Carl Baudenbacher, she practiced with premier commercial law firms in Zurich, Brussels, and New York. She is admitted to practice both in Switzerland and in New York, and holds degrees from the University of Bern and Harvard Law School.'
                      : 'Vor der Gründung von Baudenbacher Law mit Prof. Dr. Carl Baudenbacher war sie in führenden Wirtschaftskanzleien in Zürich, Brüssel und New York tätig. Sie ist sowohl in der Schweiz als auch im US-Bundesstaat New York als Rechtsanwältin zugelassen und absolvierte ihre juristische Ausbildung an der Universität Bern und der Harvard Law School.'}
                  </p>
                </div>

                {/* Quote / Guiding Philosophy */}
                <div className="mt-8 p-6 bg-[#F8F6F2] border-l-4 border-[#C6A15B] italic font-serif text-base sm:text-lg text-[#213134]/90">
                  {isEn
                    ? '“Precision in procedural law, strategic clarity in competition economics, and unwavering determination before courts and regulatory authorities.”'
                    : '«Präzision im Verfahrensrecht, strategische Weitsicht im Kartellrecht und Durchsetzungsstärke vor Aufsichtsbehörden und Gerichten.»'}
                  <span className="block not-italic font-sans text-xs uppercase tracking-wider text-[#8a6828] font-semibold mt-3">
                    — Dr. Laura Melusine Baudenbacher
                  </span>
                </div>
              </section>

              {/* Core Practice Areas & Specializations */}
              <section className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? 'Areas of Focus' : 'Tätigkeitsschwerpunkte'}
                </span>
                <h3 className="font-serif text-2xl text-[#213134] font-normal mb-6 pb-4 border-b border-[#E4D9CC]">
                  {isEn ? 'Key Practices & Industry Sectors' : 'Fachgebiete & Industrieschwerpunkte'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    {
                      title: isEn ? 'Antitrust & Competition Law' : 'Kartell- & Wettbewerbsrecht',
                      desc: isEn ? 'Investigations, cartel defense, abuse of dominance, merger control.' : 'Untersuchungen, Kartellverteidigung, Missbrauchsverfahren, Fusionskontrolle.',
                      practiceId: 'sanktionsrecht'
                    },
                    {
                      title: isEn ? 'Swiss & EU Commercial Law' : 'Schweizerisches & EU-Wirtschaftsrecht',
                      desc: isEn ? 'Cross-border commerce, market access, distribution networks.' : 'Grenzüberschreitender Handel, Marktzugang, Vertriebssysteme.',
                      practiceId: 'wirtschaftsrecht'
                    },
                    {
                      title: isEn ? 'Regulatory Litigation & Proceedings' : 'Regulatorische Verfahren & WEKO',
                      desc: isEn ? 'Representation before regulatory agencies and administrative courts.' : 'Vertretung gegenüber Aufsichtsbehörden und Verwaltungsgerichten.',
                      practiceId: 'verwaltungsrecht'
                    },
                    {
                      title: isEn ? 'Sanctions & Export Control' : 'Sanktions- & Exportkontrollrecht',
                      desc: isEn ? 'SECO, EU, and international compliance, asset unfreezing.' : 'SECO, EU- und internationale Sanktionsregime, Entsperrungsverfahren.',
                      practiceId: 'sanktionsrecht'
                    }
                  ].map((item, idx) => (
                    <div 
                      key={idx}
                      onClick={() => onNavigateToPractice(item.practiceId)}
                      className="p-4 bg-[#F8F6F2] hover:bg-[#EFEAE4] border border-[#E4D9CC] transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <h4 className="font-serif text-base font-medium text-[#213134] group-hover:text-[#8a6828] transition-colors">
                          {item.title}
                        </h4>
                        <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="font-sans text-xs text-[#213134]/75 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Forensic & Mandate Experience */}
              <section className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? 'Experience & Case Work' : 'Verfahrens- & Mandatserfahrung'}
                </span>
                <h3 className="font-serif text-2xl text-[#213134] font-normal mb-6 pb-4 border-b border-[#E4D9CC]">
                  {isEn ? 'Selected Highlights & Experience' : 'Ausgewählte Schwerpunkte'}
                </h3>

                <ul className="space-y-3.5 font-sans text-xs sm:text-sm text-[#213134]/85 font-light leading-relaxed">
                  {[
                    isEn
                      ? 'Comprehensive leadership of administrative and antitrust investigations before Swiss and European regulatory authorities.'
                      : 'Umfassende Führung von verwaltungs- und kartellrechtlichen Untersuchungen vor schweizerischen und europäischen Aufsichtsbehörden.',
                    isEn
                      ? 'Counsel in national and international merger control filings involving complex multi-jurisdictional notification requirements.'
                      : 'Beratung bei nationalen und internationalen Fusionskontrollanmeldungen mit komplexen Mehrebenen-Anforderungen.',
                    isEn
                      ? 'Representation in regulatory compliance audits, internal corporate investigations, and export sanctions assessment (SECO, EU).'
                      : 'Vertretung bei regulatorischen Compliance-Audits, internen Untersuchungen und exportkontrollrechtlichen Abklärungen (SECO, EU).',
                    isEn
                      ? 'Strategic advisory on commercial contracts, corporate restructuring, and investment disputes spanning Switzerland and the European Union.'
                      : 'Strategische Beratung bei komplexen Handelsverträgen, Restrukturierungen und Investitionsstreitigkeiten mit Bezug zur Schweiz und der EU.'
                  ].map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8a6828] flex-shrink-0 mt-0.5" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </section>

            </div>

            {/* ======================================================== */}
            {/* RIGHT COLUMN: Interactive Accordions (White & Case inspired) */}
            {/* ======================================================== */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Accordion Container */}
              <div className="bg-white border border-[#E4D9CC] shadow-sm p-6 sm:p-8">
                
                {/* Header & Global Expand/Collapse controls */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#E4D9CC]">
                  <div>
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#8a6828] font-sans font-semibold block">
                      {isEn ? 'Detailed Dossier' : 'Detaildossier'}
                    </span>
                    <h3 className="font-serif text-xl text-[#213134] font-medium">
                      {isEn ? 'Credentials & Activities' : 'Qualifikationen & Aktivitäten'}
                    </h3>
                  </div>

                  <div className="flex items-center gap-2 text-xs font-sans">
                    <button
                      onClick={expandAll}
                      className="text-[#8a6828] hover:text-[#213134] hover:underline transition-colors"
                    >
                      {isEn ? 'Expand All' : 'Alle öffnen'}
                    </button>
                    <span className="text-[#E4D9CC]">|</span>
                    <button
                      onClick={collapseAll}
                      className="text-[#213134]/60 hover:text-[#213134] hover:underline transition-colors"
                    >
                      {isEn ? 'Collapse All' : 'Schliessen'}
                    </button>
                  </div>
                </div>

                {/* 1. Education & Admissions (Ausbildung & Zulassungen) */}
                <div className="border-b border-[#E4D9CC]">
                  <button
                    onClick={() => toggleSection('education')}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <GraduationCap className="w-4 h-4 text-[#8a6828]" />
                      <span className="font-serif text-base text-[#213134] font-medium group-hover:text-[#8a6828] transition-colors">
                        {isEn ? 'Education & Admissions' : 'Ausbildung & Zulassungen'}
                      </span>
                    </div>
                    {openSections.education ? (
                      <ChevronUp className="w-4 h-4 text-[#8a6828]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#213134]/50 group-hover:text-[#8a6828]" />
                    )}
                  </button>

                  {openSections.education && (
                    <div className="pb-5 pt-1 space-y-3 font-sans text-xs sm:text-sm text-[#213134]/80 font-light">
                      <div className="pl-3 border-l-2 border-[#C6A15B]">
                        <p className="font-semibold text-[#213134]">Harvard Law School (Cambridge, MA)</p>
                        <p className="text-xs text-[#213134]/70">Master of Laws (LL.M.)</p>
                      </div>
                      <div className="pl-3 border-l-2 border-[#C6A15B]">
                        <p className="font-semibold text-[#213134]">Universität Bern</p>
                        <p className="text-xs text-[#213134]/70">
                          {isEn ? 'Doctorate in Law (Dr. iur.)' : 'Doktorat der Rechtswissenschaften (Dr. iur.)'}
                        </p>
                      </div>
                      <div className="pl-3 border-l-2 border-[#C6A15B]">
                        <p className="font-semibold text-[#213134]">
                          {isEn ? 'Admissions to the Bar' : 'Anwaltszulassungen'}
                        </p>
                        <p className="text-xs text-[#213134]/70">
                          {isEn 
                            ? 'Switzerland (Admitted to all Swiss Courts) · State of New York (Attorney and Counselor at Law)'
                            : 'Schweiz (Zugelassen an allen Schweizer Gerichten) · US-Bundesstaat New York'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 2. Professional Background & Appointments (Berufliche Stationen) */}
                <div className="border-b border-[#E4D9CC]">
                  <button
                    onClick={() => toggleSection('appointments')}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-[#8a6828]" />
                      <span className="font-serif text-base text-[#213134] font-medium group-hover:text-[#8a6828] transition-colors">
                        {isEn ? 'Professional Background & Offices' : 'Berufliche Stationen & Ämter'}
                      </span>
                    </div>
                    {openSections.appointments ? (
                      <ChevronUp className="w-4 h-4 text-[#8a6828]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#213134]/50 group-hover:text-[#8a6828]" />
                    )}
                  </button>

                  {openSections.appointments && (
                    <div className="pb-5 pt-1 space-y-3 font-sans text-xs sm:text-sm text-[#213134]/80 font-light">
                      <div className="pl-3 border-l-2 border-[#C6A15B]">
                        <p className="font-semibold text-[#213134]">Baudenbacher Law AG</p>
                        <p className="text-xs text-[#213134]/70">
                          {isEn ? 'Partner (Zurich & Brussels)' : 'Partnerin (Zürich & Brüssel)'}
                        </p>
                      </div>
                      <div className="pl-3 border-l-2 border-[#C6A15B]">
                        <p className="font-semibold text-[#213134]">
                          {isEn ? 'Swiss Competition Commission (COMCO / WEKO)' : 'Wettbewerbskommission (WEKO)'}
                        </p>
                        <p className="text-xs text-[#213134]/70">
                          {isEn ? 'Former President / Präsidentin a.D.' : 'Präsidentin a.D.'}
                        </p>
                      </div>
                      <div className="pl-3 border-l-2 border-[#C6A15B]">
                        <p className="font-semibold text-[#213134]">
                          {isEn ? 'Leading Commercial Law Firms' : 'Internationale Wirtschaftskanzleien'}
                        </p>
                        <p className="text-xs text-[#213134]/70">
                          {isEn ? 'Practice in Zurich, Brussels, and New York' : 'Anwaltliche Praxis in Zürich, Brüssel und New York'}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* 3. Publications & Articles (Publikationen & Fachbeiträge) */}
                <div className="border-b border-[#E4D9CC]">
                  <button
                    onClick={() => toggleSection('publications')}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <BookOpen className="w-4 h-4 text-[#8a6828]" />
                      <span className="font-serif text-base text-[#213134] font-medium group-hover:text-[#8a6828] transition-colors">
                        {isEn ? 'Publications & Articles' : 'Publikationen & Fachbeiträge'}
                      </span>
                    </div>
                    {openSections.publications ? (
                      <ChevronUp className="w-4 h-4 text-[#8a6828]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#213134]/50 group-hover:text-[#8a6828]" />
                    )}
                  </button>

                  {openSections.publications && (
                    <div className="pb-5 pt-1 space-y-3 font-sans text-xs sm:text-sm text-[#213134]/80 font-light">
                      <div className="p-3 bg-[#F8F6F2] border border-[#E4D9CC]">
                        <p className="font-semibold text-[#213134]">
                          {isEn ? 'Monographs & Dissertation' : 'Monographien & Dissertation'}
                        </p>
                        <p className="text-xs text-[#213134]/75 mt-0.5">
                          {isEn 
                            ? 'Scholarly treatises on Swiss & European competition law, procedural standards, and regulatory jurisprudence.' 
                            : 'Wissenschaftliche Abhandlungen zum schweizerischen und europäischen Kartell- und Wettbewerbsrecht.'}
                        </p>
                      </div>
                      <div className="p-3 bg-[#F8F6F2] border border-[#E4D9CC]">
                        <p className="font-semibold text-[#213134]">
                          {isEn ? 'Journal Articles & Commentaries' : 'Fachaufsätze & Kommentierungen'}
                        </p>
                        <p className="text-xs text-[#213134]/75 mt-0.5">
                          {isEn 
                            ? 'Regular contributions to leading legal journals on market regulation, compliance, and state aid.'
                            : 'Regelmässige Beiträge in juristischen Fachzeitschriften zu Marktabgrenzung, Compliance und Sanktionen.'}
                        </p>
                      </div>
                      <div className="p-2.5 bg-[#EFEAE4]/70 border border-dashed border-[#C6A15B]/50 text-[11px] text-[#8a6828] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
                        <span>
                          {isEn 
                            ? '[Detailed list of publications will be supplemented with the attorneys]'
                            : '[Vollständige Publikationsliste wird mit den Anwälten ergänzt]'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 4. Speeches & Lectures (Vorträge & Konferenzen) */}
                <div className="border-b border-[#E4D9CC]">
                  <button
                    onClick={() => toggleSection('speeches')}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mic2 className="w-4 h-4 text-[#8a6828]" />
                      <span className="font-serif text-base text-[#213134] font-medium group-hover:text-[#8a6828] transition-colors">
                        {isEn ? 'Speeches & Presentations' : 'Vorträge & Konferenzen'}
                      </span>
                    </div>
                    {openSections.speeches ? (
                      <ChevronUp className="w-4 h-4 text-[#8a6828]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#213134]/50 group-hover:text-[#8a6828]" />
                    )}
                  </button>

                  {openSections.speeches && (
                    <div className="pb-5 pt-1 space-y-3 font-sans text-xs sm:text-sm text-[#213134]/80 font-light">
                      <div className="pl-3 border-l-2 border-[#C6A15B]">
                        <p className="font-semibold text-[#213134]">
                          {isEn ? 'International Competition Conferences' : 'Internationale Kartellrechtskonferenzen'}
                        </p>
                        <p className="text-xs text-[#213134]/70">
                          {isEn ? 'Keynotes & panel chairmanships in Zurich, Brussels, Paris & Washington' : 'Keynotes und Paneldiskussionen in Zürich, Brüssel und international'}
                        </p>
                      </div>
                      <div className="pl-3 border-l-2 border-[#C6A15B]">
                        <p className="font-semibold text-[#213134]">
                          {isEn ? 'Academic Guest Lectures' : 'Universitäre Gastvorlesungen'}
                        </p>
                        <p className="text-xs text-[#213134]/70">
                          {isEn ? 'Executive training on antitrust compliance and merger enforcement' : 'Referate zur Marktaufsicht und Fusionskontrollpraxis'}
                        </p>
                      </div>
                      <div className="p-2.5 bg-[#EFEAE4]/70 border border-dashed border-[#C6A15B]/50 text-[11px] text-[#8a6828] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B]"></span>
                        <span>
                          {isEn 
                            ? '[Conference archives & upcoming events to be completed]'
                            : '[Konferenzübersicht wird laufend ergänzt]'}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* 5. Memberships & Affiliations (Mitgliedschaften) */}
                <div className="border-b border-[#E4D9CC]">
                  <button
                    onClick={() => toggleSection('memberships')}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Award className="w-4 h-4 text-[#8a6828]" />
                      <span className="font-serif text-base text-[#213134] font-medium group-hover:text-[#8a6828] transition-colors">
                        {isEn ? 'Memberships & Affiliations' : 'Mitgliedschaften & Engagements'}
                      </span>
                    </div>
                    {openSections.memberships ? (
                      <ChevronUp className="w-4 h-4 text-[#8a6828]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#213134]/50 group-hover:text-[#8a6828]" />
                    )}
                  </button>

                  {openSections.memberships && (
                    <div className="pb-5 pt-1 space-y-2.5 font-sans text-xs sm:text-sm text-[#213134]/80 font-light">
                      <p className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8a6828]" />
                        <span>Zürcher Anwaltsverband (ZAV)</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8a6828]" />
                        <span>Schweizerischer Anwaltsverband (SAV)</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8a6828]" />
                        <span>New York State Bar Association (NYSBA)</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8a6828]" />
                        <span>Studienvereinigung Kartellrecht e.V.</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8a6828]" />
                        <span>International Bar Association (IBA)</span>
                      </p>
                    </div>
                  )}
                </div>

                {/* 6. Languages (Sprachen) */}
                <div>
                  <button
                    onClick={() => toggleSection('languages')}
                    className="w-full py-4 flex items-center justify-between text-left group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Globe2 className="w-4 h-4 text-[#8a6828]" />
                      <span className="font-serif text-base text-[#213134] font-medium group-hover:text-[#8a6828] transition-colors">
                        {isEn ? 'Languages' : 'Sprachen'}
                      </span>
                    </div>
                    {openSections.languages ? (
                      <ChevronUp className="w-4 h-4 text-[#8a6828]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#213134]/50 group-hover:text-[#8a6828]" />
                    )}
                  </button>

                  {openSections.languages && (
                    <div className="pb-4 pt-1 flex flex-wrap gap-2">
                      {[
                        { name: isEn ? 'German (Native)' : 'Deutsch (Muttersprache)', badge: 'C2' },
                        { name: isEn ? 'English (Fluent / LL.M. Harvard)' : 'Englisch (Verhandlungssicher)', badge: 'C2' },
                        { name: isEn ? 'French (Fluent)' : 'Französisch (Fliessend)', badge: 'C1' },
                        { name: isEn ? 'Italian (Working knowledge)' : 'Italienisch (Gute Kenntnisse)', badge: 'B2' }
                      ].map((lang, idx) => (
                        <div key={idx} className="px-3 py-1.5 bg-[#F8F6F2] border border-[#E4D9CC] rounded-sm text-xs font-sans text-[#213134] flex items-center gap-2">
                          <span className="font-medium">{lang.name}</span>
                          <span className="text-[10px] text-[#8a6828] font-mono">{lang.badge}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Direct Office Contact Card in Sidebar */}
              <div className="bg-[#213134] text-white p-6 sm:p-8 border border-[#31464a] shadow-md">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C6A15B] font-sans font-semibold block mb-2">
                  {isEn ? 'Direct Contact & Office' : 'Direkter Kanzleikontakt'}
                </span>
                <h4 className="font-serif text-xl text-white font-medium mb-4">
                  {isEn ? 'Zurich & Brussels Offices' : 'Standorte Zürich & Brüssel'}
                </h4>

                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#E4D9CC]/85 font-light mb-6">
                  <div className="flex items-start gap-2.5">
                    <Building2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                    <span>Hottingerstrasse 14, CH-8032 Zürich</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                    <a href={`mailto:${member.email}`} className="hover:text-white transition-colors truncate">
                      {member.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                    <a href={`tel:${member.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                      {member.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => onOpenContact('Zürich')}
                  className="w-full py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isEn ? 'Inquire for Mandate' : 'Mandatsanfrage stellen'}</span>
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* Other Team Members Exploration Strip */}
        <section className="bg-[#EFEAE4] border-t border-[#E4D9CC] py-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-[#E4D9CC]">
              <div>
                <span className="font-sans text-xs tracking-[0.2em] uppercase text-[#8a6828] font-semibold block mb-1">
                  {isEn ? 'Baudenbacher Law Team' : 'Weitere Partner & Counsel'}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal">
                  {isEn ? 'Colleagues & Leading Experts' : 'Kollegen & Of Counsel'}
                </h3>
              </div>
              <button
                onClick={onBackToHome}
                className="mt-3 sm:mt-0 font-sans text-xs uppercase tracking-wider text-[#8a6828] hover:text-[#213134] font-medium inline-flex items-center gap-1 transition-colors"
              >
                <span>{isEn ? 'View all team members' : 'Gesamtes Team ansehen'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {team
                .filter(m => m.id !== 'laura-baudenbacher')
                .slice(0, 3)
                .map(colleague => (
                  <div
                    key={colleague.id}
                    onClick={() => {
                      if (onSelectOtherMember) {
                        onSelectOtherMember(colleague.id);
                      } else {
                        onBackToHome();
                      }
                    }}
                    className="bg-white p-5 border border-[#E4D9CC] hover:border-[#8a6828] transition-all cursor-pointer group flex items-center gap-4"
                  >
                    <img
                      src={colleague.imageUrl}
                      alt={colleague.name}
                      referrerPolicy="no-referrer"
                      className="w-16 h-20 object-cover object-top border border-[#E4D9CC] group-hover:border-[#8a6828] transition-colors"
                    />
                    <div>
                      <h4 className="font-serif text-base text-[#213134] font-medium group-hover:text-[#8a6828] transition-colors">
                        {colleague.name}
                      </h4>
                      <p className="font-sans text-xs text-[#8a6828] font-light truncate max-w-[200px]">
                        {colleague.title}
                      </p>
                      <p className="font-sans text-[11px] text-[#213134]/60 mt-1">
                        {colleague.location}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

      </main>

      {/* Footer V1 */}
      <FooterV1
        language={language}
        onOpenContact={() => onOpenContact()}
      />

    </div>
  );
};
