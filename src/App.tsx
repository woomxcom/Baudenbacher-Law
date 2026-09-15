import React, { useState, useEffect } from 'react';
import { HomePageV1 } from './components/v1/HomePageV1';
import { TeamMemberProfilePage } from './components/pages/TeamMemberProfilePage';
import { PracticeAreaPage } from './components/pages/PracticeAreaPage';
import { TeamOverviewPage } from './components/pages/TeamOverviewPage';
import { PracticeAreasOverviewPage } from './components/pages/PracticeAreasOverviewPage';
import { ContactPage } from './components/pages/ContactPage';
import { TeamModal } from './components/TeamModal';
import { ContactModal } from './components/ContactModal';
import { ValuesModal } from './components/ValuesModal';
import { AllPracticesModal } from './components/AllPracticesModal';
import { ElementorGuideModal } from './components/ElementorGuideModal';
import { LiveDesignControls } from './components/LiveDesignControls';
import { TeamMember, PracticeArea, Language, ActiveView } from './types';

export default function App() {
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

  const renderActiveContent = () => {
    if (activeView === 'team-overview') {
      return (
        <TeamOverviewPage
          language={language}
          onBackToHome={() => setActiveView('home')}
          onOpenMemberDetails={handleOpenMemberDetails}
          onOpenContact={(officeCity) => handleOpenContactWithOffice(officeCity || 'Zürich')}
          onNavigateToPracticesOverview={() => setActiveView('practice-areas-overview')}
          onNavigateToContactPage={() => setActiveView('contact')}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        />
      );
    }

    if (activeView === 'practice-areas-overview') {
      return (
        <PracticeAreasOverviewPage
          language={language}
          onBackToHome={() => setActiveView('home')}
          onSelectPractice={(practiceId) => {
            setSelectedPracticeId(practiceId);
            setActiveView('practice-area-template');
          }}
          onOpenContact={(officeCity, practice) => handleOpenContactWithOffice(officeCity || 'Zürich', practice)}
          onNavigateToTeamMember={(memberId) => {
            setSelectedMemberId(memberId);
            setActiveView('team-member-template');
          }}
          onNavigateToTeamOverview={() => setActiveView('team-overview')}
          onNavigateToContactPage={() => setActiveView('contact')}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        />
      );
    }

    if (activeView === 'contact') {
      return (
        <ContactPage
          language={language}
          initialOffice={contactDefaultOffice}
          initialPractice={contactDefaultPractice}
          onBackToHome={() => setActiveView('home')}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
          onNavigateToTeamOverview={() => setActiveView('team-overview')}
          onNavigateToPracticesOverview={() => setActiveView('practice-areas-overview')}
          onNavigateToPractice={(practiceId) => {
            setSelectedPracticeId(practiceId);
            setActiveView('practice-area-template');
          }}
        />
      );
    }

    if (activeView === 'team-member-template') {
      return (
        <TeamMemberProfilePage
          language={language}
          selectedMemberId={selectedMemberId}
          onBackToHome={() => setActiveView('home')}
          onBackToOverview={() => setActiveView('team-overview')}
          onOpenContact={(officeCity) => handleOpenContactWithOffice(officeCity || 'Zürich')}
          onNavigateToPractice={(practiceId) => {
            setSelectedPracticeId(practiceId || 'europarecht');
            setActiveView('practice-area-template');
          }}
          onSelectOtherMember={(memberId) => setSelectedMemberId(memberId)}
          onNavigateToTeamOverview={() => setActiveView('team-overview')}
          onNavigateToPracticesOverview={() => setActiveView('practice-areas-overview')}
          onNavigateToContactPage={() => setActiveView('contact')}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        />
      );
    }

    if (activeView === 'practice-area-template') {
      return (
        <PracticeAreaPage
          language={language}
          selectedPracticeId={selectedPracticeId}
          onBackToHome={() => setActiveView('home')}
          onBackToOverview={() => setActiveView('practice-areas-overview')}
          onSelectOtherPractice={(practiceId) => setSelectedPracticeId(practiceId)}
          onOpenContact={(officeCity, practice) => handleOpenContactWithOffice(officeCity || 'Zürich', practice || 'Europarecht')}
          onNavigateToTeamMember={(memberId) => {
            setSelectedMemberId(memberId || 'laura-baudenbacher');
            setActiveView('team-member-template');
          }}
          onNavigateToTeamOverview={() => setActiveView('team-overview')}
          onNavigateToContactPage={() => setActiveView('contact')}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        />
      );
    }

    return (
      <HomePageV1
        language={language}
        onSelectMember={(member) => setSelectedMember(member)}
        onOpenMemberDetails={handleOpenMemberDetails}
        onSelectPractice={handleSelectPracticeDirectly}
        onOpenContact={() => handleOpenContactWithOffice('Zürich')}
        onSelectOffice={handleOpenContactWithOffice}
        onOpenValuesDetail={() => setIsValuesOpen(true)}
        onExploreAllPractices={() => setActiveView('practice-areas-overview')}
        onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        onViewAllTeam={() => setActiveView('team-overview')}
        onNavigateToPracticesOverview={() => setActiveView('practice-areas-overview')}
        onNavigateToContactPage={() => setActiveView('contact')}
      />
    );
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      {/* Active Page View */}
      {renderActiveContent()}

      {/* Floating Live Design Controls */}
      <LiveDesignControls
        language={language}
        onSelectLanguage={setLanguage}
        onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
      />

      {/* Interactive Quickview Modal for Team Members */}
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

      {/* Full Directory of All Practice Areas Modal */}
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
