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
              최근에는 글로벌 서비스 구축과 레거시 시스템 현대화를 중심으로
              다양한 도메인에서 경험을 쌓고 있습니다. 단순히 기능을 구현하는 것을 넘어,
              <strong> 왜 이 방식인지, 어떻게 더 나아질 수 있는지</strong>를 끊임없이 고민합니다.
            </p>
            <p>
              기회를 설계하는 개발자로서, 기술은 도구일 뿐이라고 생각합니다.
              기술적 역량만큼이나,
              <strong>팀과 함께 문제를 고민하고 해결해 나가는 과정</strong>을 소중히 여깁니다.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
