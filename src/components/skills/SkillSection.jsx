import ServiceCard from '../ServiceCard';
function SkillsSection() {
  return (
    <div className='skillsGrid'>
      <ServiceCard
        title='User Monitoring'
        icon='fa-id-card-o'
        link='/about.html'
      />
      <ServiceCard
        title='User Monitoring'
        icon='fa-id-card-o'
        link='/about.html'
      />
      <img src='/img/about_1.jpg.webp' alt='Intuitive Thinkers' />
    </div>
  );
}
export default SkillsSection;
