import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "bootswatch/dist/morph/bootstrap.min.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUViYkRqmOwKB40al_74re3X5IoGyPkAU",
  authDomain: "dementho-b0733.firebaseapp.com",
  projectId: "dementho-b0733",
  storageBucket: "dementho-b0733.appspot.com",
  messagingSenderId: "83550660834",
  appId: "1:83550660834:web:207588926e6192ecfa56bb"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
