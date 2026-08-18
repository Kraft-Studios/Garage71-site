// Central source of truth for verified Garage71 business details.
// Sourced directly from Garage71's own shopfront signage and current
// marketing material (33 South Circular Road location) — nothing here is invented.

export const business = {
  name: "Garage71",
  tagline: "Performance. Customs. Repairs.",
  phoneDisplay: "082 404 7200",
  phoneHref: "tel:+27824047200",
  whatsappNumber: "27824047200",
  officePhoneDisplay: "079 081 2448",
  officePhoneHref: "tel:+27790812448",
  address: {
    line1: "33 South Circular Road",
    line2: "Kimberley, 8301",
    region: "Northern Cape, South Africa",
  },
  mapsQuery: "Garage71, 33 South Circular Road, Kimberley, 8301",
  accreditations: ["AA Approved Garage", "RMI Member", "MIWA"],
};

export const whatsappMessage = "Hi Garage71, I would like to enquire about booking a service.";

export const whatsappLink = `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];
