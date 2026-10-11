import React, { useState } from 'react';
import { X, Trash2, MessageCircle, Copy, Check, ArrowRight, ShieldCheck, Truck } from 'lucide-react';
import { CartItem } from '../types';
import { generateWhatsAppOrderUrl, formatWhatsAppOrderMessage, CONCIERGE_WHATSAPP_NUMBER } from '../utils/whatsapp';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (index: number, newQty: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientAddress, setClientAddress] = useState('');
  const [clientCity, setClientCity] = useState('Cape Town');
  const [specialNotes, setSpecialNotes] = useState('');
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const subtotal = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const freeShippingThreshold = 2000;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  const clientDetails = {
    name: clientName,
    phone: clientPhone,
    address: clientAddress,
    city: clientCity,
    notes: specialNotes
  };

  const whatsappCheckoutUrl = generateWhatsAppOrderUrl(cart, subtotal, clientDetails);

  const handleCopyMessage = () => {
    const text = formatWhatsAppOrderMessage(cart, subtotal, clientDetails);
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-[#000000]/10 flex flex-col justify-between shadow-2xl">
          {/* Header */}
          <div className="p-6 border-b border-[#000000]/8 flex items-center justify-between bg-white">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-[#C9A961] font-semibold">
                DON AZA-KHEM • Concierge Bag
              </div>
              <h2 className="font-editorial text-xl text-[#000000] font-medium">
                Your Selection ({cart.reduce((a, b) => a + b.quantity, 0)})
              </h2>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#444444] hover:text-black hover:bg-neutral-100 transition-colors cursor-pointer"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Courier Banner */}
          <div className="bg-[#FAF8F5] px-6 py-3 border-b border-[#000000]/6 text-xs">
            <div className="flex justify-between items-center mb-1 text-[11px] uppercase tracking-wider text-[#555555]">
              <span>Complimentary RSA Courier</span>
              <span className="font-mono text-[#C9A961] font-semibold">
                {subtotal >= freeShippingThreshold ? 'Qualified' : `R${(freeShippingThreshold - subtotal).toLocaleString()} away`}
              </span>
            </div>
            <div className="w-full bg-[#E8DCCA]/50 h-1 rounded-full overflow-hidden">
              <div
                className="bg-[#C9A961] h-full transition-all duration-300"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 text-[#777777]">
                <div className="w-16 h-16 rounded-full border border-[#C9A961]/40 flex items-center justify-center mb-4 text-[#C9A961] font-editorial text-xl">
                  DA
                </div>
                <p className="font-editorial text-lg text-[#111111] mb-1">Your bag is currently empty</p>
                <p className="text-xs text-[#888888] max-w-xs mb-6">
                  Discover the 5 Suits, fluid satin shirts, and handcrafted 18K jewelry from our Camps Bay collection.
                </p>
                <button
                  onClick={onClose}
                  className="py-2.5 px-6 bg-black text-white text-xs uppercase tracking-[0.2em] font-medium hover:bg-[#5A0A1A] transition-colors cursor-pointer"
                >
                  Explore The Collection
                </button>
              </div>
            ) : (
              <>
                <div className="space-y-4">
                  {cart.map((item, index) => (
                    <div
                      key={`${item.product.id}-${item.selectedSize}-${index}`}
                      className="p-3 bg-[#FAF8F5] border border-[#000000]/6 flex gap-3 relative group"
                    >
                      {/* Image Thumbnail */}
                      <div className="w-16 h-24 bg-neutral-200 shrink-0 overflow-hidden border border-black/10">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      {/* Details */}
                      <div className="flex-1 flex flex-col justify-between text-left">
                        <div>
                          <div className="flex justify-between items-start">
                            <h4 className="font-editorial text-sm font-semibold text-[#111111] leading-tight">
                              {item.product.name}
                            </h4>
                            <button
                              onClick={() => onRemoveItem(index)}
                              className="text-neutral-400 hover:text-[#5A0A1A] p-1 cursor-pointer transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                          <div className="text-[11px] text-[#777777] uppercase tracking-wider mt-0.5">
                            Size: <span className="font-medium text-black">{item.selectedSize}</span>
                          </div>
                        </div>

                        {/* Quantity Stepper & Price */}
                        <div className="flex items-center justify-between pt-2">
                          <div className="flex items-center border border-black/20 bg-white">
                            <button
                              onClick={() => onUpdateQuantity(index, item.quantity - 1)}
                              className="px-2 py-0.5 text-xs text-black hover:bg-neutral-100 cursor-pointer"
                            >
                              -
                            </button>
                            <span className="px-2.5 py-0.5 text-xs font-mono tabular-nums font-semibold">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                              className="px-2 py-0.5 text-xs text-black hover:bg-neutral-100 cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          <div className="font-mono text-xs font-semibold text-[#111111] tabular-nums">
                            R{(item.product.price * item.quantity).toLocaleString()}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Optional Concierge Delivery Form */}
                <div className="pt-4 border-t border-[#000000]/8">
                  <div className="text-xs uppercase tracking-wider font-semibold text-[#111111] mb-2 flex items-center justify-between">
                    <span>Direct Delivery Details (Optional)</span>
                    <span className="text-[10px] text-[#888888] font-normal">Pre-fills WhatsApp message</span>
                  </div>

                  <div className="space-y-2 text-xs">
                    <input
                      type="text"
                      placeholder="Your Full Name"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full px-3 py-2 border border-black/15 text-xs focus:border-[#C9A961] focus:outline-none"
                    />
                    <input
                      type="text"
                      placeholder="Contact Number (e.g. 072 ...)"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      className="w-full px-3 py-2 border border-black/15 text-xs focus:border-[#C9A961] focus:outline-none"
                    />
                    <div className="grid grid-cols-3 gap-2">
                      <input
                        type="text"
                        placeholder="Street Address"
                        value={clientAddress}
                        onChange={(e) => setClientAddress(e.target.value)}
                        className="col-span-2 px-3 py-2 border border-black/15 text-xs focus:border-[#C9A961] focus:outline-none"
                      />
                      <input
                        type="text"
                        placeholder="City"
                        value={clientCity}
                        onChange={(e) => setClientCity(e.target.value)}
                        className="col-span-1 px-3 py-2 border border-black/15 text-xs focus:border-[#C9A961] focus:outline-none"
                      />
                    </div>
                    <input
                      type="text"
                      placeholder="Special Fitting or Delivery Notes"
                      value={specialNotes}
                      onChange={(e) => setSpecialNotes(e.target.value)}
                      className="w-full px-3 py-2 border border-black/15 text-xs focus:border-[#C9A961] focus:outline-none"
                    />
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Footer & Checkout Area */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-[#000000]/10 bg-[#FAF8F5] space-y-3">
              {/* Subtotal */}
              <div className="flex justify-between items-baseline">
                <span className="text-xs uppercase tracking-[0.2em] text-[#666666]">
                  Total Amount (ZAR)
                </span>
                <span className="font-mono text-2xl font-bold text-[#111111] tabular-nums">
                  R{subtotal.toLocaleString()}
                </span>
              </div>

              <div className="text-[11px] text-[#777777] flex items-center justify-between">
                <span>South Africa Delivery:</span>
                <span className="font-medium text-[#111111]">
                  {subtotal >= freeShippingThreshold ? 'Free Overnight Door-to-Door' : 'R150 Standard Courier'}
                </span>
              </div>

              {/* Primary WhatsApp Order Button */}
              <a
                href={whatsappCheckoutUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer shadow-sm text-center"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Checkout via WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </a>

              {/* Copy Order Details Fallback Button */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="flex-1 py-2 px-3 border border-black/20 hover:border-black text-[11px] uppercase tracking-wider text-[#444444] hover:text-black flex items-center justify-center gap-1.5 transition-colors cursor-pointer bg-white"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#5A0A1A]" />
                      <span>Order Copied to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#C9A961]" />
                      <span>Copy Order Text</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={onClearCart}
                  className="py-2 px-3 text-[11px] uppercase tracking-wider text-neutral-400 hover:text-neutral-700 transition-colors cursor-pointer"
                >
                  Clear Bag
                </button>
              </div>

              <div className="text-[10px] text-center text-[#888888] pt-1">
                Direct WhatsApp Concierge: +27 72 000 0000 • Cape Town, South Africa
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
