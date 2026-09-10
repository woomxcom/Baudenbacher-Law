import React from 'react';
import { Language, HomePageVersion } from '../../types';
import { HeaderV1 } from '../v1/HeaderV1';
import { HeaderV2 } from '../v2/HeaderV2';
import { FooterV1 } from '../v1/FooterV1';
import { FooterV2 } from '../v2/FooterV2';
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
  Code
} from 'lucide-react';

import { getLocalizedData } from '../../data/translations';

interface PracticeAreaPageProps {
  language: Language;
  pageVersion: HomePageVersion;
  selectedPracticeId?: string;
  onSelectVersion: (v: HomePageVersion) => void;
  onBackToHome: () => void;
  onOpenContact: (officeCity?: string, practice?: string) => void;
  onNavigateToTeamMember: (memberId: string) => void;
  onOpenElementorGuide: () => void;
}

export const PracticeAreaPage: React.FC<PracticeAreaPageProps> = ({
  language = 'de',
  pageVersion = 'version1',
  selectedPracticeId = 'europarecht',
  onSelectVersion,
  onBackToHome,
  onOpenContact,
  onNavigateToTeamMember,
  onOpenElementorGuide
}) => {
  const isEn = language === 'en';
  const { practices } = getLocalizedData(language);
  const currentPractice = practices.find(p => p.id === selectedPracticeId) || practices[0];

  return (
    <div className="min-h-screen bg-[#F8F6F2] text-[#213134] flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      
      {/* Dynamic Header according to selected layout version */}
      {pageVersion === 'version1' ? (
        <HeaderV1
          pageVersion={pageVersion}
          language={language}
          onSelectVersion={onSelectVersion}
          onOpenContact={() => onOpenContact()}
          onOpenElementorGuide={onOpenElementorGuide}
          onBackToHome={onBackToHome}
        />
      ) : (
        <HeaderV2
          pageVersion={pageVersion}
          onSelectVersion={onSelectVersion}
          onOpenContact={() => onOpenContact()}
          onOpenElementorGuide={onOpenElementorGuide}
          onBackToHome={onBackToHome}
        />
      )}

      <main className="flex-1 pb-20">

        {/* Practice Hero Section */}
        <section className="bg-[#213134] text-white pt-24 sm:pt-28 pb-14 md:pb-20 border-b border-[#31464a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Direct Back to Home / Practices navigation */}
            <div className="mb-6">
              <button
                type="button"
                onClick={onBackToHome}
                className="inline-flex items-center gap-1.5 text-xs font-sans tracking-wider uppercase text-[#C6A15B] hover:text-white transition-colors cursor-pointer group"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>{isEn ? 'Back to Overview' : 'Zurück zur Übersicht'}</span>
              </button>
            </div>

            <div className="max-w-3xl">
              
              <div className="flex items-center gap-2 mb-3">
                <Globe2 className="w-4 h-4 text-[#C6A15B]" />
                <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
                  {isEn ? `Practice Area · ${currentPractice.title}` : `Fachgebiet · ${currentPractice.title}`}
                </span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white mb-6 leading-tight">
                {currentPractice.id === 'europarecht'
                  ? (isEn 
                    ? 'European Law Attorney – Secure Through EU and EEA Proceedings'
                    : 'Europarecht Anwalt – Sicher durch EU- und EWR-Verfahren')
                  : currentPractice.title}
              </h1>

              {/* Lead paragraphs matching PDF or customized for selected practice */}
              <div className="space-y-4 font-sans text-sm sm:text-base text-[#E4D9CC]/90 font-light leading-relaxed mb-8">
                {currentPractice.id === 'europarecht' ? (
                  <>
                    <p>
                      {isEn
                        ? 'Proceedings with a European law dimension are routinely characterized by strict formal requirements, tight deadlines, and complex institutional mechanisms. Whether before the European Commission, the General Court (EGC), the European Court of Justice (ECJ), or securing cross-border market access within the EU or EEA – precise legal classification is paramount.'
                        : 'Verfahren mit europarechtlichem Bezug sind regelmässig durch besondere formelle Anforderungen, kurze Fristen und komplexe institutionelle Abläufe geprägt. Ob es um ein Verfahren vor der Europäischen Kommission, dem Gericht der Europäischen Union (EuG), dem Europäischen Gerichtshof (EuGH) geht oder um die Sicherung des Marktzugangs innerhalb der EU bzw. des EWR – eine präzise rechtliche Einordnung ist entscheidend.'}
                    </p>
                    <p>
                      {isEn
                        ? 'A specialized European law attorney guides clients from initial legal analysis through national court litigation involving Union law to preliminary ruling references and annulment actions before the ECJ. The ultimate objective is a legally secure, strategically sound, and commercially viable solution.'
                        : 'Ein spezialisierter Europarecht Anwalt begleitet Mandanten von der ersten Analyse über nationale Gerichtsverfahren mit unionsrechtlichem Bezug bis hin zu Vorabentscheidungsverfahren oder Nichtigkeitsklagen vor dem EuGH. Ziel ist eine rechtssichere, strategisch fundierte und wirtschaftlich tragfähige Lösung.'}
                    </p>
                    <p className="text-xs sm:text-sm text-[#C6A15B]/90 italic border-l-2 border-[#C6A15B] pl-4">
                      {isEn
                        ? 'The distinct complexity of European law proceedings lies in the intricate interplay between domestic law, Union law, and – in the EEA context – supranational legal frameworks. Acting without in-depth mastery of institutional dynamics exposes clients to substantial strategic and financial risks.'
                        : 'Die Besonderheit europarechtlicher Verfahren liegt in der Verzahnung von nationalem Recht, Unionsrecht und – im EWR-Kontext – weiteren überstaatlichen Regelwerken. Wer hier ohne fundierte Kenntnis der institutionellen Abläufe agiert, setzt sich erheblichen Risiken aus.'}
                    </p>
                  </>
                ) : (
                  <>
                    <p className="text-base sm:text-lg text-white font-normal leading-relaxed">
                      {currentPractice.fullDesc || currentPractice.shortDesc}
                    </p>
                    <p>
                      {isEn
                        ? `Baudenbacher Law AG delivers targeted strategic counsel and dispute representation in ${currentPractice.title}, safeguarding clients in complex cross-border scenarios across Switzerland, the European Union, and Liechtenstein.`
                        : `Baudenbacher Law AG bietet gezielte strategische Beratung und Vertretung im Bereich ${currentPractice.title}. Wir schützen Unternehmen und Einzelpersonen in anspruchsvollen grenzüberschreitenden Konstellationen.`}
                    </p>
                  </>
                )}
              </div>

              {/* Primary Call to Action Button */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onOpenContact('Zürich', currentPractice.title)}
                  className="px-6 py-3.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2.5 shadow-md"
                >
                  <span>{isEn ? 'Obtain Legal Assessment' : 'Rechtliche Einordnung erhalten'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center gap-3 text-xs font-sans text-[#E4D9CC]/80">
                  <ShieldAlert className="w-4 h-4 text-[#C6A15B]" />
                  <span>{isEn ? 'Strict attorney-client confidentiality' : 'Strenges Anwaltsgeheimnis'}</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Content Layout: Main Editorial Column + Sticky Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Main Editorial Content (8 Columns) */}
            <div className="lg:col-span-8 space-y-16">
              
              {/* ======================================================== */}
              {/* SECTION 1: H2 Wenn europäische Vorschriften den Geschäftserfolg bremsen */}
              {/* ======================================================== */}
              <section className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? 'Challenges & Conflicts' : 'Problemstellungen in der Praxis'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-4 pb-4 border-b border-[#E4D9CC]">
                  {isEn 
                    ? 'When European Regulations Restrict Business Success'
                    : 'Wenn europäische Vorschriften den Geschäftserfolg bremsen'}
                </h2>

                <p className="font-sans text-sm text-[#213134]/85 font-light leading-relaxed mb-6">
                  {isEn
                    ? 'European law matters frequently affect enterprises and individuals in economically vulnerable, highly time-sensitive scenarios.'
                    : 'Europarechtliche Fragestellungen betreffen Unternehmen und betroffene Personen häufig in wirtschaftlich sensiblen Situationen.'}
                </p>

                <h3 className="font-serif text-lg text-[#213134] font-medium mb-4">
                  {isEn ? 'Typical Scenarios in EU and EEA Practice:' : 'Typische Konstellationen sind:'}
                </h3>

                {/* 3 Constellation Cards exactly from PDF */}
                <div className="space-y-4 mb-6">
                  
                  <div className="p-5 bg-[#F8F6F2] border-l-4 border-[#C6A15B] border-t border-r border-b border-[#E4D9CC]">
                    <h4 className="font-serif text-base font-semibold text-[#213134] mb-1.5 flex items-center gap-2">
                      <Scale className="w-4 h-4 text-[#8a6828]" />
                      <span>
                        {isEn 
                          ? 'Market Access in the EU or EEA:'
                          : 'Marktzugang in der EU bzw. im EWR:'}
                      </span>
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#213134]/80 font-light leading-relaxed">
                      {isEn
                        ? 'Companies intending to market products or offer services across the Union face regulatory requirements whose scope, classification, and interpretation remain ambiguous or contested.'
                        : 'Unternehmen beabsichtigen, Produkte oder Dienstleistungen unionsweit anzubieten, sehen sich jedoch mit regulatorischen Anforderungen konfrontiert, deren Reichweite und Auslegung unklar sind.'}
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F6F2] border-l-4 border-[#C6A15B] border-t border-r border-b border-[#E4D9CC]">
                    <h4 className="font-serif text-base font-semibold text-[#213134] mb-1.5 flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-[#8a6828]" />
                      <span>
                        {isEn 
                          ? 'EU Financial Sanctions & Asset Freezes:'
                          : 'EU-Finanzsanktionen:'}
                      </span>
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#213134]/80 font-light leading-relaxed">
                      {isEn
                        ? 'The legality and procedural legitimacy of sanctions measures under the EU Charter of Fundamental Rights or settled ECJ case law must be rigorously challenged and reviewed.'
                        : 'Die Rechtmässigkeit von Sanktionsmassnahmen unter Berücksichtigung der EU-Grundrechtecharta oder der Rechtsprechung des EuGH steht zur Prüfung.'}
                    </p>
                  </div>

                  <div className="p-5 bg-[#F8F6F2] border-l-4 border-[#C6A15B] border-t border-r border-b border-[#E4D9CC]">
                    <h4 className="font-serif text-base font-semibold text-[#213134] mb-1.5 flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-[#8a6828]" />
                      <span>
                        {isEn 
                          ? 'National Proceedings with Union Law Implications:'
                          : 'Nationale Verfahren mit unionsrechtlichem Bezug:'}
                      </span>
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-[#213134]/80 font-light leading-relaxed">
                      {isEn
                        ? 'Proceedings before national courts raise questions regarding the interpretation or validity of Union law, which may necessitate reference to the ECJ for a preliminary ruling.'
                        : 'Verfahren vor nationalen Gerichten werfen Fragen zur Auslegung oder Gültigkeit von Unionsrecht auf, die gegebenenfalls dem EuGH zur Vorabentscheidung vorzulegen sind.'}
                    </p>
                  </div>

                </div>

                <div className="p-4 bg-[#EFEAE4] border border-[#E4D9CC] text-xs sm:text-sm font-sans text-[#213134]/85 font-light leading-relaxed">
                  {isEn
                    ? 'In these situations, a purely domestic assessment is regularly insufficient. Lack of synchronization with European regulatory frameworks leads to delays, legal uncertainty, or severe economic harm. A structured European law review establishes decisive clarity on courses of action, probability of success, and potential risks.'
                    : 'In diesen Situationen ist eine rein nationale Betrachtung regelmässig unzureichend. Fehlende Abstimmung mit unionsrechtlichen Vorgaben kann zu Verzögerungen, Rechtsunsicherheit oder wirtschaftlichen Nachteilen führen. Eine strukturierte europarechtliche Prüfung schafft Klarheit über Handlungsoptionen, Erfolgsaussichten und Risiken.'}
                </div>
              </section>

              {/* ======================================================== */}
              {/* SECTION 2: H2 Anwendungsbereiche einer spezialisierten Europarechtsberatung */}
              {/* ======================================================== */}
              <section className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? 'Scope & Suitability' : 'Mandatsabgrenzung & Zielgruppen'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-4 pb-4 border-b border-[#E4D9CC]">
                  {isEn 
                    ? 'Scope of Specialized European Law Advisory'
                    : 'Anwendungsbereiche einer spezialisierten Europarechtsberatung'}
                </h2>

                <p className="font-sans text-sm text-[#213134]/85 font-light leading-relaxed mb-6">
                  {isEn
                    ? 'A clear mandate demarcation fosters procedural efficiency and avoids unnecessary detours.'
                    : 'Eine klare Mandatsabgrenzung dient der Effizienz und verhindert unnötige Umwege.'}
                </p>

                <h3 className="font-serif text-lg text-[#213134] font-medium mb-4">
                  {isEn 
                    ? 'European law advisory is particularly suited for:'
                    : 'Europarechtliche Beratung ist insbesondere sinnvoll für:'}
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
                  {[
                    isEn
                      ? 'Enterprises facing ongoing or imminent EU or EEA proceedings'
                      : 'Unternehmen mit laufenden oder drohenden EU- oder EWR-Verfahren',
                    isEn
                      ? 'Swiss companies, especially in regulated industries (e.g. MedTech, Pharma), seeking European market access'
                      : 'Schweizer Unternehmen, insbesondere im regulierten Bereich (z. B. MedTech), die Marktzugang in der EU anstreben',
                    isEn
                      ? 'Sanctioned individuals or corporations seeking to challenge Union regulatory measures'
                      : 'Sanktionierte Personen oder Unternehmen, die unionsrechtliche Massnahmen überprüfen lassen möchten',
                    isEn
                      ? 'Clients navigating strategic matters at the crossroads of domestic and European jurisprudence'
                      : 'Mandanten mit strategischen Fragestellungen im Spannungsfeld zwischen nationalem und europäischem Recht'
                  ].map((item, idx) => (
                    <div key={idx} className="p-4 bg-[#F8F6F2] border border-[#E4D9CC] flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#8a6828] flex-shrink-0 mt-0.5" />
                      <span className="font-sans text-xs sm:text-sm text-[#213134]/85 font-light">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Demarcation box: When specialization is less suitable */}
                <div className="p-4 bg-[#fff7ed] border border-[#fed7aa] rounded-xs flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-[#c2410c] flex-shrink-0 mt-0.5" />
                  <p className="font-sans text-xs sm:text-sm text-[#9a3412] font-light leading-relaxed">
                    <strong>{isEn ? 'Boundary:' : 'Abgrenzung:'}</strong>{' '}
                    {isEn
                      ? 'This specialization is less suited for matters devoid of commercial or Union law connections, or for purely standardized legal questions lacking a European dimension.'
                      : 'Weniger geeignet ist eine solche Spezialisierung für Sachverhalte ohne wirtschafts- oder unionsrechtlichen Bezug oder für rein standardisierte Rechtsfragen ohne europarechtliche Dimension.'}
                  </p>
                </div>
              </section>

              {/* ======================================================== */}
              {/* SECTION 3: H2 Strukturierte Europarechtsberatung – transparent und zielgerichtet */}
              {/* ======================================================== */}
              <section className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? '5-Step Method' : '5-Stufen-Verfahren'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-4 pb-4 border-b border-[#E4D9CC]">
                  {isEn 
                    ? 'Structured European Law Advisory – Transparent and Targeted'
                    : 'Strukturierte Europarechtsberatung – transparent und zielgerichtet'}
                </h2>

                <p className="font-sans text-sm text-[#213134]/85 font-light leading-relaxed mb-8">
                  {isEn
                    ? 'European law mandates demand a systematic and strategic approach. Our advisory follows a clearly defined, predictable roadmap:'
                    : 'Europarechtliche Mandate erfordern ein systematisches und strategisches Vorgehen. Die Beratung folgt regelmässig einem klaren Ablauf:'}
                </p>

                {/* 5 Numbered Steps from PDF */}
                <div className="space-y-4 mb-8">
                  {[
                    {
                      num: '1',
                      title: isEn ? 'Initial Fact-Finding & Dimension Analysis' : 'Erstanalyse des Sachverhalts',
                      desc: isEn 
                        ? 'Rigorous examination of Union and potential EEA legal dimensions, including jurisdictional competence, statutory deadlines, and standing.'
                        : 'Prüfung der unions- und ggf. EWR-rechtlichen Dimension, einschliesslich Zuständigkeitsfragen und Fristen.'
                    },
                    {
                      num: '2',
                      title: isEn ? 'Legal Classification & Risk Assessment' : 'Rechtliche Einordnung und Risikoanalyse',
                      desc: isEn 
                        ? 'Evaluation of prospect of success considering decisive case law of the ECJ and General Court, as well as institutional administrative practice of the European Commission.'
                        : 'Bewertung der Erfolgsaussichten unter Berücksichtigung der einschlägigen Rechtsprechung des EuGH und des EuG sowie der Praxis der Europäischen Kommission.'
                    },
                    {
                      num: '3',
                      title: isEn ? 'Strategic Procedural Planning' : 'Strategische Verfahrensplanung',
                      desc: isEn 
                        ? 'Determination of optimal remedies: action for annulment, action for failure to act, interim measures, or proposing a reference for preliminary ruling to the ECJ.'
                        : 'Entscheidung über geeignete Rechtsbehelfe, etwa Nichtigkeitsklagen, Untätigkeitsklagen oder die Anregung einer Vorlage an den EuGH.'
                    },
                    {
                      num: '4',
                      title: isEn ? 'Communication with Institutions & Authorities' : 'Kommunikation mit Institutionen und Behörden',
                      desc: isEn 
                        ? 'High-level representation and diplomatic interaction with the European Commission, national competent authorities, and Union judicial organs.'
                        : 'Vertretung gegenüber der Europäischen Kommission, nationalen Behörden sowie vor den Unionsgerichten.'
                    },
                    {
                      num: '5',
                      title: isEn ? 'Court Representation & Advocacy' : 'Prozessvertretung',
                      desc: isEn 
                        ? 'Precise, substantive advocacy and representation before the General Court or the European Court of Justice whenever judicial proceedings are required.'
                        : 'Sachliche und präzise Vertretung vor dem EuG oder EuGH, sofern ein gerichtliches Verfahren erforderlich ist.'
                    }
                  ].map((step) => (
                    <div key={step.num} className="flex items-start gap-4 p-5 bg-[#F8F6F2] border border-[#E4D9CC]">
                      <span className="w-8 h-8 rounded-full bg-[#213134] text-[#C6A15B] font-serif font-bold text-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        {step.num}
                      </span>
                      <div>
                        <h4 className="font-serif text-base font-semibold text-[#213134] mb-1">
                          {step.title}
                        </h4>
                        <p className="font-sans text-xs sm:text-sm text-[#213134]/80 font-light leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-[#EFEAE4] border-l-4 border-[#8a6828] text-xs sm:text-sm font-sans text-[#213134]/85 font-light leading-relaxed">
                  {isEn
                    ? 'This structured methodology ensures clients remain informed at all times regarding procedural status, calculated risks, and subsequent strategic milestones. Absolute transparency and legal traceability are our guiding principles.'
                    : 'Durch diese strukturierte Vorgehensweise wird gewährleistet, dass Mandanten jederzeit über Verfahrensstand, Risiken und weitere Schritte informiert sind. Transparenz und rechtliche Nachvollziehbarkeit stehen im Vordergrund.'}
                </div>
              </section>

              {/* ======================================================== */}
              {/* SECTION 4: H2 Besonderheiten der Vertretung im Europarecht & Leading Lawyers */}
              {/* ======================================================== */}
              <section className="bg-white p-8 sm:p-10 border border-[#E4D9CC] shadow-xs">
                <span className="text-xs uppercase tracking-[0.25em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? 'Procedural Depth' : 'Institutionelle Einblicke'}
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl text-[#213134] font-normal mb-6 pb-4 border-b border-[#E4D9CC]">
                  {isEn 
                    ? 'Specifics of Advocacy in European Law'
                    : 'Besonderheiten der Vertretung im Europarecht'}
                </h2>

                <div className="space-y-4 font-sans text-sm text-[#213134]/85 font-light leading-relaxed mb-8">
                  <p>
                    {isEn
                      ? 'Representation in EU and EEA proceedings differs in substantial ways from purely domestic litigation. Decisive factors begin with the strict formal rules and procedural deadlines applicable before Union courts, which admit no leeway. Proceedings before the General Court (EGC) and the Court of Justice (ECJ) operate under their own autonomous Rules of Procedure, markedly distinct from national civil or administrative codes.'
                      : 'Die Vertretung in EU- und EWR-Verfahren unterscheidet sich in wesentlichen Punkten von rein nationalen Verfahren. Massgeblich sind zunächst die besonderen formellen Anforderungen und Fristen, die vor den Unionsgerichten gelten und strikt einzuhalten sind. Verfahren vor dem Gericht der Europäischen Union (EuG) oder dem Europäischen Gerichtshof (EuGH) folgen eigenen prozessualen Regeln, die sich deutlich von nationalen Prozessordnungen unterscheiden.'}
                  </p>
                  <p>
                    {isEn
                      ? 'Adequate advocacy requires an intimate understanding of decision-making dynamics within EU institutions. The operational methodology of the European Commission, internal investigative processes, and institutional divisions of competence fundamentally shape strategic positioning. Equally essential is the precise integration of Union arguments with domestic legal questions, particularly in references for preliminary ruling. Ensuring full compliance with the standards of the EU Charter of Fundamental Rights is an indispensable safeguard. Seasoned experience before Union courts and European agencies enables a realistic appraisal of procedural velocity and chances of enforcement.'
                      : 'Eine sachgerechte Vertretung erfordert zudem ein vertieftes Verständnis der Entscheidungsmechanismen innerhalb der EU-Institutionen. Die Arbeitsweise der Europäischen Kommission, interne Prüfungsabläufe, sowie institutionelle Zuständigkeiten, beeinflussen die strategische Ausrichtung eines Verfahrens erheblich. Ebenso entscheidend ist die präzise Verzahnung unionsrechtlicher Argumentationslinien mit nationalem Recht, insbesondere bei Vorlageverfahren vor dem EuGH. Die Berücksichtigung der grundrechtlichen Massstäbe der EU-Grundrechtecharta bildet einen weiteren zentralen Aspekt. Erfahrung im Umgang mit Unionsgerichten und europäischen Behörden ermöglicht eine realistische Einschätzung von Verfahrensdynamik und Durchsetzungschancen.'}
                  </p>
                </div>

                {/* Leading Lawyers from the PDF text */}
                <h3 className="font-serif text-xl text-[#213134] font-medium mb-6 pb-2 border-b border-[#E4D9CC]">
                  {isEn 
                    ? 'Baudenbacher Law: Institutional, Scholarly & Forensic Excellence'
                    : 'Baudenbacher Law vereint institutionelle, wissenschaftliche und forensische Expertise'}
                </h3>

                <div className="space-y-6">
                  
                  {/* Prof. Dr. Carl Baudenbacher */}
                  <div className="p-6 bg-[#F8F6F2] border border-[#E4D9CC] flex flex-col sm:flex-row items-start gap-5">
                    <img
                      src="/team/carl-baudenbacher.jpg"
                      alt="Prof. Dr. Carl Baudenbacher"
                      referrerPolicy="no-referrer"
                      className="w-20 h-24 object-cover object-top border border-[#C6A15B]/40 flex-shrink-0 shadow-xs"
                    />
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#213134]">
                        Prof. Dr. Dr. h.c. Carl Baudenbacher
                      </h4>
                      <p className="text-xs text-[#8a6828] font-sans font-semibold uppercase tracking-wider mb-2">
                        {isEn ? 'Former President of the EFTA Court · Senior Counsel' : 'Ehemaliger Präsident des EFTA-Gerichtshofs · Senior Counsel'}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-[#213134]/80 font-light leading-relaxed">
                        {isEn
                          ? 'Belongs to the defining figures of European internal market and EEA law, contributing decades of judicial experience in the authoritative interpretation and application of Union law.'
                          : 'Gehört zu den prägenden Persönlichkeiten des europäischen Binnenmarkt- und EWR-Rechts und bringt langjährige Erfahrung in der richterlichen Auslegung und Anwendung unionsrechtlicher Vorschriften ein.'}
                      </p>
                    </div>
                  </div>

                  {/* Prof. Dr. Dr. Mads Andenas */}
                  <div className="p-6 bg-[#F8F6F2] border border-[#E4D9CC] flex flex-col sm:flex-row items-start gap-5">
                    <img
                      src="/team/mads-andenas.jpg"
                      alt="Prof. Dr. Dr. Mads Andenas"
                      referrerPolicy="no-referrer"
                      className="w-20 h-24 object-cover object-top border border-[#C6A15B]/40 flex-shrink-0 shadow-xs"
                    />
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#213134]">
                        Prof. Dr. Dr. Mads Andenas, QC (Hon)
                      </h4>
                      <p className="text-xs text-[#8a6828] font-sans font-semibold uppercase tracking-wider mb-2">
                        {isEn ? 'Professor of Law, University of Oslo · Of Counsel' : 'Ordinarius Universität Oslo & London · Of Counsel'}
                      </p>
                      <p className="font-sans text-xs sm:text-sm text-[#213134]/80 font-light leading-relaxed">
                        {isEn
                          ? 'Complements this advisory with extensive academic and practical practice in European and international commercial law and proceedings before European courts.'
                          : 'Ergänzt diese Expertise durch umfassende akademische und praktische Tätigkeit im europäischen und internationalen Wirtschaftsrecht sowie durch Erfahrung in Verfahren vor europäischen Gerichten.'}
                      </p>
                    </div>
                  </div>

                  {/* Dr. Laura Melusine Baudenbacher - WITH DIRECT LINK TO HER NEW PROFILE TEMPLATE */}
                  <div className="p-6 bg-[#213134] text-white border border-[#C6A15B]/50 flex flex-col sm:flex-row items-start gap-5 relative group">
                    <img
                      src="/team/laura-baudenbacher.jpg"
                      alt="Dr. Laura Melusine Baudenbacher"
                      referrerPolicy="no-referrer"
                      className="w-20 h-24 object-cover object-top border border-[#C6A15B] flex-shrink-0 shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-lg font-medium text-white group-hover:text-[#C6A15B] transition-colors">
                          Dr. Laura Melusine Baudenbacher
                        </h4>
                        <button
                          onClick={() => onNavigateToTeamMember('laura-baudenbacher')}
                          className="text-xs font-sans uppercase tracking-wider text-[#C6A15B] hover:text-white inline-flex items-center gap-1 transition-colors"
                        >
                          <span>{isEn ? 'View Full Profile' : 'Profil ansehen'}</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <p className="text-xs text-[#C6A15B] font-sans font-semibold uppercase tracking-wider mb-2">
                        {isEn ? 'Partner · Former President of the Swiss Competition Commission (COMCO)' : 'Partnerin · Präsidentin der Schweizer Wettbewerbskommission a.D.'}
                      </p>
                      
                      <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/90 font-light leading-relaxed mb-4">
                        {isEn
                          ? 'Possesses deep knowledge in EU and EEA economic law, especially investment protection and competition law, and is admitted in multiple European jurisdictions. The combination of judicial background, academic grounding, and forensic acumen ensures strategic and thorough advocacy in European law.'
                          : 'Verfügt über vertiefte Kenntnisse im EU- und EWR-Wirtschaftsrecht, insbesondere im Investitionsschutz- und Wettbewerbsrecht, und ist in mehreren europäischen Rechtsordnungen zugelassen. Die Kombination aus gerichtlicher Erfahrung, wissenschaftlicher Fundierung und forensischer Praxis gewährleistet eine fundierte und strategisch durchdachte Vertretung im Europarecht.'}
                      </p>

                      <button
                        onClick={() => onNavigateToTeamMember('laura-baudenbacher')}
                        className="px-4 py-2 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center gap-2"
                      >
                        <span>{isEn ? 'Open Profile Template' : 'Zum Profil-Template'}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              </section>

              {/* Bottom Conversion Box from PDF */}
              <div className="bg-gradient-to-r from-[#213134] to-[#1a292b] text-white p-8 sm:p-10 border border-[#C6A15B]/40 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
                <div>
                  <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-sans font-semibold block mb-1">
                    {isEn ? 'Initial Consultation' : 'Unverbindliche Ersteinschätzung'}
                  </span>
                  <h3 className="font-serif text-2xl text-white font-normal">
                    {isEn ? 'Discuss Your European Law Matter' : 'Europarechtliches Anliegen einordnen lassen'}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light mt-1">
                    {isEn 
                      ? 'Confidential assessment of deadlines, jurisdictional venues, and strategic remedies.'
                      : 'Vertrauliche Prüfung von Fristen, Zuständigkeiten und Handlungsoptionen vor Unionsbehörden.'}
                  </p>
                </div>

                <button
                  onClick={() => onOpenContact('Zürich', 'Europarecht')}
                  className="flex-shrink-0 px-6 py-3.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors shadow-md inline-flex items-center gap-2"
                >
                  <span>{isEn ? 'Obtain Legal Assessment' : 'Rechtliche Einordnung erhalten'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* Sticky Sidebar Column (4 Columns) */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Quick Summary Card */}
              <div className="bg-white border border-[#E4D9CC] p-6 shadow-xs">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#8a6828] font-sans font-semibold block mb-2">
                  {isEn ? 'Practice Overview' : 'Auf einen Blick'}
                </span>
                <h3 className="font-serif text-xl text-[#213134] font-medium mb-4 pb-3 border-b border-[#E4D9CC]">
                  {isEn ? 'Key Forums & Jurisdiction' : 'Foren & Zuständigkeiten'}
                </h3>

                <ul className="space-y-3 font-sans text-xs text-[#213134]/85 font-light">
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#8a6828] flex-shrink-0 mt-0.5" />
                    <span><strong>EuGH</strong> (Europäischer Gerichtshof, Luxemburg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#8a6828] flex-shrink-0 mt-0.5" />
                    <span><strong>EuG</strong> (Gericht der Europäischen Union, Luxemburg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#8a6828] flex-shrink-0 mt-0.5" />
                    <span><strong>EU-Kommission</strong> (Brüssel)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#8a6828] flex-shrink-0 mt-0.5" />
                    <span><strong>EFTA-Gerichtshof</strong> (Luxemburg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Building className="w-4 h-4 text-[#8a6828] flex-shrink-0 mt-0.5" />
                    <span><strong>Nationale Gerichte</strong> (Schweiz / EWR-Staaten)</span>
                  </li>
                </ul>

                <div className="mt-6 pt-4 border-t border-[#E4D9CC]">
                  <span className="text-[11px] text-[#213134]/60 font-sans block mb-2">
                    {isEn ? 'Relevant Norms & Regimes:' : 'Rechtsgrundlagen & Regulierungsrahmen:'}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {['EU-Grundrechtecharta', 'EWR-Abkommen', 'Binnenmarktrecht', 'EU-Sanktionsregime', 'SECO', 'Bilaterale CH-EU'].map((tag, i) => (
                      <span key={i} className="px-2 py-0.5 bg-[#F8F6F2] border border-[#E4D9CC] text-[10px] font-sans text-[#213134]/80">
                        {tag}
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
                  {/* Laura Baudenbacher */}
                  <div 
                    onClick={() => onNavigateToTeamMember('laura-baudenbacher')}
                    className="p-3 bg-[#F8F6F2] hover:bg-[#EFEAE4] border border-[#E4D9CC] hover:border-[#8a6828] cursor-pointer transition-all flex items-center gap-3 group"
                  >
                    <img
                      src="/team/laura-baudenbacher.jpg"
                      alt="Dr. Laura Melusine Baudenbacher"
                      referrerPolicy="no-referrer"
                      className="w-12 h-14 object-cover object-top border border-[#C6A15B]/50"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-[#213134] group-hover:text-[#8a6828] transition-colors truncate">
                        Dr. Laura Melusine Baudenbacher
                      </h4>
                      <p className="text-[11px] text-[#8a6828] font-sans truncate">
                        Partnerin · WEKO a.D.
                      </p>
                      <span className="text-[10px] text-[#213134]/60 font-sans block">
                        {isEn ? 'Click for profile template' : 'Zum Profil-Template →'}
                      </span>
                    </div>
                  </div>

                  {/* Carl Baudenbacher */}
                  <div className="p-3 bg-[#F8F6F2] border border-[#E4D9CC] flex items-center gap-3">
                    <img
                      src="/team/carl-baudenbacher.jpg"
                      alt="Prof. Dr. Carl Baudenbacher"
                      referrerPolicy="no-referrer"
                      className="w-12 h-14 object-cover object-top border border-[#E4D9CC]"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-[#213134] truncate">
                        Prof. Dr. Carl Baudenbacher
                      </h4>
                      <p className="text-[11px] text-[#8a6828] font-sans truncate">
                        Präsident EFTA-Gerichtshof a.D.
                      </p>
                      <span className="text-[10px] text-[#213134]/60 font-sans block">
                        Senior Counsel
                      </span>
                    </div>
                  </div>

                  {/* Mads Andenas */}
                  <div className="p-3 bg-[#F8F6F2] border border-[#E4D9CC] flex items-center gap-3">
                    <img
                      src="/team/mads-andenas.jpg"
                      alt="Prof. Dr. Mads Andenas"
                      referrerPolicy="no-referrer"
                      className="w-12 h-14 object-cover object-top border border-[#E4D9CC]"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-serif text-sm font-semibold text-[#213134] truncate">
                        Prof. Dr. Dr. Mads Andenas
                      </h4>
                      <p className="text-[11px] text-[#8a6828] font-sans truncate">
                        QC (Hon) · Univ. Oslo
                      </p>
                      <span className="text-[10px] text-[#213134]/60 font-sans block">
                        Of Counsel
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Mandate Widget */}
              <div className="bg-[#213134] text-white p-6 sm:p-8 border border-[#31464a] shadow-md">
                <span className="text-[11px] uppercase tracking-[0.2em] text-[#C6A15B] font-sans font-semibold block mb-2">
                  {isEn ? 'Mandate Inquiry' : 'Direktanfrage'}
                </span>
                <h4 className="font-serif text-xl text-white font-medium mb-3">
                  {isEn ? 'European Law Assessment' : 'Europarechtliche Prüfung'}
                </h4>
                <p className="font-sans text-xs text-[#E4D9CC]/80 font-light leading-relaxed mb-6">
                  {isEn
                    ? 'Short-term consultation on filing deadlines before the ECJ, General Court, and European Commission.'
                    : 'Kurzfristige Fristprüfung und Begleitung für Verfahren vor EuGH, EuG und Kommission.'}
                </p>

                <button
                  onClick={() => onOpenContact('Zürich', 'Europarecht')}
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

      {/* Footer matching selected version */}
      {pageVersion === 'version1' ? (
        <FooterV1
          language={language}
          onOpenContact={() => onOpenContact()}
        />
      ) : (
        <FooterV2
          language={language}
          onOpenContact={() => onOpenContact()}
        />
      )}

    </div>
  );
};
