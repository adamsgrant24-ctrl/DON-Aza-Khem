import React from 'react';
import { MessageCircle, Instagram, ShieldCheck, ArrowUp } from 'lucide-react';
import { ActivePage } from '../types';
import { CONCIERGE_WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL, generateDirectConciergeInquiryUrl } from '../utils/whatsapp';

interface FooterProps {
  setActivePage: (page: ActivePage) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActivePage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: ActivePage) => {
    setActivePage(page);
    scrollToTop();
  };

  return (
    <footer className="bg-[#111111] text-white pt-16 pb-12 border-t border-[#C9A961]/25">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-editorial text-2xl sm:text-3xl font-normal tracking-[0.2em] text-white uppercase block">
              DON AZA-KHEM
            </span>
            <div className="text-[11px] uppercase tracking-[0.25em] text-[#C9A961] font-medium">
              Crafted in Refined Taste • Timeless Accessories
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed max-w-sm">
              South Africa’s premier quiet luxury atelier. Defining Old Money Atlantic Seaboard tailoring across 5 sovereign suits, pure silk-satin shirts, and 18K gold jewelry.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs">
              <a
                href={`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#25D366] hover:text-white transition-colors font-medium"
              >
                <MessageCircle className="w-4 h-4" />
                <span>073 628 5307</span>
              </a>
              <span className="text-white/20">|</span>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[#E8DCCA] hover:text-[#C9A961] transition-colors"
              >
                <Instagram className="w-4 h-4" />
                <span>@{INSTAGRAM_HANDLE}</span>
              </a>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A961]">
              Collections
            </div>
            <ul className="space-y-2 text-xs font-light text-neutral-300">
              <li>
                <button
                  onClick={() => handleNav('navy-signature')}
                  className="hover:text-white text-[#C9A961] font-medium transition-colors cursor-pointer"
                >
                  ★ Navy Signature Drop (R599)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('suits')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Suits Collection (R2,999 - R3,298)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('shirts')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Satin Silk Shirts (R599)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('jewelry')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Handcrafted Jewelry (18 Pieces)
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('brand-bible')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  The Ultimate Brand Bible
                </button>
              </li>
            </ul>
          </div>

          {/* Atelier Services (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] font-semibold text-[#C9A961]">
              Private Client Services
            </div>
            <p className="text-xs text-neutral-400 font-light leading-relaxed">
              Camps Bay Atelier: Victoria Road, Cape Town 8005.<br />
              Personal concierge assistance, bespoke sizing consultation, and door-to-door courier throughout South Africa.
            </p>
            <div className="pt-2">
              <a
                href={generateDirectConciergeInquiryUrl('Concierge Assistance')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-2.5 px-4 bg-white/10 hover:bg-[#C9A961] hover:text-black border border-white/20 text-white text-[11px] uppercase tracking-widest transition-all"
              >
                Inquire With Concierge →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-500 font-light">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} DON AZA-KHEM. All rights reserved.</span>
            <span>·</span>
            <span>Camps Bay, Cape Town</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[#C9A961]">South African Rand (ZAR)</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
