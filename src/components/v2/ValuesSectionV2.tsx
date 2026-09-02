import React, { useState } from 'react';
import { Language } from '../../types';
import { getLocalizedData } from '../../data/translations';
import { ArrowRight, ShieldCheck, Scale, Eye, CheckCircle2 } from 'lucide-react';

interface ValuesSectionV2Props {
  language?: Language;
  onOpenValuesDetail: () => void;
}

export const ValuesSectionV2: React.FC<ValuesSectionV2Props> = ({
  language = 'de',
  onOpenValuesDetail
}) => {
  const { ui } = getLocalizedData(language);
  const [activeTab, setActiveTab] = useState<'precision' | 'discretion' | 'strategy'>('precision');

  const pillars = [
    {
      id: 'precision',
      title: ui.values.pillar1Title,
      subtitle: ui.values.pillar1Subtitle,
      icon: Scale,
      text: ui.values.pillar1Text
    },
    {
      id: 'discretion',
      title: ui.values.pillar2Title,
      subtitle: ui.values.pillar2Subtitle,
      icon: ShieldCheck,
      text: ui.values.pillar2Text
    },
    {
      id: 'strategy',
      title: ui.values.pillar3Title,
      subtitle: ui.values.pillar3Subtitle,
      icon: Eye,
      text: ui.values.pillar3Text
    }
  ];

  return (
    <section
      id="values-section-v2"
      className="py-24 md:py-32 bg-[#182527] text-white relative overflow-hidden border-t border-[#2d4246]"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#C6A15B]/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#C6A15B]"></span>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold">
              {ui.values.eyebrow}
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight leading-[1.16] mb-6">
            {ui.values.heading}
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#E4D9CC]/85 font-light leading-relaxed">
            {ui.values.p1}
          </p>
        </div>

        {/* 3-Pillar Interactive Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isActive = activeTab === pillar.id;
            return (
              <div
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id as any)}
                className={`cursor-pointer p-8 rounded-xl border transition-all duration-300 flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#213134] border-[#C6A15B] shadow-xl'
                    : 'bg-[#1e2d30]/60 border-[#2f4448] hover:border-[#C6A15B]/50 hover:bg-[#213134]/70'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center border transition-colors ${
                      isActive ? 'bg-[#C6A15B] text-[#213134] border-[#C6A15B]' : 'bg-[#263a3d] text-[#C6A15B] border-[#385358]'
                    }`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#C6A15B]/70 uppercase tracking-widest">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-normal text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="font-sans text-xs text-[#C6A15B] font-medium tracking-wide uppercase mb-4">
                    {pillar.subtitle}
                  </p>
                  <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light leading-relaxed">
                    {pillar.text}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs font-sans text-[#E4D9CC]/60">{pillar.title}</span>
                  <CheckCircle2 className={`w-4 h-4 ${isActive ? 'text-[#C6A15B]' : 'text-white/20'}`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner with Library Image & CTA */}
        <div className="bg-[#213134] rounded-xl border border-[#374e52] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-center">
          
          <div className="lg:col-span-7 p-8 sm:p-12">
            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-white mb-4">
              {ui.values.bannerTitle}
            </h3>
            <p className="font-sans text-sm text-[#E4D9CC]/85 font-light leading-relaxed mb-6">
              {ui.values.p2}
            </p>
            <button
              onClick={onOpenValuesDetail}
              className="inline-flex items-center gap-2.5 px-6 py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase rounded transition-colors"
            >
              <span>{ui.values.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
              alt="Baudenbacher Law Kanzleiräume"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#213134] via-transparent to-transparent lg:block hidden"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#213134] via-transparent to-transparent lg:hidden block"></div>
          </div>

        </div>

      </div>
    </section>
  );
};
