import React, { Component, Fragment } from 'react';
import Timelog from '../../components/Timelog/Timelog';

class Timelogs extends Component {
    render () {
        return (
            <div className="App">

                <Timelog name = "January" />
                <Timelog name = "February" />
                <Timelog name = "March" />
                <Timelog name = "April" />
                <Timelog name = "May"/>
                <Timelog name = "June"/>
                <Timelog name = "July" />
                <Timelog name = "August" />
                <Timelog name = "September" />
                <Timelog name = "October" />
                <Timelog name = "November" />
                <Timelog name = "December" />
            </div>
        );
    }
}

export default Timelogs;