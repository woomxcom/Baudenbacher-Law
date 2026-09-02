import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { PracticeArea, Language } from '../types';
import { getLocalizedData } from '../data/translations';

interface AllPracticesModalProps {
  isOpen: boolean;
  language?: Language;
  onClose: () => void;
  onSelectPractice: (practice: PracticeArea) => void;
  onOpenContact: () => void;
}

export const AllPracticesModal: React.FC<AllPracticesModalProps> = ({
  isOpen,
  language = 'de',
  onClose,
  onSelectPractice,
  onOpenContact
}) => {
  if (!isOpen) return null;

  const { practices, otherPractices, ui } = getLocalizedData(language);

  return (
    <div
      id="all-practices-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
    >
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-4xl bg-[#213134] text-white border border-[#C6A15B]/40 shadow-2xl p-6 sm:p-10 z-10 my-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#E4D9CC] hover:text-white bg-[#182426]/80 hover:bg-[#2c4044] rounded-full transition-colors"
          aria-label={ui.modals.close}
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-sans font-semibold block mb-2">
          {ui.practices.eyebrow}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-2">
          {ui.modals.allPracticesTitle}
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light mb-8 max-w-2xl">
          {ui.modals.allPracticesDesc}
        </p>

        {/* Core Practice Areas */}
        <div className="mb-10">
          <h3 className="font-serif text-lg text-white font-medium mb-4 pb-2 border-b border-[#31464a]">
            {ui.modals.corePractices}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {practices.map((practice) => (
              <div
                key={practice.id}
                onClick={() => {
                  onClose();
                  onSelectPractice(practice);
                }}
                className="p-4 bg-[#182426] border border-[#31464a] hover:border-[#C6A15B]/60 cursor-pointer transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-serif text-lg text-white group-hover:text-[#C6A15B] transition-colors">
                    {practice.title}
                  </h4>
                  <ArrowRight className="w-4 h-4 text-[#C6A15B] group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="font-sans text-xs text-[#E4D9CC]/75 font-light leading-relaxed">
                  {practice.shortDesc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Practice Areas */}
        <div className="mb-8">
          <h3 className="font-serif text-lg text-white font-medium mb-4 pb-2 border-b border-[#31464a]">
            {ui.modals.otherSpecializations}
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherPractices.map((item, idx) => (
              <div key={idx} className="p-4 bg-[#182426]/60 border border-[#2b3e42]">
                <h4 className="font-serif text-base text-white font-medium mb-1">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-[#E4D9CC]/75 font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-[#31464a] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-sans text-[#E4D9CC]/60 font-light">
            {ui.modals.individualInquiry}
          </p>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="w-full sm:w-auto px-6 py-2.5 bg-[#C6A15B] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase"
          >
            {ui.modals.requestConsultation}
          </button>
        </div>
      </div>
    </div>
  );
};
