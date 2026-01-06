/**
 * WhatsApp Integration Utilities
 * Handles WhatsApp URL generation and device detection
 */

/**
 * Generates a WhatsApp URL with pre-filled message
 * @param {string} phoneNumber - Phone number in international format (e.g., "+1234567890")
 * @param {string} message - Pre-filled message text
 * @returns {string} WhatsApp URL
 */
export const generateWhatsAppURL = (phoneNumber, message = '') => {
  // Remove any non-digit characters except the leading +
  const cleanPhoneNumber = phoneNumber.replace(/[^\d+]/g, '');
  
  // Encode the message for URL
  const encodedMessage = encodeURIComponent(message);
  
  // Check if user is on mobile device
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  
  if (isMobile) {
    // Use WhatsApp app URL for mobile devices
    return `whatsapp://send?phone=${cleanPhoneNumber}&text=${encodedMessage}`;
  } else {
    // Use WhatsApp Web URL for desktop
    return `https://web.whatsapp.com/send?phone=${cleanPhoneNumber}&text=${encodedMessage}`;
  }
};

/**
 * Opens WhatsApp with pre-filled message in a new window/tab
 * @param {string} phoneNumber - Phone number in international format
 * @param {string} message - Pre-filled message text
 */
export const openWhatsApp = (phoneNumber, message = '') => {
  const url = generateWhatsAppURL(phoneNumber, message);
  window.open(url, '_blank', 'noopener,noreferrer');
};

/**
 * Default messages for different contexts
 */
export const DEFAULT_MESSAGES = {
  general: "Hi! I'm interested in learning more about your real estate services.",
  property: "Hi! I saw a property on your website and would like more information.",
  consultation: "Hi! I'd like to schedule a consultation to discuss my real estate needs.",
  letsTalk: "Hi! I'd like to talk about your real estate services."
};

/**
 * Default business phone number (replace with actual number)
 */
export const DEFAULT_PHONE_NUMBER = "+1234567890"; // Replace with actual business number

/**
 * Validates phone number format
 * @param {string} phoneNumber - Phone number to validate
 * @returns {boolean} True if valid format
 */
export const isValidPhoneNumber = (phoneNumber) => {
  // Basic validation for international phone number format
  const phoneRegex = /^\+[1-9]\d{1,14}$/;
  return phoneRegex.test(phoneNumber);
};

/**
 * Formats phone number for display
 * @param {string} phoneNumber - Raw phone number
 * @returns {string} Formatted phone number
 */
export const formatPhoneNumber = (phoneNumber) => {
  const cleaned = phoneNumber.replace(/\D/g, '');
  
  if (cleaned.length === 10) {
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  } else if (cleaned.length === 11) {
    return `+${cleaned.slice(0, 1)} (${cleaned.slice(1, 4)}) ${cleaned.slice(4, 7)}-${cleaned.slice(7)}`;
  }
  
  return phoneNumber;
};