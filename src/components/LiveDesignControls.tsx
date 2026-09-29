import React, { useState } from 'react';
import { Language, ActiveView } from '../types';
import { Sliders, ChevronUp, ChevronDown, Globe, BookOpen, Layers } from 'lucide-react';
import { UI_DE, UI_EN } from '../data/translations';

interface LiveDesignControlsProps {
  language: Language;
  onSelectLanguage: (lang: Language) => void;
  onOpenElementorGuide: () => void;
  activeView?: ActiveView;
  onSelectView?: (view: ActiveView) => void;
}

export const LiveDesignControls: React.FC<LiveDesignControlsProps> = ({
  language,
  onSelectLanguage,
  onOpenElementorGuide,
  activeView = 'home',
  onSelectView
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const ui = language === 'en' ? UI_EN : UI_DE;

  const VIEWS: { id: ActiveView; labelDe: string; labelEn: string; badge?: string }[] = [
    { id: 'home', labelDe: 'Startseite', labelEn: 'Homepage' },
    { id: 'practice-areas-overview', labelDe: 'Fachgebiete Übersicht', labelEn: 'Practices Overview' },
    { id: 'practice-area-template', labelDe: 'Sanktionsrecht Vorlage', labelEn: 'Sanctions Law Template' },
    { id: 'team-overview', labelDe: 'Team Übersicht', labelEn: 'Team Overview' },
    { id: 'team-member-template', labelDe: 'Anwaltsprofil Vorlage', labelEn: 'Attorney Profile' },
    { id: 'blog-overview', labelDe: 'Blog Übersicht', labelEn: 'Blog Overview', badge: 'Neu' },
    { id: 'blog-post-template', labelDe: 'Blog Post Vorlage', labelEn: 'Blog Post Template', badge: 'Neu' },
    { id: 'contact', labelDe: 'Kontaktseite', labelEn: 'Contact Page' }
  ];

  return (
    <div
      id="live-design-controls"
      className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 font-sans"
    >
      <div className="bg-[#182426]/95 backdrop-blur-md border border-[#C6A15B]/50 shadow-2xl text-white rounded-xl overflow-hidden transition-all duration-300 max-w-sm">
        
        {/* Main Floating Bar (always visible) */}
        <div className="p-2 sm:p-2.5 bg-[#213134] flex items-center justify-between gap-3 select-none border-b border-[#31464a]">
          
          {/* Left: Design Switcher Trigger */}
          <div
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 cursor-pointer hover:opacity-90 transition-opacity pl-1"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#C6A15B] animate-pulse shrink-0"></span>
            <span className="text-[11px] sm:text-xs font-serif text-white font-medium">
              {ui.controls.title}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {/* Quick Language Switcher Pill directly accessible */}
            <div className="flex items-center gap-0.5 bg-[#182426] p-0.5 sm:p-1 rounded-lg border border-[#395055]">
              <button
                onClick={() => onSelectLanguage('de')}
                className={`px-1.5 sm:px-2 py-1 text-[10px] sm:text-[11px] font-semibold rounded transition-all min-h-[30px] flex items-center cursor-pointer ${
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
                className={`px-1.5 sm:px-2 py-1 text-[10px] sm:text-[11px] font-semibold rounded transition-all min-h-[30px] flex items-center cursor-pointer ${
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
              className="p-1 text-[#E4D9CC] hover:text-white min-h-[32px] min-w-[32px] flex items-center justify-center cursor-pointer"
              aria-label="Expand settings"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Expanded Controls Panel */}
        {isExpanded && (
          <div className="p-4 space-y-3.5 text-xs animate-fadeIn max-h-[75vh] overflow-y-auto">
            
            {/* Template Navigation Switcher */}
            {onSelectView && (
              <div>
                <div className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold mb-2 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{language === 'en' ? 'Page / Template Switcher' : 'Seiten- & Vorlagenauswahl'}</span>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {VIEWS.map((v) => {
                    const isActive = activeView === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => {
                          onSelectView(v.id);
                          setIsExpanded(false);
                        }}
                        className={`px-2.5 py-1.5 rounded text-left text-xs font-sans transition-all flex items-center justify-between cursor-pointer ${
                          isActive
                            ? 'bg-[#C6A15B] text-[#213134] font-semibold shadow-xs'
                            : 'bg-[#213134] text-white/85 hover:bg-[#2d4246] hover:text-white'
                        }`}
                      >
                        <span>{language === 'en' ? v.labelEn : v.labelDe}</span>
                        {v.badge && (
                          <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                            isActive ? 'bg-[#213134] text-[#C6A15B]' : 'bg-[#C6A15B] text-[#213134]'
                          }`}>
                            {v.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Language Switcher in Panel */}
            <div className="pt-2 border-t border-[#31464a]">
              <div className="text-[11px] uppercase tracking-wider text-[#C6A15B] font-semibold mb-2 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5" />
                <span>{ui.controls.langTitle}</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => onSelectLanguage('de')}
                  className={`py-2 px-3 rounded text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
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
                  className={`py-2 px-3 rounded text-center transition-all flex items-center justify-center gap-2 cursor-pointer ${
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

            {/* Elementor Guide Action */}
            <div className="pt-2 border-t border-[#31464a]">
              <button
                onClick={onOpenElementorGuide}
                className="w-full py-2.5 bg-[#213134] hover:bg-[#2c4044] border border-[#395055] text-[#E4D9CC] hover:text-[#C6A15B] rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-2 cursor-pointer"
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
