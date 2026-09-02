import { CitySlide, TeamMember, PracticeArea, OfficeLocation } from '../types';

export const CITY_SLIDES: CitySlide[] = [
  {
    id: 'zurich',
    name: 'Zürich',
    country: 'Schweiz',
    subtitle: 'Hauptsitz & Schweizer Wirtschaftsrecht',
    // High-resolution Grossmünster / Limmat river at blue hour
    imageUrl: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=2000&q=85',
    focusPoint: 'center',
    description: 'Im Herzen des Schweizer Wirtschafts- und Finanzplatzes',
    timeZone: 'Europe/Zurich',
    coordinates: '47.3769° N, 8.5417° E'
  },
  {
    id: 'brussels',
    name: 'Brüssel',
    country: 'Belgien',
    subtitle: 'Europäisches Wirtschafts- & Sanktionsrecht',
    // Grand Place / European landmark illuminated at dusk
    imageUrl: 'https://images.unsplash.com/photo-1572970720464-9118e78832a8?auto=format&fit=crop&w=2000&q=85',
    focusPoint: 'center',
    description: 'Direkt an den EU-Institutionen und regulatorischen Schaltstellen',
    timeZone: 'Europe/Brussels',
    coordinates: '50.8503° N, 4.3517° E'
  },
  {
    id: 'oslo',
    name: 'Oslo',
    country: 'Norwegen',
    subtitle: 'EWR- & Nordeuropäisches Wirtschaftsrecht',
    // Oslo Opera & modern Barcode skyline waterfront at evening
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2000&q=85',
    focusPoint: 'center',
    description: 'Brückenkopf für nordische und EWR-weite Wirtschaftsverfahren',
    timeZone: 'Europe/Oslo',
    coordinates: '59.9139° N, 10.7522° E'
  }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'laura-baudenbacher',
    name: 'Dr. Laura Melusine Baudenbacher',
    title: 'Dr. iur., LL.M., Rechtsanwältin',
    role: 'Partnerin / Präsidentin der Schweizer Wettbewerbskommission (WEKO) a.D.',
    location: 'Zürich & Brüssel',
    category: 'partner',
    // Real portrait of Laura Melusine Baudenbacher
    imageUrl: '/team/laura-baudenbacher.jpg',
    bio: 'Dr. Laura Melusine Baudenbacher ist spezialisiert auf europäisches und schweizerisches Wirtschafts-, Kartell- und Wettbewerbsrecht sowie internationale Schiedsverfahren. Sie verfügt über langjährige Erfahrung vor schweizerischen und europäischen Gerichten und Behörden.',
    specializations: [
      'Kartell- & Wettbewerbsrecht',
      'Schweizerisches & Europäisches Wirtschaftsrecht',
      'Regulatorische Streitigkeiten',
      'Sanktions- & Exportkontrollrecht'
    ],
    education: [
      'Doktorat der Rechtswissenschaften (Dr. iur.), Universität Bern',
      'Master of Laws (LL.M.), Harvard Law School',
      'Zulassung als Rechtsanwältin in der Schweiz und New York'
    ],
    languages: ['Deutsch', 'Englisch', 'Französisch', 'Italienisch'],
    email: 'laura.baudenbacher@baudenbacher.law',
    phone: '+41 44 260 88 00'
  },
  {
    id: 'carl-baudenbacher',
    name: 'Prof. Dr. Dr. Carl Baudenbacher',
    title: 'Prof. Dr. Dr. h.c., ehem. Präsident des EFTA-Gerichtshofs',
    role: 'Senior Counsel / Of Counsel',
    location: 'Zürich & Brüssel',
    category: 'counsel',
    // Real portrait of Carl Baudenbacher
    imageUrl: '/team/carl-baudenbacher.jpg',
    bio: 'Prof. Dr. Dr. h.c. Carl Baudenbacher war von 1995 bis 2018 Richter und von 2003 bis 2017 Präsident des EFTA-Gerichtshofs in Luxemburg. Er gilt als einer der führenden europäischen Experten für EU- und EWR-Recht, internationales Wirtschaftsrecht und Streitbeilegung.',
    specializations: [
      'EU- und EWR-Recht',
      'Internationales Wirtschaftsrecht',
      'Internationale Schiedsgerichtsbarkeit',
      'Gutachten & Strategische Beratung vor Höchstgerichten'
    ],
    education: [
      'Ordinarius für Privat-, Handels- und Wirtschaftsrecht, Universität St. Gallen (HSG)',
      'Habilitation & Doktorat der Rechtswissenschaften, Universität Bern',
      'Gastprofessuren an Universitäten in Europa und den USA'
    ],
    languages: ['Deutsch', 'Englisch', 'Französisch', 'Schwedisch', 'Norwegisch'],
    email: 'carl.baudenbacher@baudenbacher.law',
    phone: '+41 44 260 88 00'
  },
  {
    id: 'mads-andenas',
    name: 'Prof. Dr. Dr. Mads Andenas',
    title: 'Prof. Dr. Dr., QC (Hon), Of Counsel',
    role: 'Of Counsel / Universität Oslo & Institute of Advanced Legal Studies London',
    location: 'Oslo & Brüssel',
    category: 'counsel',
    // Real portrait of Mads Andenas
    imageUrl: '/team/mads-andenas.jpg',
    bio: 'Prof. Dr. Dr. Mads Andenas ist Professor für Rechtswissenschaften an der Universität Oslo und Senior Research Fellow am Institute of Advanced Legal Studies in London. Er war Vorsitzender der UN-Arbeitsgruppe für willkürliche Inhaftierungen und Berater zahlreicher Regierungen und internationaler Organisationen.',
    specializations: [
      'Internationales öffentliches Recht & Menschenrechte',
      'Bank- und Finanzmarktrecht',
      'Europarecht & EWR-Recht',
      'Schiedsverfahren & Internationale Streitbeilegung'
    ],
    education: [
      'DPhil (Oxford), PhD (Cambridge)',
      'Professor an der Universität Oslo',
      'Bencher of the Inner Temple, London'
    ],
    languages: ['Englisch', 'Norwegisch', 'Deutsch', 'Französisch'],
    email: 'mads.andenas@baudenbacher.law',
    phone: '+47 22 83 90 00'
  },
  {
    id: 'mohamed-hasnaoui',
    name: 'MLaw Mohamed Hasnaoui',
    title: 'Master of Law (MLaw), Associate',
    role: 'Rechtsberater / Associate',
    location: 'Zürich',
    category: 'associate',
    // Real portrait of Mohamed Hasnaoui
    imageUrl: '/team/mohamed-hasnaoui.webp',
    bio: 'MLaw Mohamed Hasnaoui berät Mandanten in nationalen und grenzüberschreitenden Wirtschafts- und Handelsstreitigkeiten, bei regulatorischen Abklärungen sowie in Fragen des Sanktions- und Vollstreckungsrechts.',
    specializations: [
      'Schweizerisches Wirtschafts- & Vertragsrecht',
      'Sanktionsrecht & Compliance',
      'Prozessführung & Zivilverfahren',
      'Unternehmensrecht'
    ],
    education: [
      'Master of Law (MLaw), Universität Bern & Universität Zürich',
      'Bachelor of Law (BLaw), Universität Freiburg i.Ue.'
    ],
    languages: ['Deutsch', 'Französisch', 'Englisch', 'Arabisch'],
    email: 'mohamed.hasnaoui@baudenbacher.law',
    phone: '+41 44 260 88 00'
  }
];

