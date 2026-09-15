import React, { useState } from 'react';
import { Language, OfficeLocation } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { HeaderV1 } from '../v1/HeaderV1';
import { FooterV1 } from '../v1/FooterV1';
import { 
  ArrowRight, 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  Building, 
  CheckCircle2, 
  Lock, 
  Send, 
  ExternalLink,
  HelpCircle,
  AlertTriangle
} from 'lucide-react';

interface ContactPageProps {
  language: Language;
  initialOffice?: string;
  initialPractice?: string;
  onBackToHome: () => void;
  onOpenElementorGuide: () => void;
  onNavigateToPractice?: (practiceId: string) => void;
  onNavigateToTeamOverview?: () => void;
  onNavigateToPracticesOverview?: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  language = 'de',
  initialOffice,
  initialPractice,
  onBackToHome,
  onOpenElementorGuide,
  onNavigateToPractice,
  onNavigateToTeamOverview,
  onNavigateToPracticesOverview
}) => {
  const isEn = language === 'en';
  const { offices, practices, ui } = getLocalizedData(language);

  // Form state
  const [selectedOffice, setSelectedOffice] = useState<string>(
    initialOffice || offices[0]?.city || 'Zürich'
  );
  const [selectedPractice, setSelectedPractice] = useState<string>(
    initialPractice || ''
  );
  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    confidentialAccepted: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.message) return;
    setIsSubmitted(true);
  };

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  const faqs = isEn
    ? [
        {
          q: 'How does the initial contact and conflict check process work?',
          a: 'Upon receiving your inquiry, we perform an immediate, mandatory conflict of interest check across our offices in Zurich, Brussels, and Oslo. Once cleared, a designated partner or senior counsel will reach out within one business day to discuss next steps.'
        },
        {
          q: 'How is attorney-client privilege protected?',
          a: 'All communication with our Swiss attorneys is strictly protected under Swiss statutory professional secrecy (Art. 13 Swiss Federal Lawyers Act / BGFA) as well as the applicable local bar regulations in Brussels and Oslo. Your data remains strictly confidential.'
        },
        {
          q: 'Are consultations available remotely or internationally?',
          a: 'Yes. We routinely conduct consultations via secure, end-to-end encrypted video conferencing, or can meet clients directly at our offices in Zurich, Brussels, or Oslo, as well as on-site worldwide for time-sensitive matters.'
        },
        {
          q: 'What should we do in urgent regulatory enforcement matters (e.g. Dawn Raids, SECO or COMCO inquiries)?',
          a: 'In time-critical enforcement situations or unannounced inspections, please contact our emergency hotline immediately or clearly mark your inquiry as "Urgent Regulatory Enforcement". Our regulatory team will respond promptly.'
        }
      ]
    : [
        {
          q: 'Wie läuft die erste Kontaktaufnahme und die Konfliktprüfung ab?',
          a: 'Nach Eingang Ihrer Anfrage führen wir unverzüglich die standesrechtlich vorgeschriebene Konfliktprüfung über alle unsere Standorte in Zürich, Brüssel und Oslo durch. Nach Freigabe meldet sich der zuständige Partner oder Counsel innerhalb eines Werktages persönlich bei Ihnen.'
        },
        {
          q: 'Wie ist das Anwaltsgeheimnis und die Vertraulichkeit geschützt?',
          a: 'Jede Kontaktaufnahme untersteht dem strengen schweizerischen Berufsgeheimnis gemäss Art. 13 des Anwaltsgesetzes (BGFA) sowie den Berufsregeln in Belgien und Norwegen. Wir behandeln sämtliche übermittelten Informationen streng vertraulich.'
        },
        {
          q: 'Können Besprechungen auch digital oder beim Mandanten vor Ort stattfinden?',
          a: 'Selbstverständlich. Neben persönlichen Terminen an unseren Kanzleistandorten beraten wir Mandanten weltweit über geschützte Videokonferenzsysteme oder reisen für dringliche Vor-Ort-Abklärungen direkt an Ihren Unternehmenssitz.'
        },
        {
          q: 'Was tun bei dringlichen behördlichen Verfügungen oder Untersuchungen (SECO, WEKO, FINMA)?',
          a: 'Bei drohendem Fristablauf, unangekündigten Behördenbesuchen (Dawn Raids) oder sofort vollstreckbaren Verfügungen vermerken Sie bitte im Betreff «Dringend» oder rufen Sie uns direkt über unsere Zürcher Hauptnummer an.'
        }
      ];

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#213134] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      {/* Header V1 */}
      <HeaderV1
        language={language}
        onOpenContact={() => {
          document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
        onOpenElementorGuide={onOpenElementorGuide}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview}
        onNavigateToContactPage={() => {
          document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-[#213134] text-white pt-24 sm:pt-28 pb-16 md:pb-20 border-b border-[#31464a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Back to Home Button */}
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
                <Building className="w-4 h-4 text-[#C6A15B]" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                  {isEn ? 'Baudenbacher Law AG · Contact & Offices' : 'Baudenbacher Law AG · Standorte & Kontakt'}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
                {isEn ? 'Get in Touch with Our Firm' : 'Treten Sie mit uns in Kontakt'}
              </h1>

              <p className="font-sans text-base sm:text-lg text-[#E4D9CC]/90 font-light leading-relaxed mb-6">
                {isEn
                  ? 'We advise clients discreetly, decisively, and with senior partner attention from our offices in Zurich, Brussels, and Oslo, or via secure digital channels.'
                  : 'Wir beraten Mandanten diskret, entschlossen und mit persönlicher Begleitung an unseren Standorten in Zürich, Brüssel und Oslo sowie im Rahmen gesicherter digitaler Beratungen.'}
              </p>

              {/* Privilege Notice */}
              <div className="flex items-center gap-2 text-xs font-sans text-[#E4D9CC]/80 bg-[#283d41] px-3.5 py-2 border-l-2 border-[#C6A15B] w-fit mb-6">
                <Lock className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>
                  {isEn
                    ? 'Strict attorney-client privilege applies from initial contact'
                    : 'Strenges Anwaltsgeheimnis ab der ersten Kontaktaufnahme'}
                </span>
              </div>

              {/* Relevant Action & Navigation Buttons in Hero */}
              <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => {
                    document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-5 py-2.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] text-xs font-sans uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2 shadow-xs min-h-[42px] cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#213134]" />
                  <span>{isEn ? 'Send Direct Inquiry' : 'Nachricht senden'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    document.getElementById('office-locations-section')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 bg-[#2a3c40] hover:bg-[#32484d] text-white border border-[#445b60] text-xs font-sans uppercase tracking-wider font-medium transition-colors inline-flex items-center gap-2 min-h-[42px] cursor-pointer"
                >
                  <Building className="w-4 h-4 text-[#C6A15B]" />
                  <span>{isEn ? 'View Office Locations' : 'Standorte ansehen'}</span>
                </button>

                {onNavigateToTeamOverview && (
                  <button
                    type="button"
                    onClick={onNavigateToTeamOverview}
                    className="px-4 py-2.5 bg-transparent hover:bg-white/5 text-[#E4D9CC] border border-white/20 text-xs font-sans uppercase tracking-wider transition-colors inline-flex items-center gap-2 min-h-[42px] cursor-pointer"
                  >
                    <span>{isEn ? 'Meet the Team' : 'Unser Kanzleiteam'}</span>
                  </button>
                )}

                {onNavigateToPracticesOverview && (
                  <button
                    type="button"
                    onClick={onNavigateToPracticesOverview}
                    className="px-4 py-2.5 bg-transparent hover:bg-white/5 text-[#E4D9CC] border border-white/20 text-xs font-sans uppercase tracking-wider transition-colors inline-flex items-center gap-2 min-h-[42px] cursor-pointer"
                  >
                    <span>{isEn ? 'Practice Areas' : 'Fachgebiete'}</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: Three Office Location Cards */}
        <section id="office-locations-section" className="py-16 md:py-20 bg-white border-b border-[#E4D9CC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-12">
              <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                {isEn ? 'LOCATIONS' : 'KANZELEISTANDORTE'}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal">
                {isEn ? 'Our Offices in Zurich, Brussels & Oslo' : 'Unsere Büros in Zürich, Brüssel und Oslo'}
              </h2>
              <div className="w-12 h-[2px] bg-[#C6A15B] mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {offices.map((office, idx) => (
                <div
                  key={office.city}
                  className={`bg-[#F8F6F2] border transition-all duration-300 flex flex-col ${
                    selectedOffice === office.city
                      ? 'border-[#C6A15B] shadow-md ring-1 ring-[#C6A15B]'
                      : 'border-[#E4D9CC] shadow-xs hover:border-[#C6A15B]/50'
                  }`}
                >
                  {/* City Image */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#213134]">
                    <img
                      src={office.image}
                      alt={office.city}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#213134]/90 via-[#213134]/30 to-transparent"></div>
                    
                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-sans tracking-widest uppercase text-[#C6A15B] font-semibold block">
                        {office.country}
                      </span>
                      <h3 className="font-serif text-xl sm:text-2xl text-white font-normal">
                        {office.city}
                      </h3>
                    </div>

                    {idx === 0 && (
                      <div className="absolute top-3 right-3 bg-[#C6A15B] text-[#213134] text-[10px] font-sans font-bold uppercase tracking-wider px-2 py-0.5">
                        {isEn ? 'Headquarters' : 'Hauptsitz'}
                      </div>
                    )}
                  </div>

                  {/* Office Details */}
                  <div className="p-6 flex flex-col flex-1 space-y-4">
                    {/* Address */}
                    <div className="flex items-start gap-3 text-xs font-sans text-[#213134]/85">
                      <MapPin className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-[#213134]">{office.address}</p>
                        <p>{office.postalCode}</p>
                        <p>{office.country}</p>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-3 text-xs font-sans text-[#213134]/85">
                      <Phone className="w-4 h-4 text-[#C6A15B] shrink-0" />
                      <a
                        href={`tel:${office.phone.replace(/\s+/g, '')}`}
                        className="hover:text-[#C6A15B] font-medium transition-colors"
                      >
                        {office.phone}
                      </a>
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-3 text-xs font-sans text-[#213134]/85">
                      <Mail className="w-4 h-4 text-[#C6A15B] shrink-0" />
                      <a
                        href={`mailto:${office.email}`}
                        className="hover:text-[#C6A15B] font-medium transition-colors"
                      >
                        {office.email}
                      </a>
                    </div>

                    {/* Hours */}
                    <div className="flex items-start gap-3 text-xs font-sans text-[#213134]/70 pt-2 border-t border-[#E4D9CC]">
                      <Clock className="w-3.5 h-3.5 text-[#8a6828] shrink-0 mt-0.5" />
                      <div>
                        <p className="text-[11px] font-medium text-[#213134]">
                          {isEn ? 'Mon – Fri: 08:30 – 18:30 CET' : 'Mo – Fr: 08:30 – 18:30 Uhr MEZ'}
                        </p>
                        <p className="text-[10px] text-[#213134]/60">
                          {isEn ? 'Appointments by arrangement' : 'Termine nach Vereinbarung'}
                        </p>
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-4 mt-auto border-t border-[#E4D9CC] flex items-center justify-between gap-2">
                      <a
                        href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.mapQuery)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[11px] font-sans text-[#8a6828] hover:text-[#213134] inline-flex items-center gap-1 font-medium"
                      >
                        <span>{isEn ? 'Google Maps' : 'Route planen'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>

                      <button
                        type="button"
                        onClick={() => {
                          setSelectedOffice(office.city);
                          document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className={`text-[11px] font-sans px-3 py-1.5 transition-colors uppercase tracking-wider font-semibold ${
                          selectedOffice === office.city
                            ? 'bg-[#C6A15B] text-[#213134]'
                            : 'bg-[#213134] text-white hover:bg-[#C6A15B] hover:text-[#213134]'
                        }`}
                      >
                        {selectedOffice === office.city 
                          ? (isEn ? 'Selected' : 'Ausgewählt')
                          : (isEn ? 'Choose Office' : 'Standort wählen')}
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 2: Contact Form & Urgent Inquiries */}
        <section id="contact-form-section" className="py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Left Form Column (7 Cols) */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                
                <div className="mb-6 pb-6 border-b border-[#E4D9CC]">
                  <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-1">
                    {isEn ? 'CONFIDENTIAL INQUIRY' : 'VERTRAULICHE ANFRAGE'}
                  </span>
                  <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal">
                    {isEn ? 'Submit Your Matter Confidentially' : 'Schildern Sie uns Ihr Anliegen'}
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-[#213134]/70 font-light mt-1">
                    {isEn
                      ? 'Please complete the form below. Your message will be securely routed directly to our partners.'
                      : 'Füllen Sie bitte das nachstehende Formular aus. Ihre Anfrage wird direkt an die zuständigen Partner weitergeleitet.'}
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="p-8 bg-[#F8F6F2] border border-[#C6A15B] text-center space-y-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#C6A15B]/20 text-[#8a6828] mx-auto">
                      <CheckCircle2 className="w-7 h-7 text-[#8a6828]" />
                    </div>
                    <h3 className="font-serif text-2xl text-[#213134]">
                      {isEn ? 'Inquiry Successfully Transmitted' : 'Anfrage erfolgreich übermittelt'}
                    </h3>
                    <p className="font-sans text-sm text-[#213134]/80 max-w-md mx-auto leading-relaxed">
                      {isEn
                        ? `Thank you, ${formData.fullName}. Your inquiry for our ${selectedOffice} office has been registered. A designated partner will contact you promptly after completing the conflict check.`
                        : `Vielen Dank, ${formData.fullName}. Ihre Anfrage für unseren Standort ${selectedOffice} ist bei uns eingegangen. Ein zuständiger Partner wird sich nach erfolgter Konfliktprüfung zeitnah bei Ihnen melden.`}
                    </p>
                    <div className="pt-4">
                      <button
                        type="button"
                        onClick={() => {
                          setIsSubmitted(false);
                          setFormData({
                            fullName: '',
                            company: '',
                            email: '',
                            phone: '',
                            message: '',
                            confidentialAccepted: true
                          });
                        }}
                        className="px-5 py-2.5 bg-[#213134] text-white hover:bg-[#C6A15B] hover:text-[#213134] text-xs font-sans uppercase tracking-wider transition-colors min-h-[40px]"
                      >
                        {isEn ? 'Submit Another Inquiry' : 'Weitere Nachricht senden'}
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    
                    {/* Office Selection Pills */}
                    <div>
                      <label className="block font-sans text-xs font-medium uppercase tracking-wider text-[#213134] mb-2">
                        {isEn ? 'Preferred Office *' : 'Gewünschter Kanzleistandort *'}
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {offices.map((off) => (
                          <button
                            key={off.city}
                            type="button"
                            onClick={() => setSelectedOffice(off.city)}
                            className={`py-2 px-3 text-xs font-sans uppercase tracking-wider transition-all min-h-[40px] text-center ${
                              selectedOffice === off.city
                                ? 'bg-[#213134] text-[#C6A15B] font-semibold border-b-2 border-[#C6A15B]'
                                : 'bg-[#F8F6F2] text-[#213134]/80 hover:bg-[#E4D9CC]/50 border border-[#E4D9CC]'
                            }`}
                          >
                            {off.city}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Practice Area Dropdown */}
                    <div>
                      <label className="block font-sans text-xs font-medium uppercase tracking-wider text-[#213134] mb-2">
                        {isEn ? 'Practice Area / Subject *' : 'Fachgebiet / Thematik *'}
                      </label>
                      <select
                        value={selectedPractice}
                        onChange={(e) => setSelectedPractice(e.target.value)}
                        className="w-full bg-[#F8F6F2] border border-[#E4D9CC] text-[#213134] text-xs sm:text-sm px-4 py-3 focus:outline-hidden focus:border-[#C6A15B] min-h-[44px]"
                      >
                        <option value="">
                          {isEn ? '-- Select a Practice Area --' : '-- Bitte Fachgebiet auswählen --'}
                        </option>
                        {practices.map((p) => (
                          <option key={p.id} value={p.title}>
                            {p.title}
                          </option>
                        ))}
                        <option value="Anderes Anliegen">
                          {isEn ? 'General / Other Matter' : 'Allgemeines / Anderes Anliegen'}
                        </option>
                      </select>
                    </div>

                    {/* Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs font-medium uppercase tracking-wider text-[#213134] mb-1.5">
                          {isEn ? 'Full Name *' : 'Vollständiger Name *'}
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder={isEn ? 'e.g. Dr. Thomas Meyer' : 'z.B. Dr. Thomas Meyer'}
                          className="w-full bg-[#F8F6F2] border border-[#E4D9CC] text-[#213134] text-xs sm:text-sm px-4 py-3 focus:outline-hidden focus:border-[#C6A15B] min-h-[44px]"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs font-medium uppercase tracking-wider text-[#213134] mb-1.5">
                          {isEn ? 'Company / Organization' : 'Unternehmen / Institution'}
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder={isEn ? 'e.g. Helvetia AG' : 'z.B. Helvetia AG'}
                          className="w-full bg-[#F8F6F2] border border-[#E4D9CC] text-[#213134] text-xs sm:text-sm px-4 py-3 focus:outline-hidden focus:border-[#C6A15B] min-h-[44px]"
                        />
                      </div>
                    </div>

                    {/* Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs font-medium uppercase tracking-wider text-[#213134] mb-1.5">
                          {isEn ? 'Email Address *' : 'E-Mail-Adresse *'}
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@domain.ch"
                          className="w-full bg-[#F8F6F2] border border-[#E4D9CC] text-[#213134] text-xs sm:text-sm px-4 py-3 focus:outline-hidden focus:border-[#C6A15B] min-h-[44px]"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs font-medium uppercase tracking-wider text-[#213134] mb-1.5">
                          {isEn ? 'Telephone' : 'Telefonnummer'}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+41 44 000 00 00"
                          className="w-full bg-[#F8F6F2] border border-[#E4D9CC] text-[#213134] text-xs sm:text-sm px-4 py-3 focus:outline-hidden focus:border-[#C6A15B] min-h-[44px]"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block font-sans text-xs font-medium uppercase tracking-wider text-[#213134] mb-1.5">
                        {isEn ? 'Summary of Matter / Inquiries *' : 'Schilderung des Anliegens *'}
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={
                          isEn
                            ? 'Please provide a high-level summary of the facts, any pending deadlines, and opposing parties (for conflict check)...'
                            : 'Bitte beschreiben Sie den Sachverhalt, allfällige Fristen sowie Gegenparteien (zwecks Prüfung von Interessenkonflikten)...'
                        }
                        className="w-full bg-[#F8F6F2] border border-[#E4D9CC] text-[#213134] text-xs sm:text-sm p-4 focus:outline-hidden focus:border-[#C6A15B]"
                      ></textarea>
                    </div>

                    {/* Confidentiality notice checkbox */}
                    <div className="flex items-start gap-3 text-xs text-[#213134]/80 font-light">
                      <input
                        type="checkbox"
                        id="confidentiality-check"
                        checked={formData.confidentialAccepted}
                        onChange={(e) => setFormData({ ...formData, confidentialAccepted: e.target.checked })}
                        className="mt-1 accent-[#C6A15B]"
                        required
                      />
                      <label htmlFor="confidentiality-check">
                        {isEn
                          ? 'I understand that all information transmitted will be treated under strict attorney-client privilege. I agree that Baudenbacher Law may contact me regarding this inquiry.'
                          : 'Ich nehme zur Kenntnis, dass sämtliche übermittelten Daten dem strengen Anwaltsgeheimnis unterstehen. Ich willige ein, dass Baudenbacher Law mich zwecks Bearbeitung der Anfrage kontaktiert.'}
                      </label>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-widest uppercase transition-colors inline-flex items-center justify-center gap-2 shadow-xs min-h-[44px]"
                    >
                      <span>{isEn ? 'Submit Confidential Inquiry' : 'Vertrauliche Anfrage einreichen'}</span>
                      <Send className="w-4 h-4" />
                    </button>

                  </form>
                )}

              </div>

              {/* Right Side: Emergency Inquiries & FAQ (5 Cols) */}
              <div className="lg:col-span-5 space-y-8">
                
                {/* Urgent Matters Callout Box */}
                <div className="bg-[#213134] text-white p-6 sm:p-8 border border-[#31464a]">
                  <div className="flex items-center gap-2 text-[#C6A15B] text-xs font-sans uppercase tracking-widest font-semibold mb-3">
                    <AlertTriangle className="w-4 h-4" />
                    <span>{isEn ? 'Time-Sensitive Matters' : 'Dringliche Fristen & Behörden'}</span>
                  </div>

                  <h3 className="font-serif text-xl text-white font-normal mb-3">
                    {isEn ? 'Dawn Raids & Regulatory Actions' : 'Behördliche Fristen & Hausdurchsuchungen'}
                  </h3>

                  <p className="font-sans text-xs text-[#E4D9CC]/85 font-light leading-relaxed mb-6">
                    {isEn
                      ? 'In cases of unannounced dawn raids, search orders, asset freezes (SECO/OFAC), or critical court deadlines, please contact our head office directly by phone.'
                      : 'Bei unangekündigten Behördeninspektionen (Dawn Raids), Kontosperren (SECO), Arresten oder dringlichen Fristen vor Bundesbehörden kontaktieren Sie bitte unverzüglich unsere Kanzleizentrale.'}
                  </p>

                  <div className="p-4 bg-[#283d41] border border-[#C6A15B]/40 space-y-2">
                    <div className="text-[11px] font-sans text-[#E4D9CC]/70 uppercase tracking-wider">
                      {isEn ? 'Direct Telephone (Zurich HQ):' : 'Zentrale Zürich (Direktdurchwahl):'}
                    </div>
                    <a
                      href="tel:+41442608800"
                      className="font-serif text-lg text-white hover:text-[#C6A15B] transition-colors flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-[#C6A15B]" />
                      <span>+41 44 260 88 00</span>
                    </a>
                  </div>
                </div>

                {/* FAQ Accordion */}
                <div className="bg-white p-6 sm:p-8 border border-[#E4D9CC] shadow-xs space-y-4">
                  <div className="flex items-center gap-2 text-xs font-sans font-semibold uppercase tracking-widest text-[#8a6828]">
                    <HelpCircle className="w-4 h-4 text-[#C6A15B]" />
                    <span>{isEn ? 'Mandate FAQ' : 'Häufige Fragen zur Kontaktaufnahme'}</span>
                  </div>

                  <div className="divide-y divide-[#E4D9CC]">
                    {faqs.map((faq, idx) => (
                      <div key={idx} className="py-3">
                        <button
                          type="button"
                          onClick={() => toggleFaq(idx)}
                          className="w-full text-left font-serif text-sm text-[#213134] hover:text-[#8a6828] transition-colors flex items-center justify-between gap-3"
                        >
                          <span className="font-medium">{faq.q}</span>
                          <span className="text-[#C6A15B] font-sans text-base">
                            {openFaq === idx ? '−' : '+'}
                          </span>
                        </button>
                        {openFaq === idx && (
                          <p className="mt-2 font-sans text-xs text-[#213134]/75 font-light leading-relaxed">
                            {faq.a}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer V1 */}
      <FooterV1 language={language} onOpenContact={() => {}} />
    </div>
  );
};
