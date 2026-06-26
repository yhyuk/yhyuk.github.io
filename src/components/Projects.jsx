import { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { hl } from '../utils/highlight';

const badgeMap = {
  new: { label: '신규개발', className: 'badge-new' },
  maintain: { label: '유지보수', className: 'badge-maintain' },
  enhance: { label: '기능확장', className: 'badge-enhance' }
};

const TypeBadges = ({ project }) => {
  if (project.category === 'side') {
    return <span className="badge badge-side">사이드</span>;
  }
  return project.type?.map((type, i) => {
    const badge = badgeMap[type];
    return badge ? (
      <span key={i} className={`badge ${badge.className}`}>{badge.label}</span>
    ) : null;
  });
};

// ── Featured: 판단 우선형 ──
const FeaturedCard = ({ project }) => {
  const [open, setOpen] = useState(false);
  const paar = project.paar?.[0];

  return (
    <div className="featured-card">
      <span className="featured-flag">FEATURED</span>

      <div className="featured-head">
        <div className="featured-title-row">
          <span className="featured-title">{project.title}</span>
          <TypeBadges project={project} />
        </div>
        {project.subtitle && <div className="featured-subtitle">{project.subtitle}</div>}
        <div className="featured-company">
          {project.company}<span className="featured-period"> · {project.period}</span>
        </div>
      </div>

      <p className="featured-desc">{hl(project.description)}</p>
      <div className="featured-tech">{project.tech.join(' · ')}</div>

      {paar && (
        <div className="judge-hero">
          <span className="judge-hero-tag">Key Decision</span>
          <div className="judge-hero-title">{paar.title}</div>
          {paar.problem && (
            <div className="judge-row"><b>문제 ·</b> {hl(paar.problem)}</div>
          )}
          {paar.analyze && (
            <div className="judge-row"><b>선택 ·</b> {hl(paar.analyze)}</div>
          )}
          {paar.action && (
            <div className="judge-row"><b>감수한 것 ·</b> {hl(paar.action)}</div>
          )}
          {paar.result && (
            <div className="judge-row"><b>결과 ·</b> {hl(paar.result)}</div>
          )}
        </div>
      )}

      {((project.role && project.role.length > 0) ||
        (project.achievement && project.achievement.length > 0)) && (
        <>
          <button
            className={`collapse-toggle ${open ? 'open' : ''}`}
            onClick={() => setOpen(!open)}
          >
            <span>주요 작업 · 성과 자세히 보기</span>
            <span className="collapse-icon">{open ? '▲' : '▼'}</span>
          </button>

          {open && (
            <div className="collapse-body">
              {project.role && project.role.length > 0 && (
                <>
                  <div className="project-detail-title">주요 작업</div>
                  <ul className="project-list">
                    {project.role.map((item, i) => <li key={i}>{hl(item)}</li>)}
                  </ul>
                </>
              )}
              {project.achievement && project.achievement.length > 0 && (
                <>
                  <div className="project-detail-title">성과</div>
                  <ul className="project-list">
                    {project.achievement.map((item, i) => <li key={i}>{hl(item)}</li>)}
                  </ul>
                </>
              )}
            </div>
          )}
        </>
      )}

      {project.link && project.link !== 'archived' && (
        <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
          {project.link}
        </a>
      )}
    </div>
  );
};

// ── Tier 2: 접이식 항목 ──
const ProjectAccordion = ({ project }) => {
  const [open, setOpen] = useState(false);
  const [paarOpen, setPaarOpen] = useState(false);
  const paar = project.paar?.[0];

  return (
    <div className={`acc-item ${open ? 'open' : ''}`}>
      <button className="acc-head" onClick={() => setOpen(!open)}>
        <span className="acc-year">{project.year}</span>
        <span className="acc-name">
          {project.title}
          <TypeBadges project={project} />
        </span>
        <span className="acc-company">{project.company}</span>
        <span className="acc-icon">{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <div className="acc-body">
          {project.subtitle && (
            <div className="acc-sub">{project.subtitle} · {project.period}</div>
          )}
          <p className="acc-desc">{hl(project.description)}</p>
          <div className="acc-tech">{project.tech.join(' · ')}</div>

          {project.role && project.role.length > 0 && (
            <>
              <div className="project-detail-title">주요 작업</div>
              <ul className="project-list">
                {project.role.map((item, i) => <li key={i}>{hl(item)}</li>)}
              </ul>
            </>
          )}

          {project.achievement && project.achievement.length > 0 && (
            <>
              <div className="project-detail-title">성과</div>
              <ul className="project-list">
                {project.achievement.map((item, i) => <li key={i}>{hl(item)}</li>)}
              </ul>
            </>
          )}

          {paar && (
            <>
              <button
                className={`acc-paar-toggle ${paarOpen ? 'open' : ''}`}
                onClick={() => setPaarOpen(!paarOpen)}
              >
                <span className="acc-paar-tag">기술적 판단</span>
                <span className="acc-paar-title">{paar.title}</span>
                <span className="acc-paar-icon">{paarOpen ? '▲' : '▼'}</span>
              </button>
              {paarOpen && (
                <div className="acc-paar-body">
                  {paar.problem && (
                    <div className="acc-paar-step"><span className="acc-paar-badge">Problem</span><p>{hl(paar.problem)}</p></div>
                  )}
                  {paar.analyze && (
                    <div className="acc-paar-step"><span className="acc-paar-badge">Analyze</span><p>{hl(paar.analyze)}</p></div>
                  )}
                  {paar.action && (
                    <div className="acc-paar-step"><span className="acc-paar-badge">Action</span><p>{hl(paar.action)}</p></div>
                  )}
                  {paar.result && (
                    <div className="acc-paar-step"><span className="acc-paar-badge">Result</span><p>{hl(paar.result)}</p></div>
                  )}
                </div>
              )}
            </>
          )}

          {project.link && project.link !== 'archived' && (
            <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              {project.link}
            </a>
          )}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const featured = projectsData.filter((p) => p.featured);
  const others = projectsData.filter((p) => !p.featured);

  return (
    <div className="section">
      <h2 className="section-title">Featured Projects</h2>
      {featured.map((project) => (
        <FeaturedCard key={project.id} project={project} />
      ))}

      <h3 className="section-subtitle">Other Projects</h3>
      <div className="acc-list">
        {others.map((project) => (
          <ProjectAccordion key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
