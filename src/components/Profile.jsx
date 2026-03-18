import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedin, FaBlog } from 'react-icons/fa';

const Profile = () => {
  return (
    <div className="profile">
      <h1>김영혁</h1>
      <div className="role">Full Stack Developer</div>

      <div className="intro">
        <p>
          <code>인프라, DB, 백엔드, 프론트엔드</code>를 넘나들며 서비스 전체를 바라보는 시각으로
          문제를 정의하고 최선의 해법을 설계합니다.
          레거시 리팩토링부터 성능 병목 해결, 신규 서비스 설계까지
          스택을 가리지 않고 실용적이고 지속 가능한 코드를 작성해왔습니다.
        </p>
        <p>
          <code>AI와의 협업을 적극적으로 활용</code>해 개발 생산성을 극대화합니다.
          대 AI 시대에 AI를 단순한 도구가 아닌 <code>개발 파트너</code>로 삼아,
          혼자서는 시간이 걸렸을 작업을 빠르게 완성하고 더 본질적인 문제에 집중합니다.
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
