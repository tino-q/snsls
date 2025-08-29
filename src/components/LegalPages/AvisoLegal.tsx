import React from "react";
import { useLocale } from "../../hooks/useLocale";
import { getConfig } from "../../config/locales";
import "./LegalPages.css";

const AvisoLegal: React.FC = () => {
  const locale = useLocale();
  const config = getConfig(locale);
  const t = config.legalPages.legalNotice;

  return (
    <div className="legal-page">
      <div className="legal-container">
        <h1>{t.title}</h1>

        <p>{t.intro}</p>

        <ul>
          <li>
            <strong>{t.companyName}</strong> {config.company.legalName}
          </li>
          <li>
            <strong>{t.taxId}</strong> {config.legal.nif}
          </li>
          <li>
            <strong>{t.address}</strong> {config.contact.address.street},{" "}
            {config.contact.address.postalCode} - {config.contact.address.city}{" "}
            ({config.contact.address.city})
          </li>
          <li>
            <strong>{t.registered}</strong>
          </li>
        </ul>

        <p>{t.responsibility}</p>

        <p>{t.contentDisclaimer}</p>

        <p>{t.thirdPartyLinks}</p>

        <p>{t.intellectualProperty}</p>

        <p>{t.dataProtection}</p>
      </div>
    </div>
  );
};

export default AvisoLegal;
