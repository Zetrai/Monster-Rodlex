import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchTarget, setSearchTarget] = useState(''); // [value, setValue] useState(initialValue)
  const [monsters, setMonsters] = useState([]);

  const onSearchChange = (event) => {
    const searchTargetString = event.target.value.toLocaleLowerCase();
    setSearchTarget(searchTargetString);
  };

  const filteredMonsters = monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchTarget);
  });
  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rodlex</h1>
      <SearchBox
        className='search-box'
        placeholder='Search Monsters'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchTarget: '',
//     };
//   }

//   componentDidMount() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         })
//       );
//   }

//   onSearchChange = (event) => {
//     const searchTarget = event.target.value.toLocaleLowerCase();

//     this.setState(() => {
//       return { searchTarget };
//     });
//   };

//   render() {
//     // Destructuring this.state
//     const { monsters, searchTarget } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchTarget);
//     });
//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rodlex</h1>
//         <SearchBox
//           className='search-box'
//           placeholder='Search Monsters'
//           onChangeHandler={onSearchChange}
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
