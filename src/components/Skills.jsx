const skillsData = [
  {
    category: 'Backend',
    items: 'Java, Spring Boot, Spring MVC, Spring Security, Spring Data JPA, Spring Data Redis, Spring WebFlux, QueryDSL, MyBatis, Node.js, Express, Loopback'
  },
  {
    category: 'Frontend',
    items: 'React, Next.js, Nuxt.js, Vue.js, TypeScript, HTML/CSS, Thymeleaf'
  },
  {
    category: 'Database',
    items: 'MySQL, MariaDB, Redis, MongoDB, MSSQL Server, Oracle, H2'
  },
  {
    category: 'Cloud & Infrastructure',
    items: 'AWS (EC2, ECS, S3, RDS, CloudFront, Lightsail, Amplify), Tencent Cloud (CLB, COS, TDSQL, CVM), Docker, Nginx'
  },
  {
    category: 'DevOps & Monitoring',
    items: 'Prometheus, Grafana, Whatap, k6, nGrinder, SonarQube, Jenkins, Flyway'
  },
  {
    category: 'Tools',
    items: 'Git, GitHub, Bitbucket, GitLab, Jira, Postman, Swagger'
  }
];

const Skills = () => {
  return (
    <div className="section">
      <h2 className="section-title">Skills</h2>

      {skillsData.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-category">{skill.category}</div>
          <div className="skill-items">{skill.items}</div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
