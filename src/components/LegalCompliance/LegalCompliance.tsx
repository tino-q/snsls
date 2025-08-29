import React from "react";
import { useLocale } from "../../hooks/useLocale";
import { getConfig } from "../../config/locales";
import "./LegalCompliance.css";

const LegalCompliance: React.FC = () => {
  const locale = useLocale();
  const config = getConfig(locale);
  const { compliance } = config;

  const complianceItems = [
    {
      icon: "📋",
      title: compliance.cicmaLicense,
      description: compliance.cicmaDescription,
    },
    {
      icon: "🛡️",
      title: compliance.financialGuarantee,
      description: compliance.financialGuaranteeDescription,
    },
    {
      icon: "⚖️",
      title: compliance.liabilityInsurance,
      description: compliance.liabilityInsuranceDescription,
    },
    {
      icon: "📄",
      title: compliance.lssiLaw,
      description: compliance.lssiCompliance,
    },
  ];

  return (
    <section className="legal-compliance section" id="legal">
      <div className="container">
        <div className="section-intro">
          <div className="section-subtitle">
            {compliance.guaranteesAndCompliance}
          </div>
          <h2 className="section-title">{compliance.yourPeaceIsOurPriority}</h2>
          <p className="section-description">
            {compliance.operateWithTransparency}
          </p>
        </div>
        <div className="compliance-grid">
          {complianceItems.map((item, index) => (
            <div key={index} className="compliance-card">
              <h3>
                {item.icon} {item.title}
              </h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LegalCompliance;
