import React from "react";
import { useLocale } from "../../hooks/useLocale";
import { getConfig } from "../../config/locales";
import "./LegalPages.css";

const PoliticaPrivacidad: React.FC = () => {
  const locale = useLocale();
  const config = getConfig(locale);
  const t = config.legalPages.privacyPolicy;

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>{t.title}</h1>

        <p>{t.intro}</p>

        <p>{t.dataController}</p>

        <p>{t.purpose}</p>

        <p>{t.legalBasis}</p>

        <p>{t.recipients}</p>

        <p>{t.rights}</p>

        <p>{t.retention}</p>

        <p>{t.security}</p>

        <p>{t.cookies}</p>

        <p>{t.changes}</p>
      </div>
    </div>
  );
};

export default PoliticaPrivacidad;
