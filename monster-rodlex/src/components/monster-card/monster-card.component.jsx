import './mosnter-card.style.css';

const MonsterCard = ({ monster }) => {
  const { name, id, email } = monster;
  return (
    <div key={id}>
      <div className='card-container'>
        <img
          alt={`monster: ${name}`}
          src={`https://robohash.org/${id}?set=set2&size=180x180`}
        />
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default MonsterCard;
