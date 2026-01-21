import { useEffect } from 'react';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden'; // 배경 스크롤 방지

    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = 'unset';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <div className="modal-header">
          <h2>{project.title}</h2>
          <div className="modal-company">{project.company}</div>
          <div className="modal-period">{project.period}</div>
        </div>

        <div className="modal-section">
          <h3>프로젝트 소개</h3>
          <p>{project.description}</p>
        </div>

        {project.role && (
          <div className="modal-section">
            <h3>주요 역할</h3>
            <ul>
              {project.role.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.achievement && (
          <div className="modal-section">
            <h3>성과</h3>
            <ul>
              {project.achievement.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="modal-section">
          <h3>기술 스택</h3>
          <div className="modal-tags">
            {project.tech.map((tech, index) => (
              <span key={index}>{tech}</span>
            ))}
          </div>
        </div>

        {project.link && project.link !== 'archived' && (
          <a href={project.link} target="_blank" rel="noopener noreferrer" className="modal-link">
            프로젝트 바로가기 →
          </a>
        )}
        {project.link === 'archived' && (
          <div className="modal-link archived-link">
            서비스 종료됨
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
