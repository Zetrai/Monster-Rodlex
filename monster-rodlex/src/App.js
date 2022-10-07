import { Component } from 'react';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchTarget: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }

  render() {
    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='Search Monsters'
          onChange={(event) => {
            this.setState(() => {
              return { searchTarget: event.target.value };
            });
          }}
        />
        {this.state.monsters.map((monster) => {
          if (monster.name.toLowerCase().includes(this.state.searchTarget)) {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          } else if (this.state.searchTarget === '') {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
          }
        })}
      </div>
    );
  }
}

export default App;
