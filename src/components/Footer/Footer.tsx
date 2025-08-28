import React from 'react';
import { Link } from 'react-router-dom';
import { company, contact, legal, footerSections, copyright } from '../../config/travel-agency-config';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{company.legalName}</h3>
            <p>
              {contact.address.street}<br/>
              {contact.address.postalCode} {contact.address.city}, {contact.address.country}
            </p>
            <p>Teléfono: {contact.phone}</p>
            <p>Email: {contact.email}</p>
          </div>
          <div className="footer-section">
            <h3>Información Legal</h3>
            {footerSections.legalLinks.map((link, index) => {
              // Map the legal links to actual routes
              let route = link.href;
              if (link.text === "Aviso Legal") {
                route = "/aviso-legal";
              } else if (link.text === "Política de Privacidad") {
                route = "/politica-privacidad";
              }
              
              return (
                <Link key={index} to={route} className="footer-link">
                  {link.text}
                </Link>
              );
            })}
          </div>
          <div className="footer-section">
            <h3>Servicios</h3>
            {footerSections.services.map((service, index) => (
              <a key={index} href={service.href} className="footer-link">{service.text}</a>
            ))}
          </div>
          <div className="footer-section">
            <h3>Destinos en Argentina</h3>
            {footerSections.destinations.map((destination, index) => (
              <a key={index} href={destination.href} className="footer-link">{destination.text}</a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {copyright.year} {company.legalName} {copyright.text}</p>
          <p>
            NIF: {legal.nif} | CICMA: {legal.cicma} | {legal.mercantilRegistry.location}, 
            Tomo {legal.mercantilRegistry.tome}, Folio {legal.mercantilRegistry.folio}, 
            Sección {legal.mercantilRegistry.section}, Hoja {legal.mercantilRegistry.sheet}
          </p>
          <p>
            Garantía financiera constituida mediante póliza de seguro con {legal.financialGuarantee.provider} 
            nº {legal.financialGuarantee.policyNumber} por importe de {legal.financialGuarantee.amount}
          </p>
          <p>
            Seguro de responsabilidad civil con {legal.liabilityInsurance.provider} 
            nº {legal.liabilityInsurance.policyNumber} por importe de {legal.liabilityInsurance.amount}
          </p>
          
          {/* KitDigital Compliance Banner */}
          <div className="kit-digital-banner">
            <img 
              src="/kit-digital-banner.png" 
              alt="Kit Digital - Financiado por la Unión Europea NextGenerationEU"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;