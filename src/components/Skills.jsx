const Skills = () => {
  const skillsData = [
    {
      category: 'Languages',
      items: ['Java', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'SQL', 'Python']
    },
    {
      category: 'Frontend',
      items: ['Thymeleaf', 'Angular', 'Bootstrap']
    },
    {
      category: 'Backend',
      items: ['Spring Boot', 'Spring MVC', 'RESTful APIs']
    },
    {
      category: 'Database',
      items: ['MySQL']
    },
    {
      category: 'Tools',
      items: ['Git', 'Postman', 'Maven', 'VS Code', 'Eclipse', 'IntelliJ']
    },
    {
      category: 'Concepts',
      items: ['Microservices', 'Exception Handling', 'Collections', 'OOP', 'Stream API']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-light">
      <div className="container">
        <h2>Key Skills</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <div className="skill-category" key={index}>
              <h3>{skill.category}</h3>
              <ul>
                {skill.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;