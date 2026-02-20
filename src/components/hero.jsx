import React from "react";
import devImg from "../assets/dev.svg";

function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Hi, I'm Soumya 👋</h1>
        <h2>Aspiring Software Developer</h2>
        <p>
          I am a passionate developer eager to learn and grow. I enjoy building responsive and user-friendly web applications, solving problems, and improving my skills every day.
        </p>

        <div className="hero-buttons">
          <a
            href="/resume.pdf" // put your resume in public folder
            download
            className="btn primary"
          >
            Download Resume
          </a>
          <button className="btn secondary" onClick={handleContactClick}>
            Contact Me
          </button>
        </div>
      </div>

      <div className="hero-img">
        <img src={devImg} alt="developer illustration" />
      </div>
    </section>
  );
}

export default Hero;