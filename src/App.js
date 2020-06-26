import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import Timelogs from './containers/Timelog/Timelogs';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import EntryForm from './components/form/EntryForm';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);

class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      newEntry: {title: "", body: ""},
      entries: []
    }
  }
  render() {
    const testEntries = [
      {
        id: 1,
        title: "Creating an Online Journal for my Web App class",
        date: "13-05-2020",
        body: "This is an entry to a Stub API, to give me some data to work with while developing my web app"

    },
    {
        id: 2,
        title: "Another entry to show the sort-by-date feature",
        date: "01-06-2020",
        body: "This is an entry dated in a different month from the previous entry, to show posts are sorted into their correct date categories"
    }
    ];
  return (
    
        <div className="timelogs">
          <Layout>
            <Timelogs />
          </Layout>
        </div>
    	);
  }

}

export default App;
