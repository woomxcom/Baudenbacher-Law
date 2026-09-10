import React from 'react';
import { HeaderV1 } from '../v1/HeaderV1';
import { HeroSectionV1 } from '../v1/HeroSectionV1';
import { TeamSectionV2 } from './TeamSectionV2';
import { ValuesSectionV2 } from './ValuesSectionV2';
import { PracticeAreasSectionV2 } from './PracticeAreasSectionV2';
import { MorePracticesBannerV2 } from './MorePracticesBannerV2';
import { OfficesSectionV2 } from './OfficesSectionV2';
import { FooterV2 } from './FooterV2';
import { HomePageVersion, TeamMember, PracticeArea, Language } from '../../types';

interface HomePageV2Props {
  pageVersion: HomePageVersion;
  language?: Language;
  onSelectVersion: (v: HomePageVersion) => void;
  onSelectMember: (m: TeamMember) => void;
  onOpenMemberDetails: (memberId: string) => void;
  onSelectPractice: (p: PracticeArea) => void;
  onOpenContact: () => void;
  onSelectOffice: (city: string) => void;
  onOpenValuesDetail: () => void;
  onExploreAllPractices: () => void;
  onOpenElementorGuide: () => void;
}

export const HomePageV2: React.FC<HomePageV2Props> = ({
  pageVersion,
  language = 'de',
  onSelectVersion,
  onSelectMember,
  onOpenMemberDetails,
  onSelectPractice,
  onOpenContact,
  onSelectOffice,
  onOpenValuesDetail,
  onExploreAllPractices,
  onOpenElementorGuide
}) => {
  const handleViewAllTeam = () => {
    const el = document.getElementById('team-section-v2');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="homepage-v2" className="min-h-screen flex flex-col bg-[#182527] text-white">
      {/* 1. Header (Shared identical header across versions) */}
      <HeaderV1
        pageVersion={pageVersion}
        language={language}
        onSelectVersion={onSelectVersion}
        onOpenContact={onOpenContact}
        onOpenElementorGuide={onOpenElementorGuide}
      />

      <main className="flex-grow">
        {/* 2. Hero Section (Shared identical hero section across versions) */}
        <HeroSectionV1 language={language} onOpenContact={onOpenContact} />

        {/* 3. Team Section V2 (Creative Spotlight Leadership Dossier & Filter-free) */}
        <TeamSectionV2
          language={language}
          onSelectMember={onSelectMember}
          onOpenMemberDetails={onOpenMemberDetails}
          onViewAllTeam={handleViewAllTeam}
        />

        {/* 4. Values Section V2 (3-Pillar Interactive Values Matrix) */}
        <ValuesSectionV2 language={language} onOpenValuesDetail={onOpenValuesDetail} />

        {/* 5. Practice Areas Section V2 (Bento Grid & Badges) */}
        <PracticeAreasSectionV2
          language={language}
          onSelectPractice={onSelectPractice}
          onExploreAll={onExploreAllPractices}
        />

        {/* 6. More Practices Banner V2 (Creative Panoramic Hub) */}
        <MorePracticesBannerV2 language={language} onExploreAll={onExploreAllPractices} />

        {/* 7. Offices Section V2 (Interactive 3-Hub Center with Live Time) */}
        <OfficesSectionV2 language={language} onSelectOffice={onSelectOffice} />
      </main>

      {/* 8. Footer V2 */}
      <FooterV2 language={language} onOpenContact={onOpenContact} />
    </div>
  );
};
