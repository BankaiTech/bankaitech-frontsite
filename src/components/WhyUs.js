import React from "react";

function WhyUs() {
  return (
    <section id="why-us" className="container py-5 text-center">
      <h2 className="fw-bold" data-aos="fade-up">Why React & Python?</h2>
      <div className="row mt-4">
        <div className="col-md-6" data-aos="fade-right">
          <h4 className="fw-bold text-primary">Why React for Frontend?</h4>
          <ul className="text-muted text-start">
            <li>⚡ Fast and efficient with Virtual DOM</li>
            <li>💡 Component-based architecture for reusable UI</li>
            <li>📱 Excellent for responsive and interactive apps</li>
          </ul>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <h4 className="fw-bold text-primary">Why Python for Backend?</h4>
          <ul className="text-muted text-start">
            <li>🚀 High performance with frameworks like Django & Flask</li>
            <li>🔒 Secure, scalable, and widely adopted</li>
            <li>📊 Best for AI, Machine Learning, and API development</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WhyUs;