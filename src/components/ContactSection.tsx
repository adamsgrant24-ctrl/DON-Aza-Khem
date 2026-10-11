import React, { useState } from 'react';
import { MessageCircle, Instagram, MapPin, Clock, Phone, Mail, Send, Check, ShieldCheck, Sparkles } from 'lucide-react';
import { generateDirectConciergeInquiryUrl, CONCIERGE_WHATSAPP_NUMBER, INSTAGRAM_HANDLE, INSTAGRAM_URL } from '../utils/whatsapp';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Private Camps Bay Fitting',
    preferredDate: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Build direct WhatsApp message for the fitting request
    const fittingMessage = `*DON AZA-KHEM • PRIVATE FITTING APPOINTMENT*\n\nClient: ${formData.name}\nContact: ${formData.phone} / ${formData.email}\nService: ${formData.service}\nPreferred Date: ${formData.preferredDate || 'Earliest available'}\nNotes: ${formData.message || 'None'}\n\nThank you.`;
    const url = `https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(fittingMessage)}`;
    
    setTimeout(() => {
      window.open(url, '_blank');
    }, 600);
  };

  return (
    <section className="bg-white py-16 sm:py-24 border-b border-[#000000]/8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C9A961] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Private Client Concierge</span>
          </div>

          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#000000] font-normal tracking-wide uppercase mb-4">
            Contact & Atelier
          </h2>

          <p className="font-serif italic text-lg sm:text-xl text-[#666666] max-w-xl mx-auto">
            Direct WhatsApp ordering, Camps Bay appointments & bespoke inquiries.
          </p>

          <p className="mt-3 text-sm text-[#444444] max-w-xl mx-auto leading-relaxed font-light">
            We operate in quiet discretion. Whether securing a single suit look for an Atlantic sunset soirée or scheduling a private fitting at our Camps Bay atelier, our concierge responds promptly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Channels & Atelier Details (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick WhatsApp Ordering Spotlight */}
            <div className="p-8 bg-[#FAF8F5] border border-[#000000]/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#5A0A1A]">
                    Instant Assistance
                  </span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#25D366]" title="Concierge Active" />
                </div>

                <h3 className="font-editorial text-2xl text-[#111111] mb-2 font-normal">
                  WhatsApp Ordering
                </h3>

                <p className="text-xs text-[#555555] leading-relaxed mb-6 font-light">
                  Skip traditional checkout. Send us your desired look, sizing specifications, and delivery address. Instant confirmation and invoice generation.
                </p>
              </div>

              <a
                href={generateDirectConciergeInquiryUrl('Direct WhatsApp Order Inquiry')}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-6 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs uppercase tracking-[0.2em] font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Message Concierge On WhatsApp</span>
              </a>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Instagram Card */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-white border border-[#000000]/8 hover:border-[#C9A961] flex items-center justify-between group transition-colors"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-none bg-[#FAF8F5] border border-black/10 flex items-center justify-center text-[#5A0A1A] group-hover:text-black">
                    <Instagram className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-[#888888]">Official Instagram</div>
                    <div className="font-editorial text-base font-semibold text-[#111111] group-hover:text-[#5A0A1A]">
                      @{INSTAGRAM_HANDLE}
                    </div>
                  </div>
                </div>
                <span className="text-xs font-mono uppercase tracking-wider text-[#C9A961]">
                  Follow Editorial →
                </span>
              </a>

              {/* Atelier Address Card */}
              <div className="p-5 bg-white border border-[#000000]/8 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-none bg-[#FAF8F5] border border-black/10 flex items-center justify-center text-[#5A0A1A] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#888888]">Cape Town Atelier</div>
                  <div className="font-editorial text-sm font-semibold text-[#111111]">
                    Victoria Road, Camps Bay
                  </div>
                  <div className="text-xs text-[#666666] mt-0.5 font-light">
                    Cape Town, 8005, South Africa • Atlantic Seaboard
                  </div>
                </div>
              </div>

              {/* Hours & Courier Speed */}
              <div className="p-5 bg-white border border-[#000000]/8 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-none bg-[#FAF8F5] border border-black/10 flex items-center justify-center text-[#5A0A1A] shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#888888]">Concierge Hours</div>
                  <div className="font-editorial text-sm font-semibold text-[#111111]">
                    Monday – Saturday: 09:00 – 19:00 (SAST)
                  </div>
                  <div className="text-xs text-[#666666] mt-0.5 font-light">
                    Complimentary overnight door-to-door courier across South Africa.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Private Appointment & Fitting Booking Form (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAF8F5] border border-[#000000]/10 p-8 sm:p-10">
            <div className="mb-6">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C9A961] font-semibold block mb-1">
                CAMPS BAY SALON
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#111111] font-normal">
                Book A Private Fitting
              </h3>
              <p className="text-xs text-[#555555] mt-1 font-light">
                Reserve an exclusive consultation at our Atlantic terrace atelier. Complimentary fabric inspection, tailored adjustments, and champagne service.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 bg-white border border-[#C9A961]/40 text-center animate-fadeIn">
                <div className="w-12 h-12 rounded-full bg-[#FAF8F5] border border-[#C9A961] flex items-center justify-center mx-auto mb-4 text-[#5A0A1A]">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-editorial text-xl font-medium text-[#111111] mb-2">
                  Request Initiated
                </h4>
                <p className="text-xs text-[#666666] max-w-sm mx-auto mb-4 font-light leading-relaxed">
                  WhatsApp is launching with your appointment details. If your window did not open automatically, tap below:
                </p>
                <a
                  href={`https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-2.5 px-6 bg-[#25D366] text-white text-xs uppercase tracking-wider font-semibold"
                >
                  Confirm on WhatsApp
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#222222] mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lord Alexander Sinclair"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-xs text-[#111111] focus:border-[#C9A961] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#222222] mb-1.5">
                      WhatsApp / Phone *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="+27 72 000 0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-xs text-[#111111] focus:border-[#C9A961] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#222222] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="client@luxury.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-xs text-[#111111] focus:border-[#C9A961] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#222222] mb-1.5">
                      Preferred Date & Time
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Thursday 15:00"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-xs text-[#111111] focus:border-[#C9A961] focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#222222] mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-xs text-[#111111] focus:border-[#C9A961] focus:outline-none cursor-pointer"
                  >
                    <option value="Private Camps Bay Fitting">Private Camps Bay Atelier Fitting (All 5 Suits)</option>
                    <option value="Satin Shirt & Chain Sizing">Satin Shirt & 18K Gold Chain Sizing</option>
                    <option value="Bespoke Wedding & Gala Tailoring">Bespoke Wedding & Gala Tailoring Consultation</option>
                    <option value="Hotel Penthouse Delivery">Hotel / Penthouse Private Suite Delivery</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-[#222222] mb-1.5">
                    Particular Sizing or Aesthetic Notes
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide measurements, preferred suit colors, or occasion details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-white border border-black/15 text-xs text-[#111111] focus:border-[#C9A961] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#000000] hover:bg-[#5A0A1A] text-white text-xs uppercase tracking-[0.2em] font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#C9A961]" />
                  <span>Submit Fitting Request Via Concierge</span>
                </button>
              </form>
            )}

            <div className="mt-6 pt-4 border-t border-black/10 flex items-center justify-between text-[11px] text-[#777777]">
              <span>Confidentiality Guaranteed</span>
              <span className="text-[#C9A961] font-mono">DON AZA-KHEM • 8005</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
