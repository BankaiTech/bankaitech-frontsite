import React from "react";

function ServicesSection() {
  const services = [
    { title: "Digital Banking", desc: "Securely manage your finances." },
    { title: "Mobile Solutions", desc: "Access accounts anytime, anywhere." },
    { title: "Financial Analytics", desc: "Gain insights for smarter decisions." }
  ];

  return (
    <section id="services" className="py-5 text-center">
      <div className="container">
        <h2 className="display-5 fw-bold">Our Services</h2>
        <div className="row mt-4">
          {services.map((service, index) => (
            <div key={index} className="col-md-4">
              <div className="card shadow-lg p-4">
                <h3 className="fw-bold">{service.title}</h3>
                <p className="text-muted">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;