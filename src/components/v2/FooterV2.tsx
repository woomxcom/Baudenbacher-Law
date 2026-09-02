import React from 'react';
import { Logo } from '../Logo';
import { ArrowUp, ShieldCheck, ArrowRight } from 'lucide-react';
import { Language } from '../../types';
import { getLocalizedData } from '../../data/translations';

interface FooterV2Props {
  language?: Language;
  onOpenContact: () => void;
}

export const FooterV2: React.FC<FooterV2Props> = ({
  language = 'de',
  onOpenContact
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
    <footer id="footer-v2" className="bg-[#121c1e] text-white border-t border-[#243538] pt-20 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Briefing Callout */}
        <div className="mb-16 p-8 rounded-2xl bg-gradient-to-r from-[#1c2c2f] to-[#162325] border border-[#C6A15B]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <span className="font-sans text-xs tracking-[0.25em] uppercase text-[#C6A15B] font-semibold block mb-1">
              {ui.footer.bannerEyebrow}
            </span>
            <h3 className="font-serif text-2xl text-white font-normal">
              {ui.footer.bannerTitle}
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light mt-1">
              {ui.footer.bannerDesc}
            </p>
          </div>

          <button
            onClick={onOpenContact}
            className="flex-shrink-0 px-6 py-3.5 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] rounded-lg font-sans font-semibold text-xs uppercase tracking-wider shadow-md transition-all flex items-center gap-2"
          >
            <span>{ui.footer.bannerCta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-[#243538]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start">
            <Logo variant="light" size="lg" onClick={scrollToTop} />
            <p className="mt-5 text-xs sm:text-sm text-[#E4D9CC]/75 font-sans font-light leading-relaxed max-w-md">
              {ui.footer.brandDesc}
            </p>
            <div className="mt-5 p-3 bg-[#182426] rounded-lg border border-[#2d4044] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#C6A15B] flex-shrink-0" />
              <span className="text-xs font-sans text-[#E4D9CC]/90">
                {ui.footer.registryBadge}
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-sm text-white font-medium tracking-wider uppercase mb-4 text-[#C6A15B]">
              {ui.footer.navTitle}
            </h4>
            <ul className="space-y-2.5 font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light">
              <li>
                <button onClick={() => scrollTo('hero-section-v1')} className="hover:text-[#C6A15B] transition-colors">
                  {ui.nav.home}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('team-section-v2')} className="hover:text-[#C6A15B] transition-colors">
                  {ui.nav.team}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('values-section-v2')} className="hover:text-[#C6A15B] transition-colors">
                  {ui.nav.values}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('practice-areas-section-v2')} className="hover:text-[#C6A15B] transition-colors">
                  {ui.nav.practices}
                </button>
              </li>
              <li>
                <button onClick={() => scrollTo('offices-section-v2')} className="hover:text-[#C6A15B] transition-colors">
                  {ui.nav.offices}
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
              <p>
                {ui.footer.complianceP1}
              </p>
              <p>
                {ui.footer.complianceP2}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-sans text-xs text-[#E4D9CC]/55 font-light">
          <div>
            © {new Date().getFullYear()} {ui.footer.copyright}
          </div>

          <div className="flex items-center gap-6">
            <button onClick={onOpenContact} className="hover:text-white transition-colors">
              {ui.footer.imprint}
            </button>
            <button onClick={onOpenContact} className="hover:text-white transition-colors">
              {ui.footer.privacy}
            </button>
            <button onClick={onOpenContact} className="hover:text-white transition-colors">
              {ui.footer.legal}
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 bg-[#1b2b2e] hover:bg-[#C6A15B] hover:text-[#213134] rounded-lg transition-colors ml-4 text-white"
              aria-label={ui.footer.scrollTop}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
