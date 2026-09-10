import React from 'react';
import { PracticeArea, Language } from '../types';
import { getLocalizedData } from '../data/translations';
import { X, CheckCircle2, Shield, Briefcase, Scale, Globe, Landmark, ArrowRight } from 'lucide-react';

interface PracticeModalProps {
  practice: PracticeArea | null;
  language?: Language;
  onClose: () => void;
  onOpenContact: () => void;
  onOpenFullPractice?: (practiceId: string) => void;
}

export const PracticeModal: React.FC<PracticeModalProps> = ({
  practice,
  language = 'de',
  onClose,
  onOpenContact,
  onOpenFullPractice
}) => {
  if (!practice) return null;

  const { practices: localizedPractices, ui } = getLocalizedData(language);
  const activePractice = localizedPractices.find(p => p.id === practice.id) || practice;

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'shield':
        return <Shield className="w-6 h-6 text-[#C6A15B]" />;
      case 'briefcase':
        return <Briefcase className="w-6 h-6 text-[#C6A15B]" />;
      case 'scale':
        return <Scale className="w-6 h-6 text-[#C6A15B]" />;
      case 'globe':
        return <Globe className="w-6 h-6 text-[#C6A15B]" />;
      case 'landmark':
        return <Landmark className="w-6 h-6 text-[#C6A15B]" />;
      default:
        return <Scale className="w-6 h-6 text-[#C6A15B]" />;
    }
  };

  return (
    <div
      id="practice-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative w-full max-w-3xl bg-[#213134] text-white border border-[#C6A15B]/40 shadow-2xl overflow-hidden z-10 my-8 p-6 sm:p-10">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-[#E4D9CC] hover:text-white bg-[#182426]/80 hover:bg-[#2c4044] rounded-full transition-colors"
          aria-label={ui.modals.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6 pb-6 border-b border-[#31464a]">
          <div className="p-3 bg-[#182426] border border-[#374e52] flex-shrink-0">
            {getIcon(activePractice.iconName)}
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-[#C6A15B] font-sans font-semibold block mb-1">
              {activePractice.badge}
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
              {activePractice.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6">
          <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/90 font-light leading-relaxed">
            {activePractice.fullDesc}
          </p>

          {/* Key Topics */}
          {activePractice.keyTopics && (
            <div className="pt-4 border-t border-[#31464a]">
              <h3 className="font-serif text-lg text-white font-medium mb-3">
                {ui.modals.practiceAreas}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activePractice.keyTopics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-[#E4D9CC]/85 font-sans font-light">
                    <CheckCircle2 className="w-4 h-4 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Lead Attorneys & CTA */}
          <div className="pt-6 border-t border-[#31464a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#E4D9CC]/60 font-sans block mb-1">
                {ui.modals.leadingAttorneys}:
              </span>
              <div className="text-xs sm:text-sm font-serif text-[#C6A15B]">
                {activePractice.leadAttorneys?.join(' · ') || 'Baudenbacher Law Team'}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
              {onOpenFullPractice && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenFullPractice(activePractice.id);
                  }}
                  className="px-4 py-3 bg-[#182426] hover:bg-[#2c4044] text-[#C6A15B] border border-[#C6A15B]/40 font-sans font-medium text-xs tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-1.5"
                >
                  <span>{language === 'en' ? 'Open Subpage Template' : 'Unterseiten-Template öffnen'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              <button
                onClick={() => {
                  onClose();
                  onOpenContact();
                }}
                className="px-6 py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors inline-flex items-center justify-center gap-2"
              >
                <span>{ui.modals.requestMandate}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
