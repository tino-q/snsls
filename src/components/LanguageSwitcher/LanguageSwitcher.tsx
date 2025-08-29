import React, { useState, useRef, useEffect } from "react";
import type { Locale } from "../../config/locales";
import { setLocale } from "../../config/locales";
import { useLocale } from "../../hooks/useLocale";
import "./LanguageSwitcher.css";

const LanguageSwitcher: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLocale = useLocale();

  const languages = [
    { code: "en", name: "English", flag: "🇺🇸" },
    { code: "es", name: "Español", flag: "🇪🇸" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  const handleLanguageChange = (newLocale: Locale) => {
    if (newLocale !== currentLocale) {
      setLocale(newLocale);
    }
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button
        className="language-dropdown-toggle"
        onClick={toggleDropdown}
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span className="language-flag">{currentLanguage?.flag}</span>
        <span className="language-code">
          {currentLanguage?.code.toUpperCase()}
        </span>
        <svg
          className={`dropdown-arrow ${isOpen ? "open" : ""}`}
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="language-dropdown-menu">
          {languages.map((language) => (
            <button
              key={language.code}
              className={`language-option ${
                language.code === currentLocale ? "active" : ""
              }`}
              onClick={() => handleLanguageChange(language.code as Locale)}
              aria-label={`Switch to ${language.name}`}
            >
              <span className="language-flag">{language.flag}</span>
              <span className="language-name">{language.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
