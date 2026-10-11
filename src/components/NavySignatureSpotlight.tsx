import React, { useState } from 'react';
import { Product } from '../types';
import { ALL_PRODUCTS } from '../data/products';
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
  const [navySize, setNavySize] = useState<string>('L');
  const [burgundySize, setBurgundySize] = useState<string>('L');
  const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

  const navyProduct = ALL_PRODUCTS.find((p) => p.id === 'shirt-navy') || {
    id: 'shirt-navy',
    name: 'Navy Signature Shirt',
    category: 'shirts' as const,
    price: 599,
    formattedPrice: 'R599',
    tagline: 'Deep navy satin. Gold cross. Tailored drape. S-XXL.',
    description: 'Signature satin finish. Folded presentation. Paired with 18k gold cross chain. Tailored fit. Quiet luxury for weddings, dinners, and boardrooms.',
    composition: '100% High-Density Silk-Touch Satin • 18K Gold Cross Chain Included',
    details: [
      'Deep navy satin with liquid luster',
      'Paired with 18k gold cross chain detail included',
      'Folded presentation tailored fit',
      'Quiet luxury for weddings, dinners, and boardrooms',
      'Cash on Delivery in Cape Town • 24hr delivery',
    ],
    image: '/navy_shirt_real.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
  };

  const burgundyProduct = ALL_PRODUCTS.find((p) => p.id === 'shirt-burgundy') || {
    id: 'shirt-burgundy',
    name: 'Burgundy Signature Shirt',
    category: 'shirts' as const,
    price: 599,
    formattedPrice: 'R599',
    tagline: 'Rich burgundy satin. Gold cross. Limited edition. S-XXL.',
    description: 'Rich burgundy satin. Gold cross. Limited edition. Tailored drape. S-XXL. Paired with 18k gold cross chain. Quiet luxury for weddings, dinners, and boardrooms.',
    composition: '100% High-Density Silk-Touch Satin • 18K Gold Cross Chain Included',
    details: [
      'Rich burgundy satin finish with liquid luster',
      'Paired with 18k gold cross chain detail included',
      'Folded presentation tailored fit',
      'Limited edition drop S-XXL',
      'Cash on Delivery in Cape Town • 24hr delivery',
    ],
    image: '/burgundy_shirt_real.jpg',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    inStock: true,
  };

  const handleBuyWhatsApp = (productName: string, size: string) => {
    const text = `Hi DON AZA-KHEM - I want ${productName} R599 Size: ${size}. My address: `;
    window.open(`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleBuyFullSuitWhatsApp = (shirtName: string, size: string) => {
    const text = `Hi DON AZA-KHEM — I want FULL SUIT R3298 — Tailored Blazer + ${shirtName} + Pants Size ${size}. My address: `;
    window.open(`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section className={`relative ${isStandalone ? 'py-12 sm:py-20' : 'py-14 sm:py-20'} bg-[#FCFBF8] text-[#111111] border-b border-[#EEEEEE]`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Wordmark */}
        <div className="text-center pb-6 sm:pb-8 border-b border-[#EEEEEE] mb-8">
          <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#111111] text-[#E8DCCA] text-[10px] tracking-[0.25em] uppercase font-semibold mb-3 rounded-full">
            <Sparkles className="w-3 h-3 text-[#C9A86A]" />
            Signature Edition Drop
          </span>
          <h1 className="font-cormorant text-2xl sm:text-4xl font-semibold tracking-[0.25em] uppercase text-[#111111]">
            DON AZA-KHEM
          </h1>
          <div className="text-[10px] sm:text-[11px] tracking-[0.22em] text-[#888888] uppercase mt-2 font-medium">
            CAPE TOWN • 073 628 5307
          </div>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-14">
          <h2 className="font-cormorant text-3xl sm:text-5xl font-light text-[#111111] mb-2 leading-tight">
            Quiet Luxury. Cape Town.
          </h2>
          <p className="text-sm sm:text-base text-[#888888] tracking-wide font-light">
            Satin finish • Gold cross detail • Cash on Delivery
          </p>
        </div>

        {/* 2-Product Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 max-w-[940px] mx-auto">
          
          {/* PRODUCT 1: NAVY SIGNATURE */}
          <div className="bg-white rounded-[20px] overflow-hidden border border-[#EEEEEE] shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]">
            <div className="relative overflow-hidden aspect-[3/4] bg-[#FAF8F5]">
              <img
                src="/navy_shirt_real.jpg"
                alt="Navy Signature Shirt"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80';
                }}
              />
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/85 backdrop-blur-sm text-[#E8DCCA] text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-[#C9A86A]/40 font-medium">
                18K Gold Cross Included
              </div>
              {onQuickView && (
                <button
                  type="button"
                  onClick={() => onQuickView(navyProduct)}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-black text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm transition-colors cursor-pointer"
                >
                  Quick View
                </button>
              )}
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-cormorant text-2xl font-semibold tracking-[0.05em] uppercase text-[#111111] mb-1">
                  Navy Signature
                </h3>
                <div className="text-xl font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <span>R599</span>
                  <span className="text-xs font-normal text-[#888888] uppercase tracking-wider">
                    • Pure Satin
                  </span>
                </div>
                <div className="text-[13px] text-[#777777] leading-relaxed mb-5">
                  Deep navy satin. Gold cross. Tailored drape. S-XXL.
                </div>

                {/* Size Selector */}
                <div className="mb-6">
                  <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#888888] mb-2.5">
                    Select Size
                  </div>
                  <div className="flex items-center gap-2">
                    {sizes.map((s) => {
                      const isActive = navySize === s;
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setNavySize(s)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#111111] text-white shadow-md'
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
              <div className="space-y-2.5">
                <a
                  className="block w-full text-center bg-[#111111] hover:bg-black text-white py-3.5 px-6 rounded-full text-xs font-bold tracking-[0.18em] transition-all shadow-md active:scale-[0.99] uppercase cursor-pointer"
                  href={`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi DON AZA-KHEM - I want Navy Signature R599 Size: ${navySize}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BUY ON WHATSAPP
                </a>

                <button
                  type="button"
                  onClick={() => handleBuyFullSuitWhatsApp('Navy Signature Shirt', navySize)}
                  className="block w-full text-center bg-[#C9A86A] hover:bg-[#bfa05d] text-[#111111] py-3 px-6 rounded-full text-[11px] font-bold tracking-[0.15em] transition-all uppercase cursor-pointer"
                >
                  FULL SUIT R3298 (Blazer + Shirt + Pants)
                </button>

                {onAddToCart && (
                  <button
                    type="button"
                    onClick={() => onAddToCart(navyProduct, navySize)}
                    className="w-full text-center bg-transparent border border-black/20 hover:border-black text-[#111111] py-2.5 px-6 rounded-full text-[11px] font-medium tracking-[0.15em] transition-colors uppercase cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#C9A86A]" />
                    <span>Add to Bag (Size {navySize})</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* PRODUCT 2: BURGUNDY SIGNATURE */}
          <div className="bg-white rounded-[20px] overflow-hidden border border-[#EEEEEE] shadow-[0_10px_35px_rgba(0,0,0,0.04)] flex flex-col justify-between group transition-all duration-300 hover:shadow-[0_16px_45px_rgba(0,0,0,0.08)]">
            <div className="relative overflow-hidden aspect-[3/4] bg-[#FAF8F5]">
              <img
                src="/burgundy_shirt_real.jpg"
                alt="Burgundy Signature Shirt"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src = 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80';
                }}
              />
              <div className="absolute top-4 left-4 bg-[#0A0A0A]/85 backdrop-blur-sm text-[#E8DCCA] text-[10px] tracking-[0.18em] uppercase px-3 py-1 rounded-full border border-[#C9A86A]/40 font-medium">
                18K Gold Cross Included
              </div>
              {onQuickView && (
                <button
                  type="button"
                  onClick={() => onQuickView(burgundyProduct)}
                  className="absolute bottom-4 right-4 bg-white/90 hover:bg-white text-black text-[11px] uppercase tracking-wider font-semibold px-3 py-1.5 rounded-full shadow-md backdrop-blur-sm transition-colors cursor-pointer"
                >
                  Quick View
                </button>
              )}
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-cormorant text-2xl font-semibold tracking-[0.05em] uppercase text-[#111111] mb-1">
                  Burgundy Signature
                </h3>
                <div className="text-xl font-bold text-[#111111] mb-2 flex items-center gap-2">
                  <span>R599</span>
                  <span className="text-xs font-normal text-[#888888] uppercase tracking-wider">
                    • Pure Satin
                  </span>
                </div>
                <div className="text-[13px] text-[#777777] leading-relaxed mb-5">
                  Rich burgundy satin. Gold cross. Limited edition. S-XXL.
                </div>

                {/* Size Selector */}
                <div className="mb-6">
                  <div className="text-[10px] tracking-[0.2em] uppercase font-semibold text-[#888888] mb-2.5">
                    Select Size
                  </div>
                  <div className="flex items-center gap-2">
                    {sizes.map((s) => {
                      const isActive = burgundySize === s;
                      return (
                        <button
                          key={s}
                          type="button"
                          onClick={() => setBurgundySize(s)}
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-semibold transition-all cursor-pointer ${
                            isActive
                              ? 'bg-[#111111] text-white shadow-md'
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
              <div className="space-y-2.5">
                <a
                  className="block w-full text-center bg-[#111111] hover:bg-black text-white py-3.5 px-6 rounded-full text-xs font-bold tracking-[0.18em] transition-all shadow-md active:scale-[0.99] uppercase cursor-pointer"
                  href={`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi DON AZA-KHEM - I want Burgundy Signature R599 Size: ${burgundySize}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BUY ON WHATSAPP
                </a>

                <button
                  type="button"
                  onClick={() => handleBuyFullSuitWhatsApp('Burgundy Signature Shirt', burgundySize)}
                  className="block w-full text-center bg-[#C9A86A] hover:bg-[#bfa05d] text-[#111111] py-3 px-6 rounded-full text-[11px] font-bold tracking-[0.15em] transition-all uppercase cursor-pointer"
                >
                  FULL SUIT R3298 (Blazer + Shirt + Pants)
                </button>

                {onAddToCart && (
                  <button
                    type="button"
                    onClick={() => onAddToCart(burgundyProduct, burgundySize)}
                    className="w-full text-center bg-transparent border border-black/20 hover:border-black text-[#111111] py-2.5 px-6 rounded-full text-[11px] font-medium tracking-[0.15em] transition-colors uppercase cursor-pointer flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#C9A86A]" />
                    <span>Add to Bag (Size {burgundySize})</span>
                  </button>
                )}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Guarantee */}
        <div className="text-center mt-12 pt-8 border-t border-[#EEEEEE] text-xs text-[#888888] tracking-[0.2em] uppercase">
          <p className="font-medium text-[#111111]">
            DON AZA-KHEM — CAPE TOWN • WHATSAPP: 073 628 5307
          </p>
          <div className="flex items-center justify-center gap-4 mt-2 text-[11px] text-[#777777]">
            <span className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5 text-[#C9A86A]" />
              Cash on Delivery in Cape Town
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-[#C9A86A]" />
              24hr Delivery
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
