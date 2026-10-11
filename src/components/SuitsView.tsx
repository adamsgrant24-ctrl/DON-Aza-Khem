import React from 'react';
import { SUITS_DATA } from '../data/products';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, ShieldCheck, Ruler, ArrowRight } from 'lucide-react';

interface SuitsViewProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
  onSelectProduct: (product: Product) => void;
}

export const SuitsView: React.FC<SuitsViewProps> = ({
  onQuickView,
  onAddToCart,
  onSelectProduct,
}) => {
  return (
    <div className="bg-white py-12 sm:py-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A961] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Core 5 Tailoring Ensembles</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl text-[#000000] font-normal tracking-wide uppercase mb-4">
            The Suits Collection
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#5A0A1A] max-w-xl mx-auto">
            5 Distinct Looks • Italian Super 140s Wool • R2,999 Each
          </p>

          <p className="mt-4 text-xs sm:text-sm text-[#555555] leading-relaxed max-w-2xl mx-auto font-light">
            Every suit in this collection arrives as an authoritative complete ensemble: bespoke two-piece tailored jacket and trousers, paired with our dedicated contrast silk-touch satin shirt and styled with our signature 18K gold cross chain.
          </p>
        </div>

        {/* Tailoring Attributes Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 sm:p-8 bg-[#FAF8F5] border border-[#000000]/8 mb-16">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white border border-[#C9A961]/40 flex items-center justify-center shrink-0 text-[#5A0A1A]">
              <Sparkles className="w-5 h-5 text-[#C9A961]" />
            </div>
            <div>
              <h4 className="font-editorial text-sm font-semibold text-[#111111] mb-1">
                Full Contrast Ensemble Included
              </h4>
              <p className="text-xs text-[#666666] font-light">
                Each suit includes the jacket, trousers, and the designated matching silk-satin shirt designed to be worn open at the chest.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white border border-[#C9A961]/40 flex items-center justify-center shrink-0 text-[#5A0A1A]">
              <Ruler className="w-5 h-5 text-[#C9A961]" />
            </div>
            <div>
              <h4 className="font-editorial text-sm font-semibold text-[#111111] mb-1">
                Camps Bay Sartorial Cut
              </h4>
              <p className="text-xs text-[#666666] font-light">
                Half-canvassed chest construction, natural roped shoulder, wide peak lapel with Milanese pick-stitching, and tapered flat-front trousers.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-white border border-[#C9A961]/40 flex items-center justify-center shrink-0 text-[#5A0A1A]">
              <ShieldCheck className="w-5 h-5 text-[#C9A961]" />
            </div>
            <div>
              <h4 className="font-editorial text-sm font-semibold text-[#111111] mb-1">
                Flat R2,999 Atelier Pricing
              </h4>
              <p className="text-xs text-[#666666] font-light">
                Zero markup gimmicks. Direct atelier value from Cape Town with complimentary door-to-door overnight courier across South Africa.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Suits Gallery (Desktop 3 + 2 Grid or Mobile 1-Column) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SUITS_DATA.map((suit) => (
            <ProductCard
              key={suit.id}
              product={suit}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}

          {/* 6th Card: Bespoke Private Tailoring / Custom Adjustment */}
          <div className="p-8 bg-[#1A2332] text-white border border-[#1A2332] flex flex-col justify-between">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-[#C9A961] font-mono mb-4">
                Bespoke Atelier Service
              </div>
              <h3 className="font-editorial text-2xl text-white font-medium mb-2">
                Custom Tailoring & Made-To-Measure
              </h3>
              <p className="text-xs text-neutral-300 font-light leading-relaxed mb-6">
                Require unique drop measurements (e.g. 44 jacket with 32 trousers)? Our master tailors in Camps Bay provide individualized adjustments before shipping.
              </p>
              <div className="space-y-2 text-xs text-[#E8DCCA] border-t border-white/10 pt-4">
                <div>• Sleeve length adjustment</div>
                <div>• Trouser hem & cuff finishing</div>
                <div>• Hand-embroidered initials inside jacket</div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/27720000000?text=Hello%20DON%20AZA-KHEM%20Concierge,%20I%20would%20like%20to%20inquire%20about%20made-to-measure%20suit%20customizations."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-[#C9A961] hover:bg-[#d8bc78] text-black text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors text-center"
              >
                <span>Inquire On WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
