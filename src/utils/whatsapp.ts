import { CartItem } from '../types';

export const CONCIERGE_WHATSAPP_NUMBER = '27720000000'; // South Africa (+27 72 ...)
export const INSTAGRAM_HANDLE = 'donazakhem';
export const INSTAGRAM_URL = 'https://instagram.com/donazakhem';

export interface CheckoutDetails {
  name?: string;
  phone?: string;
  address?: string;
  city?: string;
  notes?: string;
}

export function formatWhatsAppOrderMessage(
  cart: CartItem[], 
  subtotal: number, 
  details?: CheckoutDetails
): string {
  const lineItems = cart.map((item, index) => {
    return `${index + 1}. *${item.product.name}*\n   Size: ${item.selectedSize} | Qty: ${item.quantity} | ${item.product.formattedPrice}`;
  }).join('\n\n');

  let message = `*DON AZA-KHEM • BESPOKE CONCIERGE ORDER*\n`;
  message += `_Crafted in Refined Taste • Cape Town_\n\n`;
  message += `Greetings DON AZA-KHEM Concierge,\n`;
  message += `I would like to place an order from the Atlantic Seaboard collection:\n\n`;
  message += `${lineItems}\n\n`;
  message += `━━━━━━━━━━━━━━━━━━━━━\n`;
  message += `*Total Amount:* R${subtotal.toLocaleString()}\n`;
  message += `*Delivery:* ${subtotal >= 2000 ? 'Complimentary Door-to-Door Courier (RSA)' : 'Standard Overnight Courier (R150)'}\n\n`;

  if (details && (details.name || details.address)) {
    message += `*CLIENT INFORMATION:*\n`;
    if (details.name) message += `• Client: ${details.name}\n`;
    if (details.phone) message += `• Contact: ${details.phone}\n`;
    if (details.address) message += `• Delivery Address: ${details.address}, ${details.city || 'Cape Town'}\n`;
    if (details.notes) message += `• Special Notes: ${details.notes}\n`;
    message += `\n`;
  } else {
    message += `Please confirm stock availability and send payment instructions (EFT / Instant Pay / Yoco link).\n`;
  }

  message += `Thank you.\nwww.donazakhem.com`;
  return message;
}

export function generateWhatsAppOrderUrl(
  cart: CartItem[], 
  subtotal: number, 
  details?: CheckoutDetails
): string {
  const message = formatWhatsAppOrderMessage(cart, subtotal, details);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encoded}`;
}

export function generateDirectConciergeInquiryUrl(subject: string = 'General Inquiry'): string {
  const message = `Hello DON AZA-KHEM Concierge,\n\nI am contacting you regarding: *${subject}*.\nI would like to speak with a private client advisor about your Cape Town collection.\n\nThank you.`;
  return `https://wa.me/${CONCIERGE_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
