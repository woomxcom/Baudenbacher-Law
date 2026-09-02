import React, { useState, useEffect } from 'react';
import { HomePageV1 } from './components/v1/HomePageV1';
import { HomePageV2 } from './components/v2/HomePageV2';
import { TeamModal } from './components/TeamModal';
import { PracticeModal } from './components/PracticeModal';
import { ContactModal } from './components/ContactModal';
import { ValuesModal } from './components/ValuesModal';
import { AllPracticesModal } from './components/AllPracticesModal';
import { ElementorGuideModal } from './components/ElementorGuideModal';
import { LiveDesignControls } from './components/LiveDesignControls';
import { HomePageVersion, TeamMember, PracticeArea, Language } from './types';

export default function App() {
  const [pageVersion, setPageVersion] = useState<HomePageVersion>('version1');
  const [language, setLanguage] = useState<Language>('de');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [selectedPractice, setSelectedPractice] = useState<PracticeArea | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [contactDefaultOffice, setContactDefaultOffice] = useState('Zürich');
  const [isValuesOpen, setIsValuesOpen] = useState(false);
  const [isAllPracticesOpen, setIsAllPracticesOpen] = useState(false);
  const [isElementorGuideOpen, setIsElementorGuideOpen] = useState(false);
  const [goldTone, setGoldTone] = useState('#C6A15B');

  // Dynamically update gold accent CSS variable when client experiments with colors
  useEffect(() => {
    document.documentElement.style.setProperty('--color-gold', goldTone);
  }, [goldTone]);

  const handleOpenContactWithOffice = (officeCity: string) => {
    setContactDefaultOffice(officeCity);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-[#C6A15B]/30 selection:text-[#213134]">
      {/* Dynamic Rendering of Entire Homepage Layout based on selected version */}
      {pageVersion === 'version1' ? (
        <HomePageV1
          pageVersion={pageVersion}
          language={language}
          onSelectVersion={setPageVersion}
          onSelectMember={(member) => setSelectedMember(member)}
          onSelectPractice={(practice) => setSelectedPractice(practice)}
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
          onSelectPractice={(practice) => setSelectedPractice(practice)}
          onOpenContact={() => setIsContactOpen(true)}
          onSelectOffice={handleOpenContactWithOffice}
          onOpenValuesDetail={() => setIsValuesOpen(true)}
          onExploreAllPractices={() => setIsAllPracticesOpen(true)}
          onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
        />
      )}

      {/* Floating Live Design Controls for instant layout, language & gold tone switching */}
      <LiveDesignControls
        pageVersion={pageVersion}
        onSelectPageVersion={setPageVersion}
        language={language}
        onSelectLanguage={setLanguage}
        goldTone={goldTone}
        onSelectGoldTone={setGoldTone}
        onOpenElementorGuide={() => setIsElementorGuideOpen(true)}
      />

      {/* Interactive Detail & Contact Modals (shared across both versions for seamless UX) */}
      <TeamModal
        member={selectedMember}
        language={language}
        onClose={() => setSelectedMember(null)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <PracticeModal
        practice={selectedPractice}
        language={language}
        onClose={() => setSelectedPractice(null)}
        onOpenContact={() => setIsContactOpen(true)}
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

      <AllPracticesModal
        isOpen={isAllPracticesOpen}
        language={language}
        onClose={() => setIsAllPracticesOpen(false)}
        onSelectPractice={(practice) => setSelectedPractice(practice)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      <ElementorGuideModal
        isOpen={isElementorGuideOpen}
        onClose={() => setIsElementorGuideOpen(false)}
      />
    </div>
  );
}
