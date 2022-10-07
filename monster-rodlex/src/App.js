import { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
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

  onSearchChange = (event) => {
    const searchTarget = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchTarget };
    });
  };

  render() {
    // Destructuring this.state
    const { monsters, searchTarget } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchTarget);
    });
    return (
      <div className='App'>
        <SearchBox
          className='search-box'
          placeholder='Search Monsters'
          onChangeHandler={onSearchChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
