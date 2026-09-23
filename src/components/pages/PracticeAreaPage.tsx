import React from 'react';
import { Language } from '../../types';
import { HeaderV1 } from '../v1/HeaderV1';
import { FooterV1 } from '../v1/FooterV1';
import { 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle2, 
  Mail, 
  Phone, 
  ChevronRight,
  UserCheck
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
  onNavigateToPracticesOverview?: () => void;
  onNavigateToContactPage?: () => void;
  onOpenElementorGuide: () => void;
}

export const PracticeAreaPage: React.FC<PracticeAreaPageProps> = ({
  language = 'de',
  selectedPracticeId = 'sanktionsrecht',
  onBackToHome,
  onBackToOverview,
  onSelectOtherPractice,
  onOpenContact,
  onNavigateToTeamMember,
  onNavigateToTeamOverview,
  onNavigateToPracticesOverview,
  onNavigateToContactPage,
  onOpenElementorGuide
}) => {
  const isEn = language === 'en';
  const { practices, team } = getLocalizedData(language);
  const currentPractice = practices.find(p => p.id === selectedPracticeId) || practices[0];

  // Exact PDF Content for German (with polished English localization)
  const content = {
    keyword: isEn ? 'European Law & Sanctions Attorney' : 'Europarecht Anwalt',
    seoTitle: isEn 
      ? 'European Law Attorney – Legal Certainty in EU & EEA Proceedings'
      : 'Europarecht Anwalt – Sicher durch EU- und EWR-Verfahren',
    metaDesc: isEn
      ? 'European law attorney for EU and EEA proceedings. Clear and sound advice on market access, sanctions and proceedings before ECJ, General Court and EU Commission.'
      : 'Europarecht Anwalt für EU- und EWR-Verfahren. Klare und fundierte Beratung bei Marktzugang, Sanktionen und Verfahren vor EuGH, EuG und EU-Kommission',
    
    // H1 & Hero
    h1: isEn 
      ? 'European Law Attorney – Legal Certainty in EU and EEA Proceedings'
      : 'Europarecht Anwalt – Sicher durch EU- und EWR-Verfahren',
    heroP1: isEn
      ? 'Proceedings with a European law dimension are regularly characterized by strict procedural requirements, tight statutory deadlines, and complex institutional mechanisms. Whether dealing with proceedings before the European Commission, the General Court (EGC), the Court of Justice of the European Union (ECJ), or securing cross-border market access within the EU or the EEA – precise legal classification is paramount.'
      : 'Verfahren mit europarechtlichem Bezug sind regelmässig durch besondere formelle Anforderungen, kurze Fristen und komplexe institutionelle Abläufe geprägt. Ob es um ein Verfahren vor der Europäischen Kommission, dem Gericht der Europäischen Union (EuG), dem Europäischen Gerichtshof (EuGH) geht oder um die Sicherung des Marktzugangs innerhalb der EU bzw. des EWR – eine präzise rechtliche Einordnung ist entscheidend.',
    heroP2: isEn
      ? 'A specialized European law attorney guides clients from initial legal analysis through national court litigation involving Union law to preliminary ruling references and annulment actions before the ECJ. The objective is a robust, strategically sound, and commercially viable solution.'
      : 'Ein spezialisierter Europarecht Anwalt begleitet Mandanten von der ersten Analyse über nationale Gerichtsverfahren mit unionsrechtlichem Bezug bis hin zu Vorabentscheidungsverfahren oder Nichtigkeitsklagen vor dem EuGH. Ziel ist eine rechtssichere, strategisch fundierte und wirtschaftlich tragfähige Lösung.',
    heroP3: isEn
      ? 'The distinct complexity of European law proceedings lies in the intricate interplay between domestic law, Union law, and – in the EEA context – additional supranational frameworks. Operating in this sphere without thorough command of institutional processes exposes clients to substantial legal and commercial risks.'
      : 'Die Besonderheit europarechtlicher Verfahren liegt in der Verzahnung von nationalem Recht, Unionsrecht und – im EWR-Kontext – weiteren überstaatlichen Regelwerken. Wer hier ohne fundierte Kenntnis der institutionellen Abläufe agiert, setzt sich erheblichen Risiken aus.',
    
    // Section 1: H2 Wenn europäische Vorschriften...
    s1Eyebrow: isEn ? 'PRACTICAL CHALLENGES' : 'PROBLEMSTELLUNGEN IN DER PRAXIS',
    s1H2: isEn 
      ? 'When European Regulations Restrict Commercial Success'
      : 'Wenn europäische Vorschriften den Geschäftserfolg bremsen',
    s1Intro: isEn
      ? 'European law questions frequently affect companies and individuals in economically sensitive situations.'
      : 'Europarechtliche Fragestellungen betreffen Unternehmen und betroffene Personen häufig in wirtschaftlich sensiblen Situationen.',
    s1ConstellationsTitle: isEn ? 'Typical Scenarios Encountered in Practice:' : 'Typische Konstellationen sind:',
    s1Constellations: [
      {
        title: isEn ? 'Market access in the EU or EEA:' : 'Marktzugang in der EU bzw. im EWR:',
        text: isEn 
          ? 'Companies intending to market products or offer services across the Union face regulatory requirements whose scope, classification, and statutory interpretation remain contested.'
          : 'Unternehmen beabsichtigen, Produkte oder Dienstleistungen unionsweit anzubieten, sehen sich jedoch mit regulatorischen Anforderungen konfrontiert, deren Reichweite und Auslegung unklar sind.'
      },
      {
        title: isEn ? 'EU financial sanctions & fundamental rights:' : 'EU-Finanzsanktionen:',
        text: isEn
          ? 'The legality of restrictive sanction measures under the EU Charter of Fundamental Rights or the jurisprudence of the ECJ must be rigorously reviewed and challenged.'
          : 'Die Rechtmässigkeit von Sanktionsmassnahmen unter Berücksichtigung der EU-Grundrechtecharta oder der Rechtsprechung des EuGH steht zur Prüfung.'
      },
      {
        title: isEn ? 'National proceedings with Union law dimensions:' : 'Nationale Verfahren mit unionsrechtlichem Bezug:',
        text: isEn
          ? 'Litigation before domestic courts raises questions on the interpretation or validity of Union law, necessitating strategic references to the ECJ for preliminary rulings.'
          : 'Verfahren vor nationalen Gerichten werfen Fragen zur Auslegung oder Gültigkeit von Unionsrecht auf, die gegebenenfalls dem EuGH zur Vorabentscheidung vorzulegen sind.'
      }
    ],
    s1Outro: isEn
      ? 'In these situations, a purely national perspective is regularly insufficient. Missing alignment with Union law standards leads to delays, legal uncertainty, or economic disadvantages. A structured European law review establishes decisive clarity on courses of action, prospects of success, and legal risks.'
      : 'In diesen Situationen ist eine rein nationale Betrachtung regelmässig unzureichend. Fehlende Abstimmung mit unionsrechtlichen Vorgaben kann zu Verzögerungen, Rechtsunsicherheit oder wirtschaftlichen Nachteilen führen. Eine strukturierte europarechtliche Prüfung schafft Klarheit über Handlungsoptionen, Erfolgsaussichten und Risiken.',

    // Section 2: H2 Anwendungsbereiche...
    s2Eyebrow: isEn ? 'SCOPE & MANDATE DEFINITION' : 'MANDATSABGRENZUNG & FOKUS',
    s2H2: isEn
      ? 'Areas of Application for Specialized European Law Advisory'
      : 'Anwendungsbereiche einer spezialisierten Europarechtsberatung',
    s2Lead: isEn
      ? 'Clear mandate scoping maximizes efficiency and prevents unnecessary delays.'
      : 'Eine klare Mandatsabgrenzung dient der Effizienz und verhindert unnötige Umwege.',
    s2Subheading: isEn
      ? 'European law advisory is particularly indicated for:'
      : 'Europarechtliche Beratung ist insbesondere sinnvoll für:',
    s2Points: [
      isEn ? 'Companies with ongoing or impending EU or EEA proceedings' : 'Unternehmen mit laufenden oder drohenden EU- oder EWR-Verfahren',
      isEn ? 'Swiss enterprises, especially in regulated sectors (e.g. MedTech), seeking market access in the EU' : 'Schweizer Unternehmen, insbesondere im regulierten Bereich (z. B. MedTech), die Marktzugang in der EU anstreben',
      isEn ? 'Sanctioned individuals or entities seeking legal review of Union law restrictive measures' : 'Sanktionierte Personen oder Unternehmen, die unionsrechtliche Massnahmen überprüfen lassen möchten',
      isEn ? 'Clients facing strategic questions at the intersection of domestic and European law' : 'Mandanten mit strategischen Fragestellungen im Spannungsfeld zwischen nationalem und europäischem Recht'
    ],
    s2Exclusion: isEn
      ? 'This specialization is less suitable for matters without economic or Union law relevance or for purely standardized legal inquiries lacking a European dimension.'
      : 'Weniger geeignet ist eine solche Spezialisierung für Sachverhalte ohne wirtschafts- oder unionsrechtlichen Bezug oder für rein standardisierte Rechtsfragen ohne europarechtliche Dimension.',

    // Section 3: H2 Strukturierte Europarechtsberatung...
    s3Eyebrow: isEn ? 'STRUCTURED METHODOLOGY' : 'VERFAHRENSABLAUF',
    s3H2: isEn
      ? 'Structured European Law Advisory – Transparent and Focused'
      : 'Strukturierte Europarechtsberatung – transparent und zielgerichtet',
    s3Intro: isEn
      ? 'European law mandates require a systematic and strategic approach. The representation regularly follows a defined five-stage process:'
      : 'Europarechtliche Mandate erfordern ein systematisches und strategisches Vorgehen. Die Beratung folgt regelmässig einem klaren Ablauf:',
    s3Steps: [
      {
        num: '01',
        title: isEn ? 'Initial Analysis of Facts' : '1. Erstanalyse des Sachverhalts',
        desc: isEn 
          ? 'Comprehensive review of the Union and EEA legal dimensions, including procedural deadlines and institutional jurisdictional questions.'
          : 'Prüfung der unions- und ggf. EWR-rechtlichen Dimension, einschliesslich Zuständigkeitsfragen und Fristen.'
      },
      {
        num: '02',
        title: isEn ? 'Legal Classification & Risk Assessment' : '2. Rechtliche Einordnung und Risikoanalyse',
        desc: isEn 
          ? 'Evaluation of success prospects taking into account the relevant jurisprudence of the ECJ and EGC, as well as the administrative practice of the European Commission.'
          : 'Bewertung der Erfolgsaussichten unter Berücksichtigung der einschlägigen Rechtsprechung des EuGH und des EuG sowie der Praxis der Europäischen Kommission.'
      },
      {
        num: '03',
        title: isEn ? 'Strategic Procedural Planning' : '3. Strategische Verfahrensplanung',
        desc: isEn 
          ? 'Determination of suitable legal remedies, such as actions for annulment, actions for failure to act, or the initiation of a preliminary reference to the ECJ.'
          : 'Entscheidung über geeignete Rechtsbehelfe, etwa Nichtigkeitsklagen, Untätigkeitsklagen oder die Anregung einer Vorlage an den EuGH.'
      },
      {
        num: '04',
        title: isEn ? 'Institutional & Authority Dialogue' : '4. Kommunikation mit Institutionen und Behörden',
        desc: isEn 
          ? 'Formal representation before the European Commission, national administrative bodies, and competent Union institutions.'
          : 'Vertretung gegenüber der Europäischen Kommission, nationalen Behörden sowie vor den Unionsgerichten.'
      },
      {
        num: '05',
        title: isEn ? 'Judicial Representation' : '5. Prozessvertretung',
        desc: isEn 
          ? 'Objective, rigorous representation before the General Court (EGC) or Court of Justice (ECJ) whenever court proceedings are necessary.'
          : 'Sachliche und präzise Vertretung vor dem EuG oder EuGH, sofern ein gerichtliches Verfahren erforderlich ist.'
      }
    ],
    s3Outro: isEn
      ? 'This structured approach ensures that clients remain informed of procedural status, statutory risks, and next tactical steps at all times. Transparency and legal clarity remain paramount.'
      : 'Durch diese strukturierte Vorgehensweise wird gewährleistet, dass Mandanten jederzeit über Verfahrensstand, Risiken und weitere Schritte informiert sind. Transparenz und rechtliche Nachvollziehbarkeit stehen im Vordergrund.',

    // Section 4: H2 Besonderheiten der Vertretung...
    s4Eyebrow: isEn ? 'INSTITUTIONAL EXPERTISE' : 'INSTITUTIONELLE EXPERTISE & PERSÖNLICHKEITEN',
    s4H2: isEn
      ? 'Key Distinctions of Representation in European Law'
      : 'Besonderheiten der Vertretung im Europarecht',
    s4P1: isEn
      ? 'Representation in EU and EEA proceedings differs in substantial respects from purely national litigation. Decisive are first and foremost the specialized procedural requirements and strict statutory time limits governing the Union courts. Proceedings before the General Court (EGC) or the Court of Justice (ECJ) adhere to distinct procedural rules that diverge significantly from domestic civil and administrative codes.'
      : 'Die Vertretung in EU- und EWR-Verfahren unterscheidet sich in wesentlichen Punkten von rein nationalen Verfahren. Massgeblich sind zunächst die besonderen formellen Anforderungen und Fristen, die vor den Unionsgerichten gelten und strikt einzuhalten sind. Verfahren vor dem Gericht der Europäischen Union (EuG) oder dem Europäischen Gerichtshof (EuGH) folgen eigenen prozessualen Regeln, die sich deutlich von nationalen Prozessordnungen unterscheiden.',
    s4P2: isEn
      ? 'Competent representation further requires an in-depth understanding of institutional decision-making mechanisms within the EU. The internal working methods of the European Commission, investigative workflows, and institutional competences fundamentally shape the strategic direction of any proceeding. Equally critical is the precise synthesis of Union law arguments with domestic law, particularly in preliminary ruling references. Incorporating the fundamental rights standards of the EU Charter represents an additional core pillar.'
      : 'Eine sachgerechte Vertretung erfordert zudem ein vertieftes Verständnis der Entscheidungsmechanismen innerhalb der EU-Institutionen. Die Arbeitsweise der Europäischen Kommission, interne Prüfungsabläufe, sowie institutionelle Zuständigkeiten, beeinflussen die strategische Ausrichtung eines Verfahrens erheblich. Ebenso entscheidend ist die präzise Verzahnung unionsrechtlicher Argumentationslinien mit nationalem Recht, insbesondere bei Vorlageverfahren vor dem EuGH. Die Berücksichtigung der grundrechtlichen Massstäbe der EU-Grundrechtecharta bildet einen weiteren zentralen Aspekt.',
    s4P3: isEn
      ? 'Extensive forensic experience before the Union courts and European authorities enables a realistic assessment of procedural dynamics and prospects of enforcement.'
      : 'Erfahrung im Umgang mit Unionsgerichten und europäischen Behörden ermöglicht eine realistische Einschätzung von Verfahrensdynamik und Durchsetzungschancen.',
    
    // Team Bios from PDF
    s4TeamLead: isEn
      ? 'Baudenbacher Law unites institutional, academic, and forensic expertise in this domain:'
      : 'Baudenbacher Law vereint hierfür institutionelle, wissenschaftliche und forensische Expertise:',
    lawyers: [
      {
        id: 'carl-baudenbacher',
        name: 'Prof. Dr. Dr. h.c. Carl Baudenbacher',
        role: isEn ? 'Partner · Former President of the EFTA Court' : 'Partner · Ehem. Präsident des EFTA-Gerichtshofs',
        bio: isEn
          ? 'Prof. Dr. Carl Baudenbacher is among the defining judicial figures of the European Internal Market and EEA law, contributing decades of experience in the judicial interpretation and application of Union law provisions.'
          : 'Prof. Dr. Carl Baudenbacher, ehemaliger Präsident des EFTA-Gerichtshofs, gehört zu den prägenden Persönlichkeiten des europäischen Binnenmarkt- und EWR-Rechts und bringt langjährige Erfahrung in der richterlichen Auslegung und Anwendung unionsrechtlicher Vorschriften ein.',
        image: 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=85'
      },
      {
        id: 'mads-andenas',
        name: 'Prof. Dr. Dr. Mads Andenas KC',
        role: isEn ? 'Senior Of Counsel · Professor of Law' : 'Of Counsel · Professor für Europa- & Wirtschaftsrecht',
        bio: isEn
          ? 'Prof. Dr. Dr. Mads Andenas complements this expertise through comprehensive academic and forensic practice in European and international economic law, as well as representation before European courts.'
          : 'Prof. Dr. Dr. Mads Andenas ergänzt diese Expertise durch umfassende akademische und praktische Tätigkeit im europäischen und internationalen Wirtschaftsrecht sowie durch Erfahrung in Verfahren vor europäischen Gerichten.',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=85'
      },
      {
        id: 'laura-baudenbacher',
        name: 'Dr. Laura Melusine Baudenbacher',
        role: isEn ? 'Managing Partner · Attorney at Law' : 'Partnerin · Rechtsanwältin (Zürich & Brüssel)',
        bio: isEn
          ? 'Dr. Laura Melusine Baudenbacher possesses deep knowledge in EU and EEA commercial law, particularly in investment protection and competition law, and is admitted in multiple European jurisdictions.'
          : 'Dr. Laura Melusine Baudenbacher verfügt über vertiefte Kenntnisse im EU- und EWR-Wirtschaftsrecht, insbesondere im Investitionsschutz- und Wettbewerbsrecht, und ist in mehreren europäischen Rechtsordnungen zugelassen.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=85'
      }
    ],
    s4Summary: isEn
      ? 'The combination of judicial insight, academic foundation, and forensic practice ensures a thoroughly grounded and strategically decisive representation in European law.'
      : 'Die Kombination aus gerichtlicher Erfahrung, wissenschaftlicher Fundierung und forensischer Praxis gewährleistet eine fundierte und strategisch durchdachte Vertretung im Europarecht.',

    // CTA
    ctaBtn: isEn ? 'Obtain Legal Assessment' : 'Rechtliche Einordnung erhalten'
  };

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#213134] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      {/* Header V1 */}
      <HeaderV1
        language={language}
        onOpenContact={() => onOpenContact('Zürich', currentPractice.title)}
        onOpenElementorGuide={onOpenElementorGuide}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview || onBackToOverview}
        onNavigateToContactPage={onNavigateToContactPage || (() => onOpenContact())}
      />

      <main className="flex-1">
        
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Dark Petrol + Large Image + Layered Overlay) */}
        {/* Elementor Structure: Full-width container, background image, 2-column/1-column */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-[#213134] text-white pt-24 sm:pt-28 pb-16 md:pb-24 border-b border-[#31464a]">
          {/* Background Image with Dark Petrol Overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=85"
              alt="Baudenbacher Law Architecture"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center filter brightness-70 scale-105"
            />
            <div className="absolute inset-0 bg-[#213134]/85 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#213134] via-[#213134]/90 to-[#213134]/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#213134] via-transparent to-[#213134]/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Top Breadcrumb Navigation */}
            <div className="mb-6 flex flex-wrap items-center gap-3 text-xs font-sans tracking-wider uppercase">
              {onBackToOverview ? (
                <button
                  type="button"
                  onClick={onBackToOverview}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#283d41] hover:bg-[#344d52] border border-[#445b60] text-[#C6A15B] hover:text-white transition-colors cursor-pointer group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>{isEn ? 'All Practice Areas' : 'Alle Fachgebiete'}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={onBackToHome}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#283d41] hover:bg-[#344d52] border border-[#445b60] text-[#C6A15B] hover:text-white transition-colors cursor-pointer group"
                >
                  <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                  <span>{isEn ? 'Back to Home' : 'Startseite'}</span>
                </button>
              )}
              <span className="text-white/30 hidden sm:inline">|</span>
              <span className="text-[#E4D9CC]/80 font-medium">{content.keyword}</span>
            </div>

            <div className="max-w-4xl">
              {/* Eyebrow */}
              <div className="flex items-center gap-2.5 mb-4">
                <span className="w-6 h-[2px] bg-[#C6A15B]"></span>
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                  {content.keyword}
                </span>
              </div>

              {/* H1 Heading directly from PDF */}
              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-normal text-white mb-6 leading-[1.18] tracking-tight">
                {content.h1}
              </h1>

              {/* 3 Lead Paragraphs directly from PDF */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#E4D9CC]/90 font-light leading-relaxed mb-8 max-w-3xl">
                <p>{content.heroP1}</p>
                <p>{content.heroP2}</p>
                <p className="text-[#E4D9CC]/80 italic border-l-2 border-[#C6A15B]/70 pl-3.5 py-1">
                  {content.heroP3}
                </p>
              </div>

              {/* Primary Call to Action Button from PDF Page 4 */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => onOpenContact('Zürich', currentPractice.title)}
                  className="px-6 py-3.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2.5 shadow-md min-h-[44px] cursor-pointer"
                >
                  <span>{content.ctaBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                {onBackToOverview && (
                  <button
                    type="button"
                    onClick={onBackToOverview}
                    className="px-5 py-3.5 bg-[#283d41] hover:bg-[#344d52] text-white border border-[#445b60] text-xs font-sans uppercase tracking-wider font-medium transition-colors inline-flex items-center gap-2 min-h-[44px] cursor-pointer"
                  >
                    <span>{isEn ? 'All Practice Areas' : 'Alle Fachgebiete'}</span>
                  </button>
                )}
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 2. SECTION: Wenn europäische Vorschriften den Geschäftserfolg bremsen */}
        {/* Background: Light / Off-White (#F8F6F2) */}
        {/* Elementor Structure: 2-Column Section (60% Text, 40% Image) - No heavy boxes */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#F8F6F2] text-[#213134] border-b border-[#E4D9CC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column (Text & Clean Typography List) */}
              <div className="lg:col-span-7">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#8a6828] font-semibold block mb-3">
                  {content.s1Eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#213134] tracking-tight leading-[1.2] mb-6">
                  {content.s1H2}
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#213134]/85 leading-relaxed font-light mb-6">
                  {content.s1Intro}
                </p>

                <h3 className="font-serif text-xl font-normal text-[#213134] mb-4">
                  {content.s1ConstellationsTitle}
                </h3>

                {/* Clean Editorial List (Elementor Text/Icon List friendly - no nested cards) */}
                <div className="space-y-4 mb-8 pl-1">
                  {content.s1Constellations.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[#213134]/85 font-light leading-relaxed">
                      <span className="w-2 h-2 rounded-full bg-[#C6A15B] shrink-0 mt-2" />
                      <div>
                        <strong className="font-medium text-[#213134]">{item.title}</strong>{' '}
                        <span>{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="font-sans text-sm sm:text-base text-[#213134]/80 leading-relaxed font-light border-l-2 border-[#C6A15B] pl-4 py-1">
                  {content.s1Outro}
                </p>
              </div>

              {/* Right Column (Single Clean Editorial Image Widget) */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden shadow-lg border border-[#E4D9CC]">
                  <div className="aspect-[4/3] sm:aspect-[4/3] w-full overflow-hidden bg-[#213134]">
                    <img
                      src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1200&q=85"
                      alt="Justitia & Europarechtliche Regulierungsprüfung"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4 bg-white border-t border-[#E4D9CC]">
                    <p className="text-xs font-serif text-[#213134] italic">
                      {isEn ? 'Strategic legal clarity in cross-border European regulations and sanctions proceedings' : 'Strategische Klarheit bei grenzüberschreitenden EU-Regulierungen und Sanktionsverfahren'}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 3. SECTION: Anwendungsbereiche einer spezialisierten Europarechtsberatung */}
        {/* Background: Dark Petrol (#213134) */}
        {/* Elementor Structure: 2-Column Section (40% Image, 60% Text with bullet points) */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#213134] text-white border-b border-[#31464a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Visual Image */}
              <div className="lg:col-span-5 order-2 lg:order-1">
                <div className="relative overflow-hidden shadow-2xl border border-[#374e52]">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#182527]">
                    <img
                      src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=85"
                      alt="Strategische Rechtsberatung & Konferenzraum Baudenbacher Law"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Right Column: Editorial Text directly from PDF */}
              <div className="lg:col-span-7 order-1 lg:order-2">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold block mb-3">
                  {content.s2Eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-[38px] font-normal text-white tracking-tight leading-[1.2] mb-6">
                  {content.s2H2}
                </h2>

                <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 leading-relaxed font-light mb-6">
                  {content.s2Lead}
                </p>

                <h3 className="font-serif text-lg text-white font-normal mb-4">
                  {content.s2Subheading}
                </h3>

                {/* Clean Checklist */}
                <div className="space-y-3 mb-8">
                  {content.s2Points.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-3 text-sm sm:text-base text-[#E4D9CC]/90 font-light leading-relaxed">
                      <CheckCircle2 className="w-5 h-5 text-[#C6A15B] shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/75 italic leading-relaxed border-l border-[#C6A15B]/50 pl-3">
                  {content.s2Exclusion}
                </p>
              </div>

            </div>
          </div>
        </section>


        {/* ========================================================================= */}
        {/* 4. SECTION: Strukturierte Europarechtsberatung – transparent und zielgerichtet */}
        {/* Background: Light / Off-White (#F8F6F2) */}
        {/* Elementor Structure: 1 Column with linear 5-step numbered list (clean typography) */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#F8F6F2] text-[#213134] border-b border-[#E4D9CC]">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Section Header */}
            <div className="mb-12 md:mb-16 text-center max-w-3xl mx-auto">
              <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#8a6828] font-semibold block mb-3">
                {content.s3Eyebrow}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-normal text-[#213134] tracking-tight leading-[1.2] mb-5">
                {content.s3H2}
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#213134]/80 leading-relaxed font-light">
                {content.s3Intro}
              </p>
            </div>

            {/* 5-Step Linear Sequence with clean horizontal dividing lines (Simple Elementor Layout) */}
            <div className="space-y-0 divide-y divide-[#E4D9CC] border-y border-[#E4D9CC] mb-10 bg-white shadow-xs">
              {content.s3Steps.map((step, sIdx) => (
                <div key={sIdx} className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 hover:bg-[#FAF8F5] transition-colors">
                  <div className="w-12 h-12 rounded-full bg-[#213134] text-[#C6A15B] font-serif text-lg font-medium flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-lg sm:text-xl font-medium text-[#213134] mb-1.5">
                      {step.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-[#213134]/80 font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Step Outro */}
            <p className="font-sans text-xs sm:text-sm text-[#213134]/75 text-center font-light leading-relaxed max-w-3xl mx-auto">
              {content.s3Outro}
            </p>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 5. SECTION: Besonderheiten der Vertretung im Europarecht & Fachanwälte */}
        {/* Background: Dark Petrol (#213134) */}
        {/* Elementor Structure: 2-Column Section (Editorial on left, 3 Lawyer Bios on right) */}
        {/* ========================================================================= */}
        <section className="py-20 md:py-28 bg-[#213134] text-white border-b border-[#31464a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Left Column: Editorial Insights from PDF */}
              <div className="lg:col-span-6">
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold block mb-3">
                  {content.s4Eyebrow}
                </span>

                <h2 className="font-serif text-3xl sm:text-4xl md:text-[40px] font-normal text-white tracking-tight leading-[1.2] mb-6">
                  {content.s4H2}
                </h2>

                <div className="space-y-4 font-sans text-sm sm:text-base text-[#E4D9CC]/90 font-light leading-relaxed mb-6">
                  <p>{content.s4P1}</p>
                  <p>{content.s4P2}</p>
                  <p>{content.s4P3}</p>
                </div>

                <div className="p-4 bg-[#283d41]/80 border-l-2 border-[#C6A15B] text-xs sm:text-sm text-[#E4D9CC] italic">
                  {content.s4Summary}
                </div>
              </div>

              {/* Right Column: 3 Key Lawyers Named in the PDF Document */}
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-sans font-semibold block mb-2">
                  {content.s4TeamLead}
                </span>

                {content.lawyers.map((lawyer) => (
                  <div
                    key={lawyer.id}
                    onClick={() => onNavigateToTeamMember(lawyer.id)}
                    className="group cursor-pointer p-5 bg-[#283d41] hover:bg-[#31464a] border border-[#445b60] transition-all flex flex-col sm:flex-row items-start gap-4"
                  >
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-none overflow-hidden shrink-0 border border-[#C6A15B]/40 bg-[#1e2c2f]">
                      <img
                        src={lawyer.image}
                        alt={lawyer.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-serif text-base sm:text-lg font-normal text-white group-hover:text-[#C6A15B] transition-colors">
                          {lawyer.name}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
                      </div>
                      <p className="text-[11px] font-sans text-[#C6A15B] tracking-wider uppercase mb-2">
                        {lawyer.role}
                      </p>
                      <p className="font-sans text-xs text-[#E4D9CC]/85 font-light leading-relaxed">
                        {lawyer.bio}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </section>


        {/* ========================================================================= */}
        {/* 6. CALL TO ACTION: Direct Assessment Inquiry (Matching PDF Page 4 Button) */}
        {/* Background: Light / Off-White (#F8F6F2) */}
        {/* Elementor Structure: Centered Text & Button Banner */}
        {/* ========================================================================= */}
        <section className="py-16 md:py-24 bg-[#EFEAE4] text-[#213134] border-t border-[#E4D9CC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#8a6828] font-semibold block mb-3">
              {isEn ? 'CONFIDENTIAL INQUIRY' : 'VERTRAULICHE ERSTEINORDNUNG'}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal text-[#213134] tracking-tight mb-4">
              {isEn ? 'Direct Legal Assessment for Your European Matter' : 'Rechtliche Einordnung für Ihr Verfahren anfordern'}
            </h2>
            <p className="font-sans text-sm sm:text-base text-[#213134]/80 font-light leading-relaxed mb-8 max-w-2xl mx-auto">
              {isEn 
                ? 'Contact our partners directly in Zurich, Brussels, or Oslo for an initial confidential evaluation of your EU, EEA, or sanctions matter.'
                : 'Kontaktieren Sie unsere Partner in Zürich, Brüssel oder Oslo für eine diskrete Ersteinschätzung Ihres europarechtlichen oder sanktionsrechtlichen Anliegens.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => onOpenContact('Zürich', currentPractice.title)}
                className="px-8 py-4 bg-[#213134] hover:bg-[#283d41] text-white font-sans text-xs uppercase tracking-wider font-semibold transition-colors inline-flex items-center gap-2 shadow-md cursor-pointer"
              >
                <span>{content.ctaBtn}</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C6A15B]" />
              </button>

              <button
                type="button"
                onClick={onOpenElementorGuide}
                className="px-6 py-4 bg-white hover:bg-[#F8F6F2] text-[#213134] border border-[#E4D9CC] font-sans text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer"
              >
                <span>{isEn ? 'Elementor Guide' : 'Elementor-Struktur'}</span>
              </button>
            </div>
          </div>
        </section>

      </main>

      {/* Footer V1 */}
      <FooterV1
        language={language}
        onOpenContact={onNavigateToContactPage || (() => onOpenContact())}
        onBackToHome={onBackToHome}
        onNavigateToTeamOverview={onNavigateToTeamOverview}
        onNavigateToPracticesOverview={onNavigateToPracticesOverview || onBackToOverview}
        onNavigateToContactPage={onNavigateToContactPage || (() => onOpenContact())}
      />
    </div>
  );
};
