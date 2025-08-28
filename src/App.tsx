import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AvisoLegal from "./components/LegalPages/AvisoLegal";
import PoliticaPrivacidad from "./components/LegalPages/PoliticaPrivacidad";
import WhatsAppButton from "./components/WhatsAppButton/WhatsAppButton";
import { seo } from "./config/travel-agency-config";
import { useSEO } from "./hooks/useSEO";
import { useScrollToTop } from "./hooks/useScrollToTop";
import "./App.css";

const AppContent: React.FC = () => {
  // Set dynamic SEO meta tags
  useSEO({
    title: seo.title,
    description: seo.description,
  });

  // Scroll to top on route changes
  useScrollToTop();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politica-privacidad" element={<PoliticaPrivacidad />} />
      </Routes>
      <Footer />
      <WhatsAppButton
        phoneNumber="34676892817"
        message="Hola, me gustaría obtener más información sobre sus servicios de viajes a Argentina."
        size="medium"
        position="bottom-right"
      />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
