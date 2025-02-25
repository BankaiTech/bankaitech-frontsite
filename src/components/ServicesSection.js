import React from "react";

function ServicesSection() {
  const services = [
    { title: "Software Development", desc: "Custom software tailored to business needs." },
    { title: "Web Hosting", desc: "Secure and scalable hosting solutions." },
    { title: "Database Management", desc: "Efficient data handling for businesses." },
    { title: "Cloud Solutions", desc: "Powerful cloud infrastructure for enterprises." }
  ];

  return (
    <section id="services" className="container py-5 text-center">
      <h2 className="fw-bold" data-aos="fade-up">Our Services</h2>
      <div className="row mt-4">
        {services.map((service, index) => (
          <div key={index} className="col-md-3 d-flex align-items-stretch" data-aos="zoom-in">
            <div className="card shadow-lg p-4 w-100">
              <h4 className="fw-bold">{service.title}</h4>
              <p className="text-muted">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSection;