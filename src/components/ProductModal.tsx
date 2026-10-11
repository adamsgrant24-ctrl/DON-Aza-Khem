import React, { useState } from 'react';
import { X, ShoppingBag, MessageCircle, ShieldCheck, Truck, Sparkles, Check, ChevronRight } from 'lucide-react';
import { Product } from '../types';
import { generateWhatsAppOrderUrl } from '../utils/whatsapp';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, size: string, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || 'Standard');
  const [quantity, setQuantity] = useState<number>(1);
  const [showSizeGuide, setShowSizeGuide] = useState<boolean>(false);
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const handleAdd = () => {
    onAddToCart(product, selectedSize, quantity);
    setAddedSuccess(true);
    setTimeout(() => {
      setAddedSuccess(false);
      onClose();
    }, 800);
  };

  // Direct WhatsApp instant order for single product
  const directWhatsAppUrl = generateWhatsAppOrderUrl(
    [{ product, selectedSize, quantity }],
    product.price * quantity
  );

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-fadeIn">
      <div 
        className="relative bg-white w-full max-w-4xl max-h-[92vh] overflow-y-auto border border-[#000000]/15 shadow-2xl flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white text-black transition-colors cursor-pointer border border-black/10 focus-visible:outline-none"
          aria-label="Close details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: 9:16 Aspect Image Showcase */}
        <div className="w-full md:w-1/2 bg-[#F6F4EE] relative flex items-center justify-center p-4 sm:p-8">
          <div className="relative aspect-[9/16] w-full max-w-[340px] shadow-lg overflow-hidden bg-neutral-900 border border-[#C9A961]/30">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            {/* In-image label */}
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#C9A961] block">
                DON AZA-KHEM • Cape Town
              </span>
              <span className="font-editorial text-sm text-[#E8DCCA]">
                {product.tagline}
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Contiguous Purchase Module */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Category / Atelier Location */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C9A961] font-semibold mb-2">
              <span>{product.category.toUpperCase()}</span>
              <span aria-hidden="true">·</span>
              <span>Camps Bay Atelier</span>
            </div>

            {/* Title & Tagline */}
            <h2 className="font-editorial text-2xl sm:text-3xl text-[#000000] font-normal leading-tight mb-2">
              {product.name}
            </h2>
            <p className="text-xs uppercase tracking-wider text-[#666666] mb-4">
              {product.tagline}
            </p>

            {/* Price */}
            <div className="flex items-baseline gap-3 pb-4 mb-4 border-b border-[#000000]/10">
              <span className="font-mono text-2xl font-semibold text-[#000000] tabular-nums">
                {product.formattedPrice}
              </span>
              <span className="text-xs text-[#555555]">
                ZAR (Incl. VAT)
              </span>
            </div>

            {/* Description */}
            <p className="text-xs sm:text-[13px] text-[#333333] leading-relaxed mb-6 font-light">
              {product.description}
            </p>

            {/* Suit & Shirt Layering Guidance */}
            {product.suitColor && (
              <div className="p-3 bg-[#FDFBF7] border border-[#C9A961]/30 mb-6 text-xs">
                <div className="font-semibold text-[#5A0A1A] uppercase tracking-wider text-[11px] mb-1 flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#C9A961]" />
                  <span>The Brand Bible Layering Protocol</span>
                </div>
                <div className="text-[#444444] space-y-0.5">
                  <div>• Suit: <span className="font-medium text-black">{product.suitColor}</span></div>
                  <div>• Shirt: <span className="font-medium text-black">{product.shirtColor}</span></div>
                  <div>• Chain: <span className="font-medium text-black">{product.necklaceAccents}</span></div>
                </div>
              </div>
            )}

            {/* Size Selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <label className="text-xs uppercase tracking-wider font-semibold text-[#111111]">
                  Select Size
                </label>
                <button
                  type="button"
                  onClick={() => setShowSizeGuide(!showSizeGuide)}
                  className="text-[11px] uppercase tracking-wider text-[#C9A961] hover:text-[#5A0A1A] underline cursor-pointer"
                >
                  {showSizeGuide ? 'Hide Sizing Chart' : 'Size Guide'}
                </button>
              </div>

              {/* Sizing Chart Drawer */}
              {showSizeGuide && (
                <div className="p-3 bg-[#FAF8F5] border border-black/10 text-xs mb-3 animate-fadeIn">
                  <div className="font-semibold uppercase tracking-wider text-[10px] text-[#666666] mb-1.5">
                    {product.category === 'suits' ? 'Suit Sizing (Chest / Waist)' : product.category === 'shirts' ? 'Shirt Sizing (Chest / Collar)' : 'Jewelry Sizing'}
                  </div>
                  {product.category === 'suits' && (
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-[#444444]">
                      <div>38R: Chest 96cm / Waist 32"</div>
                      <div>40R: Chest 101cm / Waist 34"</div>
                      <div>42R: Chest 106cm / Waist 36"</div>
                      <div>44R: Chest 111cm / Waist 38"</div>
                      <div>46R: Chest 116cm / Waist 40"</div>
                    </div>
                  )}
                  {product.category === 'shirts' && (
                    <div className="grid grid-cols-2 gap-2 text-[11px] text-[#444444]">
                      <div>S: Chest 98cm / Collar 38cm</div>
                      <div>M: Chest 104cm / Collar 40cm</div>
                      <div>L: Chest 110cm / Collar 42cm</div>
                      <div>XL: Chest 116cm / Collar 44cm</div>
                      <div>XXL: Chest 122cm / Collar 46cm</div>
                    </div>
                  )}
                  {product.category === 'jewelry' && (
                    <div className="text-[11px] text-[#444444]">
                      Rings: Size 8 (18.2mm), Size 9 (18.9mm), Size 10 (19.8mm), Size 11 (20.6mm). Watches: Adjustable links with complimentary resizing tool.
                    </div>
                  )}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {product.sizes.map((sz) => (
                  <button
                    key={sz}
                    type="button"
                    onClick={() => setSelectedSize(sz)}
                    className={`px-3.5 py-2 text-xs font-mono uppercase tracking-wider border transition-colors cursor-pointer ${
                      selectedSize === sz
                        ? 'bg-[#000000] text-white border-black font-semibold'
                        : 'bg-white text-[#222222] border-black/15 hover:border-[#C9A961]'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#111111]">
                Quantity
              </span>
              <div className="flex items-center border border-black/20">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-xs text-black hover:bg-neutral-100 cursor-pointer"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-xs font-mono tabular-nums font-semibold">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-xs text-black hover:bg-neutral-100 cursor-pointer"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="space-y-2.5 pt-4 border-t border-black/10">
            <button
              type="button"
              onClick={handleAdd}
              disabled={addedSuccess}
              className={`w-full py-3.5 px-6 text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                addedSuccess 
                  ? 'bg-[#5A0A1A] text-white' 
                  : 'bg-[#000000] hover:bg-[#5A0A1A] text-white'
              }`}
            >
              {addedSuccess ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added To Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-[#C9A961]" />
                  <span>Add To Bag • R{(product.price * quantity).toLocaleString()}</span>
                </>
              )}
            </button>

            {/* Direct WhatsApp Ordering */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-[0.2em] font-medium flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Instant WhatsApp Order (073 628 5307)</span>
            </a>

            {/* Special Full Suit Bundle Button for Navy Signature Shirt */}
            {product.id === 'shirt-navy' && (
              <button
                type="button"
                onClick={() => {
                  const message = `Hi DON AZA-KHEM — I want FULL SUIT R3298 — Navy Blazer + Navy Shirt + Pants Size ${selectedSize}. My address: `;
                  window.open(`https://wa.me/27736285307?text=${encodeURIComponent(message)}`, '_blank');
                }}
                className="w-full py-3 px-6 bg-[#C9A86A] hover:bg-[#bfa05d] text-[#0A0A0A] text-xs uppercase tracking-[0.18em] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer text-center"
              >
                <span>FULL SUIT R3298 — Blazer + Shirt + Pants</span>
              </button>
            )}

            {/* Delivery & Trust markers */}
            <div className="pt-3 grid grid-cols-2 gap-2 text-[10px] text-[#666666] uppercase tracking-wider">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>Overnight RSA Courier</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C9A961]" />
                <span>Cape Town Atelier Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
