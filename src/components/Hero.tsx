import React, { useState } from 'react';
import { ArrowRight, Sparkles, ChevronRight, Check } from 'lucide-react';
import { SUITS_DATA } from '../data/products';
import { Product, ActivePage } from '../types';

interface HeroProps {
  onSelectProduct: (product: Product) => void;
  setActivePage: (page: ActivePage) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectProduct, setActivePage }) => {
  const [selectedLookIndex, setSelectedLookIndex] = useState(0);
  const activeSuit = SUITS_DATA[selectedLookIndex];

  // The 5 models with their exact suit / shirt / gold cross chain details
  const models = [
    {
      id: 'look-1',
      index: 0,
      suitName: 'The Noir Sovereign',
      suitColor: 'Black Suit',
      suitHex: '#000000',
      shirtColor: 'White Satin Shirt',
      shirtHex: '#FFFFFF',
      shirtBorder: 'border-neutral-300',
      accessory: 'Signature 18K Gold Cross Chain',
      price: 'R2,999',
      image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1200&q=80',
      location: 'Camps Bay Penthouse',
      quote: 'The unyielding authority of midnight black, fractured only by open white silk and warm gold.'
    },
    {
      id: 'look-2',
      index: 1,
      suitName: 'The Camps Bay Alabaster',
      suitColor: 'White Suit',
      suitHex: '#FFFFFF',
      suitBorder: 'border-neutral-400',
      shirtColor: 'Black Satin Shirt',
      shirtHex: '#000000',
      accessory: 'Signature 18K Gold Cross Chain',
      price: 'R2,999',
      image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      location: 'Clifton 4th Sunset Balcony',
      quote: 'Sun-bleached Mediterranean presence tailored for the Atlantic Seaboard.'
    },
    {
      id: 'look-3',
      index: 2,
      suitName: 'The Constantia Reserve',
      suitColor: 'Burgundy Suit',
      suitHex: '#5A0A1A',
      shirtColor: 'Champagne Satin Shirt',
      shirtHex: '#E8DCCA',
      accessory: 'Signature 18K Gold Cross Chain',
      price: 'R2,999',
      image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=1200&q=80',
      location: 'Constantia Private Cellar',
      quote: 'Wine-toned majesty meeting the soft iridescence of vintage champagne silk.'
    },
    {
      id: 'look-4',
      index: 3,
      suitName: 'The Atlantic Mariner',
      suitColor: 'Navy Suit',
      suitHex: '#1A2332',
      shirtColor: 'Burgundy Satin Shirt',
      shirtHex: '#5A0A1A',
      accessory: 'Signature 18K Gold Cross Chain',
      price: 'R2,999',
      image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?auto=format&fit=crop&w=1200&q=80',
      location: 'Twelve Apostles Ocean Terrace',
      quote: 'Deep maritime discipline infused with the fiery richness of royal burgundy.'
    },
    {
      id: 'look-5',
      index: 4,
      suitName: 'The Clifton Riviera',
      suitColor: 'Champagne Suit',
      suitHex: '#E8DCCA',
      shirtColor: 'Navy Satin Shirt',
      shirtHex: '#1A2332',
      accessory: 'Signature 18K Gold Cross Chain',
      price: 'R2,999',
      image: 'https://images.unsplash.com/photo-1598808503746-f34c53b9323e?auto=format&fit=crop&w=1200&q=80',
      location: 'Bakoven Ocean Rocks',
      quote: 'Warm coastal ease elevated to an unshakeable sartorial art form.'
    }
  ];

  const currentModel = models[selectedLookIndex];

  return (
    <section className="relative bg-white text-[#111111] border-b border-[#000000]/8 overflow-hidden">
      {/* Background Architectural Watermark / Atmosphere */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02] bg-[radial-gradient(#C9A961_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-14 lg:pb-24">
        {/* Editorial Subheading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F9F7F2] border border-[#C9A961]/30 text-[#C9A961] text-[11px] uppercase tracking-[0.25em] font-semibold mb-4">
            <Sparkles className="w-3 h-3" />
            <span>Cape Town • Camps Bay Luxury Editorial</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-[0.06em] text-[#000000] uppercase mb-4 leading-[1.15]">
            ULTIMATE BRAND BIBLE
          </h1>

          <p className="font-serif italic text-lg sm:text-xl text-[#666666] max-w-xl mx-auto">
            Crafted in Refined Taste • Timeless Accessories
          </p>

          <p className="mt-3 text-sm text-[#444444] leading-relaxed max-w-2xl mx-auto font-light">
            Five models. Five sovereign suit pairings. Pure silk-touch satin shirts unbuttoned to reveal the signature 18K gold cross chain. The quiet luxury uniform of the Atlantic Seaboard.
          </p>
        </div>

        {/* 5-Model Interactive Lineup (Desktop 5-Column Split + Mobile Responsive Carousel) */}
        <div className="mb-12">
          {/* Tab Selector for Quick Switching on Mobile & Desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 p-1.5 bg-[#F8F6F0] border border-[#000000]/10 mb-8 max-w-5xl mx-auto">
            {models.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => setSelectedLookIndex(idx)}
                className={`py-2.5 px-3 text-left transition-all duration-200 cursor-pointer ${
                  selectedLookIndex === idx
                    ? 'bg-white shadow-sm border border-[#C9A961]'
                    : 'hover:bg-white/60 text-[#555555]'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#888888]">
                    0{idx + 1}
                  </span>
                  {/* Miniature swatch indicator */}
                  <div className="flex items-center -space-x-1">
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/20"
                      style={{ backgroundColor: item.suitHex }}
                      title={item.suitColor}
                    />
                    <span
                      className="w-2.5 h-2.5 rounded-full border border-black/20"
                      style={{ backgroundColor: item.shirtHex }}
                      title={item.shirtColor}
                    />
                  </div>
                </div>
                <div className="font-editorial text-[13px] font-semibold text-[#111111] truncate">
                  {item.suitName.replace('The ', '')}
                </div>
                <div className="text-[11px] text-[#777777] truncate font-sans">
                  {item.suitColor.replace(' Suit', '')} / {item.shirtColor.replace(' Satin Shirt', '')}
                </div>
              </button>
            ))}
          </div>

          {/* Master 5 Models Interactive Stage */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FAFAF8] border border-[#000000]/8 p-4 sm:p-8 lg:p-10">
            {/* Visual Column: Large Vertical 9:16 Portrait of Selected Model */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[9/16] max-h-[640px] mx-auto w-full overflow-hidden bg-neutral-900 shadow-xl group border border-[#C9A961]/30">
                <img
                  src={currentModel.image}
                  alt={`${currentModel.suitName} - ${currentModel.suitColor} with ${currentModel.shirtColor}`}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    // Graceful fallback if external image URL is blocked
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent && !parent.querySelector('.img-fallback')) {
                      const div = document.createElement('div');
                      div.className = 'img-fallback absolute inset-0 flex flex-col items-center justify-center p-8 bg-[#1A2332] text-center text-white';
                      div.innerHTML = `
                        <div class="w-16 h-16 rounded-full border border-[#C9A961] flex items-center justify-center mb-4">
                          <span class="font-editorial text-2xl text-[#C9A961]">DA</span>
                        </div>
                        <h4 class="font-editorial text-xl mb-1">${currentModel.suitName}</h4>
                        <p class="text-xs uppercase tracking-widest text-[#C9A961] mb-2">${currentModel.suitColor} • ${currentModel.shirtColor}</p>
                        <p class="text-xs text-neutral-300 italic">DON AZA-KHEM Camps Bay Atelier</p>
                      `;
                      parent.appendChild(div);
                    }
                  }}
                />

                {/* Editorial Gradient Scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Overlaid Editorial Tag */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 border border-[#C9A961]/40 text-left">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#111111] block">
                    Look 0{selectedLookIndex + 1} of 05
                  </span>
                  <span className="font-editorial text-xs font-semibold text-[#5A0A1A]">
                    {currentModel.location}
                  </span>
                </div>

                {/* Overlaid Gold Cross Chain Callout */}
                <div className="absolute bottom-6 left-6 right-6 text-white text-left">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#C9A961]" />
                    <span className="text-[11px] uppercase tracking-[0.2em] text-[#C9A961] font-semibold">
                      Signature Accessory
                    </span>
                  </div>
                  <h3 className="font-editorial text-xl sm:text-2xl text-white font-medium mb-1">
                    {currentModel.suitName}
                  </h3>
                  <p className="text-xs text-neutral-300 font-light line-clamp-2">
                    {currentModel.quote}
                  </p>
                </div>
              </div>
            </div>

            {/* Editorial Spec & Purchase Column */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full py-2">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold mb-2">
                  <span>Look 0{selectedLookIndex + 1} Spec</span>
                  <span aria-hidden="true">·</span>
                  <span>Cape Town Atelier</span>
                </div>

                <h2 className="font-editorial text-3xl sm:text-4xl text-[#000000] font-normal tracking-wide mb-3">
                  {currentModel.suitName}
                </h2>

                <div className="flex items-baseline gap-4 mb-6 pb-6 border-b border-[#000000]/10">
                  <span className="font-mono text-2xl sm:text-3xl font-semibold text-[#000000] tracking-tight tabular-nums">
                    {currentModel.price}
                  </span>
                  <span className="text-xs text-[#666666] uppercase tracking-wider">
                    Full 2-Piece Suit + Satin Shirt + Gold Cross Chain Accent
                  </span>
                </div>

                {/* The 3 Core Components of this Look */}
                <div className="space-y-4 mb-8">
                  <div className="p-3.5 bg-white border border-[#000000]/8 flex items-start gap-4">
                    <div 
                      className="w-7 h-7 rounded-none shrink-0 border border-black/20 mt-0.5" 
                      style={{ backgroundColor: currentModel.suitHex }} 
                    />
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-[#888888]">1. The Tailored Suit</div>
                      <div className="font-medium text-sm text-[#111111]">{currentModel.suitColor}</div>
                      <div className="text-xs text-[#666666]">Italian Super 140s wool blend with hand-stitched peak lapels and flat-front trousers.</div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-[#000000]/8 flex items-start gap-4">
                    <div 
                      className="w-7 h-7 rounded-none shrink-0 border border-black/20 mt-0.5" 
                      style={{ backgroundColor: currentModel.shirtHex }} 
                    />
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-[#888888]">2. The Satin Shirt</div>
                      <div className="font-medium text-sm text-[#111111]">{currentModel.shirtColor}</div>
                      <div className="text-xs text-[#666666]">100% fluid silk-touch satin, unbuttoned spread collar for Atlantic breeze.</div>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white border border-[#000000]/8 flex items-start gap-4">
                    <div className="w-7 h-7 bg-[#C9A961] shrink-0 border border-black/20 mt-0.5 flex items-center justify-center text-white text-xs font-serif">
                      †
                    </div>
                    <div>
                      <div className="text-[11px] uppercase tracking-widest text-[#888888]">3. The Timeless Accessory</div>
                      <div className="font-medium text-sm text-[#111111]">Signature 18K Gold Cross Chain</div>
                      <div className="text-xs text-[#666666]">24-inch micro box chain resting against chest; sweat & saltwater proof.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-[#000000]/10 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => onSelectProduct(activeSuit)}
                  className="flex-1 py-3.5 px-6 bg-[#000000] hover:bg-[#5A0A1A] text-white text-xs uppercase tracking-[0.2em] font-medium transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer focus-visible:outline-none"
                >
                  <span>Acquire Complete Look ({currentModel.price})</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A961]" />
                </button>

                <button
                  onClick={() => setActivePage('suits')}
                  className="py-3.5 px-5 bg-white hover:bg-[#F4EFE6] text-[#000000] border border-[#000000]/20 text-xs uppercase tracking-[0.15em] font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer focus-visible:outline-none"
                >
                  <span>Explore All 5 Suits</span>
                  <ChevronRight className="w-4 h-4 text-[#888888]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 5-Look Quick Mini-Strip */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-[#000000]/10">
          {SUITS_DATA.map((suit, index) => (
            <div
              key={suit.id}
              onClick={() => onSelectProduct(suit)}
              className="group cursor-pointer p-3 border border-transparent hover:border-[#C9A961]/40 transition-all duration-300 bg-white"
            >
              <div className="aspect-[9/16] overflow-hidden bg-neutral-100 mb-2 relative">
                <img
                  src={suit.image}
                  alt={suit.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 bg-black/80 text-white font-mono text-[10px] px-1.5 py-0.5">
                  0{index + 1}
                </div>
              </div>
              <div className="font-editorial text-sm font-semibold text-[#111111] group-hover:text-[#5A0A1A] transition-colors truncate">
                {suit.name}
              </div>
              <div className="text-[11px] text-[#777777] truncate">
                {suit.tagline}
              </div>
              <div className="font-mono text-xs font-semibold text-[#C9A961] mt-1 tabular-nums">
                {suit.formattedPrice}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
