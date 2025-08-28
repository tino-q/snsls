import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { company, legal } from "../../config/travel-agency-config";
import "./Header.css";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        closeMobileMenu();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const navItems = [
    { text: "Inicio", href: "/", isHome: true },
    { text: "Aviso Legal", href: "/aviso-legal", isHome: false },
    {
      text: "Política de Privacidad",
      href: "/politica-privacidad",
      isHome: false,
    },
  ];

  return (
    <>
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <Link to="/" className="logo">
              {company.name}
            </Link>
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
                  <Link
                    to={item.href}
                    className={`nav-link ${
                      location.pathname === item.href ? "active" : ""
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <nav className="nav-mobile">
            <button
              className={`mobile-menu-toggle ${
                isMobileMenuOpen ? "active" : ""
              }`}
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
        <div className={`mobile-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <ul className="mobile-menu-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  className={`mobile-menu-link ${
                    location.pathname === item.href ? "active" : ""
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Overlay */}
        <div
          className={`mobile-overlay ${isMobileMenuOpen ? "active" : ""}`}
          onClick={closeMobileMenu}
        ></div>
      </header>
    </>
  );
};

export default Header;
