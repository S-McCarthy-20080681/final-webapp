import React from 'react';
import EntryForm from '../form/EntryForm';

const layout = (props) => (
    <div>
        <div className="form">
            <EntryForm />
        </div>
        <div className="toolbar">
            <h3>Choose A Month</h3>
                <p>Clicking on a month displays the entries for that month:</p>
            </div>
        <main>
            {props.children}
        </main>
    </div>
);

export default layout;