export const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'sanktionsrecht',
    title: 'Sanktionsrecht',
    shortDesc: 'Beratung in Bezug auf nationale und internationale Sanktionen sowie Exportkontrollrecht.',
    fullDesc: 'Die Dynamik internationaler Sanktionen (SECO, EU, OFAC) erfordert höchste Präzision. Wir beraten Unternehmen, Finanzinstitute und Führungskräfte in komplexen Compliance-Fragen, Entsperrungsverfahren und grenzüberschreitenden Risikobeurteilungen.',
    iconName: 'shield',
    badge: 'SECO & EU Compliance',
    regulators: ['SECO', 'EU', 'OFAC', 'BIS'],
    keyTopics: [
      'Schweizer Sanktionen (SECO) & EU-Sanktionsregime',
      'US-Sanktionen (OFAC) & Sekundärsanktionen',
      'Exportkontrolle & Dual-Use-Güter',
      'Freigabe- & Ausnahmegenehmigungen',
      'Internal Investigations & Compliance Audits'
    ],
    leadAttorneys: ['Dr. Laura Melusine Baudenbacher', 'MLaw Mohamed Hasnaoui']
  },
  {
    id: 'wirtschaftsrecht',
    title: 'Wirtschaftsrecht',
    shortDesc: 'Umfassende Beratung bei wirtschaftlichen Transaktionen, Unternehmensfragen und kommerziellen Angelegenheiten.',
    fullDesc: 'Von der Vertragsgestaltung bis zu strategischen Restrukturierungen und M&A-Transaktionen begleiten wir Unternehmen und Investoren mit wirtschaftlichem Sachverstand und juristischer Weitsicht.',
    iconName: 'briefcase',
    badge: 'Corporate & M&A',
    regulators: ['Handelsregister', 'SIX', 'Finanzmarkt'],
    keyTopics: [
      'Handels- und Gesellschaftsrecht',
      'Nationale und grenzüberschreitende Verträge',
      'Corporate Governance & Organhaftung',
      'Unternehmensnachfolge & Transaktionen',
      'Rechtliche Risikobewertung'
    ],
    leadAttorneys: ['Dr. Laura Melusine Baudenbacher', 'Prof. Dr. Dr. Carl Baudenbacher']
  },
  {
    id: 'schiedsverfahren',
    title: 'Schiedsverfahren',
    shortDesc: 'Vertretung in nationalen und internationalen Schiedsverfahren sowie vor staatlichen Gerichten.',
    fullDesc: 'Als Parteivertreter und Schiedsrichter (ICC, Swiss Rules, LCIA, DIS) verfügen wir über herausragende Expertise in komplexen Schiedsverfahren mit hohem Streitwert und internationalem Bezug.',
    iconName: 'scale',
    badge: 'ICC & Swiss Rules',
    regulators: ['ICC', 'Swiss Arbitration', 'LCIA', 'ICSID'],
    keyTopics: [
      'Internationale Schiedsgerichtsbarkeit (ICC, Swiss Arbitration Centre, LCIA)',
      'Investitionsschiedsverfahren (ICSID)',
      'Post-M&A- und Infrastrukturstreitigkeiten',
      'Vollstreckung und Anerkennung von Schiedssprüchen',
      'Parteivertreter und Schiedsrichterfunktionen'
    ],
    leadAttorneys: ['Prof. Dr. Dr. Carl Baudenbacher', 'Prof. Dr. Dr. Mads Andenas']
  },
  {
    id: 'europarecht',
    title: 'Europarecht',
    shortDesc: 'Beratung zu EU-Recht und dessen Auswirkungen auf nationale und internationale Sachverhalte.',
    fullDesc: 'Mit jahrzehntelanger Erfahrung an der Spitze europäischer Gerichte bieten wir einzigartige Einblicke und strategische Durchsetzungskraft im EU- und EWR-Recht sowie im Verhältnis Schweiz–EU.',
    iconName: 'globe',
    badge: 'EuGH & EWR-Recht',
    regulators: ['EuGH', 'EFTA-Gerichtshof', 'EU-Kommission'],
    keyTopics: [
      'Binnenmarktrecht & Grundfreiheiten',
      'Europäisches Wettbewerbs- und Beihilfenrecht',
      'EWR-Recht & EFTA-Gerichtshofverfahren',
      'Verfahren vor dem EuGH und Gerichten der EU',
      'Bilaterale Verträge Schweiz–EU'
    ],
    leadAttorneys: ['Prof. Dr. Dr. Carl Baudenbacher', 'Dr. Laura Melusine Baudenbacher']
  },
  {
    id: 'verwaltungsrecht',
    title: 'Verwaltungsrecht',
    shortDesc: 'Beratung und Vertretung gegenüber Behörden und in öffentlich-rechtlichen Angelegenheiten.',
    fullDesc: 'Wir vertreten Unternehmen und Einzelpersonen gegenüber Bundes-, Kantons- und internationalen Regulierungsbehörden in anspruchsvollen Verwaltungsverfahren und Streitigkeiten.',
    iconName: 'landmark',
    badge: 'Regulierung & Behörden',
    regulators: ['WEKO', 'FINMA', 'Bundesverwaltungsgericht'],
    keyTopics: [
      'Wirtschaftsverwaltungsrecht & Regulierung',
      'Finanzmarktrecht & FINMA-Verfahren',
      'Kartellbehörden-Verfahren (WEKO)',
      'Verwaltungsgerichtsbarkeit (Bundesverwaltungsgericht, BGer)',
      'Öffentliches Beschaffungswesen'
    ],
    leadAttorneys: ['Dr. Laura Melusine Baudenbacher', 'MLaw Mohamed Hasnaoui']
  }
];

