import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <img 
              src="https://sonsolesstays.com/wp-content/uploads/2024/11/Logo-transparente-105-1.png"
              alt="Sonsoles Stays"
              className="footer-logo"
            />
            <h3 className="footer-title">Sonsoles Stays</h3>
          </div>
          
          <div className="footer-spacer"></div>
          
          <div className="footer-links">
            <div className="footer-section">
              <h4 className="footer-section-title">Privacy</h4>
              <ul className="footer-nav">
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/legal-notice">Legal Notice</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4 className="footer-section-title">Social</h4>
              <ul className="footer-nav">
                <li><a href="https://www.instagram.com/sonsolesstays/" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://www.airbnb.com/users/show/464431353" target="_blank" rel="noopener noreferrer">Airbnb</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-image">
          <img 
            src="https://sonsolesstays.com/wp-content/uploads/2024/11/image-12.png"
            alt="Alicante skyline"
            className="footer-img"
          />
        </div>
      </div>
      
      <div className="whatsapp-button">
        <a 
          href="https://wa.me/34676892817" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-link"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="whatsapp-icon"
          />
        </a>
      </div>
    </footer>
  )
}

export default Footer