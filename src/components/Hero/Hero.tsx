import React from 'react';
import { company, content } from '../../config/travel-agency-config';
import './Hero.css';

const Hero: React.FC = () => {
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector('#contacto');
    if (target) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="hero" id="inicio">
      <div className="hero-content">
        <div className="subtitle">{company.subtitle}</div>
        <h1>{content.heroTitle}</h1>
        <p>{content.heroDescription}</p>
        <a href="#contacto" className="cta-button" onClick={handleCtaClick}>
          {content.ctaButton}
        </a>
      </div>
    </section>
  );
};

export default Hero;