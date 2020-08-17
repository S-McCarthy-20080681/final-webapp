//import React, { Component } from 'react';
//import app from './backend/app.js';
//import testDataRouter from './backend/routes/testData.js';
var testDataRouter = require("./backend/routes/testData.js");
//import express from 'express';
var express = require('express');
var dotenv = require('dotenv');
var React = require('react');
var ReactDOM = require('react-dom');
//import './index.css';
var App = require('./src/App.js');
//import * as serviceWorker from './serviceWorker';
//import 'bootstrap/dist/css/bootstrap.min.css';

dotenv.config();

var app = express();

const port = process.env.port;

app.use('/backend/routes/testData.js', testDataRouter);
app.use(express.static('public'));


app.use(express.static('public'));


app.listen(port, () => {
  console.info(`Server running at ${port}`);
})


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
