import React from 'react';
import ReactDOM from 'react-dom';
//import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import './index.css';
import App from './App';
//import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

// const Router = (props) => {
//   return (
//     <BrowserRouter>
//       <div className="jumbotron">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-md-6 offset-3">
//               <h1>
//                 <Link to="/">Home Page</Link>
//               </h1>
//             </div>
//           </div>
//         </div>
//         {/* <Switch>
//           <Route path
//         </Switch> */}
//       </div>
//     </BrowserRouter>
//   )
// }

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
