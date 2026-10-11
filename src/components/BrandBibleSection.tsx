import React from 'react';
import { ShieldCheck, Compass, Sparkles, Feather, Wine, Anchor } from 'lucide-react';
import { ActivePage } from '../types';

interface BrandBibleSectionProps {
  setActivePage: (page: ActivePage) => void;
}

export const BrandBibleSection: React.FC<BrandBibleSectionProps> = ({ setActivePage }) => {
  const rules = [
    {
      num: '01',
      title: 'The Contrast Law',
      subtitle: 'Suit & Satin Inversion',
      icon: Feather,
      description: 'Quiet luxury rejects monochrome monotony. A black suit requires pure white silk. An alabaster white suit commands obsidian black satin. Burgundy is warmed by champagne, and navy is ignited by royal wine.',
      quote: 'Contrast reveals intentionality. Anyone can wear black on black; a gentleman wears contrast with poise.'
    },
    {
      num: '02',
      title: 'The Unbuttoned Satin Placket',
      subtitle: 'Zero Ties, Maximum Drape',
      icon: Compass,
      description: 'Ties belong to boardrooms of the past. Under DON AZA-KHEM sartorial codes, satin shirts are unbuttoned two buttons down, framing the collarbones and providing effortless drape in the Atlantic breeze.',
      quote: 'Drape precedes structure. Fluidity defines modern power.'
    },
    {
      num: '03',
      title: 'The Single Gold Cross Standard',
      subtitle: 'One Sovereign Emblem',
      icon: Sparkles,
      description: 'No brand logos or loud monograms. The only visible accessory at the chest is the 24-inch beveled 18K gold cross chain, resting gently upon the bare skin or against the lustrous satin weave.',
      quote: 'Discreet devotion to craftsmanship, without loud ostentation.'
    },
    {
      num: '04',
      title: 'Atlantic Seaboard Provenance',
      subtitle: 'Camps Bay to Constantia',
      icon: Anchor,
      description: 'Designed exclusively for the microclimates of the Cape Peninsula. Italian Super 140s wool blends woven to remain cool during 28°C Camps Bay afternoons, yet substantial when the Atlantic twilight winds arrive.',
      quote: 'Tailored for the Twelve Apostles backdrop and Clifton sun.'
    },
    {
      num: '05',
      title: 'The 5 Sovereign Color Codes',
      subtitle: 'The Core Palette',
      icon: Wine,
      description: 'Five sacred hues: White (#FFFFFF), Black (#000000), Gold (#C9A961), Burgundy (#5A0A1A), Navy (#1A2332), and Champagne (#E8DCCA). Every garment in the atelier seamlessly harmonizes within this closed system.',
      quote: 'A restricted palette creates an eternal wardrobe.'
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#000000]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A961] font-medium mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Tailoring Canon</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#000000] font-normal tracking-wide uppercase mb-4">
            The Brand Bible
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#5A0A1A] max-w-xl mx-auto">
            "We do not design suits for the spotlight; we cut silhouettes that command the room in silence."
          </p>

          <p className="mt-4 text-sm text-[#555555] max-w-2xl mx-auto leading-relaxed font-light">
            Rooted in the dramatic landscape of Camps Bay and Clifton, DON AZA-KHEM represents South Africa’s premier quiet luxury house. Here are the sacred guidelines governing our tailoring, our silk-satin layering, and our timeless accessories.
          </p>
        </div>

        {/* 5 Rules Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {rules.map((rule) => {
            const Icon = rule.icon;
            return (
              <div
                key={rule.num}
                className="p-8 bg-[#FDFBF7] border border-[#000000]/6 hover:border-[#C9A961]/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#C9A961] font-semibold">
                      RULE {rule.num}
                    </span>
                    <Icon className="w-5 h-5 text-[#5A0A1A]" />
                  </div>

                  <h3 className="font-editorial text-xl text-[#000000] font-medium mb-1">
                    {rule.title}
                  </h3>

                  <div className="text-[11px] uppercase tracking-wider text-[#777777] mb-4">
                    {rule.subtitle}
                  </div>

                  <p className="text-xs text-[#444444] leading-relaxed mb-6 font-light">
                    {rule.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#000000]/8">
                  <p className="font-serif italic text-xs text-[#5A0A1A]">
                    "{rule.quote}"
                  </p>
                </div>
              </div>
            );
          })}

          {/* 6th Card: Cape Town Concierge Fitting Invitation */}
          <div className="p-8 bg-[#1A2332] text-white border border-[#1A2332] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs uppercase tracking-widest text-[#C9A961] font-semibold">
                  PRIVATE SALON
                </span>
                <span className="text-xs text-[#E8DCCA] font-serif">Est. Cape Town</span>
              </div>

              <h3 className="font-editorial text-2xl text-white font-medium mb-2">
                Private Camps Bay Fitting
              </h3>

              <div className="text-[11px] uppercase tracking-wider text-[#C9A961] mb-4">
                Victoria Road Penthouse
              </div>

              <p className="text-xs text-neutral-300 leading-relaxed font-light mb-6">
                Experience the 5 suits in person with private sea views, champagne service, and custom adjustments by master tailors.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <button
                onClick={() => setActivePage('contact')}
                className="w-full py-3 bg-[#C9A961] hover:bg-[#d8bc78] text-black text-xs uppercase tracking-[0.2em] font-semibold transition-colors cursor-pointer"
              >
                Request Private Appointment
              </button>
            </div>
          </div>
        </div>

        {/* Color Palette Demonstration Bar */}
        <div className="bg-[#FAF8F5] border border-[#000000]/8 p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#C9A961] font-semibold block mb-1">
              THE SOVEREIGN CHROMATIC SCALE
            </span>
            <h4 className="font-editorial text-lg text-[#111111]">
              Engineered Under The Cape Town Sun
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-6 gap-3">
            {[
              { name: 'Pure Alabaster', hex: '#FFFFFF', text: '#000000', border: 'border-neutral-300', role: 'Shirts & Suits' },
              { name: 'Midnight Noir', hex: '#000000', text: '#FFFFFF', border: 'border-black', role: 'Foundation Cloth' },
              { name: 'Imperial Burgundy', hex: '#5A0A1A', text: '#FFFFFF', border: 'border-[#5A0A1A]', role: 'Evening Elegance' },
              { name: 'Atlantic Navy', hex: '#1A2332', text: '#FFFFFF', border: 'border-[#1A2332]', role: 'Maritime Authority' },
              { name: 'Vintage Champagne', hex: '#E8DCCA', text: '#111111', border: 'border-[#d0c2ae]', role: 'Coastal Light' },
              { name: 'Refined Gold', hex: '#C9A961', text: '#000000', border: 'border-[#b5954d]', role: '18K Jewelry Hardware' },
            ].map((col) => (
              <div key={col.name} className="p-3 bg-white border border-[#000000]/8 text-center">
                <div
                  className={`w-full h-12 mb-2 border ${col.border}`}
                  style={{ backgroundColor: col.hex }}
                />
                <div className="font-editorial text-xs font-semibold text-[#111111] truncate">{col.name}</div>
                <div className="font-mono text-[10px] text-[#888888]">{col.hex}</div>
                <div className="text-[10px] text-[#666666] tracking-wider uppercase mt-1">{col.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
