import { commonConfig } from "./common";

export const enConfig = {
  // SEO Information
  seo: {
    title: "Sonsoles Travel",
    description:
      "Spanish travel agency specialized in educational and cultural programs for American universities in Argentina. Complete Spanish legal compliance.",
    lang: "en",
  },

  // Company Information
  company: {
    ...commonConfig.company,
    description:
      "Spanish travel agency specialized in educational and cultural programs for American universities in Argentina. Complete Spanish legal compliance.",
    tagline: "Argentina: Where Memories Come to Life",
    subtitle: "Group Travel",
  },

  // Contact Information
  contact: {
    ...commonConfig.contact,
    address: {
      ...commonConfig.contact.address,
      country: "Spain",
    },
  },

  // Legal & License Information
  legal: {
    ...commonConfig.legal,
    mercantilRegistry: {
      ...commonConfig.legal.mercantilRegistry,
      location: "Madrid Commercial Registry",
    },
    financialGuarantee: {
      ...commonConfig.legal.financialGuarantee,
      provider: "Financial Insurance",
    },
    liabilityInsurance: {
      ...commonConfig.legal.liabilityInsurance,
      provider: "Civil Liability Insurance",
    },
  },

  // Legal Compliance Details
  compliance: {
    cicmaDescription:
      "CICMA Identification Code: ES-******-***, granted by the Valencian Community for legal operation as a travel agency.",
    financialGuaranteeDescription:
      "Minimum financial guarantee of €100,000 through insurance policy in accordance with Royal Decree-Law 23/2018.",
    liabilityInsuranceDescription:
      "Civil liability insurance for a minimum amount of €60,000 according to current Spanish regulations.",
    lssiCompliance:
      "Complete compliance with Law 34/2002 on Information Society Services and Electronic Commerce.",

    // Compliance Section
    cicmaLicense: "CICMA License",
    financialGuarantee: "Financial Guarantee",
    liabilityInsurance: "Liability Insurance",
    lssiLaw: "LSSI Law",
    guaranteesAndCompliance: "Guarantees and Compliance",
    yourPeaceIsOurPriority: "Your Peace is Our Priority",
    operateWithTransparency:
      "We operate with complete transparency and legal compliance, ensuring maximum security in every educational program.",
  },

  // Marketing Content
  content: {
    heroTitle: "Argentina: Where Memories Come to Life",
    heroDescription:
      "Unique experiences designed for MBA groups and professionals seeking adventure, connection, and unforgettable moments in South America's most spectacular landscapes.",
    ctaButton: "Plan Our Adventure",

    servicesTitle: "Adventures that Connect and Transform",
    servicesDescription:
      "Each experience is carefully designed to strengthen group bonds, create extraordinary memories, and discover Argentina's magic together.",

    argentinaSectionTitle: "The Most Epic Destinations",
    argentinaSectionDescription:
      "From ancient glaciers to deafening waterfalls, discover the most spectacular places that will make your group adventure an unforgettable experience.",

    // Argentina Info Section
    discoverPatagonia: "Discover Patagonia",
    ancientGlaciers: "Ancient glaciers that tell the story of our planet",
    transformativeExperiences: "Transformative Experiences",
    patagoniaLandscapes:
      "Patagonia's landscapes offer an incomparable natural classroom where students can study geology, climate change, and conservation firsthand.",
    majesticAndes: "Majestic Andes",
    mountainRanges:
      "Mountain ranges that embrace the sky and awaken the adventurous soul",
    whereInArgentina: "Where in Argentina?",
  },

  // Services Offered
  services: [
    {
      ...commonConfig.services[0],
      title: "Authentic Experiences",
      description:
        "Tango nights, group dinners with traditional asados, wine tastings in Mendoza, and encounters with local culture that will create unique bonds within the group.",
    },
    {
      ...commonConfig.services[1],
      title: "Everything Organized",
      description:
        "We take care of every detail: flights, boutique hotels, private transportation, and group activities so you only need to focus on enjoying the experience together.",
    },
  ],

  // Argentina Information Cards
  argentiniaInfo: [
    {
      ...commonConfig.argentiniaInfo[0],
      title: "Epic Landscapes",
      description:
        "From Patagonian glaciers to Iguazú Falls, natural settings that create the perfect backdrop for extraordinary group experiences.",
    },
    {
      ...commonConfig.argentiniaInfo[1],
      title: "Vibrant Culture",
      description:
        "Passionate tango, legendary asados, and Argentine warmth that makes every group feel like family from day one.",
    },
    {
      ...commonConfig.argentiniaInfo[2],
      title: "Unique Adventures",
      description:
        "Activities designed for groups: horseback riding in Patagonia, glacier navigation, and experiences that are lived only once in a lifetime.",
    },
    {
      ...commonConfig.argentiniaInfo[3],
      title: "Gastronomic Experiences",
      description:
        "Group dinners in authentic estancias, tastings of the best wines, and traditional asados that become unforgettable moments.",
    },
    {
      ...commonConfig.argentiniaInfo[4],
      title: "Authentic Connections",
      description:
        "Argentine hospitality creates the perfect environment for groups to strengthen bonds and share moments that will last a lifetime.",
    },
    {
      ...commonConfig.argentiniaInfo[5],
      title: "Unforgettable Moments",
      description:
        "Every corner of Argentina offers the perfect setting to create unique memories that the group will share for years.",
    },
  ],

  // Footer Links & Services
  footerSections: {
    legalLinks: [
      { ...commonConfig.footerSections.legalLinks[0], text: "Legal Notice" },
      { ...commonConfig.footerSections.legalLinks[1], text: "Privacy Policy" },
      { ...commonConfig.footerSections.legalLinks[2], text: "General Terms" },
      { ...commonConfig.footerSections.legalLinks[3], text: "Cookie Policy" },
    ],
    services: [
      { ...commonConfig.footerSections.services[0], text: "Academic Programs" },
      {
        ...commonConfig.footerSections.services[1],
        text: "Cultural Immersion",
      },
      {
        ...commonConfig.footerSections.services[2],
        text: "Logistics & Coordination",
      },
      { ...commonConfig.footerSections.services[3], text: "Travel Insurance" },
    ],
    destinations: [
      { ...commonConfig.footerSections.destinations[0], text: "Buenos Aires" },
      { ...commonConfig.footerSections.destinations[1], text: "Córdoba" },
      { ...commonConfig.footerSections.destinations[2], text: "Mendoza" },
      { ...commonConfig.footerSections.destinations[3], text: "Patagonia" },
    ],
  },

  // Copyright and Legal Footer Text
  copyright: {
    ...commonConfig.copyright,
    text: "All rights reserved.",
  },

  // Footer Section
  footer: {
    legalInformation: "Legal Information",
    services: "Services",
    destinationsInArgentina: "Destinations in Argentina",
    phone: "Phone:",
    email: "Email:",
    financialGuarantee:
      "Financial guarantee constituted through insurance policy with",
    liabilityInsurance: "Civil liability insurance with",
    policyNumber: "policy number",
    amount: "amount",
    tomo: "Volume",
    folio: "Folio",
    section: "Section",
    sheet: "Sheet",
  },

  // Legal Page Translations
  legalPages: {
    legalNotice: {
      title: "Legal Notice",
      intro: `In compliance with the duty of information set forth in Article 10 of Law 34/2002, of July 11, on Information Society Services and Electronic Commerce (LSSICE), the owner of the website ${commonConfig.contact.website} informs you of the following:`,
      companyName: "Company name:",
      taxId: "Tax ID:",
      address: "Address:",
      registered: `Registered in the Madrid Commercial Registry at Volume ${commonConfig.legal.mercantilRegistry.tome}, folio ${commonConfig.legal.mercantilRegistry.folio}, section ${commonConfig.legal.mercantilRegistry.section}, sheet number ${commonConfig.legal.mercantilRegistry.sheet}, registration ${commonConfig.legal.mercantilRegistry.registration}`,
      responsibility: `Within the limits established by law, ${commonConfig.contact.website} assumes no responsibility arising from the lack of truthfulness, integrity, updating, and accuracy of the data or information contained in its web pages.`,
      contentDisclaimer: `The contents and information do not bind ${commonConfig.contact.website} nor do they constitute opinions, advice, or legal advice of any kind, as this is merely a service offered for informational and educational purposes.`,
      thirdPartyLinks: `The web pages of ${commonConfig.contact.website} may contain links to other third-party pages that ${commonConfig.contact.website} cannot control. Therefore, ${commonConfig.contact.website} cannot assume responsibility for the content that may appear on third-party pages.`,
      intellectualProperty: `The texts, images, sounds, animations, software, and the rest of the contents included in this website are the exclusive property of ${commonConfig.contact.website} or its licensors. Any act of transmission, distribution, assignment, reproduction, storage, or public communication, total or partial, must have the express consent of ${commonConfig.contact.website}.`,
      dataProtection: `Furthermore, to access some of the services that ${commonConfig.contact.website} offers through the website, you will need to provide some personal data. In compliance with the provisions of Regulation (EU) 2016/679 of the European Parliament and Council of April 27, 2016, regarding the protection of individuals with regard to the processing of personal data and the free movement of such data, we inform you that, by filling out these forms, your personal data will be incorporated and processed in the files of ${commonConfig.company.legalName} for the purpose of providing and offering our services as well as informing you about website improvements. We also inform you of the possibility of exercising your rights of access, rectification, cancellation, and opposition of your personal data, free of charge via email to ${commonConfig.contact.email} or at the address ${commonConfig.contact.address.street}, ${commonConfig.contact.address.postalCode} - ${commonConfig.contact.address.city} (${commonConfig.contact.address.city}).`,
    },
    privacyPolicy: {
      title: "Privacy Policy",
      intro:
        "In compliance with the provisions of Regulation (EU) 2016/679 of the European Parliament and Council of April 27, 2016, regarding the protection of individuals with regard to the processing of personal data and the free movement of such data, we inform you that:",
      dataController: `The data controller is ${commonConfig.company.legalName} with Tax ID ${commonConfig.legal.nif} and address at ${commonConfig.contact.address.street}, ${commonConfig.contact.address.postalCode} - ${commonConfig.contact.address.city} (${commonConfig.contact.address.city}).`,
      purpose:
        "The purpose of processing your personal data is to provide and offer our services as well as inform you about website improvements.",
      legalBasis:
        "The legal basis for processing your personal data is your consent, which you can withdraw at any time.",
      recipients:
        "Your personal data will not be transferred to third parties, except when there is a legal obligation to do so.",
      rights: `You have the right to access, rectification, cancellation, and opposition of your personal data, as well as the right to data portability and limitation of processing. You can exercise these rights by sending an email to ${commonConfig.contact.email} or by writing to the address ${commonConfig.contact.address.street}, ${commonConfig.contact.address.postalCode} - ${commonConfig.contact.address.city} (${commonConfig.contact.address.city}).`,
      retention:
        "Your personal data will be retained for as long as necessary to fulfill the purposes for which they were collected and to comply with legal obligations.",
      security:
        "We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
      cookies:
        "This website uses cookies to improve your browsing experience. You can configure your browser to reject cookies, but this may affect the functionality of the website.",
      changes:
        "We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.",
    },
  },
};
