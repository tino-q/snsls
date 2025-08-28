import React from "react";
import { compliance } from "../../config/travel-agency-config";
import "./LegalCompliance.css";

const LegalCompliance: React.FC = () => {
  const complianceItems = [
    {
      icon: "📋",
      title: "Licencia CICMA",
      description: compliance.cicmaDescription,
    },
    {
      icon: "🛡️",
      title: "Garantía Financiera",
      description: compliance.financialGuaranteeDescription,
    },
    {
      icon: "⚖️",
      title: "Seguro de Responsabilidad",
      description: compliance.liabilityInsuranceDescription,
    },
    {
      icon: "📄",
      title: "Ley LSSI",
      description: compliance.lssiCompliance,
    },
  ];

  return (
    <section className="legal-compliance section" id="legal">
      <div className="container">
        <div className="section-intro">
          <div className="section-subtitle">Garantías y Cumplimiento</div>
          <h2 className="section-title">
            Tu Tranquilidad es Nuestra Prioridad
          </h2>
          <p className="section-description">
            Operamos con total transparencia y cumplimiento legal, garantizando
            la máxima seguridad en cada programa educativo.
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
