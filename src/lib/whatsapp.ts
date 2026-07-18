// Shared WhatsApp configuration for LaunchFive Studio.
// Single source of truth — used by the floating button, hero CTA, and contact card.

export const WHATSAPP_NUMBER = "919783569106"; // international format, no "+" or spaces
export const WHATSAPP_DISPLAY = "+91 97835 69106";

export const WHATSAPP_MESSAGE =
  "Hi LaunchFive Studio 👋\nI visited your website and I'm interested in discussing a project.\nCould we connect?";

// Pre-encoded wa.me deep link (opens in a new tab)
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const WHATSAPP_ARIA = "Chat with LaunchFive Studio on WhatsApp";
