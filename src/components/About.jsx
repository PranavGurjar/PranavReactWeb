import prmBlazer from '../assets/images/prm blazzer.png';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={prmBlazer} alt="Pranav Mahajan in a professional setting" />
          </div>
          <div className="about-text">
            <p><strong>Professional Summary</strong></p>
            <ul>
              <li>Java Developer with 2.5 years of experience in developing scalable web applications and RESTful APIs using Spring Boot and Java 8+.</li>
              <li>Expertise in Microservices architecture, JPA/Hibernate, and MySQL database operations.</li>
              <li>Skilled in writing clean, testable code and integrating third-party APIs and tools.</li>
              <li>Familiar with Agile methodology, Git, JIRA, and Postman for version control and issue tracking.</li>
              <li>Looking to contribute to high-performance teams and scalable enterprise solutions.</li>
            </ul>
            <p><strong>Education</strong></p>
            <ul>
              <li><strong>Bachelor of Engineering – Computer Science</strong></li>
              <li>SSBT College of Engineering & Technology – 2024</li>
              <li>CGPA: 8.64/10</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;