export const OTHER_PRACTICE_AREAS = [
  { title: 'Kartell- und Wettbewerbsrecht', desc: 'Fusionskontrolle, Missbrauchsverfahren und kartellrechtliche Audits.' },
  { title: 'Finanzmarktrecht & Regulierung', desc: 'Beratung für Banken, Fintechs und Vermögensverwalter.' },
  { title: 'Investitionsschutz & Völkerrecht', desc: 'Schutz von Auslandsinvestitionen und staatsrechtliche Beratung.' },
  { title: 'Krisen- & Reputationsmanagement', desc: 'Rechtliche Begleitung in medialen und strategischen Ausnahmesituationen.' }
];

export const OFFICES: OfficeLocation[] = [
  {
    city: 'Zürich',
    country: 'Schweiz',
    address: 'Hottingerstrasse 12',
    postalCode: '8032 Zürich',
    phone: '+41 44 260 88 00',
    email: 'zuerich@baudenbacher.law',
    image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'Hottingerstrasse 12, 8032 Zürich, Switzerland'
  },
  {
    city: 'Brüssel',
    country: 'Belgien',
    address: 'Rue de la Loi 227',
    postalCode: '1040 Brüssel',
    phone: '+32 2 280 44 50',
    email: 'brussels@baudenbacher.law',
    image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'Rue de la Loi 227, 1040 Brussels, Belgium'
  },
  {
    city: 'Oslo',
    country: 'Norwegen',
    address: 'Dronning Eufemias gate 16',
    postalCode: '0191 Oslo',
    phone: '+47 22 83 90 00',
    email: 'oslo@baudenbacher.law',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'Dronning Eufemias gate 16, 0191 Oslo, Norway'
  }
];

