import './Hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h2 className="hero-subtitle">Sonsoles Stays<br />Your Home in Alicante</h2>
        
        <h1 className="hero-title">Holiday apartments in Alicante</h1>
        
        <p className="hero-description">
          Family-run apartments offering comfort, local expertise, and genuine hospitality.
        </p>
        
        <div className="hero-image">
          <img 
            src="https://sonsolesstays.com/wp-content/uploads/2024/11/alicante-2656256_1280-1.jpg"
            alt="Alicante coastline view"
            className="hero-img"
          />
        </div>
        
        <div className="hero-cta">
          <a 
            href="https://sonsolesstays.kross.travel/book/step1" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button"
          >
            Book now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero