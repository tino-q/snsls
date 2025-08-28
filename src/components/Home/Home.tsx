import React from "react";
import Hero from "../Hero/Hero";
import Services from "../Services/Services";
import ArgentinaInfo from "../ArgentinaInfo/ArgentinaInfo";
import LegalCompliance from "../LegalCompliance/LegalCompliance";

const Home: React.FC = () => {
  return (
    <main>
      <Hero />
      <Services />
      <ArgentinaInfo />
      <LegalCompliance />
    </main>
  );
};

export default Home;
