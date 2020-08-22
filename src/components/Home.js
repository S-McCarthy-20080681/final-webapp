import React, { Component } from 'react';
import Layout from './Layout.js';
import Timelogs from '../containers/Timelog/Timelogs.js';
import Timelog from './Timelog/Timelog.js';
import entryDisplay from '../entryDisplay.js';
import './form/EntryForm.js';
import '../App.js';

class Home extends Component {
    render() {
        return(
            <div>
                <h2>Home</h2>
                <Layout>
            <Timelogs >
            <entryDisplay />
            </Timelogs>
          </Layout>
            </div>
        );
    }
}

export default Home;