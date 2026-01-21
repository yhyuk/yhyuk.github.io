import { useEffect, useRef } from 'react';

const Stars = () => {
  const starsRef = useRef(null);

  useEffect(() => {
    const container = starsRef.current;
    const starCount = 150;

    for (let i = 0; i < starCount; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = Math.random() * 100 + '%';
      star.style.top = Math.random() * 100 + '%';
      star.style.animationDelay = Math.random() * 4 + 's';
      star.style.animationDuration = (Math.random() * 3 + 2) + 's';
      container.appendChild(star);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  return (
    <>
      <div className="space-bg"></div>
      <div className="stars-layer" ref={starsRef}></div>
    </>
  );
};

export default Stars;
