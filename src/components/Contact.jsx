const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-light">
      <div className="container">
        <h2>Get in Touch</h2>
        <div className="contact-links">
          <a href="#" target="_blank"><i className="fab fa-linkedin"></i> LinkedIn</a>
          <a href="#" target="_blank"><i className="fab fa-github"></i> GitHub</a>
          <a href="mailto:your-email@example.com"><i className="fas fa-envelope"></i> Email</a>
        </div>
        <p className="declaration">
          I hereby declare that the information provided above is true to the best of my knowledge.
        </p>
      </div>
    </section>
  );
};

export default Contact;