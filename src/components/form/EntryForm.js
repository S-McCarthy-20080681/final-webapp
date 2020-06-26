import React, { Component } from "react";
import './form.css';
import '../../App.js';
//new Date();
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class EntryForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            newEntry: {title: "", body: ""},
            //newEntryDate: Date,
            entries: []
        }
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
    }; //DELETE section of CRUD functionality

    addEntry() {
        //assign an ID to each new journal entry
        const newEntry = {
            id: 1 + Math.random(),
            value: this.state.newEntry
        }; //CREATE section of CRUD functionality


        const entries = [...this.state.entries]; //the three dots (...) are a spread operator, to expand the 'entries' array into a list
        entries.push(newEntry);

        this.setState({
            entries,
            newEntry: {title: "", body: ""}
        });
    }

    render() {

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
                {this.state.entries.map(entry => {
                    return(
                        <div className="entryDisplay">
                        <li key={entry.id}>
                            {entry.value}

                            <FontAwesomeIcon 
                            className="deleteEntry"
                            icon='trash'
                            onClick={() => this.deleteEntry(entry.id)}></FontAwesomeIcon>
                        </li>
                        </div>
                    )
                })}
            </ul>
        </div>
        );
    }
}

export default EntryForm;