import React, { Component } from "react";
import './form.css';
//let date = new Date();

class EntryForm extends Component {
// constructor(props) {
//     super(props);
//     this.state = {value: `${date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()}`};
// }
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
                    <input type="date"></input>
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

export default EntryForm;