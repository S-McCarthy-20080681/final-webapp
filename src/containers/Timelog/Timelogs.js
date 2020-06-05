import React, { Component } from 'react';
import Timelog from '../../components/Timelog/Timelog';

class Timelogs extends Component {
    render () {
        return (
            <div className="App">
                <Timelog name = "April" />
                <Timelog name = "May"/>
                <Timelog name = "June"/>
            </div>
        );
    }
}

export default Timelogs;