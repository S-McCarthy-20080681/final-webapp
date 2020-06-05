import React from 'react';

const layout = (props) => (
    <div>
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