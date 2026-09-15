import React, { useState } from 'react';
import { Language, PracticeArea } from '../../types';
import { HeaderV1 } from '../v1/HeaderV1';
import { FooterV1 } from '../v1/FooterV1';
import { 
  ArrowRight, 
  ArrowLeft, 
  ShieldAlert, 
  Scale, 
  CheckCircle2, 
  XCircle, 
  Landmark, 
  Globe2, 
  FileText, 
  Building, 
  Users, 
  Mail, 
  Phone, 
  ExternalLink,
  Search,
  ListFilter,
  HelpCircle,
  Briefcase,
  Layers,
  ChevronDown
} from 'lucide-react';

import { getLocalizedData } from '../../data/translations';

interface PracticeAreaPageProps {
  language: Language;
  selectedPracticeId?: string;
  onBackToHome: () => void;
  onBackToOverview?: () => void;
  onSelectOtherPractice?: (practiceId: string) => void;
  onOpenContact: (officeCity?: string, practice?: string) => void;
  onNavigateToTeamMember: (memberId: string) => void;
  onNavigateToTeamOverview?: () => void;
  onNavigateToContactPage?: () => void;
  onOpenElementorGuide: () => void;
}

export const PracticeAreaPage: React.FC<PracticeAreaPageProps> = ({
  language = 'de',
  selectedPracticeId = 'europarecht',
  onBackToHome,
  onBackToOverview,
  onSelectOtherPractice,
  onOpenContact,
  onNavigateToTeamMember,
  onNavigateToTeamOverview,
  onNavigateToContactPage,
  onOpenElementorGuide
}) => {
  const isEn = language === 'en';
  const { practices, team } = getLocalizedData(language);
  const currentPractice = practices.find(p => p.id === selectedPracticeId) || practices[0];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Active section for in-page reading progress
  const [activeSection, setActiveSection] = useState<string>('challenges');

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Find lead team members matching this practice area
  const leadMembers = team.filter(m => 
    currentPractice.leadAttorneys?.some(leadName => leadName.includes(m.name.split(' ')[0]) || m.name.includes(leadName))
  );

  // Practice specific content generators for deep domain authority
  const getPracticeContent = () => {
    switch (currentPractice.id) {
      case 'sanktionsrecht':
        return {
          heroSubtitle: isEn
            ? 'Sanctions Law Attorney – Precision in Swiss SECO, EU, and OFAC Regimes'
            : 'Sanktionsrecht Anwalt – Rechtssicher durch SECO-, EU- und OFAC-Regime',
          leadP1: isEn
            ? 'International sanctions and export control regulations have evolved into unprecedented regulatory scrutiny. Asset freezes, dual-use restrictions, and compliance duties under Swiss SECO ordinances, EU sanctions packages, and US OFAC measures require rapid, highly specialized legal intervention.'
            : 'Internationale Sanktionen und Exportkontrollen unterliegen einer beispiellosen Dynamik. Kontensperren, Güterverkehrsbeschränkungen und Compliance-Pflichten unter den Schweizer SECO-Verordnungen, den EU-Sanktionspaketen und US-OFAC-Bestimmungen verlangen schnelles, hochspezialisiertes anwaltliches Handeln.',
          leadP2: isEn
            ? 'Baudenbacher Law guides corporate entities, financial intermediaries, and high-net-worth individuals in unblocking procedures, exemption licenses, and preventative compliance audits with authorities in Bern, Brussels, and international partner states.'
            : 'Baudenbacher Law berät Unternehmen, Finanzintermediäre und betroffene Privatpersonen bei Entsperrungsverfahren, Ausnahmebewilligungen sowie präventiven Compliance-Audits gegenüber Behörden in Bern, Brüssel und internationalen Partnerstaaten.',
          quoteText: isEn
            ? 'Sanctions enforcement tolerates zero procedural ambiguity. Decisive factual clarification and rigorous administrative challenges prevent lasting corporate and reputational destruction.'
            : 'Im Sanktionsrecht wiegt jeder Verfahrensfehler schwer. Präzise Tatsachenfeststellung und fundierte behördliche Interventionen verhindern irreversible Vermögens- und Reputationsschäden.',
          challenges: [
            {
              title: isEn ? 'Asset Freezes & Bank Account Blocking' : 'Vermögenssperren & Bankkontenblockaden',
              desc: isEn 
                ? 'Immediate asset freezing by Swiss or European banking institutions based on sanction list inclusion or indirect ownership assumptions.'
                : 'Unmittelbare Kontosperren durch Schweizer oder europäische Banken infolge Sanktionslisten-Nennung oder vermuteter wirtschaftlicher Berechtigung.'
            },
            {
              title: isEn ? 'Export Controls & Dual-Use Clearance' : 'Exportkontrolle & Dual-Use-Güter',
              desc: isEn 
                ? 'Uncertainties regarding whether specialized high-tech goods, software, or advisory services fall under export prohibitions.'
                : 'Klassifizierungsunsicherheiten, ob spezialisierte Industrieprodukte, Software oder Beratungsleistungen unter Güterausfuhrverbote fallen.'
            },
            {
              title: isEn ? 'SECO Exemption & Clearance Applications' : 'Ausnahmebewilligungen & Freigaben beim SECO',
              desc: isEn 
                ? 'Complex administrative petitions for release of funds required for basic needs, legal defense, or fulfilling pre-existing contractual obligations.'
                : 'Aufwendige Gesuche um Freigabe von Mitteln für Grundbedürfnisse, Rechtsverteidigung oder Erfüllung vorbestehender Verträge.'
            }
          ],
          forums: [
            { name: 'Staatssekretariat für Wirtschaft (SECO)', loc: 'Bern, Schweiz' },
            { name: 'Bundesverwaltungsgericht (BVGer)', loc: 'St. Gallen, Schweiz' },
            { name: 'Europäische Kommission & Rat der EU', loc: 'Brüssel, Belgien' },
            { name: 'Gericht der Europäischen Union (EuG)', loc: 'Luxemburg' },
            { name: 'US Office of Foreign Assets Control (OFAC)', loc: 'Washington D.C. (Kooperation)' }
          ],
          faqs: [
            {
              q: isEn ? 'What is the immediate recourse when a bank freezes assets under SECO ordinances?' : 'Welche Sofortmassnahmen sind bei einer Kontosperre durch das SECO oder die Bank geboten?',
              a: isEn 
                ? 'First, verify the precise legal basis invoked by the bank. Often institutions implement over-compliance without an official individual listing. We demand immediate formal clarification, file an administrative release petition with SECO, and prevent unauthorized forfeiture.'
                : 'Zunächst muss die genaue Rechtsgrundlage der Bank geprüft werden. Häufig liegt eine Über-Compliance vor, ohne dass eine individuelle Listung besteht. Wir fordern unverzügliche Offenlegung, stellen Freigabegesuche beim SECO und wahren alle Rechtsmittelfristen.'
            },
            {
              q: isEn ? 'Can a Swiss listing be appealed to independent courts?' : 'Kann eine Schweizer Sanktionslistung gerichtlich angefochten werden?',
              a: isEn 
                ? 'Yes. SECO refusal rulings can be appealed to the Swiss Federal Administrative Court and subsequently to the Swiss Federal Supreme Court. Parallel delisting applications can be submitted to the EU Council.'
                : 'Ja. Verfügungen des SECO können beim Bundesverwaltungsgericht und letztinstanzlich beim Bundesgericht angefochten werden. Parallel führen wir Delisting-Verfahren vor den EU-Behörden in Brüssel.'
            }
          ]
        };

      case 'wirtschaftsrecht':
        return {
          heroSubtitle: isEn
            ? 'Commercial & Corporate Law – Strategic Advisory for Corporate Leaders and Investors'
            : 'Wirtschaftsrecht & Gesellschaftsrecht – Strategische Begleitung für Unternehmen und Investoren',
          leadP1: isEn
            ? 'In demanding corporate transactions, governance questions, and commercial disputes, strategic foresight is just as decisive as contractual precision. We accompany enterprises throughout every stage of the business lifecycle.'
            : 'In anspruchsvollen Unternehmenstransaktionen, Governance-Fragen und wirtschaftlichen Auseinandersetzungen ist strategischer Weitblick ebenso entscheidend wie vertragliche Präzision. Wir begleiten Unternehmen in allen Phasen ihrer Geschäftstätigkeit.',
          leadP2: isEn
            ? 'From complex M&A and restructuring to corporate board liability (Art. 754 CO) and shareholder disputes, we deliver clear, conflict-tested solutions tailored to high-value transactions.'
            : 'Von komplexen Umstrukturierungen und Transaktionen bis zur Organhaftung (Art. 754 OR) und Gesellschafterstreitigkeiten erarbeiten wir massgeschneiderte, praxiserprobte Lösungen für Situationen, in denen viel auf dem Spiel steht.',
          quoteText: isEn
            ? 'Commercial law advisory must enable business execution rather than stall it – with unambiguous contractual clauses and rigorous risk protection.'
            : 'Wirtschaftsrechtliche Beratung muss unternehmerisches Handeln ermöglichen, nicht behindern – mit klaren Verträgen und wirksamer Risikoabsicherung.',
          challenges: [
            {
              title: isEn ? 'Corporate Restructuring & M&A' : 'M&A & Unternehmenstransaktionen',
              desc: isEn ? 'National and cross-border asset deals, share purchases, and joint ventures under Swiss and European company law.' : 'Nationale und grenzüberschreitende Transaktionen, Due Diligence und Share Deals unter Schweizer und europäischem Recht.'
            },
            {
              title: isEn ? 'Board of Directors Liability (Art. 754 CO)' : 'Verantwortlichkeit von Verwaltungsrat & Geschäftsleitung',
              desc: isEn ? 'Preventative governance advice and defense against personal liability claims under Swiss company law.' : 'Präventive Governance-Beratung und Abwehr von Haftungsansprüchen gemäss Art. 754 OR in Krisensituationen.'
            },
            {
              title: isEn ? 'Shareholder Conflicts & Deadlocks' : 'Aktionärsstreitigkeiten & Gesellschafterkonflikte',
              desc: isEn ? 'Resolution of deadlocks between family shareholders, private equity investors, and board majorities.' : 'Strategische Beilegung von Blockaden zwischen Gründern, Investoren und Mehrheitsgesellschaftern.'
            }
          ],
          forums: [
            { name: 'Schweizer Zivilgerichte & Handelsgerichte', loc: 'Zürich, Bern, St. Gallen' },
            { name: 'Handelsregisterämter', loc: 'Schweiz' },
            { name: 'Übernahmekommission (UEK)', loc: 'Zürich' },
            { name: 'Internationale Schiedsgerichte', loc: 'Zürich, Genf, Paris' }
          ],
          faqs: [
            {
              q: isEn ? 'How can board members mitigate personal liability under Swiss law?' : 'Wie können Organe persönliche Haftungsrisiken unter Schweizer Recht wirksam minimieren?',
              a: isEn 
                ? 'Through documented Business Judgment Rule processes, independent expert evaluations, proper delegation architecture, and tailored D&O coverage reviews.'
                : 'Durch sorgfältige Dokumentation nach den Grundsätzen der Business Judgment Rule, Einholung unabhängiger Gutachten und lückenlose Protokollierung von Ermessensentscheiden.'
            }
          ]
        };

      case 'schiedsverfahren':
        return {
          heroSubtitle: isEn
            ? 'International Arbitration – Decisive Representation Before High-Value Arbitral Tribunals'
            : 'Internationale Schiedsgerichtsbarkeit – Vertretung vor Schiedsgerichten mit hohem Streitwert',
          leadP1: isEn
            ? 'Arbitration requires sovereign command of international procedural rules, rapid evidentiary mastery, and compelling advocacy. We represent corporations, states, and executives in ICC, Swiss Rules, and LCIA disputes.'
            : 'Internationale Schiedsverfahren verlangen höchste verfahrensrechtliche Souveränität, präzise Beweisführung und strategische Durchsetzungsstärke. Wir vertreten Parteien vor ICC-, Swiss Rules-, LCIA- und Ad-hoc-Schiedsgerichten.',
          leadP2: isEn
            ? 'Furthermore, Prof. Dr. Carl Baudenbacher and Prof. Dr. Mads Andenas are regularly appointed as arbitrators and legal experts in high-profile cross-border disputes and investment treaty arbitrations.'
            : 'Darüber hinaus werden Prof. Dr. Carl Baudenbacher und Prof. Dr. Mads Andenas regelmässig als Parteivertreter, Einzelschiedsrichter oder Gutachter in komplexen internationalen Schieds- und Investitionsverfahren mandatiert.',
          quoteText: isEn
            ? 'In international arbitration, procedural experience and judicial mindset decide between victory and defeat.'
            : 'Im Schiedsverfahren entscheidet die richterliche Perspektive über den Prozesserfolg – wir kennen beide Seiten des Schiedsrichtertischs.',
          challenges: [
            {
              title: isEn ? 'Cross-Border Contract & Post-M&A Disputes' : 'Post-M&A- & Liefervertragsstreitigkeiten',
              desc: isEn ? 'Complex claims arising from warranties, earn-out agreements, and supply chain disruptions.' : 'Klagen aus Gewährleistungen, Kaufpreisanpassungen und vertraglichen Leistungsstörungen im internationalen Handel.'
            },
            {
              title: isEn ? 'Emergency Arbitrator & Interim Relief' : 'Eilschiedsverfahren & Vorläufiger Rechtsschutz',
              desc: isEn ? 'Securing assets, preventing bank guarantee drawdowns, and evidence conservation on short notice.' : 'Arrestierung von Vermögenswerten, Abwendung ungerechtfertigter Garantieabrufe und Beweissicherung unter Zeitdruck.'
            },
            {
              title: isEn ? 'Enforcement under the New York Convention' : 'Vollstreckung nach dem New Yorker Übereinkommen',
              desc: isEn ? 'Worldwide recognition and enforcement of arbitral awards across multiple jurisdictions.' : 'Weltweite Durchsetzung und Vollstreckung ergangener Schiedssprüche über Staatsgrenzen hinweg.'
            }
          ],
          forums: [
            { name: 'Swiss Arbitration Centre (Swiss Rules)', loc: 'Zürich & Genf' },
            { name: 'International Chamber of Commerce (ICC)', loc: 'Paris & Zürich' },
            { name: 'London Court of International Arbitration (LCIA)', loc: 'London' },
            { name: 'Permanent Court of Arbitration (PCA)', loc: 'Den Haag' },
            { name: 'Schweizer Bundesgericht (Beschwerden)', loc: 'Lausanne' }
          ],
          faqs: [
            {
              q: isEn ? 'What are the main advantages of arbitrating under Swiss Rules?' : 'Welche Vorteile bieten die Swiss Rules of International Arbitration?',
              a: isEn 
                ? 'Neutrality, procedural flexibility, strict confidentiality, and high efficiency with minimal interference by domestic courts.'
                : 'Absolute Vertraulichkeit, Schweizer Neutralität, flexible Verfahrensgestaltung und die sehr restriktive Aufhebungspraxis des Schweizerischen Bundesgerichts.'
            }
          ]
        };

      default: // europarecht
        return {
          heroSubtitle: isEn
            ? 'European Law Attorney – Secure Through EU and EEA Proceedings'
            : 'Europarecht Anwalt – Sicher durch EU- und EWR-Verfahren',
          leadP1: isEn
            ? 'Proceedings with a European law dimension are characterized by strict procedural requirements, tight statutory deadlines, and complex institutional mechanisms. Whether before the European Commission, the General Court (EGC), the European Court of Justice (ECJ), or securing cross-border market access – precise legal classification is paramount.'
            : 'Verfahren mit europarechtlichem Bezug sind durch besondere formelle Anforderungen, kurze Fristen und komplexe institutionelle Abläufe geprägt. Ob es um ein Verfahren vor der Europäischen Kommission, dem Gericht der Europäischen Union (EuG), dem Europäischen Gerichtshof (EuGH) geht oder um die Sicherung des Marktzugangs – eine präzise rechtliche Einordnung ist entscheidend.',
          leadP2: isEn
            ? 'A specialized European law attorney guides clients from initial legal analysis through national court litigation involving Union law to preliminary ruling references and annulment actions before the ECJ.'
            : 'Ein spezialisierter Europarecht Anwalt begleitet Mandanten von der ersten Analyse über nationale Gerichtsverfahren mit unionsrechtlichem Bezug bis hin zu Vorabentscheidungsverfahren oder Nichtigkeitsklagen vor dem EuGH. Ziel ist eine rechtssichere, strategisch fundierte Lösung.',
          quoteText: isEn
            ? 'The distinct complexity of European law proceedings lies in the intricate interplay between domestic law, Union law, and supranational frameworks.'
            : 'Die Besonderheit europarechtlicher Verfahren liegt in der Verzahnung von nationalem Recht, Unionsrecht und weiteren überstaatlichen Regelwerken.',
          challenges: [
            {
              title: isEn ? 'Market Access in the EU or EEA:' : 'Marktzugang in der EU bzw. im EWR:',
              desc: isEn 
                ? 'Companies intending to market products or offer services face regulatory requirements whose scope, classification, and interpretation remain contested.'
                : 'Unternehmen beabsichtigen, Produkte oder Dienstleistungen unionsweit anzubieten, sehen sich jedoch mit regulatorischen Anforderungen konfrontiert, deren Reichweite unklar ist.'
            },
            {
              title: isEn ? 'EU Financial Sanctions & Fundamental Rights:' : 'EU-Finanzsanktionen & Grundrechte:',
              desc: isEn 
                ? 'The legality and procedural legitimacy of sanctions measures under the EU Charter of Fundamental Rights must be rigorously challenged before Union courts.'
                : 'Die Rechtmässigkeit von Sanktionsmassnahmen unter Berücksichtigung der EU-Grundrechtecharta und der EuGH-Rechtsprechung steht zur gerichtlichen Überprüfung.'
            },
            {
              title: isEn ? 'National Proceedings with Union Law Implications:' : 'Nationale Verfahren mit unionsrechtlichem Bezug:',
              desc: isEn 
                ? 'Proceedings before domestic courts raise questions on the validity of Union law, necessitating references to the ECJ for preliminary rulings.'
                : 'Verfahren vor nationalen Gerichten werfen Fragen zur Auslegung oder Gültigkeit von Unionsrecht auf, die dem EuGH zur Vorabentscheidung vorzulegen sind.'
            }
          ],
          forums: [
            { name: 'Europäischer Gerichtshof (EuGH)', loc: 'Luxemburg' },
            { name: 'Gericht der Europäischen Union (EuG)', loc: 'Luxemburg' },
            { name: 'Europäische Kommission', loc: 'Brüssel' },
            { name: 'EFTA-Gerichtshof', loc: 'Luxemburg' },
            { name: 'Nationale Obergerichte', loc: 'Schweiz & EWR' }
          ],
          faqs: [
            {
              q: isEn ? 'What is the deadline for an action for annulment under Art. 263 TFEU?' : 'Welche Frist gilt für eine Nichtigkeitsklage vor dem EuG gemäss Art. 263 AEUV?',
              a: isEn 
                ? 'The action must be brought within two months of publication of the measure or of its notification to the applicant, plus a uniform procedural distance allowance of 10 days.'
                : 'Die Klage ist binnen zwei Monaten nach Bekanntgabe bzw. Zustellung der angefochtenen Handlung zu erheben, zuzüglich einer pauschalen Entfernungsfrist von 10 Tagen.'
            },
            {
              q: isEn ? 'Can Swiss companies rely on EU internal market freedoms?' : 'Können sich Schweizer Unternehmen auf EU-Binnenmarktfreiheiten berufen?',
              a: isEn 
                ? 'Only within the specific scope of the bilateral agreements (e.g. Free Movement of Persons, Air Transport, Overland Transport). In the EEA context, four freedoms apply fully.'
                : 'Grundsätzlich nur im Rahmen der bilateralen sektoriellen Abkommen Schweiz-EU. Im EWR-Kontext gelten hingegen die vier Grundfreiheiten des Binnenmarktes in vollem Umfang.'
            }
          ]
        };
    }
  };

  const content = getPracticeContent();

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#213134] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      {/* Header V1 */}
      <HeaderV1
        language={language}
        onOpenContact={onNavigateToContactPage || (() => onOpenContact())}
        onOpenElementorGuide={onOpenElementorGuide}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview}
        onNavigateToPracticesOverview={onBackToOverview}
        onNavigateToContactPage={onNavigateToContactPage || (() => onOpenContact())}
      />

      <main className="flex-1 pb-20">
        
        {/* Practice Hero Section */}
        <section className="bg-[#213134] text-white pt-24 sm:pt-28 pb-14 md:pb-20 border-b border-[#31464a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Dual Back Navigation: To Home or to Practice Areas Overview */}
            <div className="mb-6 flex items-center gap-4 text-xs font-sans tracking-wider uppercase">
              {onBackToOverview ? (
                <button
                  type="button"
                  onClick={onBackToOverview}
                  className="inline-flex items-center gap-1.5 text-[#C6A15B] hover:text-white transition-colors cursor-pointer group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>{isEn ? 'All Practice Areas' : 'Alle Fachgebiete'}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onBackToHome}
                  className="inline-flex items-center gap-1.5 text-[#C6A15B] hover:text-white transition-colors cursor-pointer group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>{isEn ? 'Back to Home' : 'Zurück zur Startseite'}</span>
                </button>
              )}
              <span className="text-white/30">|</span>
              <span className="text-[#E4D9CC]/70">{currentPractice.title}</span>
            </div>

            <div className="max-w-3xl">
              <div className="flex items-center gap-2 mb-3">
                <Globe2 className="w-4 h-4 text-[#C6A15B]" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                  {isEn ? `Practice Discipline · ${currentPractice.title}` : `Fachgebiet · ${currentPractice.title}`}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
                {content.heroSubtitle}
              </h1>

              {/* Lead paragraphs */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#E4D9CC]/90 font-light leading-relaxed mb-8">
                <p>{content.leadP1}</p>
                <p>{content.leadP2}</p>
                <p className="text-xs sm:text-sm text-[#C6A15B]/90 italic border-l-2 border-[#C6A15B] pl-4">
                  {content.quoteText}
                </p>
              </div>

              {/* Relevant Action & Navigation Buttons in Hero */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenContact('Zürich', currentPractice.title)}
                  className="px-5 py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2.5 shadow-md min-h-[42px] cursor-pointer"
                >
                  <span>{isEn ? 'Obtain Legal Assessment' : 'Rechtliche Einordnung erhalten'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  type="button"
                  onClick={() => {
                    document.getElementById('attorneys')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="px-4 py-2.5 bg-[#2a3c40] hover:bg-[#32484d] text-white border border-[#445b60] text-xs font-sans uppercase tracking-wider font-medium transition-colors inline-flex items-center gap-2 min-h-[42px] cursor-pointer"
                >
                  <Users className="w-4 h-4 text-[#C6A15B]" />
                  <span>{isEn ? 'Responsible Attorneys' : 'Zuständige Anwälte'}</span>
                </button>

                {onBackToOverview && (
                  <button
                    type="button"
                    onClick={onBackToOverview}
                    className="px-4 py-2.5 bg-transparent hover:bg-white/5 text-[#E4D9CC] border border-white/20 text-xs font-sans uppercase tracking-wider transition-colors inline-flex items-center gap-2 min-h-[42px] cursor-pointer"
                  >
                    <span>{isEn ? 'All Disciplines' : 'Alle Fachgebiete'}</span>
                  </button>
                )}

                {onNavigateToTeamOverview && (
                  <button
                    type="button"
                    onClick={onNavigateToTeamOverview}
                    className="px-4 py-2.5 bg-transparent hover:bg-white/5 text-[#E4D9CC] border border-white/20 text-xs font-sans uppercase tracking-wider transition-colors inline-flex items-center gap-2 min-h-[42px] cursor-pointer"
                  >
                    <span>{isEn ? 'Team Overview' : 'Kanzleiteam'}</span>
                  </button>
                )}
              </div>

            </div>
          </div>
        </section>

        {/* Sticky Table of Contents Sub-Bar for Long-Form Reading Ease */}
        <div className="sticky top-18 sm:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#E4D9CC] shadow-xs">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto py-2.5 scrollbar-none gap-6 text-xs font-sans">
            <span className="font-semibold uppercase tracking-wider text-[#8a6828] shrink-0 hidden md:inline">
              {isEn ? 'Table of Contents:' : 'Inhaltsverzeichnis:'}
            </span>
            <div className="flex items-center gap-4 sm:gap-6 whitespace-nowrap">
              <button
                type="button"
                onClick={() => scrollToSection('challenges')}
                className={`py-1 transition-colors ${
                  activeSection === 'challenges' ? 'text-[#8a6828] font-semibold border-b-2 border-[#C6A15B]' : 'text-[#213134]/70 hover:text-[#213134]'
                }`}
              >
                {isEn ? '1. Challenges & Scenarios' : '1. Problemstellungen'}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('suitability')}
                className={`py-1 transition-colors ${
                  activeSection === 'suitability' ? 'text-[#8a6828] font-semibold border-b-2 border-[#C6A15B]' : 'text-[#213134]/70 hover:text-[#213134]'
                }`}
              >
                {isEn ? '2. Scope & Boundaries' : '2. Mandatsabgrenzung'}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('method')}
                className={`py-1 transition-colors ${
                  activeSection === 'method' ? 'text-[#8a6828] font-semibold border-b-2 border-[#C6A15B]' : 'text-[#213134]/70 hover:text-[#213134]'
                }`}
              >
                {isEn ? '3. 5-Step Process' : '3. 5-Stufen-Verfahren'}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('framework')}
                className={`py-1 transition-colors ${
                  activeSection === 'framework' ? 'text-[#8a6828] font-semibold border-b-2 border-[#C6A15B]' : 'text-[#213134]/70 hover:text-[#213134]'
                }`}
              >
                {isEn ? '4. Legal Framework' : '4. Rechtsrahmen'}
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('faqs')}
                className={`py-1 transition-colors ${
                  activeSection === 'faqs' ? 'text-[#8a6828] font-semibold border-b-2 border-[#C6A15B]' : 'text-[#213134]/70 hover:text-[#213134]'
                }`}
              >
                {isEn ? '5. FAQ' : '5. Häufige Fragen'}
              </button>
            </div>
            <button
              type="button"
              onClick={() => onOpenContact('Zürich', currentPractice.title)}
              className="text-[#8a6828] hover:text-[#213134] font-medium shrink-0 uppercase tracking-wider hidden lg:inline"
            >
              {isEn ? 'Case Inquiry →' : 'Fall anfragen →'}
            </button>
          </div>
        </div>

        {/* Content Layout: Main Editorial Column + Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Editorial Content (8 Columns) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* SECTION 1: Challenges & Scenarios */}
              <section id="challenges" className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? '01 · PRACTICAL CHALLENGES' : '01 · PROBLEMSTELLUNGEN IN DER PRAXIS'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-4 pb-4 border-b border-[#E4D9CC]">
                  {isEn 
                    ? `Typical Conflict Constellations in ${currentPractice.title}`
                    : `Typische Konfliktlagen im ${currentPractice.title}`}
                </h2>

                <p className="font-sans text-sm text-[#213134]/85 font-light leading-relaxed mb-6">
                  {currentPractice.fullDesc}
                </p>

                <h3 className="font-serif text-lg text-[#213134] font-medium mb-4">
                  {isEn ? 'Typical Scenarios Encountered in Practice:' : 'Typische Konstellationen unserer Mandantschaft:'}
                </h3>

                <div className="space-y-4 mb-6">
                  {content.challenges.map((chal, cIdx) => (
                    <div key={cIdx} className="p-5 bg-[#F8F6F2] border-l-4 border-[#C6A15B] border-t border-r border-b border-[#E4D9CC]">
                      <h4 className="font-serif text-base font-semibold text-[#213134] mb-1.5 flex items-center gap-2">
                        <Scale className="w-4 h-4 text-[#8a6828]" />
                        <span>{chal.title}</span>
                      </h4>
                      <p className="font-sans text-xs sm:text-sm text-[#213134]/80 font-light leading-relaxed">
                        {chal.desc}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#EFEAE4] border border-[#E4D9CC] text-xs sm:text-sm font-sans text-[#213134]/85 font-light leading-relaxed">
                  {isEn
                    ? 'In high-stakes cross-border conflicts, a purely localized assessment is regularly insufficient. Structured early legal intervention establishes decisive clarity on courses of action and probability of success.'
                    : 'In anspruchsvollen Auseinandersetzungen greift eine isolierte Betrachtung regelmässig zu kurz. Eine frühzeitige, strukturierte Prüfung schafft Klarheit über Handlungsoptionen, Fristen und Erfolgsaussichten.'}
                </div>
              </section>

              {/* SECTION 2: Scope & Suitability */}
              <section id="suitability" className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? '02 · SCOPE & MANDATE SUITABILITY' : '02 · MANDATSABGRENZUNG & ZIELGRUPPEN'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-4 pb-4 border-b border-[#E4D9CC]">
                  {isEn ? 'When Specialized Advisory is Indispensable' : 'Wann eine spezialisierte Vertretung angezeigt ist'}
                </h2>

                <p className="font-sans text-sm text-[#213134]/85 font-light leading-relaxed mb-6">
                  {isEn
                    ? 'A precise mandate scope ensures procedural efficiency and prevents costly tactical detours.'
                    : 'Eine klare Abgrenzung der Fragestellung dient der Effizienz und verhindert unnötige verfahrensrechtliche Umwege.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {currentPractice.keyTopics.map((topic, idx) => (
                    <div key={idx} className="p-4 bg-[#F8F6F2] border border-[#E4D9CC] flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8a6828] shrink-0 mt-0.5" />
                      <span className="font-sans text-xs sm:text-sm text-[#213134]/85 font-light">
                        {topic}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#fff7ed] border border-[#fed7aa] flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#c2410c] shrink-0 mt-0.5" />
                  <p className="font-sans text-xs sm:text-sm text-[#9a3412] font-light leading-relaxed">
                    <strong>{isEn ? 'Boundary Notice:' : 'Abgrenzung:'}</strong>{' '}
                    {isEn
                      ? 'This specialization focuses on complex commercial, international, and regulatory questions. Standard consumer disputes or routine filings are generally outside our scope.'
                      : 'Unsere Beratung konzentriert sich auf wirtschaftlich, regulatorisch oder international bedeutsame Mandate. Reine Standardfragen ohne strategische Dimension fallen nicht in unser Kernspektrum.'}
                  </p>
                </div>
              </section>

              {/* SECTION 3: 5-Step Process */}
              <section id="method" className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? '03 · 5-STEP METHODOLOGY' : '03 · 5-STUFEN-VERFAHREN'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-4 pb-4 border-b border-[#E4D9CC]">
                  {isEn ? 'Structured Advisory – Transparent and Targeted' : 'Strukturierter Verfahrensablauf'}
                </h2>

                <div className="space-y-4 mb-8">
                  {[
                    {
                      num: '1',
                      title: isEn ? 'Initial Fact-Finding & Dimension Analysis' : 'Erstanalyse des Sachverhalts',
                      desc: isEn 
                        ? 'Rigorous examination of legal dimensions, including statutory deadlines, jurisdictional competence, and conflict check.'
                        : 'Prüfung der rechtlichen und tatsächlichen Dimension, einschliesslich Zuständigkeitsfragen und Fristen.'
                    },
                    {
                      num: '2',
                      title: isEn ? 'Legal Classification & Risk Assessment' : 'Rechtliche Einordnung & Risikoanalyse',
                      desc: isEn 
                        ? 'Evaluation of prospect of success considering decisive precedent and administrative regulatory practice.'
                        : 'Bewertung der Erfolgsaussichten unter Berücksichtigung der oberstgerichtlichen Rechtsprechung und Behördenpraxis.'
                    },
                    {
                      num: '3',
                      title: isEn ? 'Strategic Procedural Planning' : 'Strategische Verfahrensplanung',
                      desc: isEn 
                        ? 'Determination of optimal remedies: action for annulment, injunctive relief, or preliminary ruling references.'
                        : 'Entscheidung über geeignete Rechtsbehelfe, gerichtliche Anträge oder behördliche Vergleichsverhandlungen.'
                    },
                    {
                      num: '4',
                      title: isEn ? 'Communication with Institutions & Opposing Parties' : 'Kommunikation mit Behörden & Institutionen',
                      desc: isEn 
                        ? 'High-level diplomatic and formal interaction with relevant regulators and dispute tribunals.'
                        : 'Vertretung gegenüber den beteiligten Stellen, Behörden oder Gegenparteien.'
                    },
                    {
                      num: '5',
                      title: isEn ? 'Litigation & Award Enforcement' : 'Prozessführung & Durchsetzung',
                      desc: isEn 
                        ? 'Decisive oral advocacy and enforcement of rights before supreme judicial organs and enforcement bodies.'
                        : 'Konsequente Prozessführung und anschliessende Vollstreckung des Titels.'
                    }
                  ].map((step, sIdx) => (
                    <div key={sIdx} className="p-4 bg-[#F8F6F2] border border-[#E4D9CC] flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-[#213134] text-[#C6A15B] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-serif text-sm font-semibold text-[#213134] mb-1">
                          {step.title}
                        </h4>
                        <p className="font-sans text-xs text-[#213134]/80 font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 4: Legal Framework & Forums */}
              <section id="framework" className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? '04 · INSTITUTIONAL FORUMS' : '04 · ZUSTÄNDIGE BEHÖRDEN & GERICHTE'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-6 pb-4 border-b border-[#E4D9CC]">
                  {isEn ? 'Key Forums & Decision-Making Bodies' : 'Zuständige Instanzen'}
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {content.forums.map((forum, fIdx) => (
                    <div key={fIdx} className="p-4 bg-[#F8F6F2] border border-[#E4D9CC] flex items-start gap-3">
                      <Landmark className="w-4 h-4 text-[#8a6828] shrink-0 mt-0.5" />
                      <div>
                        <span className="font-serif text-sm font-semibold text-[#213134] block">
                          {forum.name}
                        </span>
                        <span className="font-sans text-xs text-[#213134]/60">
                          {forum.loc}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* SECTION 5: Frequently Asked Questions */}
              <section id="faqs" className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? '05 · FREQUENTLY ASKED QUESTIONS' : '05 · HÄUFIGE FRAGEN'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-6 pb-4 border-b border-[#E4D9CC]">
                  {isEn ? 'Questions on Procedural Practice' : 'Fragen zur Praxis'}
                </h2>

                <div className="divide-y divide-[#E4D9CC]">
                  {content.faqs.map((faq, idx) => (
                    <div key={idx} className="py-4">
                      <button
                        type="button"
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full text-left font-serif text-base text-[#213134] hover:text-[#8a6828] transition-colors flex items-center justify-between gap-4"
                      >
                        <span className="font-medium">{faq.q}</span>
                        <ChevronDown className={`w-4 h-4 text-[#C6A15B] transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                      </button>
                      {openFaq === idx && (
                        <p className="mt-3 font-sans text-xs sm:text-sm text-[#213134]/80 font-light leading-relaxed">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              {/* Bottom Conversion Box */}
              <div className="bg-[#213134] text-white p-8 sm:p-10 border border-[#C6A15B]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-sans font-semibold block mb-1">
                    {isEn ? 'Direct Partner Inquiry' : 'Vertrauliche Ersteinschätzung'}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {isEn ? `Consult on ${currentPractice.title}` : `${currentPractice.title} einordnen lassen`}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light mt-1">
                    {isEn 
                      ? 'Confidential assessment of procedural options and jurisdiction by our senior counsel.'
                      : 'Vertrauliche Prüfung von Fristen, Handlungsoptionen und Erfolgsaussichten.'}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => onOpenContact('Zürich', currentPractice.title)}
                  className="shrink-0 px-6 py-3.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors shadow-md inline-flex items-center gap-2 min-h-[44px]"
                >
                  <span>{isEn ? 'Obtain Legal Assessment' : 'Rechtliche Einordnung erhalten'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Related Practices Bottom Switcher */}
              <div className="pt-8 border-t border-[#E4D9CC]">
                <h4 className="font-serif text-lg text-[#213134] mb-4">
                  {isEn ? 'Explore Other Practice Disciplines:' : 'Weitere Fachgebiete entdecken:'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {practices.filter(p => p.id !== currentPractice.id).slice(0, 2).map((otherP) => (
                    <div
                      key={otherP.id}
                      onClick={() => {
                        if (onSelectOtherPractice) onSelectOtherPractice(otherP.id);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="p-5 bg-white border border-[#E4D9CC] hover:border-[#C6A15B] cursor-pointer transition-all flex flex-col justify-between group shadow-xs"
                    >
                      <div>
                        <span className="text-[10px] font-sans uppercase tracking-widest text-[#8a6828] block mb-1">
                          {otherP.badge}
                        </span>
                        <h5 className="font-serif text-base text-[#213134] group-hover:text-[#8a6828] transition-colors mb-2">
                          {otherP.title}
                        </h5>
                        <p className="font-sans text-xs text-[#213134]/70 font-light line-clamp-2">
                          {otherP.shortDesc}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#E4D9CC] flex items-center justify-between text-xs font-sans text-[#8a6828] font-medium">
                        <span>{isEn ? 'View Guide' : 'Leitfaden öffnen'}</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Sticky Sidebar Column (4 Columns) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Practice Overview Fact Box */}
              <div className="bg-white border border-[#E4D9CC] p-6 shadow-xs">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? 'Key Overview' : 'Auf einen Blick'}
                </span>
                <h3 className="font-serif text-xl text-[#213134] font-medium mb-4 pb-3 border-b border-[#E4D9CC]">
                  {currentPractice.title}
                </h3>

                <ul className="space-y-3 font-sans text-xs text-[#213134]/85 font-light">
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#8a6828] shrink-0 mt-0.5" />
                    <span><strong>Foren:</strong> {currentPractice.regulators?.join(', ') || 'Nationale & Internationale Gerichte'}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Scale className="w-4 h-4 text-[#8a6828] shrink-0 mt-0.5" />
                    <span><strong>Jurisdiktion:</strong> Schweiz, EU, EWR</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8a6828] shrink-0 mt-0.5" />
                    <span><strong>Standorte:</strong> Zürich · Brüssel · Oslo</span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-[#E4D9CC]">
                  <span className="text-[11px] text-[#213134]/60 font-sans block mb-2">
                    {isEn ? 'Focus Topics:' : 'Schwerpunkte:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPractice.keyTopics.slice(0, 4).map((topic, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#F8F6F2] border border-[#E4D9CC] text-[10px] font-sans text-[#213134]/80">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Leading Attorneys Widget with click-through */}
              <div className="bg-white border border-[#E4D9CC] p-6 shadow-xs">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? 'Lead Counsel' : 'Führende Anwälte'}
                </span>
                <h3 className="font-serif text-xl text-[#213134] font-medium mb-4 pb-3 border-b border-[#E4D9CC]">
                  {isEn ? 'Specialized Attorneys' : 'Fachverantwortliche'}
                </h3>

                <div className="space-y-4">
                  {leadMembers.length > 0 ? (
                    leadMembers.map((lead) => (
                      <div 
                        key={lead.id}
                        onClick={() => onNavigateToTeamMember(lead.id)}
                        className="p-3 bg-[#F8F6F2] hover:bg-[#EFEAE4] border border-[#E4D9CC] hover:border-[#8a6828] cursor-pointer transition-all flex items-center gap-3 group"
                      >
                        <img
                          src={lead.imageUrl}
                          alt={lead.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-14 object-cover object-top border border-[#C6A15B]/50"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-semibold text-[#213134] group-hover:text-[#8a6828] transition-colors truncate">
                            {lead.name}
                          </h4>
                          <p className="text-[11px] text-[#8a6828] font-sans truncate">
                            {lead.role}
                          </p>
                          <span className="text-[10px] text-[#213134]/60 font-sans block">
                            {isEn ? 'View Profile →' : 'Profil ansehen →'}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Default fallback
                    team.slice(0, 2).map((lead) => (
                      <div 
                        key={lead.id}
                        onClick={() => onNavigateToTeamMember(lead.id)}
                        className="p-3 bg-[#F8F6F2] hover:bg-[#EFEAE4] border border-[#E4D9CC] hover:border-[#8a6828] cursor-pointer transition-all flex items-center gap-3 group"
                      >
                        <img
                          src={lead.imageUrl}
                          alt={lead.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-14 object-cover object-top border border-[#C6A15B]/50"
                        />
                        <div className="flex-1 min-w-0">
                          <h4 className="font-serif text-sm font-semibold text-[#213134] group-hover:text-[#8a6828] transition-colors truncate">
                            {lead.name}
                          </h4>
                          <p className="text-[11px] text-[#8a6828] font-sans truncate">
                            {lead.role}
                          </p>
                          <span className="text-[10px] text-[#213134]/60 font-sans block">
                            {isEn ? 'View Profile →' : 'Profil ansehen →'}
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>

              {/* Direct Mandate Widget */}
              <div className="bg-[#213134] text-white p-6 sm:p-8 border border-[#31464a] shadow-md">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C6A15B] font-sans font-semibold block mb-2">
                  {isEn ? 'Mandate Inquiry' : 'Direktanfrage'}
                </span>
                <h4 className="font-serif text-xl text-white font-medium mb-3">
                  {isEn ? `Consult on ${currentPractice.title}` : `${currentPractice.title} prüfen lassen`}
                </h4>
                <p className="font-sans text-xs text-[#E4D9CC]/80 font-light leading-relaxed mb-6">
                  {isEn
                    ? 'Short-term consultation on filing deadlines, proceedings, and international remedies.'
                    : 'Kurzfristige Fristprüfung und Begleitung für Verfahren vor Schweizer und europäischen Gerichten.'}
                </p>

                <button
                  type="button"
                  onClick={() => onOpenContact('Zürich', currentPractice.title)}
                  className="w-full py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2 mb-4"
                >
                  <Mail className="w-4 h-4" />
                  <span>{isEn ? 'Submit Case Inquiry' : 'Fall einreichen'}</span>
                </button>

                <div className="pt-4 border-t border-[#31464a] flex items-center justify-between text-xs text-[#E4D9CC]/80 font-sans">
                  <span>Tel: +41 44 260 88 00</span>
                  <span className="text-[#C6A15B]">Zürich · Brüssel</span>
                </div>
              </div>

            </div>

          </div>
        </div>

      </main>

      {/* Footer V1 */}
      <FooterV1
        language={language}
        onOpenContact={() => onOpenContact()}
      />
    </div>
  );
};
