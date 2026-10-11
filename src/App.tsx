import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SuitsView } from './components/SuitsView';
import { ShirtsView } from './components/ShirtsView';
import { JewelryView } from './components/JewelryView';
import { BrandBibleSection } from './components/BrandBibleSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { CartDrawer } from './components/CartDrawer';
import { ProductCard } from './components/ProductCard';

import { ActivePage, CartItem, Product } from './types';
import { SUITS_DATA, SHIRTS_DATA, JEWELRY_DATA, ALL_PRODUCTS } from './data/products';
import { Sparkles, ArrowRight, ShieldCheck, MessageCircle, Instagram, Check } from 'lucide-react';
import { CONCIERGE_WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL } from './utils/whatsapp';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('home');
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('don_azakhem_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState<string | null>(null);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('don_azakhem_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage', e);
    }
  }, [cart]);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => {
      setNotification(null);
    }, 2800);
  };

  const handleAddToCart = (product: Product, size: string, quantity: number = 1) => {
    setCart((prevCart) => {
      const existingIndex = prevCart.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );

      if (existingIndex > -1) {
        const updated = [...prevCart];
        updated[existingIndex].quantity += quantity;
        return updated;
      } else {
        return [...prevCart, { product, selectedSize: size, quantity }];
      }
    });

    showNotification(`Added ${product.name} (${size}) to your bag`);
  };

  const handleUpdateQuantity = (index: number, newQty: number) => {
    if (newQty <= 0) {
      handleRemoveItem(index);
      return;
    }
    setCart((prev) => {
      const updated = [...prev];
      updated[index].quantity = newQty;
      return updated;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const totalCartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#C9A961]/20 selection:text-black">
      {/* Toast Notification */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#111111] text-white border border-[#C9A961] px-5 py-3 shadow-2xl flex items-center gap-3 animate-fadeIn">
          <Check className="w-4 h-4 text-[#C9A961]" />
          <span className="text-xs uppercase tracking-wider font-medium">{notification}</span>
          <button
            onClick={() => setIsCartOpen(true)}
            className="ml-3 text-[11px] underline text-[#C9A961] uppercase tracking-wider hover:text-white cursor-pointer"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Header */}
      <Header
        activePage={activePage}
        setActivePage={setActivePage}
        cart={cart}
        setIsCartOpen={setIsCartOpen}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {/* VIEW: HOME */}
        {activePage === 'home' && (
          <div>
            {/* 1. Hero with 5 models in suits, Title: ULTIMATE BRAND BIBLE */}
            <Hero
              onSelectProduct={(p) => setSelectedProduct(p)}
              setActivePage={setActivePage}
            />

            {/* 2. Spotlight on Suits (5 Looks @ R2,999) */}
            <section className="py-16 sm:py-24 bg-white border-b border-[#000000]/8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C9A961] font-semibold block mb-2">
                      The 5 Signature Looks
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#000000] font-normal uppercase">
                      The Suits Collection
                    </h2>
                    <p className="text-xs sm:text-sm text-[#666666] font-light mt-1">
                      Two-piece tailored suits accompanied by our dedicated fluid satin shirts and gold cross chains.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActivePage('suits');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-4 sm:mt-0 text-xs uppercase tracking-[0.2em] font-semibold text-[#000000] hover:text-[#5A0A1A] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View All 5 Looks (R2,999)</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A961]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {SUITS_DATA.slice(0, 3).map((suit) => (
                    <ProductCard
                      key={suit.id}
                      product={suit}
                      onQuickView={(p) => setSelectedProduct(p)}
                      onAddToCart={(p, sz) => handleAddToCart(p, sz)}
                    />
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <button
                    onClick={() => {
                      setActivePage('suits');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="py-3 px-8 bg-[#FAF8F5] border border-black/15 hover:border-black text-xs uppercase tracking-[0.2em] font-semibold text-black transition-colors cursor-pointer"
                  >
                    Inspect All 5 Suits In Detail
                  </button>
                </div>
              </div>
            </section>

            {/* 3. The Satin Shirts Showcase (5 colors @ R599 each) */}
            <section className="py-16 sm:py-24 bg-[#FDFBF7] border-b border-[#000000]/8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C9A961] font-semibold block mb-2">
                      Fluid Silk-Touch Tailoring
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#000000] font-normal uppercase">
                      The Satin Shirts (R599)
                    </h2>
                    <p className="text-xs sm:text-sm text-[#666666] font-light mt-1">
                      Black, White, Champagne, Burgundy, and Navy. Open spread collars engineered for coastal breeze.
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActivePage('shirts');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-4 sm:mt-0 text-xs uppercase tracking-[0.2em] font-semibold text-[#000000] hover:text-[#5A0A1A] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View Shirts (R599 each)</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A961]" />
                  </button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
                  {SHIRTS_DATA.map((shirt) => (
                    <ProductCard
                      key={shirt.id}
                      product={shirt}
                      onQuickView={(p) => setSelectedProduct(p)}
                      onAddToCart={(p, sz) => handleAddToCart(p, sz)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 4. Handcrafted Jewelry Highlights (18 pieces from R199 to R899) */}
            <section className="py-16 sm:py-24 bg-white border-b border-[#000000]/8">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12">
                  <div>
                    <span className="text-xs uppercase tracking-[0.25em] text-[#C9A961] font-semibold block mb-2">
                      Timeless Accessories
                    </span>
                    <h2 className="font-editorial text-3xl sm:text-4xl text-[#000000] font-normal uppercase">
                      The Jewelry Collection
                    </h2>
                    <p className="text-xs sm:text-sm text-[#666666] font-light mt-1">
                      Rings (R299) • Watches (R899) • Necklaces (R399) • Bracelets (R299) • Cufflinks (R249) • Lapel Pin (R199)
                    </p>
                  </div>

                  <button
                    onClick={() => {
                      setActivePage('jewelry');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="mt-4 sm:mt-0 text-xs uppercase tracking-[0.2em] font-semibold text-[#000000] hover:text-[#5A0A1A] flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>View All 18 Pieces</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A961]" />
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {/* Highlight 4 signature jewelry pieces */}
                  {JEWELRY_DATA.filter((j) => j.featured || j.price === 399 || j.price === 899).slice(0, 4).map((piece) => (
                    <ProductCard
                      key={piece.id}
                      product={piece}
                      onQuickView={(p) => setSelectedProduct(p)}
                      onAddToCart={(p, sz) => handleAddToCart(p, sz)}
                    />
                  ))}
                </div>
              </div>
            </section>

            {/* 5. Brand Bible Rules & Philosophy */}
            <BrandBibleSection setActivePage={setActivePage} />

            {/* 6. Contact & WhatsApp Atelier Strip */}
            <ContactSection />
          </div>
        )}

        {/* VIEW: SUITS */}
        {activePage === 'suits' && (
          <SuitsView
            onQuickView={(p) => setSelectedProduct(p)}
            onAddToCart={(p, sz) => handleAddToCart(p, sz)}
            onSelectProduct={(p) => setSelectedProduct(p)}
          />
        )}

        {/* VIEW: SHIRTS */}
        {activePage === 'shirts' && (
          <ShirtsView
            onQuickView={(p) => setSelectedProduct(p)}
            onAddToCart={(p, sz) => handleAddToCart(p, sz)}
          />
        )}

        {/* VIEW: JEWELRY */}
        {activePage === 'jewelry' && (
          <JewelryView
            onQuickView={(p) => setSelectedProduct(p)}
            onAddToCart={(p, sz) => handleAddToCart(p, sz)}
          />
        )}

        {/* VIEW: BRAND BIBLE */}
        {activePage === 'brand-bible' && (
          <div>
            <Hero
              onSelectProduct={(p) => setSelectedProduct(p)}
              setActivePage={setActivePage}
            />
            <BrandBibleSection setActivePage={setActivePage} />
          </div>
        )}

        {/* VIEW: CONTACT */}
        {activePage === 'contact' && (
          <ContactSection />
        )}
      </main>

      {/* Product Quick View / PDP Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />

      {/* Floating Concierge WhatsApp Trigger */}
      <a
        href={`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=Hello%20DON%20AZA-KHEM%20Concierge,%20I%20would%20like%20to%20inquire%20about%20your%20Cape%20Town%20collection.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Concierge on WhatsApp"
        className="fixed bottom-6 left-6 z-40 bg-[#25D366] hover:bg-[#1EBE5D] text-white p-3.5 shadow-lg border border-white/20 transition-all duration-300 flex items-center gap-2.5 cursor-pointer group"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline text-xs uppercase tracking-widest font-semibold pr-1">
          WhatsApp Concierge
        </span>
      </a>

      {/* Footer */}
      <Footer setActivePage={setActivePage} />
    </div>
  );
}
