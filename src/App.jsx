import './App.css';

function App() {
  function OurServicesTitle(props) {
    return <h2 className='sectionTitle'>{props.title}</h2>;
  }
  function Icon(props) {
    console.log('props.iconName ===', props.iconName);
    return (
      <i
        className={`fa card__icon fa-3x ${props.iconName}`}
        aria-hidden='true'
      ></i>
    );
  }
  function Grid() {
    return (
      <div className='grid'>
        <ServiceCard
          title='Business Consulting'
          icon='fa-address-book'
          link='/about.html'
        />
        <ServiceCard
          title='Market Analysis'
          icon='fa-grav'
          link='/about.html'
        />
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
        <ServiceCard
          title='Market Analysis'
          icon='fa-grav'
          link='/about.html'
        />
        <ServiceCard
          title='User Monitoring'
          icon='fa-id-card-o'
          link='/about.html'
        />
      </div>
    );
  }
  function ServiceCard(props) {
    console.log('props.icon ===', props.icon);
    return (
      <div className='card'>
        <Icon iconName={props.icon} />
        <h3 className='card__title'>{props.title}</h3>
        <p className='card__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          quis molestiae vitae eligendi at.
        </p>
        <a href={props.link} className='card__link'>
          Learn More
        </a>
      </div>
    );
  }
  function OurServices() {
    return (
      <div className='servicesSection'>
        <OurServicesTitle title='Our Services' />
        <Grid></Grid>
      </div>
    );
  }
  return (
    <div className='App container'>
      <OurServices />
    </div>
  );
}

export default App;
