export const projectsData = [
  // 2026
  {
    id: 'gangnamunni',
    year: '2026',
    type: ['new'],
    title: '강남언니 M.P 서비스',
    subtitle: 'WeChat 미니프로그램 백엔드 API 시스템',
    company: '강남언니',
    period: '2025.11 - 진행 중',
    description: '강남언니 서비스를 중국 시장에 진출시키기 위한 위챗 미니프로그램 백엔드 시스템을 설계 및 구축했습니다. 멀티 모듈 아키텍처(Core/Proxy/Sync/Tracking)를 통해 병원/이벤트 정보 제공, 상담 신청, 실시간 데이터 동기화, 사용자 행동 트래킹 등 전체 생명주기를 관리하며, 한국-중국 간 실시간 데이터 동기화 및 인증/트래킹 시스템을 구현했습니다.',
    tech: ['Java 21', 'Spring Boot', 'Gradle', 'MySQL', 'Spring Data JPA', 'Redis', 'Spring WebFlux', 'Docker', 'Swagger', 'Prometheus', 'TencentCloud'],
    role: [
      '백엔드 시스템 설계 및 구현',
      '인증 및 보안 시스템 구축',
      '데이터 동기화 프레임워크 설계',
      '부하 테스트를 통한 성능 최적화 및 모니터링 구축',
      '주요 기능 문서화 정리'
    ],
    achievement: [
      '확장 가능한 멀티 모듈 아키텍처 구축',
      '안정적인 실시간 데이터 동기화 시스템 구현',
      '효율적인 캐싱 전략으로 응답 성능 개선',
      '운영 안정성 강화',
      '사용자 행동 분석 인프라 구축'
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
    company: '기아자동차',
    period: '2025.08 ~ 2025.10',
    description: '기아자동차 창립 80주년을 기념하는 사진 응모 이벤트 플랫폼입니다. 사용자는 본인의 사진을 업로드하여 기아 브랜드 프레임과 조합된 본인만의 커스텀 포스터를 생성하고 다운로드할 수 있으며, 관리자는 응모자 정보를 조회하고 관리할 수 있습니다. Spring Boot 기반의 멀티 모듈 백엔드 API와 Nuxt.js 기반 관리자 대시보드로 구성되어 있으며, Redis 큐를 활용한 비동기 이미지 처리로 대용량 트래픽에 대응할 수 있도록 설계했습니다.',
    tech: ['Java 21', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'Redis', 'MariaDB', 'Swagger', 'Nuxt.js', 'Vue', 'TypeScript', 'Docker', 'Prometheus', 'NCP'],
    role: [
      '사용자/관리자 백엔드 API 설계 및 개발',
      '비동기 이미지 처리 시스템 구축',
      '인증 및 보안 시스템',
      '관리자 프론트엔드 개발',
      '데이터베이스 설계 및 최적화',
      '파일 스토리지 연동',
      '모니터링 및 성능 관리'
    ],
    achievement: [
      '안정적인 대용량 이미지 처리 시스템 구현',
      '확장 가능한 멀티 모듈 아키텍처 구축',
      '효율적인 관리자 운영 시스템 구축',
      '실시간 모니터링 체계 구축',
      '사용자 경험 최적화'
    ],
    link: 'archived'
  },
  {
    id: 'hyundai',
    year: '2025',
    type: ['maintain', 'enhance'],
    title: 'HMP (Hyundai Mobility Passport)',
    subtitle: '오키나와·하와이 렌터카 예약 관리 시스템',
    company: '현대자동차',
    period: '2025.07 - 진행 중',
    description: '현대자동차의 해외 차량 대여 서비스를 위한 통합 예약 관리 플랫폼입니다. 오키나와와 하와이 두 지역의 독립적인 사용자 웹사이트와 통합 관리자 시스템으로 구성되어 있으며, Next.js 기반으로, 백엔드와 프론트를 같이 개발한 프로젝트입니다. 사용자는 지역별 맞춤형 인터페이스를 통해 차량 예약 및 결제를 진행하고, 관리자는 통합 대시보드에서 예약 현황, 차량 관리, 통계 분석 등을 처리할 수 있습니다.',
    tech: ['Next.js', 'React', 'TypeScript', 'MySQL', 'AWS'],
    role: [
      '레거시 코드 리팩토링 및 공통화',
      '운영환경 로그 개선',
      '코드 품질 및 유지보수성 향상',
      '추가 기능 개발'
    ],
    achievement: [
      '외부 통신 안정성 및 유지보수성 향상',
      'eDM/알림톡 발송 시스템 전체 개편',
      '운영 효율성 및 장애 대응 능력 강화',
      'API 응답 처리 표준화',
      '브랜치 전략 개선으로 배포 안정성 확보'
    ],
    link: 'https://www.hyundai.com/jp/hyundai-mobility-passport/in-okinawa'
  },
  {
    id: 'miniprogram',
    year: '2025',
    type: ['maintain', 'enhance'],
    title: '중국 앱 커머스 (미니파이)',
    company: '위챗(WeChat)',
    period: '2025',
    description: '위버스·메이크스타 등 여러 입점사 커머스 유지보수. MSA 프로젝트 문서화 및 API 파이프라인 개선',
    tech: ['MSA', 'WeChat', 'Commerce'],
    link: 'https://www.miniprogram.co.kr'
  },
  {
    id: 'archery',
    year: '2025',
    type: ['maintain', 'enhance'],
    title: '대한양궁협회 공식 홈페이지 관리 시스템',
    subtitle: '대회·선수·콘텐츠 통합 관리 백오피스 플랫폼',
    company: '대한양궁협회',
    period: '2025.03 - 진행 중',
    description: '대한양궁협회의 공식 홈페이지 및 관리자 시스템으로, 국내외 양궁 대회 일정, 경기 결과, 선수 정보, 뉴스 및 콘텐츠를 통합 관리하는 플랫폼입니다. Spring Boot 기반 단일 모듈 백엔드 API(사용자/관리자 API + 외부 연동 API)와 React 기반의 관리자 대시보드로 구성되어 있으며, World Archery 및 대한체육회 등 외부 기관과의 데이터 연동을 지원합니다. 기존 시스템을 인수인계 받아 유지보수, 성능 개선, 기능 고도화 작업을 수행했습니다.',
    tech: ['Java 11', 'Spring Boot', 'Spring Security', 'JWT', 'Spring Data JPA', 'MariaDB', 'MSSQL Server', 'Flyway', 'MyBatis', 'Apache POI', 'React', 'TypeScript', 'Vite', 'Recoil', 'Axios', 'AWS'],
    role: [
      '백오피스 API 고도화 및 유지보수',
      '데이터베이스 쿼리 성능 최적화',
      '외부 시스템 연동 개선',
      '알림 시스템 개발',
      'SNS 연동 개선',
      '레거시 코드 리팩토링'
    ],
    achievement: [
      '쿼리 성능 개선으로 응답 속도 향상',
      '외부 연동 안정성 확보',
      '실시간 알림 시스템 구축',
      'SNS 연동 자동화',
      '코드 품질 및 유지보수성 향상',
      '관리자 백오피스 기능 강화'
    ],
    link: 'https://www.archery.or.kr'
  },
  {
    id: 'savezone',
    year: '2025',
    type: ['maintain'],
    title: '세이브존 홈페이지',
    company: '세이브존(Savezone)',
    period: '2025',
    description: '유지보수 및 카카오 로그인 CI 누락 회원 데이터 복구 작업',
    tech: ['Spring Boot', 'Kakao Login'],
    link: 'https://esavezone.co.kr'
  },
  {
    id: 'savezone-event',
    year: '2025',
    type: ['new'],
    title: '세이브존 이벤트 페이지',
    company: '세이브존(Savezone)',
    period: '2025',
    description: '지점별 이벤트 컨텐츠 API 개발. 확률 기반 경품 추첨 및 중복·부정 사용 방지 로직',
    tech: ['Java', 'Redis', 'Kakao Social'],
    link: 'https://esavezone.co.kr/event-progress'
  },
  {
    id: 'luckyhotto',
    year: '2025',
    type: ['new'],
    category: 'side',
    title: '행운의 호또',
    company: '개인 사이드 프로젝트',
    period: '2025',
    description: '로또 추첨, 저장, 익명 커뮤니티 기능. 동행복권 API 연동',
    tech: ['Spring Boot', 'JPA', 'React', 'AWS Lightsail'],
    link: 'archived'
  },
  {
    id: 'memorial',
    year: '2025',
    type: ['new'],
    category: 'side',
    title: '온라인 분향소',
    company: '개인 사이드 프로젝트',
    period: '2025',
    description: '무안공항 참사 유가족을 위한 온라인 분향소. 익명 메시지 작성',
    tech: ['Spring Kotlin', 'JPA', 'React'],
    link: 'archived'
  },
  // 2024
  {
    id: 'linme',
    year: '2024',
    type: ['new'],
    title: '건기식 개인화 커머스',
    company: '이노즈(Inroes)',
    period: '2023-2024',
    description: '커머스 전 영역 DB 설계. 본인인증·결제·택배조회 등 서드파티 연동. AWS EC2 → ECS 전환으로 비용 절감',
    tech: ['Spring Boot', 'React', 'AWS ECS', 'Redis', 'Payment'],
    role: [
      '커머스 전 영역 DB 스키마 초기 설계',
      '본인인증, 결제(PG), 택배조회 API 연동',
      '상품·주문·배송·정산 백엔드 API 개발',
      'AWS EC2에서 ECS로 인프라 전환',
      'Dev/Stg/Prod 환경 분리 및 배포 파이프라인 구축'
    ],
    achievement: [
      'AWS EC2 → ECS 전환으로 월 인프라 비용 30% 절감',
      '와탭 모니터링으로 슬로우쿼리 개선 (3s → 1s)',
      '0→1 커머스 플랫폼 성공적 런칭'
    ],
    link: 'archived'
  },
  // 2023
  {
    id: 'forloud',
    year: '2023',
    type: ['new'],
    title: '브랜드 배송 관리 사이트',
    company: '포라우드(Forloud)',
    period: '2023',
    description: 'Apache POI로 엑셀 업로드. QueryDSL로 검색/필터 쿼리 간소화',
    tech: ['Spring Boot', 'JPA', 'QueryDSL', 'Apache POI'],
    link: null
  },
  {
    id: 'abiman',
    year: '2023',
    type: ['new'],
    title: '아비만 모니터링 시스템',
    company: '아비만(Abiman)',
    period: '2023',
    description: '스마트팩토링 총괄 모니터링. Next.js SSR, 실시간 그래프 연동',
    tech: ['Next.js', 'Zustand', 'React Query', 'AWS Amplify'],
    link: null
  },
  {
    id: 'unlike',
    year: '2023',
    type: ['new'],
    title: '언라이크 소개 페이지',
    company: '언라이크(Un:like)',
    period: '2022-2023',
    description: 'React.js → Next.js 전환. SEO 최적화 및 Google Analytics 적용',
    tech: ['Next.js', 'SEO', 'QueryDSL'],
    link: 'archived'
  },
  {
    id: 'doldol',
    year: '2023',
    type: ['maintain', 'enhance'],
    title: '돌돌 화물 운송 서비스',
    company: '돌돌(DolDol)',
    period: '2022-2023',
    description: '위치기반 화물 운송. 실시간 푸시알림·문자발송. Spring Scheduler 주문 로직',
    tech: ['Spring Boot', 'Location-based', 'Push Notification', 'SMS'],
    link: 'https://doldol.net'
  },
  // 2022
  {
    id: 'numo',
    year: '2022',
    type: ['new'],
    title: '누모 GPS 트래킹',
    company: '누모(Numo)',
    period: '2021-2022',
    description: '멀티모듈 환경 구성. 실시간 위치 정보 Redis 처리. SNS 통합 로그인',
    tech: ['Spring Boot Multi-module', 'Redis', 'JWT', 'OAuth', 'Firebase'],
    role: [
      'Spring Boot 멀티모듈 아키텍처 설계 및 구성',
      '실시간 위치 정보 Redis 기반 처리',
      'JWT 기반 인증 및 OAuth2.0 소셜 로그인 구현',
      'Firebase Cloud Messaging 푸시 알림 연동',
      'RESTful API 설계 및 개발'
    ],
    achievement: [
      '멀티모듈 구조로 코드 재사용성 및 유지보수성 향상',
      '실시간 위치 추적 안정적 서비스 제공',
      '소셜 로그인으로 사용자 편의성 개선'
    ],
    link: 'archived'
  }
];
