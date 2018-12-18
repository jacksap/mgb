import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <h1>My Girlfriend Beru</h1>
      </div>
    );
  }
}

export default App;
