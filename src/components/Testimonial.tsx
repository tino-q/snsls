import './Testimonial.css'

const Testimonial = () => {
  return (
    <section className="testimonial" id="testimonial">
      <div className="testimonial-content">
        <div className="testimonial-quote">
          <p className="quote-text">
            "Great apartment with magnificent views. We loved having breakfast on the terrace overlooking the sea. 
            The place is clean, practical, and well-located. We will happily return."
          </p>
          
          <div className="testimonial-author">
            <img 
              src="https://sonsolesstays.com/wp-content/uploads/2025/03/account-white-icon-150x150.png"
              alt="Oliver"
              className="author-avatar"
            />
            <div className="author-info">
              <h4 className="author-name">Oliver</h4>
              <p className="author-date">October 2024</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="testimonial-image">
        <img 
          src="https://sonsolesstays.com/wp-content/uploads/2024/11/b2f4d-aad5a1_93af706f47ca4ac1bb96ee802ff77483mv2.jpg"
          alt="Alicante landscape"
          className="testimonial-bg"
        />
      </div>
    </section>
  )
}

export default Testimonial