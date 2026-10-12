import React, { useState } from 'react';
import { Product } from '../types';
import { SHIRTS_DATA } from '../data/products';
import { CONCIERGE_WHATSAPP_NUMBER } from '../utils/whatsapp';
import { ShoppingBag, Sparkles, ShieldCheck, Clock, Truck } from 'lucide-react';

interface NavySignatureSpotlightProps {
  onAddToCart?: (product: Product, size: string, quantity?: number) => void;
  onQuickView?: (product: Product) => void;
  isStandalone?: boolean;
}

export const NavySignatureSpotlight: React.FC<NavySignatureSpotlightProps> = ({
  onAddToCart,
  onQuickView,
  isStandalone = false,
}) => {
  // Sizing states per shirt
  const [selectedSizes, setSelectedSizes] = useState<Record<string, string>>({
    'shirt-navy': 'L',
    'shirt-burgundy': 'L',
    'shirt-black': 'L',
  });

  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const handleSizeChange = (shirtId: string, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [shirtId]: size }));
  };

  const handleBuyWhatsApp = (shirtName: string, size: string) => {
    const text = `Hi DON AZA-KHEM - I want ${shirtName} R599 Size: ${size}. My address: `;
    window.open(`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBuyFullSuitWhatsApp = (shirtName: string, size: string) => {
    const text = `Hi DON AZA-KHEM — I want FULL SUIT R3298 — Tailored Blazer + ${shirtName} + Pants Size ${size}. My address: `;
    window.open(`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className={`relative ${isStandalone ? 'py-12 sm:py-20' : 'py-14 sm:py-20'} bg-[#FCFBF8] text-[#111111] border-b border-[#EEEEEE]`}>
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Wordmark */}
        <div className="text-center pb-6 sm:pb-8 border-b border-[#EEEEEE] mb-8">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#111111] text-[#E8DCCA] text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 rounded-full">
            <Sparkles className="w-3 h-3 text-[#C9A86A]" />
            Official Signature Shirts Drop
          </span>
          <h1 className="font-cormorant text-2xl sm:text-4xl font-semibold tracking-[0.35em] uppercase text-[#111111]">
            DON AZA-KHEM
          </h1>
          <div className="text-[10px] sm:text-[11px] tracking-[0.22em] text-[#888888] uppercase mt-2 font-medium">
            CAPE TOWN • 073 628 5307
          </div>
        </div>

        {/* Hero Section matching user specification */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-cormorant text-3xl sm:text-5xl font-light text-[#111111] mb-2.5 tracking-[0.05em] leading-tight">
            Quiet Luxury. Cape Town.
          </h2>
          <p className="text-xs sm:text-sm text-[#888888] tracking-[0.15em] uppercase font-medium">
            Satin Finish • Gold Cross • Cash On Delivery
          </p>
        </div>

        {/* 3-Shirt Grid (1 col mobile, 2 col tablet, 3 col desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-[1100px] mx-auto">
          {SHIRTS_DATA.map((shirt) => {
            const currentSize = selectedSizes[shirt.id] || 'L';

            return (
              <div
                key={shirt.id}
                className="bg-white rounded-[18px] overflow-hidden border border-[#EEEEEE] shadow-[0_10px_30px_rgba(0,0,0,0.04)] flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]"
              >
                {/* Product Image Frame */}
                <div className="relative overflow-hidden aspect-[3/4] bg-[#FFFFFF]">
                  <img
                    src={shirt.image}
                    alt={shirt.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80';
                    }}
                  />
                  <div className="absolute top-3.5 left-3.5 bg-[#0A0A0A]/85 backdrop-blur-sm text-[#E8DCCA] text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-[#C9A86A]/40 font-medium">
                    18K Gold Cross Included
                  </div>

                  {onQuickView && (
                    <button
                      type="button"
                      onClick={() => onQuickView(shirt)}
                      className="absolute bottom-3.5 right-3.5 bg-white/95 hover:bg-white text-black text-[10px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm transition-colors cursor-pointer"
                    >
                      Quick View
                    </button>
                  )}
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-cormorant text-xl sm:text-2xl font-semibold tracking-[0.1em] uppercase text-[#111111] mb-1">
                      {shirt.name}
                    </h3>
                    <div className="text-lg font-bold text-[#111111] mb-2 flex items-center gap-2">
                      <span>R{shirt.price}</span>
                      <span className="text-[11px] font-normal text-[#888888] uppercase tracking-wider">
                        • Satin • Gold Cross
                      </span>
                    </div>
                    <div className="text-[13px] text-[#777777] leading-relaxed mb-4">
                      {shirt.tagline}
                    </div>

                    {/* Sizing Pills */}
                    <div className="mb-5">
                      <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#888888] mb-2">
                        Select Size (S - XXL)
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2">
                        {sizes.map((s) => {
                          const isActive = currentSize === s;
                          return (
                            <button
                              key={s}
                              type="button"
                              onClick={() => handleSizeChange(shirt.id, s)}
                              className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs font-semibold transition-all cursor-pointer ${
                                isActive
                                  ? 'bg-[#111111] text-white shadow-md scale-105'
                                  : 'bg-white border border-[#DDDDDD] text-[#111111] hover:border-black'
                              }`}
                            >
                              {s}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2 pt-2">
                    <a
                      className="block w-full text-center bg-[#111111] hover:bg-black text-white py-3.5 px-5 rounded-full text-xs font-bold tracking-[0.18em] transition-all shadow-md active:scale-[0.99] uppercase cursor-pointer"
                      href={`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(
                        `Hi DON AZA-KHEM - I want ${shirt.name} R599 Size: ${currentSize}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      BUY ON WHATSAPP
                    </a>

                    <button
                      type="button"
                      onClick={() => handleBuyFullSuitWhatsApp(shirt.name, currentSize)}
                      className="block w-full text-center bg-[#C9A86A] hover:bg-[#bfa05d] text-[#111111] py-2.5 px-4 rounded-full text-[11px] font-bold tracking-[0.14em] transition-all uppercase cursor-pointer"
                    >
                      FULL SUIT R3298 (Blazer + Shirt + Pants)
                    </button>

                    {onAddToCart && (
                      <button
                        type="button"
                        onClick={() => onAddToCart(shirt, currentSize)}
                        className="w-full text-center bg-transparent border border-black/20 hover:border-black text-[#111111] py-2 px-4 rounded-full text-[11px] font-medium tracking-[0.14em] transition-colors uppercase cursor-pointer flex items-center justify-center gap-1.5"
                      >
                        <ShoppingBag className="w-3.5 h-3.5 text-[#C9A86A]" />
                        <span>Add To Bag (Size {currentSize})</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Guarantee matching user's exact footer copy */}
        <div className="text-center mt-12 pt-8 border-t border-[#EEEEEE] text-xs text-[#888888] tracking-[0.2em] uppercase leading-relaxed">
          <p className="font-semibold text-[#111111]">
            DON AZA-KHEM — QUIET LUXURY CAPE TOWN
          </p>
          <p className="mt-1 text-[11px] text-[#666666]">
            WHATSAPP 073 628 5307 • CASH ON DELIVERY • NATIONWIDE PAXI • 24HR DELIVERY
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-[11px] text-[#777777]">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#C9A86A]" />
              Cash on Delivery Cape Town
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9A86A]" />
              Nationwide PAXI & Overnight Courier
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C9A86A]" />
              18K Gold Cross Detail
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
