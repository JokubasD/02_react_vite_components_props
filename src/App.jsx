import './App.css';
import OurServices from './components/OurServices';
import OurTeamSection from './components/team/OurTeamSection';
import SkillsSection from './components/skills/SkillSection';
import Hero from './components/hero/hero';

function App() {
  return (
    <div className='App container'>
      <Hero
        title='New Website'
        subtitle='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, voluptatem!'
        color='red'
      />
      <OurTeamSection />
      <OurServices />
      <SkillsSection />
    </div>
  );
}

export default App;
