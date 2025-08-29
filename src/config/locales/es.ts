import { commonConfig } from "./common";

export const esConfig = {
  // SEO Information
  seo: {
    title: "Sonsoles Travel",
    description:
      "Agencia de viajes española especializada en programas educativos y culturales para universidades estadounidenses en Argentina. Cumplimiento legal español completo.",
    lang: "es",
  },

  // Company Information
  company: {
    ...commonConfig.company,
    description:
      "Agencia de viajes española especializada en programas educativos y culturales para universidades estadounidenses en Argentina. Cumplimiento legal español completo.",
    tagline: "Argentina: Donde los Recuerdos Cobran Vida",
    subtitle: "Viajes de Grupo",
  },

  // Contact Information
  contact: {
    ...commonConfig.contact,
    address: {
      ...commonConfig.contact.address,
      country: "España",
    },
  },

  // Legal & License Information
  legal: {
    ...commonConfig.legal,
    mercantilRegistry: {
      ...commonConfig.legal.mercantilRegistry,
      location: "Registro Mercantil de Madrid",
    },
    financialGuarantee: {
      ...commonConfig.legal.financialGuarantee,
      provider: "Seguro Financiero",
    },
    liabilityInsurance: {
      ...commonConfig.legal.liabilityInsurance,
      provider: "Seguros de Responsabilidad Civil",
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

    // Compliance Section
    cicmaLicense: "Licencia CICMA",
    financialGuarantee: "Garantía Financiera",
    liabilityInsurance: "Seguro de Responsabilidad",
    lssiLaw: "Ley LSSI",
    guaranteesAndCompliance: "Garantías y Cumplimiento",
    yourPeaceIsOurPriority: "Tu Tranquilidad es Nuestra Prioridad",
    operateWithTransparency:
      "Operamos con total transparencia y cumplimiento legal, garantizando la máxima seguridad en cada programa educativo.",
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

    // Argentina Info Section
    discoverPatagonia: "Descubre la Patagonia",
    ancientGlaciers:
      "Glaciares milenarios que narran la historia de nuestro planeta",
    transformativeExperiences: "Experiencias Transformadoras",
    patagoniaLandscapes:
      "Los paisajes de la Patagonia ofrecen un aula natural incomparable donde los estudiantes pueden estudiar geología, cambio climático y conservación de primera mano.",
    majesticAndes: "Majestuosos Andes",
    mountainRanges:
      "Cordilleras que abrazan el cielo y despiertan el alma aventurera",
    whereInArgentina: "¿Dónde en Argentina?",
  },

  // Services Offered
  services: [
    {
      ...commonConfig.services[0],
      title: "Experiencias Auténticas",
      description:
        "Noches de tango, cenas grupales con asados tradicionales, catas de vino en Mendoza y encuentros con la cultura local que crearán vínculos únicos en el grupo.",
    },
    {
      ...commonConfig.services[1],
      title: "Todo Organizado",
      description:
        "Nos ocupamos de cada detalle: vuelos, hoteles boutique, transporte privado y actividades grupales para que solo se enfoquen en disfrutar la experiencia juntos.",
    },
  ],

  // Argentina Information Cards
  argentiniaInfo: [
    {
      ...commonConfig.argentiniaInfo[0],
      title: "Paisajes Épicos",
      description:
        "Desde glaciares patagónicos hasta las Cataratas del Iguazú, escenarios naturales que crean el telón perfecto para experiencias grupales extraordinarias.",
    },
    {
      ...commonConfig.argentiniaInfo[1],
      title: "Cultura Vibrante",
      description:
        "Tango apasionado, asados legendarios y la calidez argentina que hace que cada grupo se sienta como en familia desde el primer día.",
    },
    {
      ...commonConfig.argentiniaInfo[2],
      title: "Aventuras Únicas",
      description:
        "Actividades diseñadas para grupos: cabalgatas en la Patagonia, navegación por glaciares, y experiencias que solo se viven una vez en la vida.",
    },
    {
      ...commonConfig.argentiniaInfo[3],
      title: "Experiencias Gastronómicas",
      description:
        "Cenas grupales en estancias auténticas, catas de los mejores vinos y asados tradicionales que se convierten en momentos inolvidables.",
    },
    {
      ...commonConfig.argentiniaInfo[4],
      title: "Conexiones Auténticas",
      description:
        "La hospitalidad argentina crea el ambiente perfecto para que los grupos fortalezcan vínculos y compartan momentos que durarán toda la vida.",
    },
    {
      ...commonConfig.argentiniaInfo[5],
      title: "Momentos Inolvidables",
      description:
        "Cada rincón de Argentina ofrece el escenario perfecto para crear recuerdos únicos que el grupo compartirá por años.",
    },
  ],

  // Footer Links & Services
  footerSections: {
    legalLinks: [
      { ...commonConfig.footerSections.legalLinks[0], text: "Aviso Legal" },
      {
        ...commonConfig.footerSections.legalLinks[1],
        text: "Política de Privacidad",
      },
      {
        ...commonConfig.footerSections.legalLinks[2],
        text: "Condiciones Generales",
      },
      {
        ...commonConfig.footerSections.legalLinks[3],
        text: "Política de Cookies",
      },
    ],
    services: [
      {
        ...commonConfig.footerSections.services[0],
        text: "Programas Académicos",
      },
      {
        ...commonConfig.footerSections.services[1],
        text: "Inmersión Cultural",
      },
      {
        ...commonConfig.footerSections.services[2],
        text: "Logística y Coordinación",
      },
      { ...commonConfig.footerSections.services[3], text: "Seguros de Viaje" },
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
    text: "Todos los derechos reservados.",
  },

  // Footer Section
  footer: {
    legalInformation: "Información Legal",
    services: "Servicios",
    destinationsInArgentina: "Destinos en Argentina",
    phone: "Teléfono:",
    email: "Email:",
    financialGuarantee:
      "Garantía financiera constituida mediante póliza de seguro con",
    liabilityInsurance: "Seguro de responsabilidad civil con",
    policyNumber: "nº",
    amount: "por importe de",
    tomo: "Tomo",
    folio: "Folio",
    section: "Sección",
    sheet: "Hoja",
  },

  // Legal Page Translations
  legalPages: {
    legalNotice: {
      title: "Aviso Legal",
      intro:
        "En cumplimiento con el deber de información dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y el Comercio Electrónico (LSSICE), se facilitan a continuación los siguientes datos de información general de este sitio web:",
      companyName: "Denominación social:",
      taxId: "NIF:",
      address: "Domicilio:",
      registered: `Inscrita en el Registro Mercantil de Madrid al tomo ${commonConfig.legal.mercantilRegistry.tome}, folio ${commonConfig.legal.mercantilRegistry.folio}, sección ${commonConfig.legal.mercantilRegistry.section}, hoja número ${commonConfig.legal.mercantilRegistry.sheet}, inscripción ${commonConfig.legal.mercantilRegistry.registration}`,
      responsibility: `Dentro de los límites establecidos por la ley, ${commonConfig.contact.website} no asume ninguna responsabilidad derivada de la falta de veracidad, integridad, actualización y precisión de los datos o informaciones que se contienen en sus páginas web.`,
      contentDisclaimer: `Los contenidos e informaciones no vinculan a ${commonConfig.contact.website} ni constituyen opiniones, consejos o asesoramiento legal de ningún tipo, ya que se trata únicamente de un servicio ofrecido con carácter informativo y divulgativo.`,
      thirdPartyLinks: `Las páginas web de ${commonConfig.contact.website} pueden contener enlaces a otras páginas de terceros que ${commonConfig.contact.website} no puede controlar. Por lo tanto, ${commonConfig.contact.website} no puede asumir responsabilidades por el contenido que pueda aparecer en páginas de terceros.`,
      intellectualProperty: `Los textos, imágenes, sonidos, animaciones, software y el resto de contenidos incluidos en este sitio web son propiedad exclusiva de ${commonConfig.contact.website} o de sus licenciantes. Cualquier acto de transmisión, distribución, cesión, reproducción, almacenamiento o comunicación pública total o parcial, debe tener el consentimiento expreso de ${commonConfig.contact.website}.`,
      dataProtection: `Asimismo, para acceder a algunos de los servicios que ${commonConfig.contact.website} ofrece a través del sitio web, deberá proporcionar algunos datos de carácter personal. En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, le informamos que, mediante la cumplimentación de los presentes formularios, sus datos personales quedarán incorporados y serán tratados en los ficheros de ${commonConfig.company.legalName} con la finalidad de poderle prestar y ofrecer nuestros servicios así como informarle sobre las mejoras del sitio web. Asimismo, le informamos de la posibilidad de ejercer los derechos de acceso, rectificación, cancelación y oposición de sus datos de carácter personal, de manera gratuita mediante email a ${commonConfig.contact.email} o en la dirección ${commonConfig.contact.address.street}, ${commonConfig.contact.address.postalCode} - ${commonConfig.contact.address.city} (${commonConfig.contact.address.city}).`,
    },
    privacyPolicy: {
      title: "Política de Privacidad",
      intro:
        "En cumplimiento de lo establecido en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo de 27 de abril de 2016, relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales y a la libre circulación de estos datos, le informamos que:",
      dataController: `El responsable del tratamiento de sus datos personales es ${commonConfig.company.legalName} con NIF ${commonConfig.legal.nif} y domicilio en ${commonConfig.contact.address.street}, ${commonConfig.contact.address.postalCode} - ${commonConfig.contact.address.city} (${commonConfig.contact.address.city}).`,
      purpose:
        "La finalidad del tratamiento de sus datos personales es poderle prestar y ofrecer nuestros servicios así como informarle sobre las mejoras del sitio web.",
      legalBasis:
        "La base legal para el tratamiento de sus datos personales es su consentimiento, que puede retirar en cualquier momento.",
      recipients:
        "Sus datos personales no serán cedidos a terceros, salvo cuando exista una obligación legal para ello.",
      rights: `Tiene derecho a acceder, rectificar, cancelar y oponerse al tratamiento de sus datos personales, así como el derecho a la portabilidad de los datos y a la limitación del tratamiento. Puede ejercer estos derechos enviando un email a ${commonConfig.contact.email} o escribiendo a la dirección ${commonConfig.contact.address.street}, ${commonConfig.contact.address.postalCode} - ${commonConfig.contact.address.city} (${commonConfig.contact.address.city}).`,
      retention:
        "Sus datos personales serán conservados durante el tiempo necesario para cumplir con las finalidades para las que fueron recabados y para cumplir con las obligaciones legales.",
      security:
        "Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra el acceso no autorizado, alteración, divulgación o destrucción.",
      cookies:
        "Este sitio web utiliza cookies para mejorar su experiencia de navegación. Puede configurar su navegador para rechazar las cookies, pero esto puede afectar la funcionalidad del sitio web.",
      changes:
        "Podemos actualizar esta política de privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva política de privacidad en esta página.",
    },
  },
};
