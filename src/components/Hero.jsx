import prmOffice from '../assets/images/prmoffice1x1.png';

const Hero = () => {
  return (
    <section id="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Hello, I'm Pranav Mahajan</h1>
          <h2>Java Developer | 2+ Years Experience</h2>
          <p>I specialize in building scalable web applications and RESTful APIs using Spring Boot and Java.</p>
          <a href="#contact" className="btn">Get in Touch</a>
        </div>
        <div className="hero-image">
          <img src={prmOffice} alt="Pranav Mahajan" />
        </div>
      </div>
    </section>
  );
};

export default Hero;