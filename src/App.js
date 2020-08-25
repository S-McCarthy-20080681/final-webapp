import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Home from './components/Home.js';
import About from './components/About.js';

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      // newEntry: {title: "", body: ""},
      newEntry: "",
      // entries: []
    }
  }

  entries = [];

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({newEntry: res}));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    const testEntries = [
      {
        id: 1,
        title: "Creating an Online Journal for my Web App class",
        body: "This is an entry to a Stub API, to give me some data to work with while developing my web app"

    },
    {
        id: 2,
        title: "Another entry to continue testing my app",
        body: "This is a second entry to show multiple entries are stored"
    },
    ];
  return (
      <Router>
        <div className="timelogs">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link">Main Page</Link></li>
            <li><Link to={'/About'} className="nav-link">About This App</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
        </Switch>
             <p className="App-intro">{this.state.newEntry}</p>
        </div>
        </Router>
    	);
  }

}

export default App;
