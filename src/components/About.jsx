import { useScrollAnimation } from '../hooks/useScrollAnimation';
import './About.css';

const About = () => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section className="about" id="about" ref={sectionRef}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-number">01. ABOUT</div>
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">환경보다 솔루션으로 말하는 개발자</p>
        </div>

        <div className={`about-content fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="about-text">
            <p>
              저는 <strong>환경보다 솔루션으로 말하는</strong> 백엔드 개발자입니다.
            </p>
            <p>
              주어진 조건에 맞추기보다, 문제를 정의하고 최선의 해법을 설계하는 데 집중합니다.
              레거시 리팩토링부터 성능 병목 해결, 신규 서비스 설계까지 다양한 환경에서
              <strong> 실용적이고 지속 가능한 코드</strong>를 작성해왔습니다.
            </p>
            <p>
              최근에는 대규모 트래픽 처리, 비동기 아키텍처 설계, 그리고 클라우드 인프라 최적화를
              중심으로 성장하고 있습니다. 단순히 기능을 구현하는 것을 넘어,
              <strong> 왜 이 방식인지, 어떻게 더 나아질 수 있는지</strong>를 끊임없이 고민합니다.
            </p>
            <p>
              기회를 설계하는 개발자로서, 기술은 도구일 뿐이라고 생각합니다.
              중요한 건 <strong>문제를 빠르게 분해하고, 팀과 함께 해결하는 것</strong>입니다.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-card">
              <div className="highlight-icon">🎯</div>
              <h3>문제 해결</h3>
              <p>복잡한 문제를 단순하게 분해하고 실용적인 솔루션을 제시합니다</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">⚡</div>
              <h3>성능 최적화</h3>
              <p>병목을 찾아내고 측정 가능한 개선을 만들어냅니다</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🔧</div>
              <h3>유지보수성</h3>
              <p>지속 가능하고 확장 가능한 코드를 작성합니다</p>
            </div>
            <div className="highlight-card">
              <div className="highlight-icon">🤝</div>
              <h3>협업</h3>
              <p>명확한 커뮤니케이션으로 팀과 함께 성장합니다</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
