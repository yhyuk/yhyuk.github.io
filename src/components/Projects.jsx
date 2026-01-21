import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Projects.css';

const Projects = ({ onProjectClick }) => {
  const [selectedYear, setSelectedYear] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sectionRef, isVisible] = useScrollAnimation();

  const years = ['all', '2026', '2025', '2024', '2023', '2022', '2021'];
  const categories = ['all', 'side'];

  const filteredProjects = projectsData.filter(project => {
    const yearMatch = selectedYear === 'all' || project.year === selectedYear;
    const categoryMatch = selectedCategory === 'all' || project.category === selectedCategory;
    return yearMatch && categoryMatch;
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
            <div className="filter-label">년도</div>
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

          <div className="filter-section">
            <div className="filter-label">카테고리</div>
            <div className="project-filters">
              {categories.map(category => (
                <button
                  key={category}
                  className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category === 'all' ? '전체' : '사이드'}
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
                  <h3>{project.title}</h3>
                  <span className="project-year">{project.year}</span>
                </div>
                <div className="project-company">{project.company}</div>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tech.map((tech, index) => (
                    <span key={index}>{tech}</span>
                  ))}
                </div>
                {project.link === 'archived' ? (
                  <div className="project-link archived">
                    서비스 종료됨
                  </div>
                ) : project.link ? (
                  <div className="project-link">
                    자세히 보기 →
                  </div>
                ) : (
                  <div className="project-link">
                    자세히 보기 →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
