import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

// Firebase imports/config
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

// Boostrap and styling
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyCzAuCTopOeWSG2eFGPQSyptljpJh6uUQk",
    authDomain: "mindful-journal.firebaseapp.com",
    databaseURL: "https://mindful-journal.firebaseio.com",
    projectId: "mindful-journal",
    storageBucket: "mindful-journal.appspot.com",
    messagingSenderId: "403375212602"
};
firebase.initializeApp(config);

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
registerServiceWorker();