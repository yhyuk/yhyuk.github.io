import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [sectionRef, isVisible] = useScrollAnimation();
  const contacts = [
    {
      icon: MdEmail,
      label: 'Email',
      value: 'yhyuk2841@gmail.com',
      link: 'mailto:yhyuk2841@gmail.com'
    },
    {
      icon: FaGithub,
      label: 'GitHub',
      value: 'github.com/yhyuk',
      link: 'https://github.com/yhyuk'
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      value: 'LinkedIn Profile',
      link: 'https://www.linkedin.com/in/%EC%98%81%ED%98%81-%EA%B9%80-698062355/'
    },
    {
      icon: FaBlog,
      label: 'Blog',
      value: 'kyhyuk.tistory.com',
      link: 'https://kyhyuk.tistory.com/'
    }
  ];

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="container">
        <div className={`section-header fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="section-number">05. CONTACT</div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">함께 일하고 싶으시다면 언제든 연락주세요</p>
        </div>

        <div className={`contact-content fade-in ${isVisible ? 'visible' : ''}`}>
          <div className="contact-message">
            <h3>Let's Work Together</h3>
            <p>
              복잡한 문제를 함께 풀어가는 과정을 즐깁니다.
              <br />
              새로운 기술 스택, 아키텍처 설계, 성능 최적화 등 기술적인 대화도 환영합니다.
            </p>
            <p>
              언제든 편하게 연락주세요. 👋
            </p>
          </div>

          <div className="contact-cards">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card"
                >
                  <div className="contact-icon">
                    <IconComponent />
                  </div>
                  <div className="contact-info">
                    <div className="contact-label">{contact.label}</div>
                    <div className="contact-value">{contact.value}</div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        <footer className="footer">
          <p>© 2026 Kim Young-hyuk. Built with React & Vite</p>
          <p className="footer-tagline">환경보다 솔루션으로 말하는 개발자</p>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
