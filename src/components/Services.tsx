import './Services.css'

const services = [
  {
    id: 'accommodations',
    title: 'Comfortable Accommodations',
    description: 'Enjoy a relaxing environment with modern amenities, designed to provide the perfect escape.'
  },
  {
    id: 'service',
    title: 'Personalized Service',
    description: 'Our team is committed to making your stay effortless, offering attentive and customized service at every step.'
  },
  {
    id: 'booking',
    title: 'Seamless Booking',
    description: 'Easily check availability and book your stay through our intuitive platform, designed for convenience.'
  },
  {
    id: 'expertise',
    title: 'Local Expertise',
    description: 'Tap into insider knowledge about Alicante\'s best spots, from must-see landmarks to hidden gems, ensuring your stay is as enriching as it is comfortable.'
  },
  {
    id: 'support',
    title: 'Guest Support',
    description: 'We\'re here to assist you throughout your stay, ensuring everything goes smoothly from check-in to check-out.'
  },
  {
    id: 'flexibility',
    title: 'Flexible Stays',
    description: 'Whether you\'re planning a weekend getaway or an extended vacation, we offer flexible options to suit your needs.'
  }
]

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services-content">
        <div className="services-header">
          <h2 className="services-title">A Passion for Exceptional Stays</h2>
          <p className="services-subtitle">
            Our services are designed to cater to every guest, ensuring a comfortable and memorable experience, 
            whether you're here for a short stay or an extended visit.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services