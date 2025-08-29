import React from "react";
import { Link } from "react-router-dom";
import { useLocale } from "../../hooks/useLocale";
import { getConfig } from "../../config/locales";
import "./Footer.css";

const Footer: React.FC = () => {
  const locale = useLocale();
  const config = getConfig(locale);
  const { company, contact, legal, footerSections, copyright, footer } = config;

  return (
    <footer id="contacto">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>{company.legalName}</h3>
            <p>
              {contact.address.street}
              <br />
              {contact.address.postalCode} {contact.address.city},{" "}
              {contact.address.country}
            </p>
            <p>
              {footer.phone} {contact.phone}
            </p>
            <p>
              {footer.email} {contact.email}
            </p>
          </div>
          <div className="footer-section">
            <h3>{footer.legalInformation}</h3>
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
            <h3>{footer.services}</h3>
            {footerSections.services.map((service, index) => (
              <a key={index} href={service.href} className="footer-link">
                {service.text}
              </a>
            ))}
          </div>
          <div className="footer-section">
            <h3>{footer.destinationsInArgentina}</h3>
            {footerSections.destinations.map((destination, index) => (
              <a key={index} href={destination.href} className="footer-link">
                {destination.text}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {copyright.year} {company.legalName} {copyright.text}
          </p>
          <p>
            NIF: {legal.nif} | CICMA: {legal.cicma} |{" "}
            {legal.mercantilRegistry.location}, {footer.tomo}{" "}
            {legal.mercantilRegistry.tome}, {footer.folio}{" "}
            {legal.mercantilRegistry.folio}, {footer.section}{" "}
            {legal.mercantilRegistry.section}, {footer.sheet}{" "}
            {legal.mercantilRegistry.sheet}
          </p>
          <p>
            {footer.financialGuarantee} {legal.financialGuarantee.provider}{" "}
            {footer.policyNumber} {legal.financialGuarantee.policyNumber}{" "}
            {footer.amount} {legal.financialGuarantee.amount}
          </p>
          <p>
            {footer.liabilityInsurance} {legal.liabilityInsurance.provider}{" "}
            {footer.policyNumber} {legal.liabilityInsurance.policyNumber}{" "}
            {footer.amount} {legal.liabilityInsurance.amount}
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
