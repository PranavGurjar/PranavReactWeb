const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container">
        <h2>Work Experience</h2>
        <div className="job">
          <h3>Software Engineer | Eccentric Infotech</h3>
          <p className="date">March 2023 – Present</p>
          <ul>
            <li>Built scalable microservices using Java, Spring Boot, and Hibernate to improve application performance.</li>
            <li>Developed secure APIs using JWT and OAuth 2.0 for safe login and data access.</li>
            <li>Helped shift from a monolithic system to microservices, improving system speed and maintainability.</li>
            <li>Set up automated deployments using Jenkins and Ansible, reducing manual work.</li>
            <li>Integrated monitoring tools like ELK, Prometheus, and Grafana to track system health and alerts.</li>
          </ul>
        </div>
        <div className="job">
          <h3>Key Achievements</h3>
          <ul>
            <li>Reduced API response time by 40% through optimized code and queries.</li>
            <li>Improved deployment speed by 60% with enhanced CI/CD pipelines.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;