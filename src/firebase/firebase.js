const firebase = require('firebase');

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANHzuLLOB_C_FUnHp-cAeAeNcAM-_yn-Y",
  authDomain: "projeto-iot-b1952.firebaseapp.com",
  projectId: "projeto-iot-b1952",
  storageBucket: "projeto-iot-b1952.appspot.com",
  messagingSenderId: "816348293220",
  appId: "1:816348293220:web:12e1881e3357db30b99771"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

module.exports = { app }; //export the app