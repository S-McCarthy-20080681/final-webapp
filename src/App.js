import React, { Component } from 'react';
import './App.css';
import layout from './components/layout/Layout';
import Timelog from './containers/Timelog/Timelog';

class App extends Component {
  render() {
  return (
    <div className="App">
      <layout>
        <Timelog />
      </layout>
    </div>
  );
  }
}

export default App;
