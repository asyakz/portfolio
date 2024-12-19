import './App.css';
import { SectionsWrapper } from './components/SectionsWrapper';
import { Skills } from './layout/sections/skills/Skills';
import { AboutMe } from './layout/sections/aboutme/AboutMe';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { Projects } from './layout/sections/projects/Projects';

function App() {
  return (
    <div className="App">
      <SectionsWrapper />
      <Skills />
      <Projects />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
