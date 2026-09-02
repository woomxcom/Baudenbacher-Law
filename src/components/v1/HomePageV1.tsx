import React from 'react';
import { HeaderV1 } from './HeaderV1';
import { HeroSectionV1 } from './HeroSectionV1';
import { TeamSectionV1 } from './TeamSectionV1';
import { ValuesSectionV1 } from './ValuesSectionV1';
import { PracticeAreasSectionV1 } from './PracticeAreasSectionV1';
import { MorePracticesBannerV1 } from './MorePracticesBannerV1';
import { OfficesSectionV1 } from './OfficesSectionV1';
import { FooterV1 } from './FooterV1';
import { HomePageVersion, TeamMember, PracticeArea, Language } from '../../types';

interface HomePageV1Props {
  pageVersion: HomePageVersion;
  language?: Language;
  onSelectVersion: (v: HomePageVersion) => void;
  onSelectMember: (m: TeamMember) => void;
  onSelectPractice: (p: PracticeArea) => void;
  onOpenContact: () => void;
  onSelectOffice: (city: string) => void;
  onOpenValuesDetail: () => void;
  onExploreAllPractices: () => void;
  onOpenElementorGuide: () => void;
}

export const HomePageV1: React.FC<HomePageV1Props> = ({
  pageVersion,
  language = 'de',
  onSelectVersion,
  onSelectMember,
  onSelectPractice,
  onOpenContact,
  onSelectOffice,
  onOpenValuesDetail,
  onExploreAllPractices,
  onOpenElementorGuide
}) => {
  const handleViewAllTeam = () => {
    const el = document.getElementById('team-section-v1');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="homepage-v1" className="min-h-screen flex flex-col bg-[#213134] text-[#213134]">
      {/* 1. Header V1 */}
      <HeaderV1
        pageVersion={pageVersion}
        language={language}
        onSelectVersion={onSelectVersion}
        onOpenContact={onOpenContact}
        onOpenElementorGuide={onOpenElementorGuide}
      />

      <main className="flex-grow">
        {/* 2. Hero Section V1 (Background Slideshow + Fixed Content Box) */}
        <HeroSectionV1 language={language} onOpenContact={onOpenContact} />

        {/* 3. Team Section V1 (4-Column Layout) */}
        <TeamSectionV1
          language={language}
          onSelectMember={onSelectMember}
          onViewAllTeam={handleViewAllTeam}
        />

        {/* 4. Values Section V1 ("Wofür wir stehen") */}
        <ValuesSectionV1 language={language} onOpenValuesDetail={onOpenValuesDetail} />

        {/* 5. Practice Areas Section V1 (5-Column Vertical Dividers) */}
        <PracticeAreasSectionV1
          language={language}
          onSelectPractice={onSelectPractice}
          onExploreAll={onExploreAllPractices}
        />

        {/* 6. More Practices Banner V1 */}
        <MorePracticesBannerV1 language={language} onExploreAll={onExploreAllPractices} />

        {/* 7. Offices Section V1 (Zürich, Brüssel, Oslo) */}
        <OfficesSectionV1 language={language} onSelectOffice={onSelectOffice} />
      </main>

      {/* 8. Footer V1 */}
      <FooterV1 language={language} onOpenContact={onOpenContact} />
    </div>
  );
};
