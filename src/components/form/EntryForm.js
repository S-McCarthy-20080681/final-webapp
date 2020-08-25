import React, { Component, Fragment } from "react";
import './form.css';
import '../../App.js';
import api from '../../dataStore/stubAPI.js';
import entryDisplay from '../../entryDisplay.js';
//new Date();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from "lodash";

class EntryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newEntry: {body: ""},
            // newEntry: {title: "", body: ""},
            //newEntryDate: Date,
            entries: [],
            entryCount: 0
        };
    }

    updateInput(key, value) {
        this.setState({
            [key]: value
        });
    } //UPDATE section of CRUD functionality

    deleteEntry(id) {
        const entries = [...this.state.entries];

        const afterDelete = entries.filter(entry => entry.id !== id);
        this.setState({entries: afterDelete}); //changes original list of entries to updated list with deleted item removed
        this.state.entryCount = this.state.entryCount - 1;
    }; //DELETE and UPDATE section of CRUD functionality

    // entryCount() {
    //     var entryTotal = this.state.entries.length;
    //     if(this.addEntry) {
    //         entryTotal = entryTotal + 1;
    //         return entryTotal;
    //     } else if(this.deleteEntry) {
    //         entryTotal = entryTotal - 1;
    //         return entryTotal;
    //     }
    //     return entryTotal;
    // }

    addEntry() {
        //assign an ID to each new journal entry
        const newEntry = {
            id: 1 + Math.random(),
            value: this.state.newEntry
        }; //CREATE and UPDATE section of CRUD functionality


        const entries = [...this.state.entries]; //the three dots (...) are a spread operator, to expand the 'entries' array into a list
        entries.push(newEntry);
        this.state.entryCount = this.state.entryCount + 1;

        this.setState({
            entries,
            newEntry: {title: "", body: ""}
            //newEntry: {body: ""}
        });
    }


    render() {
        let heading = this.state.entries.title;
        let main = this.state.entries.body;
        return (
            <div className="Crud">
            <form>
                <h3>Make an Entry:</h3>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        value={this.state.newEntry.title}
                        onChange={e => this.updateInput("newEntry", e.target.value)}
                        placeholder="Title"
                        required></input>
                </div>
                {/* <div className="form-group">
                    <input type="date"
                    className="form-control"
                    required></input>
                </div> */}
                <div className="form-group">
                    <input type="text"
                    className="form-control"
                    value={this.state.newEntry.body}
                    onChange={e => this.updateInput("newEntry", e.target.value)}
                    placeholder="What do you want to say?"
                    required></input>
                </div>
                <div>
                <button type="submit" 
                        value="Submit" 
                        onClick={() => this.addEntry()}
                        className="btn btn-primary">Add Entry
                        </button>
                </div>
            </form>
            <ul>
                {this.state.entries.map((entry, index) => {
                    return(
                        <div className="entryDisplay">
                        <li key={entry.id}>
                            {entry.value}

                            <FontAwesomeIcon 
                            className="deleteEntry"
                            icon='trash'
                            onClick={() => this.deleteEntry(entry.id)}></FontAwesomeIcon>
                        </li>
                        <Fragment>
                            <span>
                                {heading}
                            </span>
                            <span>
                                {main}
                            </span>
                        </Fragment>
                        </div>
                    )
                })}
            </ul>
            <p>Total Entries: {this.state.entryCount}</p>
        </div>
        );
    }
}

export default EntryForm;