import React, { useState } from 'react';
import { HomePageVersion, Language } from '../types';
import { Sliders, Layers, Palette, ChevronUp, ChevronDown, Globe } from 'lucide-react';
import { UI_DE, UI_EN } from '../data/translations';

interface LiveDesignControlsProps {
  pageVersion: HomePageVersion;
  onSelectPageVersion: (v: HomePageVersion) => void;
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  goldTone: string;
  onSelectGoldTone: (tone: string) => void;
  onOpenElementorGuide: () => void;
}

export const LiveDesignControls: React.FC<LiveDesignControlsProps> = ({
  pageVersion,
  onSelectPageVersion,
  language,
  onSelectLanguage,
  goldTone,
  onSelectGoldTone,
  onOpenElementorGuide
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ui = language === 'en' ? UI_EN : UI_DE;

  const GOLD_TONES = [
    { name: 'Original Gold', hex: '#C6A15B' },
    { name: 'Champagner', hex: '#DEC184' },
    { name: 'Muted Bronze', hex: '#B8924B' }
  ];

  return (
    <div
      id="live-design-controls"
      className="fixed bottom-4 right-4 z-40 font-sans"
    >
      <div className="bg-[#182426]/95 backdrop-blur-md border border-[#C6A15B]/50 shadow-2xl text-white rounded-xl overflow-hidden transition-all duration-300 max-w-sm">
        
        {/* Main Floating Bar */}
        <div className="p-3 bg-[#213134] flex items-center justify-between gap-2.5 select-none border-b border-[#31464a]">
          
          {/* Left: Design Switcher Trigger */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] animate-pulse"></span>
            <span className="text-xs font-serif text-white font-medium hidden xs:inline sm:inline">
              {ui.controls.title}
            </span>
            <span className="text-[10px] bg-[#C6A15B]/20 text-[#C6A15B] px-2 py-0.5 rounded font-semibold uppercase">
              {pageVersion === 'version1' ? 'V1' : 'V2'}
            </span>
          </div>

          {/* Center/Right: Quick Language Switcher Pill directly accessible */}
          <div className="flex items-center gap-1.5 bg-[#182426] p-1 rounded-lg border border-[#395055]">
            <button
              onClick={() => onSelectLanguage('de')}
              className={`px-2 py-1 text-[11px] font-semibold rounded transition-all flex items-center gap-1 ${
                language === 'de'
                  ? 'bg-[#C6A15B] text-[#213134] shadow-xs'
                  : 'text-[#E4D9CC]/75 hover:text-white'
              }`}
              title="Deutsch"
            >
              <span>DE</span>
            </button>
            <button
              onClick={() => onSelectLanguage('en')}
              className={`px-2 py-1 text-[11px] font-semibold rounded transition-all flex items-center gap-1 ${
                language === 'en'
                  ? 'bg-[#C6A15B] text-[#213134] shadow-xs'
                  : 'text-[#E4D9CC]/75 hover:text-white'
              }`}
              title="English"
            >
              <span>EN</span>
            </button>
          </div>

          {/* Expand/Collapse Chevron */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-[#E4D9CC] hover:text-white"
            aria-label="Expand settings"
          >
            {isExpanded ? (
              <ChevronDown className="w-4 h-4" />
            ) : (
              <ChevronUp className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Expanded Controls Panel */}
        {isExpanded && (
          <div className="p-4 space-y-4 text-xs animate-fadeIn">
            
            {/* Language Switcher in Panel */}
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                {ui.controls.langTitle}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectLanguage('de')}
                  className={`py-2 px-3 rounded text-center transition-all flex items-center justify-center gap-2 ${
                    language === 'de'
                      ? 'bg-[#C6A15B] text-[#213134] font-bold shadow-sm'
                      : 'bg-[#213134] text-white/80 hover:bg-[#2d4246]'
                  }`}
                >
                  <span className="text-sm">🇩🇪</span>
                  <span className="font-medium text-xs">{ui.controls.german}</span>
                </button>
                <button
                  onClick={() => onSelectLanguage('en')}
                  className={`py-2 px-3 rounded text-center transition-all flex items-center justify-center gap-2 ${
                    language === 'en'
                      ? 'bg-[#C6A15B] text-[#213134] font-bold shadow-sm'
                      : 'bg-[#213134] text-white/80 hover:bg-[#2d4246]'
                  }`}
                >
                  <span className="text-sm">🇬🇧</span>
                  <span className="font-medium text-xs">{ui.controls.english}</span>
                </button>
              </div>
            </div>

            {/* Full Homepage Version Switcher */}
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5" />
                {ui.controls.layoutTitle}
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectPageVersion('version1')}
                  className={`py-2.5 px-3 rounded text-center transition-all flex flex-col items-center justify-center gap-0.5 ${
                    pageVersion === 'version1'
                      ? 'bg-[#C6A15B] text-[#213134] font-bold shadow-sm'
                      : 'bg-[#213134] text-white/80 hover:bg-[#2d4246]'
                  }`}
                >
                  <span className="font-semibold text-xs">{ui.controls.v1Title}</span>
                  <span className="text-[10px] opacity-80">{ui.controls.v1Desc}</span>
                </button>
                <button
                  onClick={() => onSelectPageVersion('version2')}
                  className={`py-2.5 px-3 rounded text-center transition-all flex flex-col items-center justify-center gap-0.5 ${
                    pageVersion === 'version2'
                      ? 'bg-[#C6A15B] text-[#213134] font-bold shadow-sm'
                      : 'bg-[#213134] text-white/80 hover:bg-[#2d4246]'
                  }`}
                >
                  <span className="font-semibold text-xs">{ui.controls.v2Title}</span>
                  <span className="text-[10px] opacity-80">{ui.controls.v2Desc}</span>
                </button>
              </div>
            </div>

            {/* Gold Accent Tone Experimentation */}
            <div>
              <div className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold mb-2 flex items-center gap-1.5">
                <Palette className="w-3.5 h-3.5" />
                {ui.controls.colorTitle}
              </div>
              <div className="grid grid-cols-3 gap-1.5">
                {GOLD_TONES.map((tone) => (
                  <button
                    key={tone.hex}
                    onClick={() => onSelectGoldTone(tone.hex)}
                    className={`p-1.5 rounded flex flex-col items-center gap-1 border transition-all ${
                      goldTone === tone.hex
                        ? 'border-[#C6A15B] bg-[#213134]'
                        : 'border-[#31464a] bg-[#182426] hover:border-white/30'
                    }`}
                  >
                    <span
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: tone.hex }}
                    ></span>
                    <span className="text-[10px] text-white/90 truncate w-full text-center">
                      {tone.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Elementor Guide Action */}
            <div className="pt-2 border-t border-[#31464a]">
              <button
                onClick={onOpenElementorGuide}
                className="w-full py-2 bg-[#213134] hover:bg-[#2c4044] border border-[#395055] text-[#E4D9CC] hover:text-[#C6A15B] rounded text-xs transition-colors flex items-center justify-center gap-1.5"
              >
                <Sliders className="w-3.5 h-3.5 text-[#C6A15B]" />
                <span>{ui.controls.elementorGuide}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