export const VALUES_TEXT = {
  eyebrow: 'WOFÜR WIR STEHEN',
  heading: 'Präzision, Diskretion und strategische Klarheit',
  p1: 'Baudenbacher Law berät Unternehmen, Unternehmerinnen und Unternehmer sowie Privatpersonen in anspruchsvollen nationalen und internationalen Rechtsfragen. Unsere Tätigkeit konzentriert sich auf rechtlich und wirtschaftlich komplexe Mandate, in denen fachliche Tiefe, Urteilsstärke und ein präzises Vorgehen entscheidend sind.',
  p2: 'Wir verbinden juristische Exzellenz mit strategischem Verständnis und entwickeln massgeschneiderte Lösungen für Situationen, in denen viel auf dem Spiel steht. Unsere Mandantschaft schätzt unsere Verlässlichkeit, unsere Diskretion und unsere Fähigkeit, auch in sensiblen Verfahren Orientierung und Klarheit zu schaffen.',
  cta: 'Mehr über unsere Werte'
};

export const HERO_TEXT = {
  heading1: 'Ihre Anwaltskanzlei',
  heading2: 'in Zürich, Brüssel und Oslo',
  paragraph: 'Baudenbacher Law berät Unternehmen und Privatpersonen in anspruchsvollen nationalen und internationalen Rechtsfragen – präzise, diskret und mit strategischem Weitblick.',
  cta: 'Mehr erfahren'
};
