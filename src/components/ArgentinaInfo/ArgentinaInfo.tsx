import React from 'react';
import { content, argentiniaInfo } from '../../config/travel-agency-config';
import './ArgentinaInfo.css';

const ArgentinaInfo: React.FC = () => {
  return (
    <section className="argentina-info" id="argentina">
      {/* First Parallax Section */}
      <div className="parallax-section parallax-1">
        <div className="parallax-content">
          <h2>Descubre la Patagonia</h2>
          <p>Glaciares milenarios que narran la historia de nuestro planeta</p>
        </div>
      </div>
      
      {/* Text Divider 1 */}
      <div className="parallax-divider">
        <div className="parallax-text">
          <h3>Experiencias Transformadoras</h3>
          <p>Los paisajes de la Patagonia ofrecen un aula natural incomparable donde los estudiantes pueden estudiar geología, cambio climático y conservación de primera mano.</p>
        </div>
      </div>
      
      {/* Second Parallax Section */}
      <div className="parallax-section parallax-2">
        <div className="parallax-content">
          <h2>Majestuosos Andes</h2>
          <p>Cordilleras que abrazan el cielo y despiertan el alma aventurera</p>
        </div>
      </div>
      
      {/* Main Content Section */}
      <div className="info-section section">
        <div className="container">
          <div className="section-intro">
            <div className="section-subtitle">¿Dónde en Argentina?</div>
            <h2 className="section-title">{content.argentinaSectionTitle}</h2>
            <p className="section-description">{content.argentinaSectionDescription}</p>
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