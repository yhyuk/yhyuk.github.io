import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Experience from './components/Experience';
import AiDevelopment from './components/AiDevelopment';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import './styles/global.css';

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div id="intro"><Profile /></div>
        <div id="experience"><Experience /></div>
        <div id="ai"><AiDevelopment /></div>
        <div id="projects"><Projects /></div>
        <div id="skills"><Skills /></div>
        <div id="education"><Education /></div>
        <div className="footer">Latest Updated 2026. 06. 24</div>
      </div>
    </>
  );
}

export default App;
