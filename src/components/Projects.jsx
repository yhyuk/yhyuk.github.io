import { projectsData } from '../data/projectsData';
import { hl } from '../utils/highlight';

const badgeMap = {
  new: { label: '신규개발', className: 'badge-new' },
  maintain: { label: '유지보수', className: 'badge-maintain' },
  enhance: { label: '기능확장', className: 'badge-enhance' }
};

const Projects = () => {
  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>

      {projectsData.map((project) => (
        <div key={project.id} className="project-item">
          <div className="project-header">
            <div>
              <span className="project-title">{project.title}</span>
              {project.category === 'side' ? (
                <span className="badge badge-side">사이드</span>
              ) : (
                project.type?.map((type, i) => {
                  const badge = badgeMap[type];
                  return badge ? (
                    <span key={i} className={`badge ${badge.className}`}>{badge.label}</span>
                  ) : null;
                })
              )}
            </div>
            <div className="project-meta">{project.period}</div>
          </div>
          <div className="project-company">{project.company}</div>
          <p className="project-desc">{hl(project.description)}</p>

          {project.role && project.role.length > 0 && (
            <>
              <div className="project-detail-title">주요 작업</div>
              <ul className="project-list">
                {project.role.map((item, i) => (
                  <li key={i}>{hl(item)}</li>
                ))}
              </ul>
            </>
          )}

          {project.achievement && project.achievement.length > 0 && (
            <>
              <div className="project-detail-title">성과</div>
              <ul className="project-list">
                {project.achievement.map((item, i) => (
                  <li key={i}>{hl(item)}</li>
                ))}
              </ul>
            </>
          )}

          <div className="project-tech">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>

          {project.link && project.link !== 'archived' && (
            <a
              className="project-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link}
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;
