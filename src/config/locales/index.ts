import { enConfig } from "./en";
import { esConfig } from "./es";

export type Locale = "en" | "es";

// Store for reactive updates
let currentLocaleState: Locale = "en";
const listeners: Set<() => void> = new Set();

export const detectLocale = (): Locale => {
  // Check localStorage first
  const stored = localStorage.getItem("locale") as Locale;
  if (stored && (stored === "en" || stored === "es")) {
    return stored;
  }

  // Check browser language
  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith("es") || browserLang.startsWith("ca")) {
    return "es";
  }

  return "en";
};

export const setLocale = (locale: Locale): void => {
  if (locale !== currentLocaleState) {
    currentLocaleState = locale;
    localStorage.setItem("locale", locale);
    // Notify all listeners
    listeners.forEach((listener) => listener());
  }
};

export const getConfig = (locale: Locale) => {
  return locale === "es" ? esConfig : enConfig;
};

// Reactive getter for current locale
export const getCurrentLocale = (): Locale => currentLocaleState;

// Subscribe to locale changes
export const subscribeToLocale = (callback: () => void): (() => void) => {
  listeners.add(callback);
  return () => listeners.delete(callback);
};

// Initialize
currentLocaleState = detectLocale();

// Legacy exports for backward compatibility
export const currentLocale = currentLocaleState;
export const config = getConfig(currentLocaleState);

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
  legalPages,
} = config;
