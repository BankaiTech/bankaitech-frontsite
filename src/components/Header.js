import React from "react";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
      <div className="container">
        <a className="navbar-brand fw-bold fs-3 text-primary" href="#home">BankaiTech</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#services">Services</a></li>
            <li className="nav-item"><a className="nav-link" href="#why-us">Why Us?</a></li>
            <li className="nav-item"><a className="nav-link btn btn-primary text-white px-4" href="#contact">Get Started</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;