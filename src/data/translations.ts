import { CitySlide, TeamMember, PracticeArea, OfficeLocation, Language } from '../types';

export interface OtherPracticeArea {
  title: string;
  desc: string;
}

export interface UiTranslations {
  nav: {
    menu: string;
    closeMenu: string;
    home: string;
    team: string;
    values: string;
    practices: string;
    offices: string;
    contact: string;
    subtitle: string;
  };
  hero: {
    heading1: string;
    heading2: string;
    paragraph: string;
    cta: string;
    cityTagline: string;
    firmTagline: string;
    switchImage: string;
    pauseSlideshow: string;
    playSlideshow: string;
  };
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    viewAll: string;
    openProfile: string;
    viewProfile: string;
    fullProfile: string;
    contactDirectly: string;
    spotlightTitle: string;
    spotlightMode: string;
    gridMode: string;
    keyMilestones: string;
    specializations: string;
    education: string;
    languages: string;
    location: string;
    phone: string;
    email: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerCta: string;
    accolades: {
      laura: string;
      carl: string;
      mads: string;
      mohamed: string;
    };
  };
  values: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    cta: string;
    badgeTitle: string;
    badgeSubtitle: string;
    pillar1Title: string;
    pillar1Subtitle: string;
    pillar1Text: string;
    pillar2Title: string;
    pillar2Subtitle: string;
    pillar2Text: string;
    pillar3Title: string;
    pillar3Subtitle: string;
    pillar3Text: string;
    bannerTitle: string;
  };
  practices: {
    eyebrow: string;
    headingPart1: string;
    headingPart2: string;
    description: string;
    allOverview: string;
    detailsLink: string;
    tailoredTitle: string;
    tailoredDesc: string;
    tailoredCta: string;
    customConsultation: string;
  };
  morePractices: {
    eyebrow: string;
    heading: string;
    description: string;
    cta: string;
    tag1: string;
    tag2: string;
    tag3: string;
  };
  offices: {
    eyebrow: string;
    heading: string;
    description: string;
    badgeText: string;
    contactOffice: string;
    openMaps: string;
  };
  footer: {
    bannerEyebrow: string;
    bannerTitle: string;
    bannerDesc: string;
    bannerCta: string;
    brandDesc: string;
    registryBadge: string;
    navTitle: string;
    complianceTitle: string;
    complianceP1: string;
    complianceP2: string;
    copyright: string;
    imprint: string;
    privacy: string;
    legal: string;
    scrollTop: string;
  };
  modals: {
    close: string;
    profileBackground: string;
    specializations: string;
    education: string;
    languages: string;
    directContact: string;
    practiceAreas: string;
    leadingAttorneys: string;
    requestMandate: string;
    requestConsultation: string;
    allPracticesTitle: string;
    allPracticesDesc: string;
    corePractices: string;
    otherSpecializations: string;
    individualInquiry: string;
    contactModalTitle: string;
    contactModalSubtitle: string;
    fullName: string;
    company: string;
    emailAddress: string;
    phoneNumber: string;
    practiceField: string;
    messageLabel: string;
    messagePlaceholder: string;
    confidentialityNotice: string;
    sendButton: string;
    thankYouTitle: string;
    thankYouMessage: string;
    closeWindow: string;
    officeTab: string;
  };
  controls: {
    title: string;
    layoutTitle: string;
    v1Title: string;
    v1Desc: string;
    v2Title: string;
    v2Desc: string;
    langTitle: string;
    german: string;
    english: string;
    colorTitle: string;
    elementorGuide: string;
  };
}

export const CITY_SLIDES_DE: CitySlide[] = [
  {
    id: 'zurich',
    name: 'Zürich',
    country: 'Schweiz',
    subtitle: 'Hauptsitz & Schweizer Wirtschaftsrecht',
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
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2000&q=85',
    focusPoint: 'center',
    description: 'Brückenkopf für nordische und EWR-weite Wirtschaftsverfahren',
    timeZone: 'Europe/Oslo',
    coordinates: '59.9139° N, 10.7522° E'
  }
];

export const CITY_SLIDES_EN: CitySlide[] = [
  {
    id: 'zurich',
    name: 'Zurich',
    country: 'Switzerland',
    subtitle: 'Headquarters & Swiss Commercial Law',
    imageUrl: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=2000&q=85',
    focusPoint: 'center',
    description: 'In the financial & corporate heart of Switzerland',
    timeZone: 'Europe/Zurich',
    coordinates: '47.3769° N, 8.5417° E'
  },
  {
    id: 'brussels',
    name: 'Brussels',
    country: 'Belgium',
    subtitle: 'European Commercial & Sanctions Law',
    imageUrl: 'https://images.unsplash.com/photo-1572970720464-9118e78832a8?auto=format&fit=crop&w=2000&q=85',
    focusPoint: 'center',
    description: 'Direct access to EU institutions and regulatory authorities',
    timeZone: 'Europe/Brussels',
    coordinates: '50.8503° N, 4.3517° E'
  },
  {
    id: 'oslo',
    name: 'Oslo',
    country: 'Norway',
    subtitle: 'EEA & Nordic Commercial Law',
    imageUrl: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=2000&q=85',
    focusPoint: 'center',
    description: 'Strategic bridgehead for Nordic and EEA-wide proceedings',
    timeZone: 'Europe/Oslo',
    coordinates: '59.9139° N, 10.7522° E'
  }
];

