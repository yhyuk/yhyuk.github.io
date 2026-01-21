import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './Experience.css';

const Experience = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const experiences = [
    {
      company: '아이엠폼',
      period: '2025.01 - 현재',
      position: '시스템팀 풀스택 개발',
      description: '웹 에이전시 · SI/SM 프로젝트',
      achievements: [
        '다수 고객사 웹 서비스 백엔드/프론트 유지보수 및 신규 요구사항 반영',
        '장애 재발 방지를 위한 원인분석과 후속 조치 표준화',
        '타사 인수인계 프로젝트 전면 리팩토링 주도',
        'API 스펙 문서화 및 프로젝트 이슈 가이드 문서 작성'
      ],
      tech: ['Spring Boot', 'React', 'Redis', 'AWS', 'Tencent Cloud']
    },
    {
      company: '이노즈',
      period: '2023.09 - 2024.12',
      position: '백엔드 개발',
      description: '건기식 커머스 서비스 회사',
      achievements: [
        'Dev/Stg/Prod 서버 아키텍처 구성 및 배포 파이프라인 설계',
        '와탭 모니터링으로 트랜잭션·슬로우쿼리 분석 및 최적화 (3s → 1s)',
        '커머스 전 영역 DB 초기 설계',
        'AWS EC2 → ECS 전환으로 리소스 효율 및 비용 절감'
      ],
      tech: ['Spring Boot', 'React', 'AWS ECS', 'Redis', 'MySQL']
    },
    {
      company: '프리랜서',
      period: '2023.05 - 2023.09',
      position: '풀스택 개발',
      description: '외주 프로젝트',
      achievements: [
        '백오피스 데이터 가공 및 API 개발',
        '인프라 구축 및 배포환경 구성',
        '레거시 개편 및 서비스 장애 대응'
      ],
      tech: ['Spring Boot', 'React', 'MySQL', 'AWS']
    },
    {
      company: '언라이크',
      period: '2021.09 - 2023.05',
      position: '서버팀 풀스택 개발',
      description: '웹 에이전시 · SI 프로젝트',
      achievements: [
        '인프라 구축, API 개발 및 프론트엔드 신규 서비스 개발',
        'nGrinder 성능테스트 도입으로 SQL 튜닝 및 코드 개선',
        '레거시 개편 및 서비스 장애 대응'
      ],
      tech: ['Spring Boot', 'React', 'MySQL', 'Redis', 'AWS']
    }
  ];

  return (
    <section className="experience" id="experience" ref={sectionRef}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-number">04. EXPERIENCE</div>
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">경력 및 주요 성과입니다</p>
        </div>

        <div className={`experience-timeline fade-in ${isVisible ? 'visible' : ''}`}>
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-dot"></div>
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3>{exp.company}</h3>
                    <div className="experience-position">{exp.position}</div>
                  </div>
                  <div className="experience-period">{exp.period}</div>
                </div>
                <p className="experience-description">{exp.description}</p>
                <ul className="experience-achievements">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
                <div className="experience-tech">
                  {exp.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
