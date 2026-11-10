export const WHATSAPP_NUMBER = "910000000000"; // placeholder — replace with the store's number
export const ADDRESS = "8 New Navratan Complex, Udaipur";
export const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
