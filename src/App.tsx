import './App.css';
import { BgWrapper } from './components/bgWrapper/BgWrapper';
import { Skills } from './layout/sections/skills/Skills';
import { AboutMe } from './layout/sections/aboutme/AboutMe';
import { Contacts } from './layout/sections/contacts/Contacts';
import { Footer } from './layout/footer/Footer';
import { Projects } from './layout/sections/projects/Projects';

function App() {
  return (
    <div className="App">
      <BgWrapper />
      <Skills />
      <Projects />
      <AboutMe />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
