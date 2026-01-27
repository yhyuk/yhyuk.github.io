import { useState, useEffect } from 'react';
import './Hero.css';

const Hero = () => {
  const [typingText, setTypingText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const phrases = [
    '실용적인 해법으로 응답합니다',
    '성능과 안정성을 추구합니다',
    '계속 잘 돌아가게 만듭니다',
    '문제를 빠르게 분해합니다'
  ];

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setTypingText(currentPhrase.substring(0, typingText.length + 1));

        if (typingText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        setTypingText(currentPhrase.substring(0, typingText.length - 1));

        if (typingText === '') {
          setIsDeleting(false);
          setPhraseIndex((phraseIndex + 1) % phrases.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [typingText, isDeleting, phraseIndex]);

  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>김영혁</h1>
            <div className="role">Backend Developer</div>
            <p className="hero-tagline">
              환경보다 솔루션으로 말하는,<br />기회를 설계하는 개발자
            </p>
            <div className="hero-typing">
              {typingText}
              <span className="typing-cursor"></span>
            </div>
            <div className="cta-buttons">
              <a href="#about" className="btn btn-primary">더 알아보기</a>
              <a href="#contact" className="btn btn-secondary">연락하기</a>
            </div>
          </div>
          <div className="floating-icons">
            <div className="floating-icon" data-tooltip="Java & Spring 기반 서비스 설계">
              <span className="icon-emoji">☕</span>
              <span className="icon-label">Backend</span>
            </div>
            <div className="floating-icon" data-tooltip="Docker 컨테이너 환경 구축 및 CI/CD">
              <span className="icon-emoji">🐳</span>
              <span className="icon-label">DevOps</span>
            </div>
            <div className="floating-icon" data-tooltip="AWS, NCP 인프라 설계 및 운영">
              <span className="icon-emoji">☁️</span>
              <span className="icon-label">Cloud</span>
            </div>
            <div className="floating-icon" data-tooltip="데이터 모델링 및 쿼리 최적화">
              <span className="icon-emoji">🗄️</span>
              <span className="icon-label">Database</span>
            </div>
            <div className="floating-icon" data-tooltip="멀티 모듈 & MSA 아키텍처 설계">
              <span className="icon-emoji">⚙️</span>
              <span className="icon-label">Architecture</span>
            </div>
            <div className="floating-icon" data-tooltip="레거시 현대화부터 신규 서비스 런칭까지">
              <span className="icon-emoji">🚀</span>
              <span className="icon-label">Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
