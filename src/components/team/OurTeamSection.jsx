import TeamList from './TeamList';
import SectionTitle from '../OurServicesTitle';
import SectionDesc from '../SectionDesc';
function OurTeamSection() {
  return (
    <div className='ourTeamSection'>
      <SectionTitle title='Our team' />
      <SectionDesc desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus minima neque tempora reiciendis.' />
      <TeamList />
    </div>
  );
}
export default OurTeamSection;
