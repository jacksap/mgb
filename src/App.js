import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <footer>
          <Contact />
        </footer>
      </div>
    );
  }
}

export default App;
