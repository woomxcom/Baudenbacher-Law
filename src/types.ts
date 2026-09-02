export type HomePageVersion = 'version1' | 'version2';
export type HeroVersion = HomePageVersion;
export type Language = 'de' | 'en';

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
  category?: 'partner' | 'counsel' | 'associate';
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
