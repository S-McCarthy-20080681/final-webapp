import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Timelogs from './containers/Timelog/Timelogs';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import EntryForm from './components/form/EntryForm';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Online Journal</h1>
    <div className="timelogs">
      <Layout>
        <Timelogs />
      </Layout>
    </div>
    </div>
  );
}

export default App;
