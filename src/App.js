import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <footer>
          Contact Us
          {/* Should this be a component, if I am asking it probably should be. */}
        </footer>
      </div>
    );
  }
}

export default App;
