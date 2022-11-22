import Icon from './UI/Icon';
function ServiceCard(props) {
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
export default ServiceCard;
