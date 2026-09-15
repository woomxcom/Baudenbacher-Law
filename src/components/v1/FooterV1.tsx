import React from 'react';
import { Logo } from '../Logo';
import { ArrowUp, ShieldCheck, Scale, FileText } from 'lucide-react';
import { Language } from '../../types';
import { getLocalizedData } from '../../data/translations';

interface FooterV1Props {
  language?: Language;
  onOpenContact: () => void;
  onBackToHome?: () => void;
  onNavigateToTeamOverview?: () => void;
  onNavigateToPracticesOverview?: () => void;
  onNavigateToContactPage?: () => void;
}

export const FooterV1: React.FC<FooterV1Props> = ({
  language = 'de',
  onOpenContact,
  onBackToHome,
  onNavigateToTeamOverview,
  onNavigateToPracticesOverview,
  onNavigateToContactPage
}) => {
  const { ui } = getLocalizedData(language);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer-v1" className="bg-[#182426] text-white border-t border-[#293d40] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#293d40]">
          
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo
              variant="light"
              size="lg"
              onClick={() => {
                if (onBackToHome) onBackToHome();
                scrollToTop();
              }}
            />
            <p className="mt-5 text-xs sm:text-sm text-[#E4D9CC]/75 font-sans font-light leading-relaxed max-w-md">
              {ui.footer.brandDesc}
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs font-sans text-[#C6A15B]">
              <ShieldCheck className="w-4 h-4 flex-shrink-0" />
              <span>{ui.footer.registryBadge}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-sm text-white font-medium tracking-wider uppercase mb-4 text-[#C6A15B]">
              {ui.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light">
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onBackToHome) onBackToHome();
                    scrollTo('hero-section-v1');
                  }}
                  className="hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  {ui.nav.home}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToTeamOverview) onNavigateToTeamOverview();
                    else scrollTo('team-section-v1');
                  }}
                  className="hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  {ui.nav.team}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToPracticesOverview) onNavigateToPracticesOverview();
                    else scrollTo('practice-areas-section-v1');
                  }}
                  className="hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  {ui.nav.practices}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => scrollTo('values-section-v1')}
                  className="hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  {ui.nav.values}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    if (onNavigateToContactPage) onNavigateToContactPage();
                    else scrollTo('offices-section-v1');
                  }}
                  className="hover:text-[#C6A15B] transition-colors cursor-pointer"
                >
                  {ui.nav.offices}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onNavigateToContactPage || onOpenContact}
                  className="text-[#C6A15B] hover:text-white transition-colors cursor-pointer"
                >
                  {ui.nav.contact}
                </button>
              </li>
            </ul>
          </div>

          {/* Professional Standards & Compliance Column */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-sm text-white font-medium tracking-wider uppercase mb-4 text-[#C6A15B]">
              {ui.footer.complianceTitle}
            </h4>
            <div className="space-y-3 font-sans text-xs text-[#E4D9CC]/75 font-light leading-relaxed">
              <div className="flex items-start gap-2">
                <Scale className="w-4 h-4 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                <span>
                  {ui.footer.complianceP1}
                </span>
              </div>
              <div className="flex items-start gap-2">
                <FileText className="w-4 h-4 text-[#C6A15B] flex-shrink-0 mt-0.5" />
                <span>
                  {ui.footer.complianceP2}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Simple Legal Links & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#E4D9CC]/55 font-light text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {ui.footer.copyright}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <button onClick={onOpenContact} className="hover:text-white transition-colors py-1">
              {ui.footer.imprint}
            </button>
            <button onClick={onOpenContact} className="hover:text-white transition-colors py-1">
              {ui.footer.privacy}
            </button>
            <button onClick={onOpenContact} className="hover:text-white transition-colors py-1">
              {ui.footer.legal}
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#213134] hover:bg-[#C6A15B] hover:text-[#213134] transition-colors ml-1 sm:ml-4 text-white min-h-[36px] min-w-[36px] flex items-center justify-center"
              aria-label={ui.footer.scrollTop}
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
