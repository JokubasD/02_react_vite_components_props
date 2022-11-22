function TeamMember(props) {
  return (
    <div className='card'>
      <img src={props.avatar} alt={props.name} />
      <h3>{props.name}</h3>
      <p>{props.position}</p>
    </div>
  );
}

export default TeamMember;
