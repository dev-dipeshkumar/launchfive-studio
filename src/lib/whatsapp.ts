// Shared WhatsApp configuration for LaunchFive Studio.
// Single source of truth — used by the floating button, hero CTA, and contact card.

export const WHATSAPP_NUMBER = "919783569106"; // international format, no "+" or spaces
export const WHATSAPP_DISPLAY = "+91 97835 69106";

export const WHATSAPP_MESSAGE =
  "Hi LaunchFive Studio,\n\nI came across your website and I'm interested in discussing a project.\n\nI'd like to know more about your services and how we can work together.\n\nLooking forward to hearing from you.";

// Dynamically generated wa.me deep link (opens in a new tab).
// encodeURIComponent() ensures emojis, apostrophes, punctuation, and
// line breaks render correctly, and avoids any malformed Unicode characters.
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE
)}`;

export const WHATSAPP_ARIA = "Chat with LaunchFive Studio on WhatsApp";
