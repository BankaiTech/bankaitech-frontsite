import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-white text-center py-4">
      <p>© {new Date().getFullYear()} Bankaitech. All rights reserved.</p>
    </footer>
  );
}

export default Footer;