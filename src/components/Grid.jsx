import ServiceCard from './ServiceCard';
function Grid() {
  return (
    <div className='grid'>
      <ServiceCard
        title='Business Consulting'
        icon='fa-address-book'
        link='/about.html'
      />
      <ServiceCard title='Market Analysis' icon='fa-grav' link='/about.html' />
      <ServiceCard
        title='User Monitoring'
        icon='fa-id-card-o'
        link='/about.html'
      />
      <ServiceCard
        title='Business Consulting'
        icon='fa-address-book'
        link='/about.html'
      />
      <ServiceCard title='Market Analysis' icon='fa-grav' link='/about.html' />
      <ServiceCard
        title='User Monitoring'
        icon='fa-id-card-o'
        link='/about.html'
      />
    </div>
  );
}
export default Grid;
