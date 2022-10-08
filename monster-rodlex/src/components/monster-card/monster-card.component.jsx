import { Component } from 'react';

import './mosnter-card.style.css';

class MonsterCard extends Component {
  render() {
    const { name, id, email } = this.props.monster;
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
  }
}

export default MonsterCard;