export const TEAM_MEMBERS_DE: TeamMember[] = [
  {
    id: 'laura-baudenbacher',
    name: 'Dr. Laura Melusine Baudenbacher',
    title: 'Dr. iur., LL.M., Rechtsanwältin',
    role: 'Partnerin / Präsidentin der Schweizer Wettbewerbskommission (WEKO) a.D.',
    location: 'Zürich & Brüssel',
    category: 'partner',
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

export const TEAM_MEMBERS_EN: TeamMember[] = [
  {
    id: 'laura-baudenbacher',
    name: 'Dr. Laura Melusine Baudenbacher',
    title: 'Dr. iur., LL.M. (Harvard), Attorney-at-Law',
    role: 'Partner / Former President of the Swiss Competition Commission (COMCO)',
    location: 'Zurich & Brussels',
    category: 'partner',
    imageUrl: '/team/laura-baudenbacher.jpg',
    bio: 'Dr. Laura Melusine Baudenbacher specializes in European and Swiss commercial, antitrust, and competition law, as well as international arbitration. She brings extensive experience representing clients before Swiss and European courts and regulatory authorities.',
    specializations: [
      'Antitrust & Competition Law',
      'Swiss & European Commercial Law',
      'Regulatory Litigation & Proceedings',
      'Sanctions & Export Control'
    ],
    education: [
      'Doctorate in Law (Dr. iur.), University of Bern',
      'Master of Laws (LL.M.), Harvard Law School',
      'Admitted to the Bar in Switzerland and New York'
    ],
    languages: ['German', 'English', 'French', 'Italian'],
    email: 'laura.baudenbacher@baudenbacher.law',
    phone: '+41 44 260 88 00'
  },
  {
    id: 'carl-baudenbacher',
    name: 'Prof. Dr. Dr. Carl Baudenbacher',
    title: 'Prof. Dr. Dr. h.c., Former President of the EFTA Court',
    role: 'Senior Counsel / Of Counsel',
    location: 'Zurich & Brussels',
    category: 'counsel',
    imageUrl: '/team/carl-baudenbacher.jpg',
    bio: 'Prof. Dr. Dr. h.c. Carl Baudenbacher served as a Judge (1995–2018) and President (2003–2017) of the EFTA Court in Luxembourg. He is internationally recognized as one of Europe’s foremost authorities on EU and EEA law, international economic law, and high-stakes dispute resolution.',
    specializations: [
      'EU and EEA Law',
      'International Commercial Law',
      'International Arbitration',
      'Expert Opinions & Supreme Court Strategy'
    ],
    education: [
      'Professor of Private, Commercial & Economic Law, University of St. Gallen (HSG)',
      'Habilitation & Doctorate in Law, University of Bern',
      'Visiting Professorships across Europe and the United States'
    ],
    languages: ['German', 'English', 'French', 'Swedish', 'Norwegian'],
    email: 'carl.baudenbacher@baudenbacher.law',
    phone: '+41 44 260 88 00'
  },
  {
    id: 'mads-andenas',
    name: 'Prof. Dr. Dr. Mads Andenas',
    title: 'Prof. Dr. Dr., QC (Hon), Of Counsel',
    role: 'Of Counsel / University of Oslo & Institute of Advanced Legal Studies London',
    location: 'Oslo & Brussels',
    category: 'counsel',
    imageUrl: '/team/mads-andenas.jpg',
    bio: 'Prof. Dr. Dr. Mads Andenas is Professor of Law at the University of Oslo and Senior Research Fellow at the Institute of Advanced Legal Studies in London. He previously served as Chair of the UN Working Group on Arbitrary Detention and advisor to numerous governments and international bodies.',
    specializations: [
      'Public International Law & Human Rights',
      'Banking & Financial Market Regulation',
      'European Law & EEA Law',
      'Arbitration & Cross-Border Dispute Resolution'
    ],
    education: [
      'DPhil (Oxford), PhD (Cambridge)',
      'Professor of Law, University of Oslo',
      'Bencher of the Inner Temple, London'
    ],
    languages: ['English', 'Norwegian', 'German', 'French'],
    email: 'mads.andenas@baudenbacher.law',
    phone: '+47 22 83 90 00'
  },
  {
    id: 'mohamed-hasnaoui',
    name: 'MLaw Mohamed Hasnaoui',
    title: 'Master of Law (MLaw), Associate',
    role: 'Legal Counsel / Associate',
    location: 'Zurich',
    category: 'associate',
    imageUrl: '/team/mohamed-hasnaoui.webp',
    bio: 'MLaw Mohamed Hasnaoui advises corporate and individual clients in domestic and cross-border commercial disputes, regulatory inquiries, enforcement, and sanctions compliance.',
    specializations: [
      'Swiss Commercial & Contract Law',
      'Sanctions Law & Corporate Compliance',
      'Litigation & Civil Procedure',
      'Corporate & Business Law'
    ],
    education: [
      'Master of Law (MLaw), University of Bern & University of Zurich',
      'Bachelor of Law (BLaw), University of Fribourg'
    ],
    languages: ['German', 'French', 'English', 'Arabic'],
    email: 'mohamed.hasnaoui@baudenbacher.law',
    phone: '+41 44 260 88 00'
  }
];

export const PRACTICE_AREAS_DE: PracticeArea[] = [
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

export const PRACTICE_AREAS_EN: PracticeArea[] = [
  {
    id: 'sanktionsrecht',
    title: 'Sanctions & Compliance',
    shortDesc: 'Strategic counsel regarding national and international sanctions and export control regulations.',
    fullDesc: 'The rapid evolution of international sanctions (SECO, EU, OFAC, UK) requires utmost precision. We advise multinational corporations, financial institutions, and executives on sanctions compliance, unfreezing assets, and multi-jurisdictional risk mitigation.',
    iconName: 'shield',
    badge: 'SECO & EU Compliance',
    regulators: ['SECO', 'EU', 'OFAC', 'BIS'],
    keyTopics: [
      'Swiss Sanctions (SECO) & EU Restrictive Measures',
      'US Sanctions (OFAC) & Secondary Sanctions',
      'Export Controls & Dual-Use Goods',
      'License Applications & Exemptions',
      'Internal Investigations & Compliance Audits'
    ],
    leadAttorneys: ['Dr. Laura Melusine Baudenbacher', 'MLaw Mohamed Hasnaoui']
  },
  {
    id: 'wirtschaftsrecht',
    title: 'Commercial & Corporate Law',
    shortDesc: 'Comprehensive guidance on corporate transactions, governance, and complex commercial matters.',
    fullDesc: 'From high-value contract drafting to strategic restructurings and M&A transactions, we support companies and investors with deep commercial acumen and legal foresight.',
    iconName: 'briefcase',
    badge: 'Corporate & M&A',
    regulators: ['Commercial Registry', 'SIX', 'Finma'],
    keyTopics: [
      'Corporate & Commercial Law',
      'Cross-Border Commercial Contracts',
      'Corporate Governance & Directors’ Liability',
      'Business Succession & Transactions',
      'Strategic Legal Risk Assessments'
    ],
    leadAttorneys: ['Dr. Laura Melusine Baudenbacher', 'Prof. Dr. Dr. Carl Baudenbacher']
  },
  {
    id: 'schiedsverfahren',
    title: 'Arbitration & Litigation',
    shortDesc: 'Representation in domestic and international arbitration and high-stakes court litigation.',
    fullDesc: 'Acting as counsel and arbitrators (ICC, Swiss Rules, LCIA, DIS, ICSID), our team brings unmatched pedigree to complex, high-value commercial and state-level disputes.',
    iconName: 'scale',
    badge: 'ICC & Swiss Rules',
    regulators: ['ICC', 'Swiss Arbitration', 'LCIA', 'ICSID'],
    keyTopics: [
      'International Commercial Arbitration (ICC, Swiss Rules, LCIA)',
      'Investment Treaty Arbitration (ICSID)',
      'Post-M&A and Infrastructure Disputes',
      'Enforcement & Recognition of Arbitral Awards',
      'Counsel and Arbitrator Appointments'
    ],
    leadAttorneys: ['Prof. Dr. Dr. Carl Baudenbacher', 'Prof. Dr. Dr. Mads Andenas']
  },
  {
    id: 'europarecht',
    title: 'European & EEA Law',
    shortDesc: 'Specialized counsel on EU law, EEA law, and their cross-border implications.',
    fullDesc: 'Backed by decades of judicial leadership at Europe’s top courts, we provide unparalleled tactical insight in EU and EEA law, internal market freedoms, and Switzerland–EU relations.',
    iconName: 'globe',
    badge: 'ECJ & EFTA Court',
    regulators: ['ECJ', 'EFTA Court', 'European Commission'],
    keyTopics: [
      'Internal Market Law & Fundamental Freedoms',
      'European Competition & State Aid Law',
      'EEA Law & EFTA Court Litigation',
      'Proceedings before EU Courts and Tribunals',
      'Switzerland–EU Bilateral Agreements'
    ],
    leadAttorneys: ['Prof. Dr. Dr. Carl Baudenbacher', 'Dr. Laura Melusine Baudenbacher']
  },
  {
    id: 'verwaltungsrecht',
    title: 'Regulatory & Administrative',
    shortDesc: 'Advocacy and representation before government bodies and public regulatory authorities.',
    fullDesc: 'We represent corporations and individuals before federal, cantonal, and international regulatory authorities in demanding administrative proceedings and public law litigation.',
    iconName: 'landmark',
    badge: 'Regulatory & Public Authorities',
    regulators: ['COMCO', 'FINMA', 'Federal Administrative Court'],
    keyTopics: [
      'Economic Administrative Law & Regulation',
      'Financial Markets Law & FINMA Proceedings',
      'Antitrust Agency Inquiries (COMCO/WEKO)',
      'Administrative Court Appeals (FAC, Supreme Court)',
      'Public Procurement & Licensing'
    ],
    leadAttorneys: ['Dr. Laura Melusine Baudenbacher', 'MLaw Mohamed Hasnaoui']
  }
];

export const OTHER_PRACTICE_AREAS_DE: OtherPracticeArea[] = [
  { title: 'Kartell- und Wettbewerbsrecht', desc: 'Fusionskontrolle, Missbrauchsverfahren und kartellrechtliche Audits.' },
  { title: 'Finanzmarktrecht & Regulierung', desc: 'Beratung für Banken, Fintechs und Vermögensverwalter.' },
  { title: 'Investitionsschutz & Völkerrecht', desc: 'Schutz von Auslandsinvestitionen und staatsrechtliche Beratung.' },
  { title: 'Krisen- & Reputationsmanagement', desc: 'Rechtliche Begleitung in medialen und strategischen Ausnahmesituationen.' }
];

export const OTHER_PRACTICE_AREAS_EN: OtherPracticeArea[] = [
  { title: 'Antitrust & Competition Law', desc: 'Merger control, abuse of dominance investigations, and compliance audits.' },
  { title: 'Financial Market Regulation', desc: 'Regulatory guidance for banks, fintechs, and asset managers.' },
  { title: 'Investment Protection & International Law', desc: 'Cross-border investment treaty protection and public international law.' },
  { title: 'Crisis & Reputation Management', desc: 'Strategic legal counsel in high-profile and sensitive situations.' }
];

export const OFFICES_DE: OfficeLocation[] = [
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

export const OFFICES_EN: OfficeLocation[] = [
  {
    city: 'Zurich',
    country: 'Switzerland',
    address: 'Hottingerstrasse 12',
    postalCode: '8032 Zurich',
    phone: '+41 44 260 88 00',
    email: 'zuerich@baudenbacher.law',
    image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'Hottingerstrasse 12, 8032 Zürich, Switzerland'
  },
  {
    city: 'Brussels',
    country: 'Belgium',
    address: 'Rue de la Loi 227',
    postalCode: '1040 Brussels',
    phone: '+32 2 280 44 50',
    email: 'brussels@baudenbacher.law',
    image: 'https://images.unsplash.com/photo-1576085898323-218337e3e43c?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'Rue de la Loi 227, 1040 Brussels, Belgium'
  },
  {
    city: 'Oslo',
    country: 'Norway',
    address: 'Dronning Eufemias gate 16',
    postalCode: '0191 Oslo',
    phone: '+47 22 83 90 00',
    email: 'oslo@baudenbacher.law',
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&w=800&q=80',
    mapQuery: 'Dronning Eufemias gate 16, 0191 Oslo, Norway'
  }
];

export const UI_DE: UiTranslations = {
  nav: {
    menu: 'Menü',
    closeMenu: 'Menü schließen',
    home: 'Startseite',
    team: 'Unser Team',
    values: 'Wofür wir stehen',
    practices: 'Unsere Fachgebiete',
    offices: 'Standorte & Kontakt',
    contact: 'Kontakt',
    subtitle: 'Zürich · Brüssel · Oslo'
  },
  hero: {
    heading1: 'Ihre Anwaltskanzlei',
    heading2: 'in Zürich, Brüssel und Oslo',
    paragraph: 'Baudenbacher Law berät Unternehmen und Privatpersonen in anspruchsvollen nationalen und internationalen Rechtsfragen – präzise, diskret und mit strategischem Weitblick.',
    cta: 'Mehr erfahren',
    cityTagline: 'Schweiz · Belgien · Norwegen',
    firmTagline: 'Rechtsanwälte & Berater',
    switchImage: 'Bild anzeigen von',
    pauseSlideshow: 'Slideshow pausieren',
    playSlideshow: 'Slideshow abspielen'
  },
  team: {
    eyebrow: 'JURISTISCHE EXPERTISE',
    title: 'Unser Team',
    subtitle: 'Führende Praxis- und Gerichtserfahrung in der Schweiz, der Europäischen Union und im EWR-Raum.',
    viewAll: 'Gesamtes Team ansehen',
    openProfile: 'Profil öffnen',
    viewProfile: 'Profil ansehen',
    fullProfile: 'Vollständiges Profil',
    contactDirectly: 'Direkt kontaktieren',
    spotlightTitle: 'Führungspersönlichkeit im Fokus',
    spotlightMode: 'Dossier-Ansicht',
    gridMode: 'Karten-Ansicht',
    keyMilestones: 'Kernkompetenzen & Funktionen',
    specializations: 'Tätigkeitsschwerpunkte',
    education: 'Ausbildung & Werdegang',
    languages: 'Arbeitssprachen',
    location: 'Standort',
    phone: 'Telefon',
    email: 'E-Mail',
    bannerTitle: 'Erfahrung an den obersten Gerichten und Behörden',
    bannerDesc: 'Ehemalige Präsidentschaften am EFTA-Gerichtshof und der Schweizer Wettbewerbskommission (WEKO).',
    bannerCta: 'Gesamtes Team ansehen',
    accolades: {
      laura: 'Ehem. Präsidentin der Schweizer Wettbewerbskommission (WEKO)',
      carl: 'Ehem. Präsident des EFTA-Gerichtshofs in Luxemburg (2003–2017)',
      mads: 'Ehem. Vorsitzender der UN-Arbeitsgruppe & Univ. Oslo',
      mohamed: 'Wirtschaftsstreitigkeiten & Sanktionsrecht Zürich'
    }
  },
  values: {
    eyebrow: 'WOFÜR WIR STEHEN',
    heading: 'Präzision, Diskretion und strategische Klarheit',
    p1: 'Baudenbacher Law berät Unternehmen, Unternehmerinnen und Unternehmer sowie Privatpersonen in anspruchsvollen nationalen und internationalen Rechtsfragen. Unsere Tätigkeit konzentriert sich auf rechtlich und wirtschaftlich komplexe Mandate, in denen fachliche Tiefe, Urteilsstärke und ein präzises Vorgehen entscheidend sind.',
    p2: 'Wir verbinden juristische Exzellenz mit strategischem Verständnis und entwickeln massgeschneiderte Lösungen für Situationen, in denen viel auf dem Spiel steht. Unsere Mandantschaft schätzt unsere Verlässlichkeit, unsere Diskretion und unsere Fähigkeit, auch in sensiblen Verfahren Orientierung und Klarheit zu schaffen.',
    cta: 'Mehr über unsere Werte',
    badgeTitle: 'Unabhängige Schweizer & Internationale Kanzlei',
    badgeSubtitle: 'Zürich · Brüssel · Oslo',
    pillar1Title: 'Präzision',
    pillar1Subtitle: 'Akribische Rechtsanalyse & wissenschaftliche Tiefe',
    pillar1Text: 'Tiefgehende juristische Analyse ohne Kompromisse bei Details und Rechtssicherheit für komplexe wirtschaftliche Sachverhalte.',
    pillar2Title: 'Diskretion',
    pillar2Subtitle: 'Höchste Vertraulichkeit & absolute Loyalität',
    pillar2Text: 'Als unabhängige Boutique-Kanzlei gewährleisten wir vollkommene Diskretion bei sensiblen Streitigkeiten, Reputationsfragen und behördlichen Untersuchungen.',
    pillar3Title: 'Strategische Klarheit',
    pillar3Subtitle: 'Erfahrung vor Höchstgerichten & Weitblick',
    pillar3Text: 'Entwicklung von massgeschneiderten Strategien, die rechtliche Risiken antizipieren und unternehmerische Ziele nachhaltig sichern.',
    bannerTitle: 'Unabhängige Schweizer & Europäische Spitzenberatung'
  },
  practices: {
    eyebrow: 'UNSERE FACHGEBIETE',
    headingPart1: 'Fokus auf das Wesentliche.',
    headingPart2: 'Kompetenz in Kernbereichen.',
    description: 'Wir beraten Unternehmen und Privatpersonen in komplexen nationalen und internationalen Rechtsfragen mit Tiefe, Erfahrung und strategischem Weitblick.',
    allOverview: 'Alle Gebiete im Überblick',
    detailsLink: 'Details & Fallkonstellationen',
    tailoredTitle: 'Massgeschneiderte Strategien',
    tailoredDesc: 'Jedes Mandat erfordert eine massgeschneiderte juristische und taktische Gesamtbetrachtung. Wir stehen Ihnen jederzeit zur Verfügung.',
    tailoredCta: 'Alle Fachgebiete einsehen',
    customConsultation: 'INDIVIDUELLE BERATUNG'
  },
  morePractices: {
    eyebrow: 'KOMPLETTE KOMPETENZÜBERSICHT',
    heading: 'Weitere Rechtsgebiete & Spezialmaterien',
    description: 'Erfahren Sie mehr über unser breiteres Leistungsspektrum, darunter Kartell- und Wettbewerbsrecht, Finanzmarktrecht, Investitionsschutz und behördliche Sonderverfahren.',
    cta: 'Alle Rechtsgebiete entdecken',
    tag1: 'Kartell- & Beihilfenrecht',
    tag2: 'Finanzmarktrecht & FINMA',
    tag3: 'Investitionsschutz'
  },
  offices: {
    eyebrow: 'INTERNATIONALE PRÄSENZ',
    heading: 'Unsere Standorte & Hubs',
    description: 'In den wichtigsten europäischen und schweizerischen Rechts- und Wirtschaftsmetropolen für Sie vor Ort.',
    badgeText: 'Direkte Vertretung in der Schweiz, der EU und dem EWR',
    contactOffice: 'Standort kontaktieren',
    openMaps: 'In Google Maps öffnen'
  },
  footer: {
    bannerEyebrow: 'MANDATSANFRAGE & ERSTGESPRÄCH',
    bannerTitle: 'Sie stehen vor einer komplexen regulatorischen oder gerichtlichen Herausforderung?',
    bannerDesc: 'Wir beraten Sie gerne vertraulich und strategisch fundiert an unseren Standorten in Zürich, Brüssel und Oslo.',
    bannerCta: 'Jetzt Kontakt aufnehmen',
    brandDesc: 'Baudenbacher Law AG — Rechtsanwälte & Berater. Wir verbinden juristische Exzellenz aus Justiz, Verwaltung und Praxis für anspruchsvolle Mandate in der Schweiz und ganz Europa.',
    registryBadge: 'Schweizerisches Anwaltsregister & EU-Zulassungen',
    navTitle: 'Kanzlei & Bereiche',
    complianceTitle: 'Berufsrecht & Vertraulichkeit',
    complianceP1: 'Unterliegt den berufsrechtlichen Standesregeln des Schweizerischen Anwaltsverbands (SAV) und der Anwaltskammer Brüssel (Ordre des barreaux francophones et germanophone).',
    complianceP2: 'Strengste Wahrung des Anwaltsgeheimnisses gemäss Art. 321 StGB sowie internationalen Datenschutzstandards.',
    copyright: 'Baudenbacher Law AG · Zürich · Brüssel · Oslo. Alle Rechte vorbehalten.',
    imprint: 'Impressum',
    privacy: 'Datenschutz',
    legal: 'Rechtliche Hinweise',
    scrollTop: 'Nach oben scrollen'
  },
  modals: {
    close: 'Schließen',
    profileBackground: 'Profil & Hintergrund',
    specializations: 'Tätigkeitsschwerpunkte',
    education: 'Ausbildung & Werdegang',
    languages: 'Sprachen',
    directContact: 'Direkt kontaktieren',
    practiceAreas: 'Beratungsfelder & Schwerpunkte',
    leadingAttorneys: 'Führende Anwälte in diesem Bereich',
    requestMandate: 'Mandat anfragen',
    requestConsultation: 'Beratung anfragen',
    allPracticesTitle: 'Alle Rechtsgebiete & Spezialisierungen',
    allPracticesDesc: 'Baudenbacher Law berät national und grenzüberschreitend in Kernbereichen des Wirtschafts-, Regulierungs- und Streitbeilegungsrechts.',
    corePractices: 'Kernfachgebiete',
    otherSpecializations: 'Weitere Spezialisierungen',
    individualInquiry: 'Individuelle juristische Fragestellung? Wir analysieren Ihr Anliegen unverbindlich.',
    contactModalTitle: 'Sprechen Sie mit unseren Rechtsanwälten',
    contactModalSubtitle: 'Diskret, verbindlich und mit höchstem juristischem Anspruch.',
    fullName: 'Vollständiger Name *',
    company: 'Unternehmen / Organisation',
    emailAddress: 'E-Mail-Adresse *',
    phoneNumber: 'Telefonnummer',
    practiceField: 'Rechtsgebiet / Anliegen',
    messageLabel: 'Nachricht / Kurzbeschreibung des Sachverhalts *',
    messagePlaceholder: 'Beschreiben Sie kurz Ihr Anliegen oder hinterlassen Sie eine Rückrufbitte...',
    confidentialityNotice: 'Alle Angaben unterliegen dem strengen schweizerischen Anwaltsgeheimnis.',
    sendButton: 'Anfrage vertraulich übermitteln',
    thankYouTitle: 'Vielen Dank für Ihre Anfrage',
    thankYouMessage: 'Ihre Nachricht wurde vertraulich an unser Büro weitergeleitet. Ein zuständiger Partner wird sich zeitnah mit Ihnen in Verbindung setzen.',
    closeWindow: 'Fenster schließen',
    officeTab: 'Standort'
  },
  controls: {
    title: 'Design & Layout Switcher',
    layoutTitle: 'Gesamtes Homepage-Layout:',
    v1Title: 'V1: PDF Replikation',
    v1Desc: 'Klassisch & Clean',
    v2Title: 'V2: Modern Creative',
    v2Desc: 'Interaktiv & Creative',
    langTitle: 'Sprache / Language:',
    german: 'Deutsch',
    english: 'English',
    colorTitle: 'Goldton-Feinabstimmung:',
    elementorGuide: 'Elementor Anleitung & Farbwerte öffnen'
  }
};

export const UI_EN: UiTranslations = {
  nav: {
    menu: 'Menu',
    closeMenu: 'Close Menu',
    home: 'Home',
    team: 'Our Team',
    values: 'Our Values',
    practices: 'Practice Areas',
    offices: 'Offices & Contact',
    contact: 'Contact',
    subtitle: 'Zurich · Brussels · Oslo'
  },
  hero: {
    heading1: 'Your Law Firm',
    heading2: 'in Zurich, Brussels and Oslo',
    paragraph: 'Baudenbacher Law advises corporations, governments, and private individuals in demanding national and international legal matters — precise, discreet, and with strategic foresight.',
    cta: 'Learn More',
    cityTagline: 'Switzerland · Belgium · Norway',
    firmTagline: 'Attorneys & Advisors',
    switchImage: 'Switch slide to',
    pauseSlideshow: 'Pause slideshow',
    playSlideshow: 'Play slideshow'
  },
  team: {
    eyebrow: 'LEGAL EXPERTISE',
    title: 'Our Team',
    subtitle: 'Decades of top-tier judicial and governmental experience across Switzerland, the European Union, and the EEA.',
    viewAll: 'View Entire Team',
    openProfile: 'Open Profile',
    viewProfile: 'View Profile',
    fullProfile: 'Full Profile',
    contactDirectly: 'Contact Directly',
    spotlightTitle: 'Leadership Spotlight',
    spotlightMode: 'Dossier View',
    gridMode: 'Card View',
    keyMilestones: 'Key Appointments & Credentials',
    specializations: 'Practice Focus Areas',
    education: 'Education & Admissions',
    languages: 'Working Languages',
    location: 'Location',
    phone: 'Phone',
    email: 'Email',
    bannerTitle: 'Experience at the Highest Courts and Regulatory Authorities',
    bannerDesc: 'Former Presidencies of the EFTA Court and the Swiss Competition Commission (COMCO).',
    bannerCta: 'View Entire Team',
    accolades: {
      laura: 'Former President of the Swiss Competition Commission (COMCO)',
      carl: 'Former President of the EFTA Court in Luxembourg (2003–2017)',
      mads: 'Former Chair of UN Working Group & Univ. of Oslo',
      mohamed: 'Commercial Litigation & Sanctions Law Zurich'
    }
  },
  values: {
    eyebrow: 'WHAT WE STAND FOR',
    heading: 'Precision, Discretion and Strategic Clarity',
    p1: 'Baudenbacher Law advises corporations, entrepreneurs, and private individuals on demanding national and international legal matters. Our practice focuses on legally and commercially complex mandates where depth of expertise, sound judgment, and meticulous execution are paramount.',
    p2: 'We combine legal excellence with acute commercial acumen, forging tailored solutions for high-stakes situations. Our clients rely on our integrity, absolute discretion, and proven ability to provide clarity and strategic direction in the most sensitive proceedings.',
    cta: 'More About Our Values',
    badgeTitle: 'Independent Swiss & International Law Firm',
    badgeSubtitle: 'Zurich · Brussels · Oslo',
    pillar1Title: 'Precision',
    pillar1Subtitle: 'Meticulous legal analysis & academic depth',
    pillar1Text: 'Rigorous legal evaluation without compromise on detail or procedural certainty for complex commercial matters.',
    pillar2Title: 'Discretion',
    pillar2Subtitle: 'Utmost confidentiality & unwavering loyalty',
    pillar2Text: 'As an independent boutique practice, we guarantee absolute discretion in sensitive disputes, corporate inquiries, and reputation defense.',
    pillar3Title: 'Strategic Clarity',
    pillar3Subtitle: 'Supreme court experience & global foresight',
    pillar3Text: 'Devising bespoke strategies that anticipate regulatory risks and protect business objectives over the long term.',
    bannerTitle: 'Independent Swiss & European Premier Legal Counsel'
  },
  practices: {
    eyebrow: 'OUR PRACTICE AREAS',
    headingPart1: 'Focus on the Essential.',
    headingPart2: 'Excellence in Core Disciplines.',
    description: 'We advise corporations and individuals on complex domestic and cross-border matters with depth, pedigree, and tactical foresight.',
    allOverview: 'Overview of All Areas',
    detailsLink: 'Details & Case Scenarios',
    tailoredTitle: 'Tailored Legal Strategies',
    tailoredDesc: 'Every mandate demands an individualized tactical and legal roadmap. Our partners are at your disposal.',
    tailoredCta: 'Explore All Practice Areas',
    customConsultation: 'INDIVIDUAL COUNSEL'
  },
  morePractices: {
    eyebrow: 'COMPREHENSIVE EXPERTISE',
    heading: 'Additional Practice Areas & Specializations',
    description: 'Discover our broader scope of advisory services, including antitrust and merger control, financial market regulation, investment protection, and specialized administrative proceedings.',
    cta: 'Explore All Practice Areas',
    tag1: 'Antitrust & State Aid',
    tag2: 'Financial Regulation & FINMA',
    tag3: 'Investment Protection'
  },
  offices: {
    eyebrow: 'INTERNATIONAL PRESENCE',
    heading: 'Our Offices & Hubs',
    description: 'On the ground for you in key European and Swiss legal, political, and financial capitals.',
    badgeText: 'Direct advocacy across Switzerland, the EU, and the EEA',
    contactOffice: 'Contact Office',
    openMaps: 'Open in Google Maps'
  },
  footer: {
    bannerEyebrow: 'MANDATE INQUIRY & INITIAL CONSULTATION',
    bannerTitle: 'Facing a complex regulatory, arbitral, or litigation challenge?',
    bannerDesc: 'We provide confidential, strategically grounded counsel from our offices in Zurich, Brussels, and Oslo.',
    bannerCta: 'Get in Touch Now',
    brandDesc: 'Baudenbacher Law AG — Attorneys & Advisors. Uniting premier experience from the bench, administration, and private practice for demanding mandates across Switzerland and Europe.',
    registryBadge: 'Swiss Bar Registry & EU Admissions',
    navTitle: 'Firm & Practices',
    complianceTitle: 'Professional Standards & Confidentiality',
    complianceP1: 'Subject to the professional conduct rules of the Swiss Bar Association (SAV) and the Brussels Bar (Ordre des barreaux francophones et germanophone).',
    complianceP2: 'Strict adherence to Swiss attorney-client privilege (Art. 321 Swiss Criminal Code) and international data privacy standards (FADP / GDPR).',
    copyright: 'Baudenbacher Law AG · Zurich · Brussels · Oslo. All rights reserved.',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    legal: 'Legal Notice',
    scrollTop: 'Scroll to top'
  },
  modals: {
    close: 'Close',
    profileBackground: 'Profile & Background',
    specializations: 'Practice Focus Areas',
    education: 'Education & Career',
    languages: 'Languages',
    directContact: 'Contact Directly',
    practiceAreas: 'Key Topics & Focus Areas',
    leadingAttorneys: 'Key Attorneys in this Practice',
    requestMandate: 'Inquire About Mandate',
    requestConsultation: 'Request Consultation',
    allPracticesTitle: 'All Practice Areas & Specializations',
    allPracticesDesc: 'Baudenbacher Law advises nationally and internationally across core fields of commercial, regulatory, and dispute resolution law.',
    corePractices: 'Core Practice Areas',
    otherSpecializations: 'Additional Specializations',
    individualInquiry: 'Have a specific legal question? We will analyze your matter confidentially.',
    contactModalTitle: 'Speak with Our Attorneys',
    contactModalSubtitle: 'Discreet, committed, and adhering to the highest legal standards.',
    fullName: 'Full Name *',
    company: 'Company / Organization',
    emailAddress: 'Email Address *',
    phoneNumber: 'Phone Number',
    practiceField: 'Practice Area / Matter',
    messageLabel: 'Message / Summary of the Matter *',
    messagePlaceholder: 'Briefly describe your inquiry or request a callback...',
    confidentialityNotice: 'All submissions are protected by strict Swiss attorney-client privilege.',
    sendButton: 'Submit Inquiry Confidentially',
    thankYouTitle: 'Thank You for Your Inquiry',
    thankYouMessage: 'Your message has been securely transmitted to our office. A designated partner will contact you promptly.',
    closeWindow: 'Close Window',
    officeTab: 'Office'
  },
  controls: {
    title: 'Design & Language Controls',
    layoutTitle: 'Homepage Layout Version:',
    v1Title: 'V1: PDF Replica',
    v1Desc: 'Classic & Clean',
    v2Title: 'V2: Modern Creative',
    v2Desc: 'Interactive & Creative',
    langTitle: 'Language / Sprache:',
    german: 'Deutsch',
    english: 'English',
    colorTitle: 'Gold Accent Fine-Tuning:',
    elementorGuide: 'Open Elementor Guide & Color Specs'
  }
};

export function getLocalizedData(lang: Language | string = 'de') {
  if (lang === 'en') {
    return {
      slides: CITY_SLIDES_EN,
      team: TEAM_MEMBERS_EN,
      practices: PRACTICE_AREAS_EN,
      otherPractices: OTHER_PRACTICE_AREAS_EN,
      offices: OFFICES_EN,
      ui: UI_EN
    };
  }
  return {
    slides: CITY_SLIDES_DE,
    team: TEAM_MEMBERS_DE,
    practices: PRACTICE_AREAS_DE,
    otherPractices: OTHER_PRACTICE_AREAS_DE,
    offices: OFFICES_DE,
    ui: UI_DE
  };
}
