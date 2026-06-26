const skillsData = [
  {
    category: 'Backend',
    items: ['Java', 'Spring Boot', 'JPA / QueryDSL', 'Node.js']
  },
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'Vue / Nuxt', 'TypeScript']
  },
  {
    category: 'Database',
    items: ['MySQL', 'Redis', 'MongoDB', 'MSSQL']
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS', 'Tencent Cloud', 'Docker', 'Nginx']
  },
  {
    category: 'DevOps & Monitoring',
    items: ['Prometheus / Grafana', 'k6 / nGrinder', 'SonarQube', 'Flyway']
  }
];

const Skills = () => {
  return (
    <div className="section">
      <h2 className="section-title">Skills</h2>
      <p className="project-desc" style={{ marginBottom: '16px' }}>
        기술 자체보다 문제 해결을 우선하며, 서비스 환경과 팀의 요구에 맞는 기술 스택을 선택합니다.
        특정 기술에 의존하기보다, 상황에 따라 최적의 설계와 도구를 적용하는 개발을 지향합니다.
      </p>
      {skillsData.map((skill, index) => (
        <div key={index} className="skill-item">
          <div className="skill-category">{skill.category}</div>
          <div className="skill-items">
            {skill.items.map((item, i) => (
              <span key={i} className="skill-tag">{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
