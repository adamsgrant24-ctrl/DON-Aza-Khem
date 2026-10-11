import React, { useState } from 'react';
import { Eye, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onQuickView: (product: Product) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  const [imageError, setImageError] = useState(false);
  const [addedJustNow, setAddedJustNow] = useState(false);

  const defaultSize = product.sizes[0] || 'Standard';

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, defaultSize);
    setAddedJustNow(true);
    setTimeout(() => setAddedJustNow(false), 1600);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative bg-white border border-[#000000]/6 hover:border-[#C9A961]/60 transition-all duration-300 flex flex-col cursor-pointer overflow-hidden"
    >
      {/* 9:16 Vertical Image Container (Mobile First Editorial) */}
      <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#F7F5F0]">
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
          />
        ) : (
          /* High-end Styled Fallback Container */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-b from-[#1A2332] to-[#0A0D14] text-white text-center">
            <div className="w-12 h-12 rounded-full border border-[#C9A961] flex items-center justify-center mb-3">
              <span className="font-editorial text-lg text-[#C9A961]">DA</span>
            </div>
            <span className="font-editorial text-sm font-semibold text-[#E8DCCA] mb-1">
              {product.name}
            </span>
            <span className="text-[10px] tracking-widest uppercase text-[#C9A961]">
              DON AZA-KHEM • Cape Town
            </span>
          </div>
        )}

        {/* Quiet Luxury Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        {/* Category Unboxed Badge */}
        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 text-[10px] uppercase font-mono tracking-widest text-[#111111] border border-black/5">
          {product.category === 'suits' ? 'The Suit' : product.category === 'shirts' ? 'Satin Shirt' : 'Jewelry'}
        </div>

        {/* Hover Quick Action Buttons */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            type="button"
            onClick={handleQuickAdd}
            aria-label={`Add ${product.name} to Bag`}
            className={`flex-1 py-2.5 px-3 text-[11px] uppercase tracking-wider font-medium flex items-center justify-center gap-1.5 transition-colors cursor-pointer ${
              addedJustNow 
                ? 'bg-[#5A0A1A] text-white' 
                : 'bg-white text-black hover:bg-[#C9A961] hover:text-black'
            }`}
          >
            {addedJustNow ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added to Bag</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Quick Add</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            aria-label={`View details for ${product.name}`}
            className="p-2.5 bg-black/80 hover:bg-black text-white text-xs transition-colors cursor-pointer"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Details Section with Luxury Spacing */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between text-left">
        <div>
          {/* Subtle Tagline / Metadata */}
          <div className="text-[11px] text-[#777777] uppercase tracking-wider mb-1 line-clamp-1">
            {product.tagline}
          </div>

          {/* Product Title */}
          <h3 className="font-editorial text-base sm:text-lg font-medium text-[#111111] group-hover:text-[#5A0A1A] transition-colors leading-snug mb-2 line-clamp-1">
            {product.name}
          </h3>

          {/* Size Options Preview */}
          <div className="flex items-center gap-1.5 text-[10px] text-[#888888] font-mono mb-3">
            <span>Sizes:</span>
            <span className="text-[#333333] font-medium">
              {product.sizes.slice(0, 3).join(', ')}
              {product.sizes.length > 3 && ` +${product.sizes.length - 3}`}
            </span>
          </div>
        </div>

        {/* Price Baseline */}
        <div className="pt-3 border-t border-[#000000]/6 flex items-center justify-between">
          <span className="font-mono text-base font-semibold text-[#000000] tabular-nums tracking-tight">
            {product.formattedPrice}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#C9A961] font-semibold">
            Atelier Order
          </span>
        </div>
      </div>
    </div>
  );
};
