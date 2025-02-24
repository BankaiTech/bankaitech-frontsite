import React from "react";

function ContactSection() {
  return (
    <section id="contact" className="py-5 bg-light text-center">
      <div className="container">
        <h2 className="display-5 fw-bold">Contact Us</h2>
        <form className="mt-4 mx-auto" style={{ maxWidth: "500px" }}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Your Name" required />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Your Email" required />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;