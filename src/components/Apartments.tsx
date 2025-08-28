import './Apartments.css'

const apartments = [
  {
    id: 'prado',
    name: 'Prado',
    location: 'San Juan',
    description: 'Perched across from the beach, Prado is a stylish 3-bedroom retreat with breathtaking 360º views. Accommodating up to 7 guests, it offers a serene and spacious stay perfect for leisure or remote work.',
    bookingUrl: 'https://sonsolesstays.kross.travel/impresionantes-vistas-al-mar-por-sonsoles-stays'
  },
  {
    id: 'quevedo',
    name: 'Quevedo',
    location: 'Carolinas Bajas',
    description: 'This modern and spacious apartment, Quevedo, offers comfort and style with two elegant bedrooms and central AC— perfect for getaways, groups, or business stays',
    bookingUrl: 'https://sonsolesstays.kross.travel/moderno-espacioso-y-ubicacin-ideal'
  },
  {
    id: 'montengon',
    name: 'Montengón',
    location: 'Old Town',
    description: 'A cozy 2-bedroom retreat in Alicante\'s old town, Montengón blends historic charm with modern comfort, just 5 minutes from the beach.',
    bookingUrl: 'https://sonsolesstays.kross.travel/autentico-piso-en-el-corazn-de-la-ciudad'
  },
  {
    id: 'bis',
    name: 'Bis',
    location: 'Carolinas Bajas',
    description: 'Bis combines comfort and practicality with a full kitchen, a cozy bedroom, and a patio—ideal for relaxing or working remotely.',
    bookingUrl: 'https://sonsolesstays.kross.travel/acogedor-y-comfortable-para-trabajar-o-vacacionar'
  },
  {
    id: 'bajito',
    name: 'Bajito',
    location: 'Carolinas Bajas',
    description: 'Sibling to Bis is Bajito, offering a stylish and practical retreat: fully equipped it is ready for remote work or vacations in Alicante.',
    bookingUrl: 'https://sonsolesstays.kross.travel/bajito'
  }
]

const Apartments = () => {
  return (
    <section className="apartments" id="apartments">
      <div className="apartments-content">
        <div className="apartments-header">
          <h2 className="apartments-title">A glimpse of our units</h2>
          <p className="apartments-subtitle">
            Explore our carefully designed apartments, each with a unique ambiance. 
            Whether you prefer cultural landmarks or coastal views, you'll find a welcoming retreat.
          </p>
        </div>

        <div className="apartments-list">
          {apartments.map((apartment, index) => (
            <div 
              key={apartment.id} 
              className={`apartment-item ${index % 2 === 1 ? 'apartment-reverse' : ''}`}
            >
              <div className="apartment-info">
                <h3 className="apartment-name">{apartment.name}</h3>
                <p className="apartment-description">{apartment.description}</p>
                <p className="apartment-location">{apartment.location}</p>
                <a 
                  href={apartment.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="apartment-book-btn"
                >
                  Book now
                </a>
              </div>
              <div className="apartment-image">
                <div className="image-placeholder">
                  <span>Gallery</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Apartments