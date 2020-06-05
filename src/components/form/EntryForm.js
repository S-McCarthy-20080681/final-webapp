import React, { Component } from "react";
import './form.css';

export default class EntryForm extends Component {
    render() {
        return (
            <form>
                <h3>Make an Entry:</h3>
                <div className="form-group">
                    <input type="text"
                        className="form-control"
                        placeholder="Title"></input>
                </div>
                <div className="form-group">
                    <input type="text"
                    placeholder="Date"></input>
                </div>
                <div className="form-group">
                    <input type="text"
                    className="form-control"
                    placeholder="What do you want to say?"></input>
                </div>
                <button type="submit" className="btn btn-primary">Add Entry</button>
            </form>
        );
    }
}