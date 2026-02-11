import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="profile">
      <h1>김영혁</h1>
      <div className="role">Backend Developer</div>

      <div className="intro">
        <p>
          주어진 조건에 맞추기보다, <code>문제를 정의하고 최선의 해법을 설계</code>하는 데 집중합니다.
          <code>레거시 리팩토링</code>부터 <code>성능 병목 해결</code>, <code>신규 서비스 설계</code>까지
          다양한 환경에서 실용적이고 지속 가능한 코드를 작성해왔습니다.
        </p>
        <p>
          최근에는 <code>글로벌 서비스 구축</code>과 <code>레거시 시스템 현대화</code>를 중심으로
          다양한 도메인에서 경험을 쌓고 있습니다.
          단순히 기능을 구현하는 것을 넘어,
          왜 이 방식인지, 어떻게 더 나아질 수 있는지를 끊임없이 고민합니다.
        </p>
        <p>
          기술은 도구일 뿐이라고 생각합니다.
          기술적 역량만큼이나, <code>팀과 함께 문제를 고민하고 해결해 나가는 과정</code>을 소중히 여기며,
          결과보다 과정에서 더 많은 것을 배울 수 있다고 믿습니다.
        </p>
      </div>

      <div className="contact-links">
        <a href="mailto:yhyuk2841@gmail.com" title="Email">
          <MdEmail />
        </a>
        <a href="https://github.com/yhyuk" target="_blank" rel="noopener noreferrer" title="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/%EC%98%81%ED%98%81-%EA%B9%80-698062355/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://kyhyuk.tistory.com/" target="_blank" rel="noopener noreferrer" title="Blog">
          <FaBlog />
        </a>
      </div>
    </div>
  );
};

export default Profile;
