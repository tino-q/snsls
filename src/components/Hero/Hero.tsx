import React from "react";
import { company, content } from "../../config/travel-agency-config";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="subtitle">{company.subtitle}</div>
        <h1>{content.heroTitle}</h1>
        <p>{content.heroDescription}</p>
      </div>
    </section>
  );
};

export default Hero;
