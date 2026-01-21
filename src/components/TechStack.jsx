import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './TechStack.css';

const TechStack = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const techCategories = [
    {
      title: 'Backend',
      icon: '⚙️',
      techs: ['Java', 'Spring Boot', 'Spring Security', 'JPA/Hibernate', 'QueryDSL', 'MyBatis']
    },
    {
      title: 'Frontend',
      icon: '🎨',
      techs: ['React', 'JavaScript', 'HTML/CSS', 'Thymeleaf']
    },
    {
      title: 'Database',
      icon: '🗄️',
      techs: ['MySQL', 'PostgreSQL', 'Redis', 'MongoDB']
    },
    {
      title: 'Cloud & Infrastructure',
      icon: '☁️',
      techs: ['AWS (EC2, S3, RDS, Lambda)', 'Tencent Cloud', 'Docker', 'Nginx']
    },
    {
      title: 'DevOps & Tools',
      icon: '🔧',
      techs: ['Git/GitHub', 'Jenkins', 'Prometheus', 'Grafana', 'k6', 'Postman']
    }
  ];

  return (
    <section className="techstack" id="techstack" ref={sectionRef}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-number">03. TECH STACK</div>
          <h2 className="section-title">Tech Stack</h2>
          <p className="section-subtitle">사용 가능한 기술 스택입니다</p>
        </div>

        <div className={`tech-grid fade-in ${isVisible ? 'visible' : ''}`}>
          {techCategories.map((category, index) => (
            <div key={index} className="tech-category">
              <div className="tech-category-header">
                <span className="tech-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="tech-list">
                {category.techs.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
