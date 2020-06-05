import React from 'react';
import './App.css';
import Layout from './components/Layout';
import Timelogs from './containers/Timelog/Timelogs';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
//import EntryForm from './components/form/EntryForm';

function App() {
  return (
    
    <div className="timelogs">
      <Layout>
        <Timelogs />
      </Layout>
    </div>
  );
}

export default App;
