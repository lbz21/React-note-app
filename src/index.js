import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  firebase  from 'firebase/compat/app';
import 'firebase/compat/firestore'


var firebaseConfig = {

  apiKey: "AIzaSyC7Q6jwuJx-pwaLdH2lGiShQcmHg_YAIQE",
  authDomain: "note-system-app.firebaseapp.com",
  databaseURL: "https://note-system-app-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "note-system-app",
  storageBucket: "note-system-app.appspot.com",
  messagingSenderId: "517306493687",
  appId: "1:517306493687:web:ed96b755b366f8d1ea81f2",
  measurementId: "G-3E304VXN6H"

};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('evernote-container')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
