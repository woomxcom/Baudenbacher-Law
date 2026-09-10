import React, { useState, useEffect } from 'react';
import { HomePageV1 } from './components/v1/HomePageV1';
import { HomePageV2 } from './components/v2/HomePageV2';
import { TeamMemberProfilePage } from './components/pages/TeamMemberProfilePage';
import { PracticeAreaPage } from './components/pages/PracticeAreaPage';
import { TeamModal } from './components/TeamModal';
import { ContactModal } from './components/ContactModal';
import { ValuesModal } from './components/ValuesModal';
import { AllPracticesModal } from './components/AllPracticesModal';
import { ElementorGuideModal } from './components/ElementorGuideModal';
import { LiveDesignControls } from './components/LiveDesignControls';
import { HomePageVersion, TeamMember, PracticeArea, Language, ActiveView } from './types';

export default function App() {
  const [pageVersion, setPageVersion] = useState<HomePageVersion>('version1');
  const [language, setLanguage] = useState<Language>('de');
  const [activeView, setActiveView] = useState<ActiveView>('home');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedMemberId, setSelectedMemberId] = useState<string>('laura-baudenbacher');
  const [selectedPracticeId, setSelectedPracticeId] = useState<string>('europarecht');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactDefaultOffice, setContactDefaultOffice] = useState('Zürich');
  const [contactDefaultPractice, setContactDefaultPractice] = useState('');
  const [isValuesOpen, setIsValuesOpen] = useState(false);
  const [isAllPracticesOpen, setIsAllPracticesOpen] = useState(false);
  const [isElementorGuideOpen, setIsElementorGuideOpen] = useState(false);
  const [goldTone, setGoldTone] = useState('#C6A15B');

  // Dynamically update gold accent CSS variable when client experiments with colors
  useEffect(() => {
    document.documentElement.style.setProperty('--color-gold', goldTone);
  }, [goldTone]);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [activeView, selectedMemberId, selectedPracticeId]);

  const handleOpenContactWithOffice = (officeCity: string, practiceName?: string) => {
    setContactDefaultOffice(officeCity || 'Zürich');
    if (practiceName) {
      setContactDefaultPractice(practiceName);
    }
    setIsContactOpen(true);
  };

  const handleOpenMemberDetails = (memberId: string) => {
    setSelectedMemberId(memberId);
    setActiveView('team-member-template');
  };

  const handleSelectPracticeDirectly = (practice: PracticeArea) => {
    setSelectedPracticeId(practice.id);
    setActiveView('practice-area-template');
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      
      {/* 1. Main View Rendering */}
      {activeView === 'team-member-template' ? (
        <TeamMemberProfilePage
          language={language}
          pageVersion={pageVersion}
          selectedMemberId={selectedMemberId}
          onSelectVersion={setPageVersion}
          onBackToHome={() => setActiveView('home')}
          onOpenContact={(officeCity) => handleOpenContactWithOffice(officeCity || 'Zürich')}
          onNavigateToPractice={(practiceId) => {
            setSelectedPracticeId(practiceId || 'europarecht');
            setActiveView('practice-area-template');
          }}
          onSelectOtherMember={(memberId) => setSelectedMemberId(memberId)}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        />
      ) : activeView === 'practice-area-template' ? (
        <PracticeAreaPage
          language={language}
          pageVersion={pageVersion}
          selectedPracticeId={selectedPracticeId}
          onSelectVersion={setPageVersion}
          onBackToHome={() => setActiveView('home')}
          onOpenContact={(officeCity, practice) => handleOpenContactWithOffice(officeCity || 'Zürich', practice || 'Europarecht')}
          onNavigateToTeamMember={(memberId) => {
            setSelectedMemberId(memberId || 'laura-baudenbacher');
            setActiveView('team-member-template');
          }}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        />
      ) : pageVersion === 'version1' ? (
        <HomePageV1
          pageVersion={pageVersion}
          language={language}
          onSelectVersion={setPageVersion}
          onSelectMember={(member) => setSelectedMember(member)}
          onOpenMemberDetails={handleOpenMemberDetails}
          onSelectPractice={handleSelectPracticeDirectly}
          onOpenContact={() => setIsContactOpen(true)}
          onSelectOffice={handleOpenContactWithOffice}
          onOpenValuesDetail={() => setIsValuesOpen(true)}
          onExploreAllPractices={() => setIsAllPracticesOpen(true)}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        />
      ) : (
        <HomePageV2
          pageVersion={pageVersion}
          language={language}
          onSelectVersion={setPageVersion}
          onSelectMember={(member) => setSelectedMember(member)}
          onOpenMemberDetails={handleOpenMemberDetails}
          onSelectPractice={handleSelectPracticeDirectly}
          onOpenContact={() => setIsContactOpen(true)}
          onSelectOffice={handleOpenContactWithOffice}
          onOpenValuesDetail={() => setIsValuesOpen(true)}
          onExploreAllPractices={() => setIsAllPracticesOpen(true)}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        />
      )}

      {/* Floating Live Design Controls for instant layout, template view, language & gold tone switching */}
      <LiveDesignControls
        pageVersion={pageVersion}
        onSelectPageVersion={setPageVersion}
        language={language}
        onSelectLanguage={setLanguage}
        goldTone={goldTone}
        onSelectGoldTone={setGoldTone}
        activeView={activeView}
        onSelectActiveView={setActiveView}
        onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
      />

      {/* Interactive Quickview Modal for Team Members (ONLY triggered via Portrait & Image button) */}
      <TeamModal
        member={selectedMember}
        language={language}
        onClose={() => setSelectedMember(null)}
        onOpenContact={() => setIsContactOpen(true)}
        onOpenFullProfile={(memberId) => {
          setSelectedMember(null);
          handleOpenMemberDetails(memberId || (selectedMember ? selectedMember.id : 'laura-baudenbacher'));
        }}
      />

      <ContactModal
        isOpen={isContactOpen}
        language={language}
        onClose={() => setIsContactOpen(false)}
        defaultOffice={contactDefaultOffice}
      />

      <ValuesModal
        isOpen={isValuesOpen}
        language={language}
        onClose={() => setIsValuesOpen(false)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Full Directory of All Practice Areas Modal (Directly navigates to practice area page on select) */}
      <AllPracticesModal
        isOpen={isAllPracticesOpen}
        language={language}
        onClose={() => setIsAllPracticesOpen(false)}
        onSelectPractice={(practice) => {
          setIsAllPracticesOpen(false);
          handleSelectPracticeDirectly(practice);
        }}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ElementorGuideModal
        isOpen={isElementorGuideOpen}
        onClose={() => setIsElementorGuideOpen(false)}
      />
    </div>
  );
}
