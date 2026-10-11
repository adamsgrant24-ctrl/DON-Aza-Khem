import React, { useState } from 'react';
import { ShoppingBag, Menu, X, ArrowUpRight } from 'lucide-react';
import { ActivePage, CartItem } from '../types';

interface HeaderProps {
  activePage: ActivePage;
  setActivePage: (page: ActivePage) => void;
  cart: CartItem[];
  setIsCartOpen: (open: boolean) => void;
  setSelectedCategoryFilter?: (filter: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  setActivePage,
  cart,
  setIsCartOpen,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const totalItemCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const navLinks: { label: string; page: ActivePage }[] = [
    { label: 'Navy Signature', page: 'navy-signature' },
    { label: 'The Suits', page: 'suits' },
    { label: 'Satin Shirts', page: 'shirts' },
    { label: 'Jewelry', page: 'jewelry' },
    { label: 'Brand Bible', page: 'brand-bible' },
    { label: 'Concierge', page: 'contact' },
  ];

  const handleNavClick = (page: ActivePage) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#000000]/6 transition-all duration-300">
      {/* Editorial Announcement Strip */}
      <div className="bg-[#111111] text-[#E8DCCA] text-[11px] tracking-[0.2em] uppercase py-2 px-4 text-center font-medium border-b border-[#C9A961]/20">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3">
          <span>Crafted in Refined Taste</span>
          <span className="text-[#C9A961]" aria-hidden="true">·</span>
          <span>Cape Town • 073 628 5307</span>
          <span className="hidden sm:inline text-[#C9A961]" aria-hidden="true">·</span>
          <span className="hidden sm:inline text-white/90">Cash on Delivery in Cape Town • 24hr Delivery</span>
        </div>
      </div>

      {/* Top Bar Contract (1 Row, 3 Zones separated by gap-8) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A961]"
          >
            <span className="font-editorial text-2xl sm:text-3xl font-semibold tracking-[0.18em] text-[#000000] uppercase block transition-colors group-hover:text-[#5A0A1A]">
              DON AZA-KHEM
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#C9A961] block font-medium -mt-1">
              Cape Town • 073 628 5307
            </span>
          </button>
        </div>

        {/* Zone 2: Navigation Links (Clean single-line text links with subtle hover underlines) */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] tracking-[0.15em] uppercase font-medium text-[#111111]">
          {navLinks.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`relative py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer focus-visible:outline-none ${
                  isActive 
                    ? 'text-[#5A0A1A] font-semibold' 
                    : 'text-[#111111]/70 hover:text-[#000000]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C9A961]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action (Shopping Bag) */}
        <div className="flex items-center gap-4 shrink-0">
          <button
            onClick={() => setIsCartOpen(true)}
            aria-label="Open Shopping Bag"
            className="group flex items-center gap-2.5 px-3.5 py-2 rounded-none border border-[#000000]/15 hover:border-[#C9A961] bg-white transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#C9A961]"
          >
            <ShoppingBag className="w-4 h-4 text-[#111111] group-hover:text-[#5A0A1A] transition-colors" />
            <span className="text-[12px] uppercase tracking-[0.15em] font-medium text-[#111111] whitespace-nowrap">
              Bag
            </span>
            <span className="font-mono text-xs tabular-nums text-[#C9A961] font-semibold ml-0.5">
              ({totalItemCount})
            </span>
          </button>

          {/* Mobile hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-black hover:text-[#5A0A1A] focus-visible:outline-none cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#000000]/10 px-6 py-6 animate-fadeIn">
          <div className="flex flex-col gap-4 text-sm tracking-[0.18em] uppercase font-medium">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2 border-b border-[#000000]/5 flex justify-between items-center ${
                activePage === 'home' ? 'text-[#5A0A1A] font-semibold' : 'text-[#222222]'
              }`}
            >
              <span>Home Collection</span>
              <ArrowUpRight className="w-4 h-4 text-[#C9A961]" />
            </button>
            {navLinks.map((item) => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-left py-2 border-b border-[#000000]/5 flex justify-between items-center ${
                  activePage === item.page ? 'text-[#5A0A1A] font-semibold' : 'text-[#222222]'
                }`}
              >
                <span>{item.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C9A961]" />
              </button>
            ))}
            <div className="pt-2 text-xs text-[#666666] tracking-widest normal-case">
              <p>Direct Concierge: WhatsApp & In-Person Camps Bay Fittings</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
