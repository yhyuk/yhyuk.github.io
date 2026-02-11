const Education = () => {
  return (
    <div className="section">
      <h2 className="section-title">Education</h2>

      <div className="edu-item">
        <div className="edu-header">
          <div className="edu-school">방송통신대학교</div>
          <div className="edu-period">2025.03 - 재학 중</div>
        </div>
        <div className="edu-major">컴퓨터과학과</div>
        <p className="edu-desc">
          실무를 하면서 부족하다고 느꼈던 CS 기본기를 제대로 채우고 싶어 입학했습니다.
          직장과 학업을 병행하는 게 쉽지 않지만, 학점 4.3을 유지하며 졸업을 목표로 달리고 있습니다.
        </p>
      </div>

      <div className="edu-item">
        <div className="edu-header">
          <div className="edu-school">청강문화산업대학교</div>
          <div className="edu-period">2014.03 - 2020.03</div>
        </div>
        <div className="edu-major">모바일보안 전공</div>
        <p className="edu-desc">
          막연히 컴퓨터가 좋아서 입학했고, 코딩이 재밌을 줄 알았는데 학문으로 다가오니 쉽지 않았습니다.
          군 전역 후 갑자기 깨달음을 얻어(정확히 뭔진 모르겠지만) 다시 집중해서 졸업했습니다.
        </p>
      </div>
    </div>
  );
};

export default Education;
