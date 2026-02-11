import Profile from './components/Profile';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import './styles/global.css';

function App() {
  return (
    <div className="container">
      <Profile />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <div className="footer">Latest Updated 2026. 02. 10</div>
    </div>
  );
}

export default App;
