import './Attractions.css'

const attractions = [
  {
    id: 'old-town',
    title: "Alicante's Historic Old Town",
    image: 'https://sonsolesstays.com/wp-content/uploads/2024/11/image-8.png',
    features: [
      'Wander through the cobblestone streets of El Barrio',
      'Discover the stunning architecture of Santa María Basilica',
      'Enjoy vibrant nightlife surrounded by historic charm'
    ]
  },
  {
    id: 'beaches',
    title: "Alicante's Beaches and Calas",
    image: 'https://sonsolesstays.com/wp-content/uploads/2024/11/image-9.png',
    features: [
      'Bask in the sun on the golden sands of Postiguet Beach',
      'Snorkel in the crystal-clear waters of Cala Almadraba',
      'Unwind with breathtaking coastal views'
    ]
  }
]

const Attractions = () => {
  return (
    <section className="attractions" id="attractions">
      <div className="attractions-content">
        <div className="attractions-header">
          <h2 className="attractions-title">Discover Alicante's Treasures</h2>
          <p className="attractions-subtitle">
            Our carefully curated selection of resources invites you to explore the charm of Alicante, 
            a city brimming with history, culture, and Mediterranean allure. From stunning landmarks 
            to hidden gems, Alicante offers a vibrant mix of experiences for every traveler.
          </p>
        </div>

        <div className="attractions-list">
          {attractions.map((attraction, index) => (
            <div 
              key={attraction.id} 
              className={`attraction-item ${index % 2 === 1 ? 'attraction-reverse' : ''}`}
            >
              <div className="attraction-image">
                <img 
                  src={attraction.image} 
                  alt={attraction.title}
                  className="attraction-img"
                />
              </div>
              <div className="attraction-info">
                <h3 className="attraction-name">{attraction.title}</h3>
                <ul className="attraction-features">
                  {attraction.features.map((feature, idx) => (
                    <li key={idx} className="attraction-feature">
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Attractions