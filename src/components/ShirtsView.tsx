import React from 'react';
import { SHIRTS_DATA } from '../data/products';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, Feather, Waves, Check } from 'lucide-react';

interface ShirtsViewProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const ShirtsView: React.FC<ShirtsViewProps> = ({
  onQuickView,
  onAddToCart,
}) => {
  return (
    <div className="bg-white py-12 sm:py-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A961] font-semibold mb-3">
            <Feather className="w-3.5 h-3.5" />
            <span>Pure Silk-Touch Drape</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl text-[#000000] font-normal tracking-wide uppercase mb-4">
            Signature Satin Shirts
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#5A0A1A] max-w-xl mx-auto">
            Navy Signature, Burgundy Signature & Black Signature • R599 Each
          </p>

          <p className="mt-4 text-xs sm:text-sm text-[#555555] leading-relaxed max-w-2xl mx-auto font-light">
            Engineered in liquid silk-touch satin, folded presentation, each paired with our signature 18K gold cross chain. Cash on Delivery across Cape Town & Nationwide PAXI.
          </p>
        </div>

        {/* Feature Specs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-6 sm:p-8 bg-[#FAF8F5] border border-[#000000]/8 mb-16">
          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 bg-white border border-[#C9A961]/40 flex items-center justify-center shrink-0 text-[#C9A961]">
              <Waves className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-editorial text-sm font-semibold text-[#111111]">Liquid Silk Touch</h4>
              <p className="text-xs text-[#666666] font-light mt-0.5">High-density microfiber satin weave with anti-static finish and subtle pearl luster.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 bg-white border border-[#C9A961]/40 flex items-center justify-center shrink-0 text-[#C9A961]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-editorial text-sm font-semibold text-[#111111]">Open Placket Cut</h4>
              <p className="text-xs text-[#666666] font-light mt-0.5">Engineered to frame the neck and gold cross chain naturally without collapsing.</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-9 h-9 bg-white border border-[#C9A961]/40 flex items-center justify-center shrink-0 text-[#C9A961]">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-editorial text-sm font-semibold text-[#111111]">French Convertible Cuffs</h4>
              <p className="text-xs text-[#666666] font-light mt-0.5">Wear with classic buttons or attach DON AZA-KHEM gold cufflinks.</p>
            </div>
          </div>
        </div>

        {/* 5 Shirts Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {SHIRTS_DATA.map((shirt) => (
            <ProductCard
              key={shirt.id}
              product={shirt}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}

          {/* Bundle Highlight Card */}
          <div className="p-8 bg-[#FDFBF7] border border-[#C9A961]/50 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A961] block mb-2">
                Atelier Privilege
              </span>
              <h3 className="font-editorial text-2xl text-[#111111] font-normal mb-2">
                The 3-Shirt Signature Trio
              </h3>
              <p className="text-xs text-[#555555] font-light leading-relaxed mb-6">
                Acquire the complete trinity: Navy Signature, Burgundy Signature, and Black Signature. Each folded with an 18K gold cross necklace.
              </p>
              <div className="text-lg font-mono font-semibold text-[#111111] mb-2 tabular-nums">
                R1,617 <span className="text-xs text-[#777777] font-sans font-normal">(Save 10% on the complete 3-shirt suite)</span>
              </div>
            </div>

            <div>
              <a
                href="https://wa.me/27736285307?text=Hello%20DON%20AZA-KHEM%20Concierge,%20I%20would%20like%20to%20order%20the%20Complete%203-Shirt%20Signature%20Trio%20(Navy,%20Burgundy,%20Black)%20for%20R1,617."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 bg-black hover:bg-[#5A0A1A] text-white text-xs uppercase tracking-[0.2em] font-semibold block text-center transition-colors"
              >
                Order 3-Shirt Trio (WhatsApp)
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
