import { useState } from 'react';
import Navbar from './components/Navbar';
import Stars from './components/Stars';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Contact from './components/Contact';
import ProjectModal from './components/ProjectModal';
import ScrollIndicator from './components/ScrollIndicator';
import './styles/global.css';

function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="App">
      <Navbar />
      <ScrollIndicator />
      <Stars />
      <Hero />
      <About />
      <Projects onProjectClick={handleProjectClick} />
      <TechStack />
      <Experience />
      <Contact />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;
