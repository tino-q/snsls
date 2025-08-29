// Common data shared between all locales
export const commonConfig = {
  // Company Information (same across languages)
  company: {
    name: "Sonsoles Travel",
    legalName: "SONSOLES RKT S.L.",
  },

  // Contact Information (same across languages)
  contact: {
    address: {
      street: "Calle Bernardo Lopez Garcia 18",
      city: "Alicante",
      postalCode: "031013",
    },
    phone: "+34 67 689 2817",
    email: "madelainebaklaya@gmail.com",
    website: "https://travel.sonsolesstays.com",
  },

  // Legal & License Information (same across languages)
  legal: {
    nif: "B10910040", // Spanish Tax ID
    cicma: "ES-******-***", // Travel Agency License Code
    mercantilRegistry: {
      tome: "43813",
      folio: "60",
      section: "8",
      sheet: "773190",
      registration: "1",
    },
    financialGuarantee: {
      policyNumber: "POL-2025-ARG-001",
      amount: "€150,000",
    },
    liabilityInsurance: {
      policyNumber: "RC-2025-TRAVEL-456",
      amount: "€75,000",
    },
  },

  // Services Offered (same structure, different content)
  services: [
    {
      icon: "🎭",
    },
    {
      icon: "✈️",
    },
  ],

  // Argentina Information Cards (same structure, different content)
  argentiniaInfo: [
    { icon: "🏔️" },
    { icon: "🎪" },
    { icon: "💫" },
    { icon: "🍷" },
    { icon: "🤝" },
    { icon: "📸" },
  ],

  // Footer Links & Services (same structure, different content)
  footerSections: {
    legalLinks: [
      { href: "#aviso-legal" },
      { href: "#politica-privacidad" },
      { href: "#condiciones-generales" },
      { href: "#politica-cookies" },
    ],
    services: [
      { href: "#programas-academicos" },
      { href: "#inmersion-cultural" },
      { href: "#logistica" },
      { href: "#seguros" },
    ],
    destinations: [
      { href: "#buenos-aires" },
      { href: "#cordoba" },
      { href: "#mendoza" },
      { href: "#patagonia" },
    ],
  },

  // Copyright (same year)
  copyright: {
    year: "2025",
  },
};
