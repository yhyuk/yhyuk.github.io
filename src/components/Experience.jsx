import { hl } from '../utils/highlight';

const experiences = [
  {
    company: '아이엠폼 (IMFORM)',
    period: '2025.01 - 현재',
    position: '시스템팀 · 백엔드, 프론트엔드',
    description: '웹 에이전시 · SI/SM 프로젝트',
    summary: '기아, 현대, 강남언니 등 다양한 고객사 프로젝트를 담당하며 신규 개발부터 유지보수까지 전 주기를 경험했습니다. 강남언니 위챗 미니프로그램 백엔드 시스템과 포위드닥터 SaaS 플랫폼은 아키텍처 설계부터 외부 연동, 배포까지 혼자 주도한 프로젝트입니다. 새로운 기술이나 도구를 검증하고 빠르게 도입하는 것을 즐기며, 현재는 Claude Code를 업무 전반에 적극 활용해 설계 검토부터 코드 리뷰, 문서화까지 AI와 협업하는 방식으로 개발 생산성을 끌어올리고 있습니다.',
    tech: []
  },
  {
    company: '이노즈 (INROES)',
    period: '2023.09 - 2024.12',
    position: '서버팀 · 백엔드',
    description: '건기식 커머스 서비스 회사',
    summary: '건기식 커머스 서비스에서 팀과 함께 DB 설계부터 외부 결제 연동, 인프라 전환까지 end-to-end로 담당했습니다. 트래픽 규모가 크지 않았지만, 커머스 도메인 전반의 흐름을 처음부터 끝까지 직접 설계하고 운영하면서 실제 서비스가 돌아가는 구조를 체득했습니다.',
    tech: []
  },
  {
    company: '프리랜서',
    period: '2023.05 - 2023.09',
    position: '백엔드, 프론트엔드',
    description: '외주 프로젝트',
    summary: '짧은 기간이었지만 기획 해석부터 배포까지 혼자 전 과정을 수행하며 자기 주도적으로 일하는 방식을 체득했습니다.',

    tech: []
  },
  {
    company: '언라이크 (UNLIKE)',
    period: '2021.09 - 2023.05',
    position: '서버팀 · 백엔드, 프론트엔드',
    description: '웹 에이전시 · SI 프로젝트',
    summary: '개발자로서 처음 일을 시작한 곳으로, 백엔드부터 데이터베이스, 클라우드, 프론트엔드까지 경계 없이 폭넓게 경험했습니다. 한 영역에 갇히지 않고 다양한 레이어를 접하다 보니 시스템 전체를 보는 시야가 생겼고, 지금도 문제를 볼 때 특정 계층에 국한하지 않고 전체 흐름에서 원인을 찾는 습관이 여기서 만들어졌습니다.',
    tech: []
  }
];

const Experience = () => {
  return (
    <div className="section">
      <h2 className="section-title">Experience</h2>

      <div className="exp-timeline">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="exp-item">
          <div className="exp-header">
            <div className="exp-company">{exp.company}</div>
            <div className="exp-period">{exp.period}</div>
          </div>
          <div className="exp-position">{exp.position}</div>
          <p className="exp-summary">{hl(exp.summary)}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default Experience;
