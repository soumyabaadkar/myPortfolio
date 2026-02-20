import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/soumyabaadkar" target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/soumyabaadkar" target="_blank" rel="noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:soumya@example.com">
          <FaEnvelope />
        </a>
      </div>

      <p>&copy; {year} Soumya Baadkar. All Rights Reserved.</p>

      <button className="back-to-top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
};

export default Footer;