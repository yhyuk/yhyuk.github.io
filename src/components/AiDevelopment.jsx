import { hl } from '../utils/highlight';

const aiItems = [
  {
    title: 'AI 에이전트 개발 파이프라인 구축',
    description:
      '`Claude Code CLI` 기반으로 계획-설계-구현-리뷰-테스트 전 단계에 전문 에이전트를 배치하는 개발 파이프라인을 직접 설계했습니다. 단순히 AI에게 코드를 생성시키는 방식이 아닌, 역할별로 분리된 에이전트가 `병렬로 협업`하는 구조입니다.',
    details: [
      '설계 전용 `Architect`, 구현 전용 `Executor`, 리뷰 전용 `Reviewer` 등 역할별 에이전트 분리 운용',
      '엔터프라이즈 멀티 스택(Java, React, Spring Boot) 환경에 특화된 `커스텀 에이전트` 직접 설계',
      '모호한 요구사항을 구조화하는 `인터뷰 기반 스펙 생성` 도구 제작'
    ],
    tags: ['Claude Code', 'Multi-Agent', 'Custom Agent', 'Pipeline Design']
  },
  {
    title: '프로젝트별 컨텍스트 영속화 시스템',
    description:
      '`30개 프로젝트`에 각각 독립된 설정과 메모리를 적용하여, 세션이 바뀌어도 프로젝트의 기술 스택, 컨벤션, 진행 상황이 유지되도록 구성했습니다. 매번 처음부터 설명할 필요가 없어지면서 실질적인 작업 시간이 단축됩니다.',
    details: [
      '프로젝트별 `CLAUDE.md` 가이드라인 작성으로 AI가 프로젝트 컨텍스트를 즉시 파악',
      '`프로젝트 런처` 구성으로 터미널에서 즉시 해당 프로젝트 환경 진입',
      'HMP, MEDI-CRM, GNUN-MP 등 실무 프로젝트 전체에 표준화 적용'
    ],
    tags: ['Context Management', 'Memory System', 'Project Launcher']
  },
  {
    title: 'Hook 기반 코드 품질 자동화',
    description:
      'AI가 생성한 코드도 사람이 작성한 코드와 동일한 품질 기준을 통과해야 한다는 원칙으로, `7종의 자동화 Hook`을 설계하여 파일 수정부터 커밋까지 전 과정에 품질 게이트를 적용했습니다.',
    details: [
      '파일 수정 시 `자동 포맷팅`, TypeScript 타입 체크, console.log 경고 자동 실행',
      'Git 커밋 전 `보안 검증` 및 위험 명령(`rm -rf` 등) 차단',
      'MCP 실행 전후 `감사 로깅`으로 외부 도구 사용 이력 추적'
    ],
    tags: ['Hook System', 'Quality Gate', 'Auto Format', 'Security']
  },
  {
    title: 'Obsidian 연동 지식 관리',
    description:
      'AI와의 모든 개발 세션이 `Obsidian`에 자동으로 기록되도록 연동하여, 작업 이력이 개인 지식 베이스로 축적되는 시스템을 구축했습니다.',
    details: [
      'Claude 세션 자동 기록 스크립트 작성으로 `개발 노트 자동 생성`',
      '주간 태스크 관리와 연동하여 작업 흐름 시각화',
      '`시퀀스 다이어그램 자동 생성` 등 반복 작업을 학습 스킬로 전환'
    ],
    tags: ['Obsidian', 'Knowledge Base', 'Auto Logging', 'Learned Skills']
  }
];

const AiDevelopment = () => {
  return (
    <div className="section">
      <h2 className="section-title">AI-Powered Development</h2>

      <div className="ai-summary">
        <p>
          {hl('AI를 단순 코드 생성 도구가 아닌, `개발 시스템`으로 설계하여 활용합니다.')}
        </p>
        <p>
          {hl('`4개 플러그인`, `200개 이상의 전문 스킬`, `7종의 자동화 Hook`을 조합한 멀티 에이전트 파이프라인을 직접 구축하여 30개 실무/사이드 프로젝트에 적용하고 있습니다.')}
        </p>
      </div>

      <div className="ai-items">
        {aiItems.map((item, i) => (
          <div key={i} className="ai-item">
            <div className="ai-item-title">{item.title}</div>
            <p className="ai-item-desc">{hl(item.description)}</p>
            <ul className="ai-item-list">
              {item.details.map((d, j) => (
                <li key={j}>{hl(d)}</li>
              ))}
            </ul>
            <div className="ai-item-tags">
              {item.tags.map((tag, j) => (
                <span key={j}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiDevelopment;
