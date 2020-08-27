# ReadMe for Web App Development 2, Assignment 2

# BSc (Hons.) Level 8 - Repeat Assignment

Name: Susan McCarthy

## Overview.

An online Journal, created from scratch. Allows creation and deletion of journal entries, as well as keeping track of how many entries exist at any given time. A short about page and collection of extra study tools used exist along a navbar at the top of the page.

. . . . . List of user features  . . . .

- Add and delete entries
- Clear view of any existing entries
- Handy navbar at the top to allow quick/easy switching between pages
- Routes to the 'About' and 'Study Tools' pages, as well as hyperlinks to each resource on the 'Study Tools' page
- 'Total Entries' counter updates accordingly each time an entry is added or deleted

## Setup.

I created a new app from scratch using the 'create-react-app' feature. I then worked on establishing full CRUD functionality on the project's React frontend. I then used the 'express-generator' feature to create a skeleton Express backend within the project, which I then hooked up to the React frontend and filled out with routing capabilities and connection to a MongoDB database. I also included a line of backend text at the bottom of the web app page to prove the backend was connected to the frontend.

## Data Model Design.

~~~
import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

import Home from './components/Home.js';
import About from './components/About.js';
import StudyTools from './components/StudyTools.js';

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
            <li><Link to={'/StudyTools'} className="nav-link">Study Tools</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/studytools' component={StudyTools} />
        </Switch>
             <p className="App-intro">{this.state.newEntry}</p>
        </div>
        </Router>
    	);
  }

}

export default App;

~~~

## UI Design.

![][homeView]

>> Shows the Homepage, with the form, counter and a test Entry added.

![][aboutPage]

>> Shows the About page, whih introduces me as the developer and points out which class this assignment was created for.

![][studyTools]

>> Shows the list of resources used alongside class notes to help me understand how to implement various features and make them suitable for my own project.

![][mongoCommand]

>> Shows a line of text once the backend is started, indicating a connection to the entry_db database on my Mongo page

![][mongoWeb]

>> Shows on the Mongo webpage that a connection has been made with the entry_db database in the WebApp-Cluster

## Routing.

- /About - Gives a short description of who created the app and why
- /StudyTools - A collection of links to extra study supplements used throughout the development of this project





[homeView]: ./img/homeView.png
[aboutPage]: ./img/aboutPage.png
[studyTools]: ./img/studyTools.png
[mongoCommand]: ./img/mongoCommand.png
[mongoWeb]: ./img/mongoWeb.png
