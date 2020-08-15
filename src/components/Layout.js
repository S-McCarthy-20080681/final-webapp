import React from 'react';
import '../App.css';
import EntryForm from './form/EntryForm';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import stubAPI from '../dataStore/stubAPI';

const layout = (props) => (
    <div className="layout">
    <div className="container-fluid">

        <div classname="row">
            <div className="col-md-6 ">
                <h1 className="App-header">Online Journal</h1>
            </div>
        </div>

        <div className="row">
            <div className="col-md-4">
                <div className="form">
                    <EntryForm />
                </div>
            </div>

{/* Removed the month-card display as I could not sort entries to appear
    in the correct months. */}

            {/* <div className="col-md-10">
                <div className="toolbar">
                    <h3>Choose A Month</h3>
                        <p>Clicking on a month displays the entries for that month:</p>
                </div>
            </div>
        

            <main className="col-md-10">
                {props.children}
            </main> */}
        </div> 
    </div>
    </div>
);

export default layout;