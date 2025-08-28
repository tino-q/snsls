import Header from './components/Header'
import Hero from './components/Hero'
import Apartments from './components/Apartments'
import Attractions from './components/Attractions'
import Services from './components/Services'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Apartments />
        <Attractions />
        <Services />
        <Testimonial />
      </main>
      <Footer />
    </div>
  )
}

export default App
