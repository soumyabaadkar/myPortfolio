import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p>Have a project or opportunity? Let’s talk!</p>

      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="contact-btn">
            Send Message
          </button>
        </form>
      </div>
      <div className="contact-links">
        <a href="https://github.com/soumyabaadkar" target="_blank" rel="noreferrer" className="contact-btn">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/soumyabaadkar" target="_blank" rel="noreferrer" className="contact-btn">
          LinkedIn
        </a>
        <a href="mailto:soumya@example.com" className="contact-btn">
          Email Me
        </a>
      </div>
    </section>
  );
};

export default Contact;