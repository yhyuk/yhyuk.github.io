export const projectsData = [
  // 2026
  {
    id: 'gangnamunni',
    year: '2026',
    type: ['new'],
    title: '강남언니 M.P 서비스',
    subtitle: 'WeChat 미니프로그램 백엔드 API 시스템',
    company: '힐링페이퍼 (Healing Paper)',
    period: '2025.11 - 진행 중',
    description: '강남언니 서비스를 중국 시장에 진출시키기 위한 위챗 미니프로그램 백엔드 시스템을 설계 및 구축했습니다. `멀티 모듈 아키텍처`(Core/Proxy/Sync/Tracking)를 통해 병원/이벤트 정보 제공, 상담 신청, `실시간 데이터 동기화`, 사용자 행동 트래킹 등 전체 생명주기를 관리하며, 한국-중국 간 실시간 데이터 동기화 및 인증/트래킹 시스템을 구현했습니다.',
    tech: ['Java 21', 'Spring Boot', 'Gradle', 'MySQL', 'Spring Data JPA', 'Redis', 'Spring WebFlux', 'Docker', 'Prometheus', 'Grafana', 'TencentCloud'],
    role: [
      '백엔드 시스템 설계 및 구현',
      '인증 및 보안 시스템 구축',
      '`데이터 동기화 프레임워크` 설계',
      '`부하 테스트`를 통한 성능 최적화 및 모니터링 구축',
      '주요 기능 문서화 정리'
    ],
    achievement: [
      '`Redis 분산락` + `Exponential Backoff` 재시도 전략 도입으로 동기화 충돌 방지 및 성공률 `99.9%` 확보',
      '`Redis Stream` 기반 인하우스 이벤트 수집기 구축, Consumer Group 활용으로 이벤트 순서 보장 및 유실률 `0%` 달성',
      '출시 전 부하 테스트로 슬로우쿼리 `12건` 탐지 및 최적화, 평균 응답 속도 `약 60%` 개선'
    ],
    link: null
  },
  // 2025
  {
    id: 'kia80',
    year: '2025',
    type: ['new'],
    title: '기아 헤리티지 (KIA-HERITAGE)',
    subtitle: '기아 80주년 포스터 이벤트',
    company: '기아 (KIA)',
    period: '2025.08 ~ 2025.10',
    description: '기아자동차 창립 80주년을 기념하는 사진 응모 이벤트 플랫폼입니다. 사용자는 본인의 사진을 업로드하여 커스텀 포스터를 생성하고 다운로드할 수 있으며, `Redis 큐`를 활용한 `비동기 이미지 처리`로 대용량 트래픽에 대응할 수 있도록 설계했습니다.',
    tech: ['Java 21', 'Spring Boot', 'Spring Data JPA', 'Redis', 'MariaDB', 'Docker', 'Prometheus', 'Grafana', 'NCP'],
    role: [
      '사용자/관리자 백엔드 API 설계 및 개발',
      '`비동기 이미지 처리` 시스템 구축',
      '인증 및 보안 시스템',
      '관리자 프론트엔드 개발',
      '데이터베이스 설계 및 최적화',
      '파일 스토리지 연동',
      '`모니터링` 및 성능 관리'
    ],
    achievement: [
      '이미지 합성 파이프라인을 단일 폴링에서 `배치 + 병렬 처리`로 전환, 처리량 `약 5배` 향상 및 큐 대기시간 `약 70%` 단축',
      '`백프레셔` 슬롯 계산 및 Rejection 시 큐 되돌림으로 `at-least-once` 보장, 이미지 유실률 `0%` 달성',
      '`Prometheus + Grafana` 기반 합성 파이프라인 메트릭 대시보드 구축으로 실패율 급증 시 `조기 탐지 및 즉시 대응` 체계 확보'
    ],
    link: 'archived'
  },
  {
    id: 'hyundai',
    year: '2025',
    type: ['maintain', 'enhance'],
    title: 'H.M.P (Hyundai Mobility Passport)',
    subtitle: '오키나와·하와이 렌터카 예약 관리 시스템',
    company: '현대 (HYUNDAI)',
    period: '2025.07 - 진행 중',
    description: '현대자동차의 해외 차량 대여 서비스를 위한 통합 예약 관리 플랫폼입니다. 오키나와와 하와이 두 지역의 독립적인 사용자 웹사이트와 통합 관리자 시스템으로 구성되어 있으며, `Next.js` 기반으로 백엔드와 프론트를 같이 개발한 프로젝트입니다.',
    tech: ['Next.js', 'React', 'MySQL', 'AWS'],
    role: [
      '`레거시 코드 리팩토링` 및 공통화',
      '운영환경 `로그 개선`',
      '코드 품질 및 유지보수성 향상',
      '추가 기능 개발'
    ],
    achievement: [
      '외부 통신 안정성 및 유지보수성 향상',
      '`eDM/알림톡` 발송 시스템 전체 개편',
      '운영 효율성 및 장애 대응 능력 강화',
      '`API 응답 처리 표준화`',
      '`브랜치 전략 개선`으로 배포 안정성 확보'
    ],
    link: 'https://www.hyundai.com/jp/hyundai-mobility-passport/in-okinawa'
  },
  {
    id: 'miniprogram',
    year: '2025',
    type: ['maintain', 'enhance'],
    title: '미니파이 (MINIPIE)',
    subtitle: 'K-POP 음반사 통합 커머스 위챗 미니프로그램 플랫폼',
    company: '위버스, 사운드웨이브, 메이크스타, 스타원',
    period: '2025.01 - 진행 중',
    description: '다수의 음반사가 입점한 중국 시장 대상 K-POP 커머스 플랫폼입니다. `Node.js 기반의 MSA` 구조로 설계되어 있으며, 각 입점사별 독립적인 상품 관리, 주문 처리, 결제, 배송, 통계 분석 기능을 제공합니다. 기존 `레거시 시스템`을 인수인계 받아 유지보수, 성능 개선, 신규 기능 개발을 수행했습니다.',
    tech: ['Node.js', 'Loopback', 'PM2', 'MongoDB', 'Redis', 'React', 'TypeScript', 'TencentCloud'],
    role: [
      '다수 입점사 커머스 시스템 유지보수 및 개발',
      '위챗 미니프로그램 배포 및 심사 대응',
      '`유입 통계 스케줄러` 개선',
      '`MSA 프로젝트 아키텍처 문서화`',
      'API 연결 파이프라인 문서화',
      '`서버 로그 체계` 개선'
    ],
    achievement: [
      '안정적인 `다중 입점사 운영 환경` 구축',
      '통계 시스템 정확성 및 성능 향상',
      '`MSA 시스템 가시성` 향상',
      '운영 안정성 및 `디버깅 효율성` 증대',
      '레거시 시스템 유지보수 경험 축적'
    ],
    link: 'https://miniprogram.co.kr'
  },
  {
    id: 'archery',
    year: '2025',
    type: ['maintain', 'enhance'],
    title: '대한양궁협회 공식 홈페이지',
    subtitle: '대회·선수·콘텐츠 통합 관리 백오피스 플랫폼',
    company: '대한양궁협회',
    period: '2025.03 - 진행 중',
    description: '대한양궁협회의 공식 홈페이지 및 관리자 시스템으로, 국내외 양궁 대회 일정, 경기 결과, 선수 정보를 통합 관리하는 플랫폼입니다. `World Archery` 및 대한체육회 등 외부 기관과의 데이터 연동을 지원합니다. 기존 시스템을 인수인계 받아 유지보수, 성능 개선, 기능 고도화 작업을 수행했습니다.',
    tech: ['Java 11', 'Spring Boot', 'Spring Security', 'Spring Data JPA', 'MariaDB', 'MSSQL Server', 'Flyway', 'MyBatis', 'Apache POI', 'AWS'],
    role: [
      '백오피스 API 고도화 및 유지보수',
      '외부 시스템 연동 개선',
      '`알림 시스템` 개발',
      'SNS 연동 개선',
      '`레거시 코드 리팩토링`'
    ],
    achievement: [
      '외부 연동 안정성 확보',
      '`실시간 알림 시스템` 구축',
      '`SNS 연동 자동화`',
      '코드 품질 및 유지보수성 향상',
      '관리자 백오피스 기능 강화'
    ],
    link: 'https://www.archery.or.kr'
  },
  {
    id: 'savezone',
    year: '2025',
    type: ['maintain'],
    title: '세이브존 공식 홈페이지',
    subtitle: '세이브존 회원·매장 통합 관리 플랫폼',
    company: '세이브존(Savezone)',
    period: '2025.01 - 진행 중',
    description: '세이브존은 대형마트/할인점을 운영하는 유통 기업의 공식 홈페이지로, 회원 관리, 매장 안내, 이벤트 운영 등을 통합적으로 관리하는 플랫폼입니다. `마이크로서비스 아키텍처`로 설계되어 인증, 고객 관리, 주문 처리, 이벤트 관리 등이 독립적으로 운영됩니다.',
    tech: ['Node.js', 'Loopback', 'MongoDB', 'PM2', 'React', 'TypeScript', 'AWS'],
    role: [
      '시스템 유지보수 및 버그 개선',
      '`카카오 로그인` 회원 데이터 복구 작업',
      '카카오 로그인 처리 로직 보강'
    ],
    achievement: [
      '시스템 안정성 향상',
      '`데이터 무결성` 확보',
      '카카오 로그인 안정성 강화'
    ],
    link: 'https://esavezone.co.kr'
  },
  {
    id: 'savezone-event',
    year: '2025',
    type: ['new'],
    title: '세이브존 이벤트 플랫폼',
    subtitle: '지점별 맞춤형 이벤트 관리 시스템',
    company: '세이브존(Savezone)',
    period: '2025.02 - 진행 중',
    description: '세이브존 유통 매장의 지점별 맞춤형 이벤트를 운영하기 위한 통합 플랫폼입니다. 기존 `Node.js 기반 레거시` 이벤트 시스템을 `Java로 전환`하여 통합하면서 성능과 유지보수성을 개선했으며, `Redis 기반 확률 추첨 로직`을 구축하여 안정적인 이벤트 운영 환경을 제공했습니다.',
    tech: ['Java 17', 'Spring Boot', 'Spring Data JPA', 'Redis', 'MariaDB', 'MongoDB', 'Nuxt.js', 'Vue', 'TypeScript', 'Docker', 'NCP'],
    role: [
      '지점별 이벤트 콘텐츠 API 개발',
      '`레거시 시스템 Java 전환` 및 구조 개선',
      '`카카오 소셜 로그인` 연동 및 순위 시스템 구현',
      '`확률 기반 경품 추첨 시스템` 구축',
      '관리자 백오피스 개발'
    ],
    achievement: [
      '`레거시 시스템 현대화`',
      '확률 추첨 시스템 안정성 확보',
      '지점별 맞춤형 이벤트 운영'
    ],
    link: 'https://esavezone.co.kr/event-progress'
  },
  {
    id: 'luckyhotto',
    year: '2025',
    type: ['new'],
    category: 'side',
    title: '행운의 호또',
    subtitle: '로또 번호 생성 및 익명 커뮤니티 서비스',
    company: '개인 사이드 프로젝트',
    period: '2025.01 ~ 2025.01',
    description: '로또 번호 생성 및 저장, 익명 커뮤니티 기능을 제공하는 웹 서비스입니다. `동행복권 API`를 연동하여 실시간 당첨번호 조회 기능을 제공하며, `AWS Lightsail`을 활용하여 저비용으로 인프라를 구축 및 운영했습니다.',
    tech: ['Spring Boot', 'JPA', 'React', 'AWS Lightsail'],
    role: [
      'Spring Boot 기반 백엔드 API 설계 및 개발',
      'React 프론트엔드 UI 개발',
      '`동행복권 외부 API` 연동',
      'AWS Lightsail 인프라 구축 및 배포',
      '익명 커뮤니티 시스템 설계 및 구현'
    ],
    achievement: [
      '`동행복권 API` 연동으로 실시간 당첨번호 조회 시스템 구축',
      '익명 게시판/댓글/좋아요 기능으로 사용자 참여형 커뮤니티 구현',
      '`AWS Lightsail` 기반 저비용 인프라 운영',
      '`풀스택 1인 개발`로 기획부터 배포까지 전 과정 수행'
    ],
    link: 'archived'
  },
  {
    id: 'memorial',
    year: '2025',
    type: ['new'],
    category: 'side',
    title: '온라인 분향소',
    subtitle: '무안공항 참사 희생자 추모 플랫폼',
    company: '개인 사이드 프로젝트',
    period: '2025.01 ~ 2025.01',
    description: '무안공항 참사 희생자를 추모하기 위한 온라인 분향소 서비스입니다. `Kotlin`과 `Spring Boot`를 활용한 백엔드와 React 프론트엔드로 구성되어 있으며, 사회적 이슈에 빠르게 대응하여 기획부터 배포까지 단기간에 완료한 프로젝트입니다.',
    tech: ['Spring Kotlin', 'JPA', 'React', 'AWS Lightsail'],
    role: [
      '`Kotlin + Spring Boot` 기반 백엔드 API 개발',
      'React 프론트엔드 UI 개발',
      'AWS Lightsail 인프라 구축 및 배포',
      '익명 추모 메시지 시스템 설계 및 구현',
      '데이터베이스 스키마 설계'
    ],
    achievement: [
      '`Kotlin` 기반 Spring Boot 백엔드 구축 경험',
      '익명 사용자 추모 게시글 시스템 구현',
      '빠른 기획 및 개발로 사회적 이슈 대응',
      '`풀스택 1인 개발`로 전체 서비스 구축'
    ],
    link: 'archived'
  },
  // 2024
  {
    id: 'linme',
    year: '2024',
    type: ['new'],
    title: '건기식 개인화 커머스',
    subtitle: '건강기능식품 맞춤형 쇼핑몰 플랫폼',
    company: '이노즈(Inroes)',
    period: '2023.09 ~ 2024.12',
    description: '건강기능식품 맞춤형 추천 및 구매를 위한 커머스 플랫폼입니다. 커머스 전 영역의 `데이터베이스 스키마를 초기 설계`하고, 본인인증, `PG 결제`, 택배조회 등 다양한 서드파티 API를 연동했습니다. `AWS EC2에서 ECS로` 인프라를 전환하여 비용을 절감하고 배포 파이프라인을 구축했습니다.',
    tech: ['Spring Boot', 'React', 'AWS ECS', 'Redis', 'MySQL'],
    role: [
      '커머스 전 영역 `DB 스키마 초기 설계`',
      '본인인증, `결제(PG)`, 택배조회 API 연동',
      '상품·주문·배송·정산 백엔드 API 개발',
      '`AWS EC2에서 ECS로` 인프라 전환',
      '`Dev/Stg/Prod` 환경 분리 및 배포 파이프라인 구축'
    ],
    achievement: [
      '`AWS EC2 → ECS` 전환으로 월 인프라 비용 `30% 절감`',
      '와탭 모니터링으로 슬로우쿼리 개선 (`3s → 1s`)',
      '`Dev/Stg/Prod` 환경 분리로 안정적인 배포 파이프라인 구축'
    ],
    link: 'archived'
  },
  // 2023
  {
    id: 'forloud',
    year: '2023',
    type: ['new'],
    title: '인플루언서 배송 관리 플랫폼',
    subtitle: '엑셀 기반 구매자·배송 데이터 업로드/다운로드 시스템',
    company: '포라우드(Forloud)',
    period: '2023.05 ~ 2023.09',
    description: '인플루언서가 구매자 및 배송 정보를 관리할 수 있는 웹 플랫폼입니다. `Apache POI`를 활용하여 엑셀 파일 업로드/다운로드 기능을 구현하고, `QueryDSL`을 적용하여 동적 쿼리를 간소화했습니다.',
    tech: ['Spring Boot', 'JPA', 'QueryDSL', 'Apache POI'],
    role: [
      'Spring Boot 기반 백엔드 API 설계 및 개발',
      '프론트엔드 UI 개발',
      '`Apache POI` 활용 엑셀 업로드/다운로드 기능 구현',
      '`QueryDSL` 기반 동적 검색/필터 쿼리 개발',
      '데이터베이스 설계'
    ],
    achievement: [
      '엑셀 기반 `대량 데이터 처리` 시스템 구축',
      '`QueryDSL` 적용으로 복잡한 검색 조건 쿼리 간소화'
    ],
    link: null
  },
  {
    id: 'abiman',
    year: '2023',
    type: ['new'],
    title: '아비만 모니터링 시스템',
    subtitle: '스마트팩토리 실시간 현황 대시보드',
    company: '아비만(Abiman)',
    period: '2023.01 ~ 2023.03',
    description: '스마트팩토리 설비 및 생산 현황을 실시간으로 모니터링하는 대시보드 시스템입니다. `Next.js SSR`을 활용하여 초기 로딩 속도를 개선하고, 실시간 그래프 연동으로 생산 데이터를 시각화했습니다.',
    tech: ['Next.js', 'Zustand', 'React Query', 'AWS Amplify'],
    role: [
      'Next.js 기반 프론트엔드 개발',
      '`SSR` 적용 및 초기 로딩 성능 최적화',
      '실시간 그래프 연동 및 데이터 시각화',
      '`Zustand` 상태 관리 및 `React Query` 서버 데이터 캐싱 구현',
      'AWS Amplify 배포 환경 구축'
    ],
    achievement: [
      '`SSR` 적용으로 초기 로딩 속도 개선',
      '`실시간 생산 현황 모니터링` 대시보드 구축'
    ],
    link: null
  },
  {
    id: 'unlike',
    year: '2023',
    type: ['new'],
    title: '언라이크 소개 페이지',
    subtitle: '브랜드 홍보 및 서비스 소개 웹사이트',
    company: '언라이크(Un:like)',
    period: '2022.11 ~ 2023.01',
    description: '언라이크 브랜드의 서비스 및 회사 정보를 소개하는 공식 웹사이트입니다. 기존 `React.js`를 `Next.js`로 전환하여 `SSR`을 적용하고, `SEO`를 최적화했습니다. `Google Analytics`를 연동하여 사용자 행동 데이터를 분석할 수 있도록 구축했습니다.',
    tech: ['Next.js', 'SEO'],
    role: [
      '`React.js에서 Next.js`로 프레임워크 전환',
      '`SSR` 적용 및 `SEO` 최적화',
      '메타 태그 및 구조화된 데이터 설정',
      '`Google Analytics` 연동',
      '관리자 백오피스 개발'
    ],
    achievement: [
      '`Next.js` 전환으로 SEO 및 초기 로딩 성능 개선',
      '`Google Analytics` 연동으로 사용자 행동 분석 환경 구축'
    ],
    link: 'archived'
  },
  {
    id: 'doldol',
    year: '2023',
    type: ['maintain', 'enhance'],
    title: '돌돌 화물 운송 서비스',
    subtitle: '위치 기반 실시간 화물 매칭 플랫폼',
    company: '돌돌(DolDol)',
    period: '2022.05 ~ 2023.05',
    description: '화물 운송 의뢰자와 운송 기사를 매칭하는 위치 기반 물류 플랫폼입니다. `실시간 푸시 알림`과 문자 발송 기능을 통해 운송 상태를 실시간으로 전달하고, `Spring Scheduler`를 활용하여 배차 로직을 자동화했습니다.',
    tech: ['Spring Boot', 'MySQL', 'Redis', 'Firebase', 'SMS'],
    role: [
      '운송 의뢰자 앱 백엔드 API 설계 및 개발',
      '운송 의뢰자용 관리자 웹 화면 개발',
      '운송 기사용 관리자 웹 화면 개발',
      '`실시간 푸시 알림` 및 문자 발송 기능 구현',
      '`Spring Scheduler` 기반 주문 처리 및 배차 로직 개발'
    ],
    achievement: [
      '운송 의뢰자 및 기사 양측 관리 시스템 구축',
      '`실시간 알림 시스템`으로 운송 상태 추적 기능 구현',
      '`Spring Scheduler` 활용 배차 자동화로 운영 효율성 향상'
    ],
    link: 'https://doldol.net'
  },
  // 2022
  {
    id: 'numo',
    year: '2022',
    type: ['new'],
    title: 'GPS 기반 실시간 트래킹 서비스',
    subtitle: '킥보드 사용자 위치 기반 트래킹 앱',
    company: '누모(Numo)',
    period: '2021.09 ~ 2022.08',
    description: '킥보드 사용자를 위한 실시간 위치 추적 및 주행 기록 관리 앱의 백엔드 시스템입니다. `Spring Boot 멀티모듈 아키텍처`로 설계하여 코드 재사용성과 유지보수성을 높이고, `Redis`를 활용하여 실시간 위치 정보를 처리했습니다.',
    tech: ['Spring Boot', 'MySQL', 'Redis', 'Firebase'],
    role: [
      '`Spring Boot 멀티모듈` 아키텍처 설계 및 구성',
      '앱 연동 `폴링 기반` 실시간 위치 트래킹 API 개발',
      '실시간 위치 정보 `Redis` 기반 처리',
      '`JWT` 기반 인증 및 `OAuth2.0` 소셜 로그인 구현',
      '`Firebase Cloud Messaging` 푸시 알림 연동',
      'RESTful API 설계 및 개발'
    ],
    achievement: [
      '`멀티모듈 구조`로 코드 재사용성 및 유지보수성 향상',
      '`폴링 기반` 앱 통신으로 안정적인 실시간 위치 추적 서비스 구현',
      '`소셜 로그인`으로 사용자 편의성 개선'
    ],
    link: 'archived'
  }
];
