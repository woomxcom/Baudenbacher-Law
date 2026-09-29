export type HomePageVersion = 'version1' | 'version2';
export type HeroVersion = HomePageVersion;
export type Language = 'de' | 'en';
export type ActiveView = 
  | 'home' 
  | 'team-overview' 
  | 'team-member-template' 
  | 'practice-areas-overview' 
  | 'practice-area-template' 
  | 'contact'
  | 'blog-overview'
  | 'blog-post-template';
export type DeviceMode = 'desktop' | 'tablet' | 'mobile';

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  titleEn?: string;
  excerpt: string;
  excerptEn?: string;
  category: string;
  categoryEn?: string;
  date: string;
  dateEn?: string;
  readTime: string;
  readTimeEn?: string;
  imageUrl: string;
  imageCaption?: string;
  imageCaptionEn?: string;
  author: {
    name: string;
    role: string;
    roleEn?: string;
    memberId?: string;
    avatarUrl: string;
  };
  tags: string[];
  featured?: boolean;
  relatedPracticeId?: string;
  // Structured post content blocks for easy Elementor translation
  leadParagraph: string;
  leadParagraphEn?: string;
  sections: {
    heading: string;
    headingEn?: string;
    paragraphs: string[];
    paragraphsEn?: string[];
    quote?: string;
    quoteEn?: string;
    bullets?: string[];
    bulletsEn?: string[];
  }[];
  keyTakeaways?: string[];
  keyTakeawaysEn?: string[];
}

export interface CitySlide {
  id: string;
  name: string;
  country: string;
  subtitle: string;
  imageUrl: string;
  focusPoint: string;
  description: string;
  timeZone?: string;
  coordinates?: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  role: string;
  location: string;
  imageUrl: string;
  bio: string;
  specializations: string[];
  education: string[];
  languages: string[];
  email: string;
  phone: string;
  category?: 'partner' | 'counsel' | 'associate' | 'substitute';
}

export interface PracticeArea {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: 'shield' | 'briefcase' | 'scale' | 'globe' | 'landmark' | 'file-text' | 'gavel';
  keyTopics: string[];
  leadAttorneys: string[];
  badge?: string;
  regulators?: string[];
}

export interface OfficeLocation {
  city: string;
  country: string;
  address: string;
  postalCode: string;
  phone: string;
  email: string;
  image: string;
  mapQuery: string;
  localTimezone?: string;
}
