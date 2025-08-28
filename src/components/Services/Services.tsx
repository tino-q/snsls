import React from 'react';
import { content, services } from '../../config/travel-agency-config';
import './Services.css';

const Services: React.FC = () => {
  return (
    <section className="services section" id="servicios">
      <div className="container">
        <div className="section-intro">
          <div className="section-subtitle">Nuestros Servicios</div>
          <h2 className="section-title">{content.servicesTitle}</h2>
          <p className="section-description">{content.servicesDescription}</p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;