import React from 'react';

import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const timelog = props => (
    <div>
        <Accordion>
            <Card className="Card">
             <Card.Header>
                 <Accordion.Toggle as={Button} variant="link" eventKey="0">
                <span>{props.name}</span>
                </Accordion.Toggle>
             </Card.Header>
             <Accordion.Collapse eventKey="0">
             <Card.Body>There are no entries for this month!</Card.Body>
             </Accordion.Collapse>
            </Card>
        </Accordion>
    </div>
);

export default timelog;