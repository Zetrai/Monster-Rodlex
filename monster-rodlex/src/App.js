import { useState, useEffect } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchTarget, setSearchTarget] = useState(''); // [value, setValue] useState(initialValue)
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  // First is callback that is effect that we want to trigger inside our functional component
  // Second is the dependencies like monsters or any props
  // Callback is called only when dependencies inside the array changes.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchTarget);
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchTarget]);

  const onSearchChange = (event) => {
    const searchTargetString = event.target.value.toLocaleLowerCase();
    setSearchTarget(searchTargetString);
  };

  return (
    <div className='App'>
      <h1 className='app-title'>Monsters Rodlex</h1>
      <SearchBox
        className='monster-search-box'
        placeholder='Search Monsters'
        onChangeHandler={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

export default App;

// Class Component
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
