import React from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services";
import ArgentinaInfo from "./components/ArgentinaInfo/ArgentinaInfo";
import LegalCompliance from "./components/LegalCompliance/LegalCompliance";
import Footer from "./components/Footer/Footer";
import { seo } from "./config/travel-agency-config";
import { useSEO } from "./hooks/useSEO";
import "./App.css";

const App: React.FC = () => {
  // Set dynamic SEO meta tags
  useSEO({
    title: seo.title,
    description: seo.description,
  });

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <ArgentinaInfo />
        <LegalCompliance />
      </main>
      <Footer />
    </>
  );
};

export default App;
