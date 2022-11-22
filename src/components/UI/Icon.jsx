function Icon(props) {
  return (
    <i
      className={`fa card__icon fa-3x ${props.iconName}`}
      aria-hidden='true'
    ></i>
  );
}
export default Icon;
