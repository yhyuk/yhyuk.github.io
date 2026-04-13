import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'Intro', id: 'intro' },
  { label: 'Experience', id: 'experience' },
  { label: 'AI', id: 'ai' },
  { label: 'Projects', id: 'projects' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
];

const NavBar = () => {
  const [active, setActive] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (isAtBottom) {
        setActive(NAV_ITEMS[NAV_ITEMS.length - 1].id);
        return;
      }

      const scrollY = window.scrollY + window.innerHeight / 3;
      for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_ITEMS[i].id);
        if (el && el.offsetTop <= scrollY) {
          setActive(NAV_ITEMS[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({ top: el.offsetTop - 48, behavior: 'smooth' });
  };

  return (
    <div id="section-nav" className="section-nav">
      <div className="section-nav-inner">
        {NAV_ITEMS.map(({ label, id }) => (
          <button
            key={id}
            className={`section-nav-item${active === id ? ' active' : ''}`}
            onClick={() => handleClick(id)}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;
