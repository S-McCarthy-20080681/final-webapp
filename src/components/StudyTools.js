import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { text } from '@fortawesome/fontawesome-svg-core';

class StudyTools extends Component {
    render() {
        return (
            <div>
                <h2>Study Tools</h2>
                <br />
                <h4>This is a list of references I used, alongside class notes and labs, to teach me 
                    how to create and implement various parts of 
                    this assignment:</h4>
                <br />
                <p className="studyToolsHeading">Research:</p>
                <li><a href={'https://reactjs.org/docs/lifting-state-up.html'}>React States</a></li>
                <li><a href={'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS'}>Cross-Origin Resource Sharing (CORS)</a></li>
                <li><a href={'https://reactjs.org/docs/forms.html'}>Forms in React</a></li>
                <li><a href={'https://medium.com/better-programming/creating-a-simple-app-with-react-js-f6aa88998952'}>Creating a React App from scratch 1</a></li> {/* only the first half was used for research on components and containers; a different method than the one used here was used to actually create this app */}
                <li><a href={'https://hackernoon.com/how-to-create-react-apps-from-scratch-part-1-setting-up-medr33z6'}>Creating a React App from scratch 2</a></li>
                <br /> <br />
                <p className="studtToolsHeading">References:</p>
                <li><a href={'https://www.w3schools.com/react/react_forms.asp'}>React Forms</a></li>
                <li><a href={'https://www.w3schools.com/html/html_css.asp'}>CSS Recap</a></li>
                <li><a href={'https://react-bootstrap.github.io/components/accordion/'}>Accordions</a></li>
                <li><a href={'https://www.digitalocean.com/community/tutorials/how-to-build-a-ui-component-with-react-and-storybook'}>Integrating Storybook</a></li>
                <li><a href={'https://www.youtube.com/watch?v=e_ZibOe77yo'}>How to Integrate the Create and Delete features of CRUD</a></li>
                <li><a href={'https://www.youtube.com/watch?v=N8kYlimhuLw'}>How to use FontAwesome to make the Delete Button a Trash Can</a></li>
                <li><a href={'https://medium.com/better-programming/handling-multiple-form-inputs-in-react-c5eb83755d15'}>Attemping to handle Multiple Form Inputs</a></li>
                <li><a href={'https://www.freecodecamp.org/news/create-a-react-frontend-a-node-express-backend-and-connect-them-together-c5798926047c/'}>How to create an Express Backend and hook it up to an existing React Frontend</a></li>
                <li><a href={'https://www.digitalocean.com/community/tutorials/workflow-nodemon'}>Attempting to integrate Nodemon</a></li>
                <li><a href={'https://www.codingame.com/playgrounds/6517/react-router-tutorial'}>Adding simple routes</a></li>
                <li><a href={'https://medium.com/swlh/how-to-create-your-first-mern-mongodb-express-js-react-js-and-node-js-stack-7e8b20463e66'}>Integrating Mongo 1</a></li>
                <li><a href={'https://zellwk.com/blog/crud-express-mongodb/'}>Integrating Mongo 2</a></li>
                <br />
            </div>
        );
    }
}

export default StudyTools;