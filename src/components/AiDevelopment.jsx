import { hl } from '../utils/highlight';

const plugins = [
  {
    name: 'claude-auto-setup-plugin',
    description: '`멀티 에이전트 파이프라인`으로 프로젝트를 분석하고 .claude/ 설정을 자동 생성',
    detail: 'Analyzer-Interviewer-Generator-Reviewer 4단계 에이전트가 협업하여 CLAUDE.md, rules, skills를 프로젝트에 맞게 구성',
    tech: 'TypeScript',
    tags: ['Multi-Agent Pipeline', 'Project Analysis', 'Auto Config'],
    github: 'https://github.com/yhyuk/claude-auto-setup-plugin'
  },
  {
    name: 'claude-code-doctor',
    description: 'Claude Code 설정을 `3단계 32개 규칙`으로 진단하고 시각적 HTML 리포트 생성',
    detail: 'Anthropic 공식 문서 기반 규칙으로 토큰 효율성, 보안, 구조를 분석하여 A~F 등급 산출',
    tech: 'TypeScript',
    tags: ['3-Level Diagnosis', 'HTML Report', 'Official Standards'],
    github: 'https://github.com/yhyuk/claude-code-doctor'
  },
  {
    name: 'claude-session-manager',
    description: '백그라운드 Claude 세션을 `실시간 모니터링`하고 선택적으로 정리하는 CLI',
    detail: '프로세스 수집-분류-표시-종료 파이프라인으로 CPU/메모리 추적 및 Sleeping/고메모리 세션 안전 종료',
    tech: 'JavaScript',
    tags: ['CLI Dashboard', 'Process Pipeline', 'Resource Optimization'],
    github: 'https://github.com/yhyuk/claude-session-manager-plugin'
  },
  {
    name: 'claude-config',
    description: '`심볼릭 링크` 기반으로 여러 환경 간 Claude Code 설정을 Git 동기화',
    detail: '글로벌 설정, 문서, Obsidian 연동 스크립트를 한 저장소에서 관리하고 install/update 스크립트로 자동 배포',
    tech: 'Shell',
    tags: ['Config Sync', 'Multi Environment', 'Obsidian Integration'],
    github: 'https://github.com/yhyuk/claude-config'
  }
];

const aiItems = [
  {
    title: '역할 분리형 멀티 에이전트 파이프라인',
    description:
      'AI에게 "코드 짜줘"라고 요청하는 방식이 아닌, `개발 프로세스 자체를 설계`합니다. 계획-설계-구현-리뷰-테스트 각 단계에 전문 에이전트를 배치하고, 역할별로 분리된 에이전트가 `병렬로 협업`하는 파이프라인을 직접 구축했습니다.',
    details: [
      '`Architect`(설계) → `Executor`(구현) → `Reviewer`(리뷰) 에이전트 체인으로 단계별 품질 보장',
      '모호한 요구사항을 `인터뷰 기반으로 스펙화`하는 사전 단계를 추가하여 AI의 잘못된 추론 방지',
      'Java, React, Spring Boot 멀티 스택 환경에 특화된 `커스텀 에이전트`를 직접 설계하여 프레임워크별 컨벤션 준수'
    ],
    tags: ['Multi-Agent', 'Pipeline Design', 'Role Separation', 'Custom Agent']
  },
  {
    title: '30개 프로젝트 컨텍스트 영속화 시스템',
    description:
      'AI는 세션이 끊기면 모든 맥락을 잃습니다. 이 문제를 해결하기 위해 `프로젝트별 독립 메모리 시스템`을 구축하여, 기술 스택, 코딩 컨벤션, 진행 상황이 세션 간에 자동으로 유지되도록 설계했습니다.',
    details: [
      '프로젝트별 `CLAUDE.md` + `rules` + `skills` 조합으로 AI가 프로젝트 컨텍스트를 즉시 파악',
      '`프로젝트 런처`로 터미널에서 즉시 해당 프로젝트 환경에 진입하고, 설정이 자동 로드되는 워크플로우 구성',
      '실무(HMP, MEDI-CRM) + 사이드 프로젝트 전체에 `표준화된 설정 체계` 적용'
    ],
    tags: ['Context Persistence', 'Memory System', 'Project Launcher', 'Standardization']
  },
  {
    title: 'AI 출력물에 대한 자동 품질 게이트',
    description:
      'AI가 생성한 코드를 무조건 수용하지 않습니다. `7종의 자동화 Hook`으로 파일 수정부터 커밋까지 전 과정에 품질 검증을 자동 적용하여, AI 출력물도 사람이 작성한 코드와 동일한 기준을 통과하도록 강제합니다.',
    details: [
      '파일 저장 시 `자동 포맷팅` + TypeScript 타입 체크 + console.log 잔존 경고가 즉시 실행',
      'Git 커밋 전 `.env` 포함 여부, 위험 명령(`rm -rf` 등) `자동 차단`으로 보안 사고 예방',
      'MCP 도구 실행 전후 `감사 로깅`을 남겨 외부 도구 사용 이력을 추적 가능하게 구성'
    ],
    tags: ['Hook System', 'Quality Gate', 'Security Automation', 'Audit Logging']
  },
  {
    title: 'AI 세션 기반 지식 자동 축적',
    description:
      'AI와의 작업 이력이 휘발되지 않도록 `Obsidian 지식 베이스에 자동 연동`하여, 모든 개발 세션이 구조화된 노트로 축적되는 시스템을 구축했습니다. 반복 작업은 `학습 스킬`로 전환하여 재사용합니다.',
    details: [
      'Claude 세션 종료 시 `개발 노트를 자동 생성`하는 스크립트를 작성하여 수동 기록 제거',
      '주간 태스크 관리 스크립트와 연동하여 `작업 진행률을 시각화`하고 우선순위 조정에 활용',
      '`시퀀스 다이어그램 자동 생성` 등 반복 패턴을 스킬로 등록하여 한 번 배운 작업은 재사용'
    ],
    tags: ['Obsidian', 'Knowledge Automation', 'Session Logging', 'Learned Skills']
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
          {hl('`4개 오픈소스 플러그인` 직접 개발, `200개 이상의 전문 스킬`, `7종의 자동화 Hook`을 조합한 멀티 에이전트 파이프라인을 구축하여 30개 프로젝트에 적용하고 있습니다.')}
        </p>
      </div>

      <h3 className="ai-subtitle">Open Source Plugins</h3>
      <div className="ai-plugins">
        {plugins.map((plugin, i) => (
          <div key={i} className="ai-plugin">
            <div className="ai-plugin-header">
              <div className="ai-plugin-name">{plugin.name}</div>
              <span className="ai-plugin-tech">{plugin.tech}</span>
            </div>
            <p className="ai-plugin-desc">{hl(plugin.description)}</p>
            <p className="ai-plugin-detail">{plugin.detail}</p>
            <div className="ai-plugin-footer">
              <div className="ai-plugin-tags">
                {plugin.tags.map((tag, j) => (
                  <span key={j}>{tag}</span>
                ))}
              </div>
              <a
                href={plugin.github}
                className="ai-plugin-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>

      <h3 className="ai-subtitle">Development Workflow</h3>
      <div className="ai-items">
        {aiItems.map((item, i) => (
          <div key={i} className="ai-item">
            <div className="ai-item-number">{String(i + 1).padStart(2, '0')}</div>
            <div className="ai-item-content">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default AiDevelopment;
