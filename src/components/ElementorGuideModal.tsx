import React, { useState } from 'react';
import { X, Copy, Check, Sliders, Layers, Palette, Type, Code2, Sparkles, Download } from 'lucide-react';

interface ElementorGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ElementorGuideModal: React.FC<ElementorGuideModalProps> = ({ isOpen, onClose }) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const COLOR_PALETTE = [
    { name: 'Anthrazit / Grau (Hauptfarbe)', hex: '#213134', role: 'Fixe Haupt-Dunkelfarbe (Header, Hero-Box, Werte, Footer)', rgb: 'rgb(33, 49, 52)' },
    { name: 'Gold (Primärer Akzent)', hex: '#C6A15B', role: 'CTA-Buttons, Rahmen, Monogramm-Akzent, Icons', rgb: 'rgb(198, 161, 91)' },
    { name: 'Beige (Sekundärer Ton)', hex: '#E4D9CC', role: 'Team-Hintergrund, Rahmen, Zwischentöne', rgb: 'rgb(228, 217, 204)' },
    { name: 'Off-White / Hellbeige', hex: '#EFEAE4', role: 'Hintergrund Fachgebiete, Karten-Flächen', rgb: 'rgb(239, 234, 228)' },
    { name: 'Weiss', hex: '#FFFFFF', role: 'Kontrast-Texte, Highlights', rgb: 'rgb(255, 255, 255)' }
  ];

  return (
    <div
      id="elementor-guide-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
    >
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative w-full max-w-4xl bg-[#213134] text-white border border-[#C6A15B]/50 shadow-2xl p-6 sm:p-10 z-10 my-8 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#E4D9CC] hover:text-white bg-[#182426]/80 hover:bg-[#2c4044] rounded-full transition-colors"
          aria-label="Schließen"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C6A15B]/20 text-[#C6A15B] text-xs uppercase tracking-widest font-sans font-semibold rounded-full mb-3 border border-[#C6A15B]/40">
            <Sliders className="w-3.5 h-3.5" />
            WordPress / Elementor Aufbau-Leitfaden
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-white">
            Elementor Struktur & Farbleitfaden
          </h2>
          <p className="font-sans text-xs sm:text-sm text-[#E4D9CC]/80 font-light mt-2 max-w-2xl">
            Alle Komponenten wurden so konzipiert, dass sie in WordPress / Elementor Pro mit Standard-Containern und Widgets direkt umgesetzt und gewartet werden können.
          </p>
        </div>

        {/* Section 1: Colors & Global Styles */}
        <div className="mb-10 p-6 bg-[#182426] border border-[#31464a]">
          <h3 className="font-serif text-lg text-white font-medium mb-4 flex items-center gap-2">
            <Palette className="w-4 h-4 text-[#C6A15B]" />
            1. Farbpalette (Global Colors in Elementor)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {COLOR_PALETTE.map((c) => (
              <div
                key={c.hex}
                className="p-3 bg-[#213134] border border-[#395055] flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 rounded-sm border border-white/20 shadow-inner flex-shrink-0"
                    style={{ backgroundColor: c.hex }}
                  ></div>
                  <div>
                    <div className="text-xs font-serif text-white">{c.name}</div>
                    <div className="text-[11px] font-mono text-[#C6A15B]">{c.hex}</div>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(c.hex, c.hex)}
                  className="p-1.5 text-[#E4D9CC]/60 hover:text-[#C6A15B] transition-colors"
                  title="Hex-Code kopieren"
                >
                  {copiedKey === c.hex ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Typography Settings */}
        <div className="mb-10 p-6 bg-[#182426] border border-[#31464a]">
          <h3 className="font-serif text-lg text-white font-medium mb-4 flex items-center gap-2">
            <Type className="w-4 h-4 text-[#C6A15B]" />
            2. Typografie (Global Fonts in Elementor)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans text-xs">
            <div className="p-4 bg-[#213134] border border-[#31464a]">
              <div className="text-[#C6A15B] font-semibold uppercase tracking-wider mb-1">
                Headlines & Titel
              </div>
              <div className="font-serif text-xl text-white my-2">
                Schriftart: Georgia (Serif)
              </div>
              <p className="text-[#E4D9CC]/70 leading-relaxed font-light">
                Gewichte: 400 (Regular) / 600 (Semibold)<br />
                Verwendet für alle H1, H2, H3, H4 und Kanzleinamen.
              </p>
            </div>

            <div className="p-4 bg-[#213134] border border-[#31464a]">
              <div className="text-[#C6A15B] font-semibold uppercase tracking-wider mb-1">
                Fliesstext & Navigation
              </div>
              <div className="font-sans text-lg text-white my-2">
                Schriftart: Arial (Sans-Serif)
              </div>
              <p className="text-[#E4D9CC]/70 leading-relaxed font-light">
                Gewichte: 300 (Light) / 400 (Regular) / 600 (Bold)<br />
                Line-Height: 1.6 – 1.7 für optimale Lesbarkeit.
              </p>
            </div>
          </div>
        </div>

        {/* Section 3: Hero Slideshow Elementor Implementation */}
        <div className="mb-10 p-6 bg-[#182426] border border-[#31464a]">
          <h3 className="font-serif text-lg text-white font-medium mb-4 flex items-center gap-2">
            <Layers className="w-4 h-4 text-[#C6A15B]" />
            3. Technische Umsetzung des Hero-Bereichs in Elementor
          </h3>
          <div className="space-y-3 font-sans text-xs sm:text-sm text-[#E4D9CC]/85 font-light leading-relaxed">
            <div className="p-3 bg-[#213134] border-l-2 border-[#C6A15B]">
              <strong className="text-white">Hintergrund-Slideshow:</strong> In Elementor wird dem Haupt-Container unter <em>Stil → Hintergrundtyp → Diashow</em> die 3 Bilder (Zürich, Brüssel, Oslo) mit Übergangseffekt <em>Überblenden (Fade)</em> und Dauer 6.5s zugewiesen.
            </div>
            <div className="p-3 bg-[#213134] border-l-2 border-[#C6A15B]">
              <strong className="text-white">Feste Inhaltsbox:</strong> Ein innerer Flexbox-Container mit fixer Ausrichtung (Right/End), Hintergrundfarbe <code className="text-[#C6A15B]">#213134</code>, Innenabstand 48px, und feiner Randlinie. Bleibt starr auf Position 1, während die Diashow im Hintergrund wechselt.
            </div>
            <div className="p-3 bg-[#213134] border-l-2 border-[#C6A15B]">
              <strong className="text-white">Hero Version 1 (PDF) vs Version 2 (Modern):</strong> Beide Versionen nutzen dieselben Inhaltsfelder (Überschrift, Unterzeile, Fließtext, Button), unterscheiden sich nur im Container-Styling (Eckradius, Akzente, Standort-Badges).
            </div>
          </div>
        </div>

        {/* Section 4: Section Breakdown Checklist */}
        <div className="p-6 bg-[#182426] border border-[#31464a]">
          <h3 className="font-serif text-lg text-white font-medium mb-3 flex items-center gap-2">
            <Code2 className="w-4 h-4 text-[#C6A15B]" />
            4. Modul-Übersicht für Elementor-Seitenaufbau
          </h3>
          <ul className="space-y-2 text-xs font-sans text-[#E4D9CC]/85 font-light">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C6A15B] rounded-full"></span>
              <strong>1. Header / Navbar:</strong> Sticky Container, Logo, Menü-Trigger, Kontakt-CTA.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C6A15B] rounded-full"></span>
              <strong>2. Hero-Section:</strong> Background Slideshow (Zürich, Brüssel, Oslo) + Fixed Box.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C6A15B] rounded-full"></span>
              <strong>3. Team-Section:</strong> 4-Spalten Grid (Laura, Carl, Mads, Mohamed) mit Profilbild & Bio.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C6A15B] rounded-full"></span>
              <strong>4. Wofür wir stehen:</strong> 2-Spalten Container (Text links, Kanzleibild rechts).
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C6A15B] rounded-full"></span>
              <strong>5. Unsere Fachgebiete:</strong> 5-Spalten Card Grid mit Vektor-Icons & Links.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C6A15B] rounded-full"></span>
              <strong>6. Weitere Rechtsgebiete:</strong> Call-to-Action Teaser Banner.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C6A15B] rounded-full"></span>
              <strong>7. Standorte & Footer:</strong> 3-Spalten Adressen (Zürich, Brüssel, Oslo) + Rechtliches.
            </li>
          </ul>
        </div>

        <div className="mt-8 pt-6 border-t border-[#31464a] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-[#C6A15B] text-[#213134] font-sans font-semibold text-xs tracking-wider uppercase transition-colors"
          >
            Verstanden & Schließen
          </button>
        </div>

      </div>
    </div>
  );
};
