import React, { useState, useEffect } from 'react';
import { company, legal } from '../../config/travel-agency-config';
import './Header.css';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (href: string) => {
    closeMobileMenu();
    
    const target = document.querySelector(href);
    if (target) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { text: 'Inicio', href: '#inicio' },
    { text: 'Servicios', href: '#servicios' },
    { text: 'Argentina', href: '#argentina' },
    { text: 'Legal', href: '#legal' },
    { text: 'Contacto', href: '#contacto' }
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <a href="#" className="logo" onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}>
              {company.name}
            </a>
            <div className="license-info">
              <div>Agencia de Viajes Autorizada</div>
              <div>CICMA: {legal.cicma}</div>
              <div>NIF: {legal.nif}</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul className="nav-list">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="nav-link"
                    onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <nav className="nav-mobile">
            <button 
              className={`mobile-menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
              aria-label="Toggle menu"
              onClick={toggleMobileMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="mobile-menu-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  href={item.href} 
                  className="mobile-menu-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Mobile Overlay */}
        <div 
          className={`mobile-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={closeMobileMenu}
        ></div>
      </header>
    </>
  );
};

export default Header;