import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: 'Zetra', lastName: 'Orion' },
      company: 'Wipro',
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hello {this.state.name.firstName} {this.state.name.lastName}, I Work
            at {this.state.company}
          </p>
          <button
            onClick={() => {
              const firstName =
                this.state.name.firstName === 'Artez' ? 'Zetra' : 'Artez';
              this.setState(
                (state, props) => {
                  return { name: { firstName: firstName, lastName: 'Orion' } };
                },
                () => {
                  // only when state is updated execute following code. Its a callback function
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
