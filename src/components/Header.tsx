import { useState } from 'react'
import './Header.css'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <img 
            src="https://sonsolesstays.com/wp-content/uploads/2024/11/Logo-transparente-105-1.png" 
            alt="Sonsoles Stays"
            className="logo"
            width="69"
            height="93"
          />
        </div>
        
        <nav className="nav">
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
          </button>
          
          <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#posts">Posts</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header