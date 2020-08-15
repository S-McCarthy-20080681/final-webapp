import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import Timelogs from './containers/Timelog/Timelogs';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import EntryForm from './components/form/EntryForm';
import stubAPI from './dataStore/stubAPI.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import entryDisplay from './entryDisplay';

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      // newEntry: {title: "", body: ""},
      newEntry: "",
      entries: []
    }
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => this.setState({newEntry: res}));
  }

  componentWillMount() {
    this.callAPI();
  }

  render() {
    //let testEntries = stubAPI.getAll();
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
    
        <div className="timelogs">
          <Layout>
            <Timelogs >
            <entryDisplay posts={testEntries} />
            </Timelogs>
          </Layout>
             <p className="App-intro">{this.state.newEntry}</p>
        </div>
    	);
  }

}

export default App;
