import React, { useState } from 'react';
import { JEWELRY_DATA } from '../data/products';
import { Product, JewelrySubCategory } from '../types';
import { ProductCard } from './ProductCard';
import { Sparkles, ShieldCheck, Gem } from 'lucide-react';

interface JewelryViewProps {
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const JewelryView: React.FC<JewelryViewProps> = ({
  onQuickView,
  onAddToCart,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | JewelrySubCategory>('all');

  const filteredPieces = activeFilter === 'all'
    ? JEWELRY_DATA
    : JEWELRY_DATA.filter((p) => p.subCategory === activeFilter);

  const filterTabs = [
    { id: 'all', label: 'All 18 Pieces', count: 18, priceNote: 'From R199' },
    { id: 'rings', label: 'Rings (6)', count: 6, priceNote: 'R299 each' },
    { id: 'watches', label: 'Watches (3)', count: 3, priceNote: 'R899 each' },
    { id: 'necklaces', label: 'Necklaces (2)', count: 2, priceNote: 'R399 each' },
    { id: 'bracelets', label: 'Bracelets (2)', count: 2, priceNote: 'R299 each' },
    { id: 'cufflinks', label: 'Cufflinks (4)', count: 4, priceNote: 'R249 pair' },
    { id: 'lapel-pin', label: 'Lapel Pin (1)', count: 1, priceNote: 'R199' },
  ];

  return (
    <div className="bg-white py-12 sm:py-20 animate-fadeIn">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A961] font-semibold mb-3">
            <Gem className="w-3.5 h-3.5" />
            <span>18K PVD Finished Hardware</span>
          </div>

          <h1 className="font-editorial text-3xl sm:text-5xl text-[#000000] font-normal tracking-wide uppercase mb-4">
            Jewelry & Timeless Accessories
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#5A0A1A] max-w-xl mx-auto">
            18 Handcrafted Pieces • Heavy 18K Gold Plated • Anti-Tarnish
          </p>

          <p className="mt-4 text-xs sm:text-sm text-[#555555] leading-relaxed max-w-2xl mx-auto font-light">
            Engineered with surgical stainless steel cores and multi-layered 18K gold PVD ion plating. Resistant to Atlantic saltwater, heat, and perfumes. Featuring the signature 24-inch gold cross chain, engraved signets, and horological dress watches.
          </p>
        </div>

        {/* Filter Navigation Bar (Interactive segmented controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 pb-6 border-b border-[#000000]/8">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as any)}
                className={`py-2 px-3.5 sm:px-4 text-xs font-medium uppercase tracking-[0.15em] transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#000000] text-white shadow-sm border border-black'
                    : 'bg-[#F9F8F5] text-[#444444] hover:bg-neutral-200 border border-black/5'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-2 text-[10px] font-mono tabular-nums ${isActive ? 'text-[#C9A961]' : 'text-[#888888]'}`}>
                  {tab.priceNote}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results Counter */}
        <div className="flex justify-between items-center mb-8 text-xs text-[#777777]">
          <span>Displaying {filteredPieces.length} curated pieces</span>
          <span className="font-mono text-[#C9A961] uppercase tracking-wider">
            Waterproof • Saltwater Proof • Hypoallergenic
          </span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredPieces.map((piece) => (
            <ProductCard
              key={piece.id}
              product={piece}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {/* Jewelry Quality Guarantee */}
        <div className="mt-16 p-8 bg-[#FDFBF7] border border-[#C9A961]/40 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-white border border-[#C9A961] flex items-center justify-center shrink-0 text-[#C9A961]">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-editorial text-base font-semibold text-[#111111]">
                DON AZA-KHEM Atlantic Durability Guarantee
              </h4>
              <p className="text-xs text-[#666666] font-light max-w-xl">
                Every ring, watch, chain, and cufflink undergoes vacuum-chamber PVD electroplating with genuine 18K yellow gold. Guaranteed against tarnishing, fading, or green-skin discoloration.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/27720000000?text=Hello%20DON%20AZA-KHEM%20Concierge,%20I%20have%20a%20question%20regarding%20your%2018K%20jewelry%20specifications."
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap py-3 px-6 bg-black hover:bg-[#5A0A1A] text-white text-xs uppercase tracking-wider font-semibold transition-colors text-center"
          >
            Inquire With Jeweler
          </a>
        </div>
      </div>
    </div>
  );
};
