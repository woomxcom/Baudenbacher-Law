import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield } from 'lucide-react';
import { Language } from '../types';
import { getLocalizedData } from '../data/translations';

interface ContactModalProps {
  isOpen: boolean;
  language?: Language;
  onClose: () => void;
  defaultOffice?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  language = 'de',
  onClose,
  defaultOffice = 'Zürich'
}) => {
  const { ui } = getLocalizedData(language);
  const [selectedOffice, setSelectedOffice] = useState(defaultOffice);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    practiceArea: 'Sanktionsrecht',
    message: '',
    confidentialityAgreed: true
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      id="contact-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#213134] text-white border border-[#C6A15B]/40 shadow-2xl p-6 sm:p-10 z-10 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#E4D9CC] hover:text-white bg-[#182426]/80 hover:bg-[#2c4044] rounded-full transition-colors"
          aria-label={ui.modals.close}
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs uppercase tracking-[0.25em] text-[#C6A15B] font-sans font-semibold block mb-1">
                {ui.modals.requestConsultation}
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-normal text-white">
                {ui.modals.contactModalTitle}
              </h2>
              <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/80 mt-2 font-light">
                {ui.modals.contactModalSubtitle}
              </p>
            </div>

            {/* Office selection tabs */}
            <div className="flex gap-2 mb-6 p-1 bg-[#182426] border border-[#31464a]">
              {(language === 'en' ? ['Zurich', 'Brussels', 'Oslo'] : ['Zürich', 'Brüssel', 'Oslo']).map((city) => (
                <button
                  key={city}
                  type="button"
                  onClick={() => setSelectedOffice(city)}
                  className={`flex-1 py-2 text-xs font-sans font-medium uppercase tracking-wider transition-all ${
                    selectedOffice.toLowerCase().includes(city.toLowerCase().slice(0, 4))
                      ? 'bg-[#C6A15B] text-[#213134] font-bold'
                      : 'text-[#E4D9CC]/70 hover:text-white'
                  }`}
                >
                  {city}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-sans text-xs sm:text-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E4D9CC] font-light mb-1.5">{ui.modals.fullName}</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Dr. / Prof. / Vorname Nachname"
                    className="w-full bg-[#182426] border border-[#395055] focus:border-[#C6A15B] px-3.5 py-2.5 text-white outline-none font-light placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-[#E4D9CC] font-light mb-1.5">{ui.modals.company}</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Unternehmen / Kanzlei / Behörde"
                    className="w-full bg-[#182426] border border-[#395055] focus:border-[#C6A15B] px-3.5 py-2.5 text-white outline-none font-light placeholder:text-white/30"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#E4D9CC] font-light mb-1.5">{ui.modals.emailAddress}</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@domain.com"
                    className="w-full bg-[#182426] border border-[#395055] focus:border-[#C6A15B] px-3.5 py-2.5 text-white outline-none font-light placeholder:text-white/30"
                  />
                </div>
                <div>
                  <label className="block text-[#E4D9CC] font-light mb-1.5">{ui.modals.phoneNumber}</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+41 44 ..."
                    className="w-full bg-[#182426] border border-[#395055] focus:border-[#C6A15B] px-3.5 py-2.5 text-white outline-none font-light placeholder:text-white/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[#E4D9CC] font-light mb-1.5">{ui.modals.practiceField}</label>
                <select
                  value={formData.practiceArea}
                  onChange={(e) => setFormData({ ...formData, practiceArea: e.target.value })}
                  className="w-full bg-[#182426] border border-[#395055] focus:border-[#C6A15B] px-3.5 py-2.5 text-white outline-none font-light"
                >
                  <option value="Sanktionsrecht">{language === 'en' ? 'Sanctions Law & Export Control' : 'Sanktionsrecht & Exportkontrolle'}</option>
                  <option value="Wirtschaftsrecht">{language === 'en' ? 'Commercial Law & M&A' : 'Wirtschaftsrecht & M&A'}</option>
                  <option value="Schiedsverfahren">{language === 'en' ? 'Arbitration & Litigation' : 'Schiedsverfahren & Streitbeilegung'}</option>
                  <option value="Europarecht">{language === 'en' ? 'European & EEA Law' : 'Europarecht & EWR-Recht'}</option>
                  <option value="Verwaltungsrecht">{language === 'en' ? 'Administrative Law & Regulatory' : 'Verwaltungsrecht & Behördenverfahren'}</option>
                  <option value="Sonstiges">{language === 'en' ? 'Other Legal Inquiries' : 'Sonstiges Rechtsanliegen'}</option>
                </select>
              </div>

              <div>
                <label className="block text-[#E4D9CC] font-light mb-1.5">{ui.modals.messageLabel}</label>
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={ui.modals.messagePlaceholder}
                  className="w-full bg-[#182426] border border-[#395055] focus:border-[#C6A15B] px-3.5 py-2.5 text-white outline-none font-light placeholder:text-white/30"
                ></textarea>
              </div>

              <div className="flex items-center gap-2 pt-1 text-xs text-[#E4D9CC]/75 font-light">
                <Shield className="w-4 h-4 text-[#C6A15B] flex-shrink-0" />
                <span>{ui.modals.confidentialityNotice}</span>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#C6A15B] hover:bg-[#dec184] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{ui.modals.sendButton}</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 bg-[#C6A15B]/20 border border-[#C6A15B] rounded-full flex items-center justify-center mx-auto text-[#C6A15B]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-white">
              {ui.modals.thankYouTitle}
            </h3>
            <p className="font-sans text-sm text-[#E4D9CC]/85 max-w-md mx-auto font-light leading-relaxed">
              {ui.modals.thankYouMessage}
            </p>
            <div className="pt-4">
              <button
                onClick={resetForm}
                className="px-6 py-2.5 border border-[#C6A15B] text-[#C6A15B] hover:bg-[#C6A15B] hover:text-[#213134] text-xs uppercase tracking-wider font-sans transition-colors"
              >
                {ui.modals.closeWindow}
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
