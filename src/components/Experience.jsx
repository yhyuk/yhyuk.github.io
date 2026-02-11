import { hl } from '../utils/highlight';

const experiences = [
  {
    company: '아이엠폼 (IMFORM)',
    period: '2025.01 - 현재',
    position: '시스템팀 · 백엔드, 프론트엔드',
    description: '웹 에이전시 · SI/SM 프로젝트',
    achievements: [
      '다수 고객사 웹 서비스 백엔드/프론트 유지보수 및 신규 요구사항 반영',
      '`장애 재발 방지`를 위한 원인분석과 후속 조치 표준화',
      '타사 인수인계 프로젝트 `전면 리팩토링` 주도',
      '`API 스펙 문서화` 및 프로젝트 이슈 가이드 문서 작성',
      '`SSL 인증서 자동 갱신` 시스템 구축으로 운영 효율화',
      '백엔드 `코딩 컨벤션` 정립 및 팀 내 표준화 가이드 배포',
      '`SonarQube` 도입으로 코드 품질 관리 체계 구축',
      '레거시 프로젝트 현황 파악 및 운영/미운영 시스템 문서화'
    ],
    tech: ['Spring Boot', 'React', 'MySQL', 'MongoDB', 'Redis', 'AWS', 'Tencent Cloud']
  },
  {
    company: '이노즈 (INROES)',
    period: '2023.09 - 2024.12',
    position: '서버팀 · 백엔드',
    description: '건기식 커머스 서비스 회사',
    achievements: [
      '결제(KG이니시스), 본인인증(Danal, Popbill) 등 외부 서비스 연동 및 안정화',
      '택배 추적, 안심번호, SMS 등 운영 필수 서비스 통합',
      'OAuth 기반 SNS 로그인(Kakao, Naver, Facebook, Apple) 인증 시스템 구현',
      '`Dev/Stg/Prod` 서버 아키텍처 구성 및 배포 파이프라인 설계',
      '`와탭` 모니터링으로 슬로우쿼리 분석 및 최적화 (`3s → 1s`)',
      '커머스 전 영역 `DB 초기 설계`',
      '`AWS EC2 → ECS` 전환으로 리소스 효율 및 비용 절감'
    ],
    tech: ['Spring Boot', 'AWS ECS', 'Redis', 'MySQL']
  },
  {
    company: '프리랜서',
    period: '2023.05 - 2023.09',
    position: '백엔드, 프론트엔드',
    description: '외주 프로젝트',
    achievements: [
      '백오피스 데이터 가공 및 API 개발',
      '인프라 구축 및 배포환경 구성',
      '레거시 개편 및 서비스 장애 대응'
    ],
    tech: ['Spring Boot', 'React', 'MySQL', 'AWS']
  },
  {
    company: '언라이크 (UNLIKE)',
    period: '2021.09 - 2023.05',
    position: '서버팀 · 백엔드, 프론트엔드',
    description: '웹 에이전시 · SI 프로젝트',
    achievements: [
      'RESTful API 설계 및 공통 응답 구조 표준화로 개발 생산성 및 유지보수성 개선',
      '인프라 구축, API 개발 및 프론트엔드 신규 서비스 개발',
      '배포 과정에서 발생하는 이슈 해결 및 안정화 작업 수행',
      '`nGrinder` 성능테스트 도입으로 `SQL 튜닝` 및 코드 개선',
      '레거시 개편 및 서비스 장애 대응'
    ],
    tech: ['Spring Boot', 'React', 'MySQL', 'Redis', 'AWS']
  }
];

const Experience = () => {
  return (
    <div className="section">
      <h2 className="section-title">Experience</h2>

      {experiences.map((exp, index) => (
        <div key={index} className="exp-item">
          <div className="exp-header">
            <div className="exp-company">{exp.company}</div>
            <div className="exp-period">{exp.period}</div>
          </div>
          <div className="exp-position">{exp.position}</div>
          <div className="exp-desc">{exp.description}</div>
          <ul className="exp-list">
            {exp.achievements.map((item, i) => (
              <li key={i}>{hl(item)}</li>
            ))}
          </ul>
          <div className="exp-tech">
            {exp.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
