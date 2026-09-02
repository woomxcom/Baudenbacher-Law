import React from 'react';
import { X, ShieldCheck, Scale, Award, ArrowRight } from 'lucide-react';
import { Language } from '../types';
import { getLocalizedData } from '../data/translations';

interface ValuesModalProps {
  isOpen: boolean;
  language?: Language;
  onClose: () => void;
  onOpenContact: () => void;
}

export const ValuesModal: React.FC<ValuesModalProps> = ({
  isOpen,
  language = 'de',
  onClose,
  onOpenContact
}) => {
  if (!isOpen) return null;

  const { ui } = getLocalizedData(language);

  return (
    <div
      id="values-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
    >
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-3xl bg-[#213134] text-white border border-[#C6A15B]/40 shadow-2xl p-6 sm:p-10 z-10 my-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#E4D9CC] hover:text-white bg-[#182426]/80 hover:bg-[#2c4044] rounded-full transition-colors"
          aria-label={ui.modals.close}
        >
          <X className="w-5 h-5" />
        </button>

        <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-sans font-semibold block mb-2">
          {ui.values.eyebrow}
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white mb-6">
          {ui.values.heading}
        </h2>

        <div className="space-y-4 font-sans text-sm text-[#E4D9CC]/90 font-light leading-relaxed mb-8">
          <p>{ui.values.p1}</p>
          <p>{ui.values.p2}</p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-[#182426] border border-[#31464a]">
            <div className="w-8 h-8 rounded-full bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center mb-3">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-base text-white font-medium mb-1">{ui.values.pillar1Title}</h4>
            <p className="font-sans text-xs text-[#E4D9CC]/75 font-light">
              {ui.values.pillar1Subtitle}
            </p>
          </div>

          <div className="p-4 bg-[#182426] border border-[#31464a]">
            <div className="w-8 h-8 rounded-full bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center mb-3">
              <Scale className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-base text-white font-medium mb-1">{ui.values.pillar2Title}</h4>
            <p className="font-sans text-xs text-[#E4D9CC]/75 font-light">
              {ui.values.pillar2Subtitle}
            </p>
          </div>

          <div className="p-4 bg-[#182426] border border-[#31464a]">
            <div className="w-8 h-8 rounded-full bg-[#C6A15B]/20 text-[#C6A15B] flex items-center justify-center mb-3">
              <Award className="w-4 h-4" />
            </div>
            <h4 className="font-serif text-base text-white font-medium mb-1">{ui.values.pillar3Title}</h4>
            <p className="font-sans text-xs text-[#E4D9CC]/75 font-light">
              {ui.values.pillar3Subtitle}
            </p>
          </div>
        </div>

        <div className="pt-6 border-t border-[#31464a] flex items-center justify-between">
          <span className="text-xs text-[#E4D9CC]/60 font-sans">
            Baudenbacher Law AG · Zürich · Brüssel · Oslo
          </span>
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6A15B] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase"
          >
            <span>{ui.modals.requestConsultation}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
