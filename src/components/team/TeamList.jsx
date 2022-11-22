import TeamMember from './TeamMember';
function TeamList() {
  return (
    <div className='grid'>
      <TeamMember
        avatar='/img/person_5.jpg.webp'
        name='Kaiara Spencer'
        position='PRODUCT MANAGER'
      />
      <TeamMember
        avatar='/img/person_6.jpg.webp'
        name='Dave Simpson'
        position='PRODUCT MANAGER'
      />
      <TeamMember
        avatar='/img/person_7.jpg.webp'
        name='Ben Thompson'
        position='PRODUCT MANAGER'
      />
      <TeamMember
        avatar='/img/person_8.jpg.webp'
        name='Kyla Stewart'
        position='PRODUCT MANAGER'
      />
      <TeamMember
        avatar='/img/person_1.jpg.webp'
        name='Chris Stewart'
        position='PRODUCT MANAGER'
      />
      <TeamMember
        avatar='/img/person_2.jpg.webp'
        name='Ben Thompson'
        position='PRODUCT MANAGER'
      />
      <TeamMember
        avatar='/img/person_3.jpg.webp'
        name='Kyla Stewart'
        position='PRODUCT MANAGER'
      />
      <TeamMember
        avatar='/img/person_4.jpg.webp'
        name='Dave Simpson'
        position='PRODUCT MANAGER'
      />
    </div>
  );
}
export default TeamList;
