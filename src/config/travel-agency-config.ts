// Travel Agency Configuration
// Replace all these mock details with your real information

export interface TravelAgencyConfig {
  seo: {
    title: string;
    description: string;
    lang: string;
  };
  company: {
    name: string;
    legalName: string;
    description: string;
    tagline: string;
    subtitle: string;
  };
  contact: {
    address: {
      street: string;
      city: string;
      postalCode: string;
      country: string;
    };
    phone: string;
    email: string;
    website: string;
  };
  legal: {
    nif: string;
    cicma: string;
    mercantilRegistry: {
      location: string;
      tome: string;
      folio: string;
      section: string;
      sheet: string;
    };
    financialGuarantee: {
      provider: string;
      policyNumber: string;
      amount: string;
    };
    liabilityInsurance: {
      provider: string;
      policyNumber: string;
      amount: string;
    };
  };
  compliance: {
    cicmaDescription: string;
    financialGuaranteeDescription: string;
    liabilityInsuranceDescription: string;
    lssiCompliance: string;
  };
  content: {
    heroTitle: string;
    heroDescription: string;
    ctaButton: string;
    servicesTitle: string;
    servicesDescription: string;
    argentinaSectionTitle: string;
    argentinaSectionDescription: string;
  };
  services: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  argentiniaInfo: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  footerSections: {
    legalLinks: Array<{ text: string; href: string }>;
    services: Array<{ text: string; href: string }>;
    destinations: Array<{ text: string; href: string }>;
  };
  copyright: {
    year: string;
    text: string;
  };
}

