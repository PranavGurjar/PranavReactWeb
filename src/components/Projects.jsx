const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-light">
      <div className="container">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Employee Performance Tracking System</h3>
          <p>Built REST APIs to manage employee goals, performance reviews, and appraisals using Spring Boot and Hibernate.</p>
        </div>
        <div className="project-item">
          <h3>Online Banking Transaction Portal</h3>
          <p>Developed secure APIs for fund transfers and transaction history using Spring Boot, JWT, and PostgreSQL.</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;