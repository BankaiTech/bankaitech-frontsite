import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyUs from "./components/WhyUs";  // ✅ Import WhyUs component
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });  // ✅ Initialize AOS for animations
    // ✅ Scroll to top on page reload
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyUs />  {/* ✅ Add the WhyUs section here */}
      <Footer />
    </div>
  );
}

export default App;