export const TRAVEL_AGENCY_CONFIG: TravelAgencyConfig = {
  // SEO Information
  seo: {
    title: "Sonsoles Travel",
    description:
      "Agencia de viajes española especializada en programas educativos y culturales para universidades estadounidenses en Argentina. Cumplimiento legal español completo.",
    lang: "es",
  },

  // Company Information
  company: {
    name: "Sonsoles Travel",
    legalName: "SONSOLES RKT S.L.",
    description:
      "Agencia de viajes española especializada en programas educativos y culturales para universidades estadounidenses en Argentina. Cumplimiento legal español completo.",
    tagline: "Argentina: Donde los Recuerdos Cobran Vida",
    subtitle: "Viajes de Grupo",
  },

  // Contact Information
  contact: {
    address: {
      street: "Calle Bernardo Lopez Garcia 18",
      city: "Alicante",
      postalCode: "031013",
      country: "España",
    },
    phone: "+34 67 689 2817",
    email: "madelainebaklaya@gmail.com",
    website: "https://www.travel.sonsolesstays.com",
  },

  // Legal & License Information
  legal: {
    nif: "B-10910040", // Spanish Tax ID
    cicma: "ES-******-***", // Travel Agency License Code
    mercantilRegistry: {
      location: "Registro Mercantil de Madrid",
      tome: "12345",
      folio: "123",
      section: "8ª",
      sheet: "M-123456",
    },
    financialGuarantee: {
      provider: "Seguro Financiero",
      policyNumber: "POL-2025-ARG-001",
      amount: "€150,000",
    },
    liabilityInsurance: {
      provider: "Seguros de Responsabilidad Civil",
      policyNumber: "RC-2025-TRAVEL-456",
      amount: "€75,000",
    },
  },

  // Legal Compliance Details
  compliance: {
    cicmaDescription:
      "Código de Identificación CICMA: ES-******-***, otorgado por la Comunidad Valenciana para operación legal como agencia de viajes.",
    financialGuaranteeDescription:
      "Garantía financiera mínima de €100,000 através de póliza de seguro conforme al Real Decreto-Ley 23/2018.",
    liabilityInsuranceDescription:
      "Seguro de responsabilidad civil por importe mínimo de €60,000 según normativa española vigente.",
    lssiCompliance:
      "Cumplimiento completo con la Ley 34/2002 de Servicios de la Sociedad de la Información y Comercio Electrónico.",
  },

  // Marketing Content
  content: {
    heroTitle: "Argentina: Donde los Recuerdos Cobran Vida",
    heroDescription:
      "Experiencias únicas diseñadas para grupos de MBA y profesionales que buscan aventura, conexión y momentos inolvidables en los paisajes más espectaculares de Sudamérica.",
    ctaButton: "Planear Nuestra Aventura",

    servicesTitle: "Aventuras que Conectan y Transforman",
    servicesDescription:
      "Cada experiencia está cuidadosamente diseñada para fortalecer vínculos del grupo, crear memorias extraordinarias y descubrir la magia de Argentina juntos.",

    argentinaSectionTitle: "Los Destinos Más Épicos",
    argentinaSectionDescription:
      "Desde glaciares milenarios hasta cataratas ensordecedoras, descubre los lugares más espectaculares que harán de tu aventura grupal una experiencia inolvidable.",
  },

  // Services Offered
  services: [
    {
      icon: "🎭",
      title: "Experiencias Auténticas",
      description:
        "Noches de tango, cenas grupales con asados tradicionales, catas de vino en Mendoza y encuentros con la cultura local que crearán vínculos únicos en el grupo.",
    },
    {
      icon: "✈️",
      title: "Todo Organizado",
      description:
        "Nos ocupamos de cada detalle: vuelos, hoteles boutique, transporte privado y actividades grupales para que solo se enfoquen en disfrutar la experiencia juntos.",
    },
  ],

  // Argentina Information Cards
  argentiniaInfo: [
    {
      icon: "🏔️",
      title: "Paisajes Épicos",
      description:
        "Desde glaciares patagónicos hasta las Cataratas del Iguazú, escenarios naturales que crean el telón perfecto para experiencias grupales extraordinarias.",
    },
    {
      icon: "🎪",
      title: "Cultura Vibrante",
      description:
        "Tango apasionado, asados legendarios y la calidez argentina que hace que cada grupo se sienta como en familia desde el primer día.",
    },
    {
      icon: "💫",
      title: "Aventuras Únicas",
      description:
        "Actividades diseñadas para grupos: cabalgatas en la Patagonia, navegación por glaciares, y experiencias que solo se viven una vez en la vida.",
    },
    {
      icon: "🍷",
      title: "Experiencias Gastronómicas",
      description:
        "Cenas grupales en estancias auténticas, catas de los mejores vinos y asados tradicionales que se convierten en momentos inolvidables.",
    },
    {
      icon: "🤝",
      title: "Conexiones Auténticas",
      description:
        "La hospitalidad argentina crea el ambiente perfecto para que los grupos fortalezcan vínculos y compartan momentos que durarán toda la vida.",
    },
    {
      icon: "📸",
      title: "Momentos Inolvidables",
      description:
        "Cada rincón de Argentina ofrece el escenario perfecto para crear recuerdos únicos que el grupo compartirá por años.",
    },
  ],

  // Footer Links & Services
  footerSections: {
    legalLinks: [
      { text: "Aviso Legal", href: "#aviso-legal" },
      { text: "Política de Privacidad", href: "#politica-privacidad" },
      { text: "Condiciones Generales", href: "#condiciones-generales" },
      { text: "Política de Cookies", href: "#politica-cookies" },
    ],
    services: [
      { text: "Programas Académicos", href: "#programas-academicos" },
      { text: "Inmersión Cultural", href: "#inmersion-cultural" },
      { text: "Logística y Coordinación", href: "#logistica" },
      { text: "Seguros de Viaje", href: "#seguros" },
    ],
    destinations: [
      { text: "Buenos Aires", href: "#buenos-aires" },
      { text: "Córdoba", href: "#cordoba" },
      { text: "Mendoza", href: "#mendoza" },
      { text: "Patagonia", href: "#patagonia" },
    ],
  },

  // Copyright and Legal Footer Text
  copyright: {
    year: "2025",
    text: "Todos los derechos reservados.",
  },
};

// Export individual sections for easier access
export const {
  seo,
  company,
  contact,
  legal,
  compliance,
  content,
  services,
  argentiniaInfo,
  footerSections,
  copyright,
} = TRAVEL_AGENCY_CONFIG;
