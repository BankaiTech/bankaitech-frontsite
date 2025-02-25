import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p className="mb-0">© {new Date().getFullYear()} BankaiTech. All rights reserved.</p>
    </footer>
  );
}

export default Footer;