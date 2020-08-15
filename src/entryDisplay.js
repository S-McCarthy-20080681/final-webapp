import React, {Component, Fragment} from 'react';
import EntryForm from './components/form/EntryForm.js';
import layout from './components/Layout.js';
import api from './dataStore/stubAPI.js';

export default class entryDisplay extends Component {
    render() {
        let posts = this.props.entries.map((entry, index) => (
            <layout key = {entry.id}
                    entry = {entry}
                />
        ));

        return <Fragment>{posts}</Fragment>;
    }
}