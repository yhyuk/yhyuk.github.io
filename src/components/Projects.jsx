import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = ({ onProjectClick }) => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [sectionRef, isVisible] = useScrollAnimation();

  const years = ['all', '2026', '2025', '2024', '2023', '2022', '2021'];

  const getTypeLabel = (type) => {
    const typeMap = {
      new: '신규개발',
      enhance: '기능확장',
      maintain: '유지보수'
    };
    return typeMap[type] || '';
  };

  const filteredProjects = projectsData.filter(project => {
    return selectedYear === 'all' || project.year === selectedYear;
  });

  return (
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-number">02. PROJECTS</div>
          <h2 className="section-title">All Projects</h2>
          <p className="section-subtitle">참여한 모든 프로젝트입니다</p>
        </div>

        <div className="projects-wrapper">
          <div className="filter-section">
            <div className="project-filters">
              {years.map(year => (
                <button
                  key={year}
                  className={`filter-btn ${selectedYear === year ? 'active' : ''}`}
                  onClick={() => setSelectedYear(year)}
                >
                  {year === 'all' ? '전체' : year}
                </button>
              ))}
            </div>
          </div>

          <div className={`projects-grid fade-in ${isVisible ? 'visible' : ''}`}>
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="project-card"
                onClick={() => onProjectClick(project)}
              >
                <div className="project-header">
                  <div className="project-title-group">
                    <h3>{project.title}</h3>
                    {project.subtitle && <div className="project-subtitle">{project.subtitle}</div>}
                  </div>
                  <div className="project-badges">
                    <span className="project-year">{project.year}</span>
                    {project.type && Array.isArray(project.type) && project.type.map((type, index) => (
                      <span key={index} className={`project-type ${type}`}>
                        {getTypeLabel(type)}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="project-company">{project.company}</div>
                <p className="project-desc">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
