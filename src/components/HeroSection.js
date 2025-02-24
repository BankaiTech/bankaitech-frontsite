import React from "react";
import heroBg from "../assets/image-bg.jpg";

function HeroSection() {
  return (
    <header id="home" className="vh-100 d-flex align-items-center text-center text-white bg-dark position-relative" style={{ background: `url(${heroBg}) center/cover`, backgroundBlendMode: "overlay" }}>
      <div className="container">
        <h1 className="display-4 fw-bold">Welcome to Bankaitech</h1>
        <p className="lead">Innovating financial solutions for a modern world.</p>
        <a href="#services" className="btn btn-primary btn-lg mt-3">Get Started</a>
      </div>
    </header>
  );
}

export default HeroSection;