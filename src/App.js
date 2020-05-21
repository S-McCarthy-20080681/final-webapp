import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Timelog from './containers/Timelog/Timelog';

function App() {
  return (
    <div className="App">
      <Layout>
        <Timelog />
      </Layout>
    </div>
  );
}

export default App;
