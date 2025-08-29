import React from "react";
import { useLocale } from "../../hooks/useLocale";
import { getConfig } from "../../config/locales";
import "./ArgentinaInfo.css";

const ArgentinaInfo: React.FC = () => {
  const locale = useLocale();
  const config = getConfig(locale);
  const { content, argentiniaInfo } = config;

  return (
    <section className="argentina-info" id="argentina">
      {/* First Parallax Section */}
      <div className="parallax-section parallax-1">
        <div className="parallax-content">
          <h2>{content.discoverPatagonia}</h2>
          <p>{content.ancientGlaciers}</p>
        </div>
      </div>

      {/* Text Divider 1 */}
      <div className="parallax-divider">
        <div className="parallax-text">
          <h3>{content.transformativeExperiences}</h3>
          <p>{content.patagoniaLandscapes}</p>
        </div>
      </div>

      {/* Second Parallax Section */}
      <div className="parallax-section parallax-2">
        <div className="parallax-content">
          <h2>{content.majesticAndes}</h2>
          <p>{content.mountainRanges}</p>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="info-section section">
        <div className="container">
          <div className="section-intro">
            <div className="section-subtitle">{content.whereInArgentina}</div>
            <h2 className="section-title">{content.argentinaSectionTitle}</h2>
            <p className="section-description">
              {content.argentinaSectionDescription}
            </p>
          </div>
          <div className="info-grid">
            {argentiniaInfo.map((info, index) => (
              <div key={index} className="info-card">
                <span className="info-card-icon">{info.icon}</span>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArgentinaInfo;
