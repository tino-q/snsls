import { useState, useEffect } from "react";
import {
  getCurrentLocale,
  subscribeToLocale,
  type Locale,
} from "../config/locales";

export const useLocale = (): Locale => {
  const [locale, setLocale] = useState<Locale>(getCurrentLocale());

  useEffect(() => {
    const unsubscribe = subscribeToLocale(() => {
      setLocale(getCurrentLocale());
    });
    return unsubscribe;
  }, []);

  return locale;
};
