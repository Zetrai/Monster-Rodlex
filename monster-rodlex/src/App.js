import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 'A000001',
          name: 'Linda',
        },
        {
          id: 'A000002',
          name: 'Frank',
        },
        {
          id: 'A000003',
          name: 'Jacky',
        },
        {
          id: 'A000004',
          name: 'Andrei',
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
