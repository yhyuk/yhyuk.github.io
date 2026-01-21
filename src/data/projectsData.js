export const projectsData = [
  // 2026
  {
    id: 'gangnamunni',
    year: '2026',
    title: '강남언니 위챗 미니프로그램',
    company: '강남언니 x 위챗(WeChat)',
    period: '2026.01 - 진행 중',
    description: '중국 시장 진출을 위한 위챗 미니프로그램 개발. 병원 예약·리뷰·결제 시스템 구축 및 Tencent Cloud 인프라 설계',
    tech: ['Spring Boot', 'WeChat Mini Program', 'Tencent Cloud', 'Redis', 'Payment'],
    role: [
      '위챗 미니프로그램 백엔드 API 설계 및 개발',
      'Tencent Cloud 인프라 구성 (CVM, COS, TencentDB)',
      '위챗 결제 및 본인인증 연동 개발',
      '병원 예약 시스템 및 리뷰 관리 기능 구현',
      'Redis 기반 캐싱으로 성능 최적화'
    ],
    achievement: [
      '중국 사용자 대상 안정적인 서비스 제공',
      '위챗 결제 연동으로 전환율 향상',
      'API 응답 속도 평균 200ms 이하 유지'
    ],
    link: null
  },
  // 2025
  {
    id: 'kia80',
    year: '2025',
    title: '기아 80주년 이벤트',
    company: '기아(KIA)',
    period: '2025.08 - 진행 중',
    description: '이미지 합성 비동기 API 설계 및 성능 개선. 단순 폴링의 직렬 처리 병목을 배치 디큐로 전환하여 평균 대기시간 8s → 0.05s 개선',
    tech: ['Spring Boot', 'Redis', 'Prometheus', 'Grafana', 'k6'],
    role: [
      '이미지 합성 비동기 처리 API 설계 및 구현',
      '단순 폴링 방식에서 배치 디큐 방식으로 전환',
      'Redis를 활용한 작업 큐 및 상태 관리',
      'Prometheus + Grafana로 성능 모니터링 대시보드 구축',
      'k6를 이용한 부하 테스트 및 병목 지점 분석'
    ],
    achievement: [
      '평균 대기시간 8초 → 0.05초로 99% 개선',
      '동시 처리량 10배 이상 증가',
      '실시간 모니터링으로 장애 예방 체계 구축'
    ],
    link: 'https://kia80years-event.com'
  },
  {
    id: 'hyundai',
    year: '2025',
    title: '현대 모빌리티 패스포트',
    company: '현대(Hyundai)',
    period: '2025.06 - 진행 중',
    description: 'JP·KR 대상 전기차 예약 서비스. 오키나와·하와이 예약/쿠폰/CRM 공통화 및 템플릿 기반 eDM·알림톡 발송 자동화',
    tech: ['Spring Boot', 'React', 'CRM', 'Notification'],
    role: [
      '다국어(JP/KR) 전기차 예약 시스템 백엔드 개발',
      'CRM 공통화 및 고객 관리 기능 구현',
      '템플릿 기반 eDM 및 알림톡 발송 자동화',
      '쿠폰 관리 및 할인 로직 구현',
      'React 기반 관리자 페이지 개발'
    ],
    achievement: [
      '오키나와·하와이 지역 서비스 동시 런칭',
      '템플릿 시스템으로 마케팅 메시지 발송 자동화',
      '다국어 지원으로 일본 시장 진출 기반 마련'
    ],
    link: 'https://hyundaimobilitypassport.com/okinawa/ko/form'
  },
  {
    id: 'miniprogram',
    year: '2025',
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
    title: '대한양궁협회 유지보수',
    company: '대한양궁협회',
    period: '2025',
    description: '대회 일정·경기·선수 관리 백오피스 API 고도화. 슬로우 쿼리 분석/튜닝 및 레거시 리팩토링',
    tech: ['Spring Boot', 'Query Tuning', 'Naver Works'],
    link: 'https://www.archery.or.kr'
  },
  {
    id: 'savezone',
    year: '2025',
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
