import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { hl } from '../utils/highlight';

const badgeMap = {
  new: { label: '신규개발', className: 'badge-new' },
  maintain: { label: '유지보수', className: 'badge-maintain' },
  enhance: { label: '기능확장', className: 'badge-enhance' }
};

const PAAR_LABELS = [
  { key: 'problem', label: 'Problem', desc: '왜 이 문제가 중요했나' },
  { key: 'analyze', label: 'Analyze', desc: '어떤 선택지를 검토했나' },
  { key: 'action',  label: 'Action',  desc: '어떤 트레이드오프를 관리했나' },
  { key: 'result',  label: 'Result',  desc: '어떤 지표로 검증했나' },
];

const PaarAccordion = ({ paar }) => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="paar-wrapper">
      {paar.map((item, i) => (
        <div key={i} className="paar-accordion">
          <button
            className={`paar-toggle ${openIndex === i ? 'open' : ''}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            <span className="paar-toggle-label">기술적 판단 과정</span>
            {item.title && <span className="paar-toggle-title">{item.title}</span>}
            <span className="paar-toggle-icon">{openIndex === i ? '▲' : '▼'}</span>
          </button>

          {openIndex === i && (
            <div className="paar-body">
              {PAAR_LABELS.map(({ key, label, desc }, j) => (
                item[key] && (
                  <div key={key} className="paar-step">
                    <div className="paar-step-left">
                      <span className="paar-step-badge">{label}</span>
                      {j < PAAR_LABELS.length - 1 && <div className="paar-step-line" />}
                    </div>
                    <div className="paar-step-content">
                      <div className="paar-step-desc">{desc}</div>
                      <p className="paar-step-text">{hl(item[key])}</p>
                    </div>
                  </div>
                )
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="section">
      <h2 className="section-title">Projects</h2>

      {projectsData.map((project) => (
        <div key={project.id} className="project-item" data-category={project.category}>
          <div className="project-header">
            <div className="project-title-row">
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
          <div className="project-tech">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
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

          {project.paar && project.paar.length > 0 && (
            <PaarAccordion paar={project.paar} />
          )}

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
