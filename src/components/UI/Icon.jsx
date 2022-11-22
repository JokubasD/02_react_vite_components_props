function Icon(props) {
  console.log('props.iconName ===', props.iconName);
  return (
    <i
      className={`fa card__icon fa-3x ${props.iconName}`}
      aria-hidden='true'
    ></i>
  );
}
export default Icon;
