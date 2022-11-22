function Hero(props) {
  const allClasses = props.color ? `hero ${props.color}` : 'hero';
  return (
    <div className={allClasses}>
      <h1 className='hero__title'>{props.title}</h1>
      <h2 className='hero__subtitle'>{props.subtitle}</h2>
    </div>
  );
}
export default Hero;
