// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
import "@firebase/firestore";
import "@firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzZ0cXxxpO3gAHI7YBjAYYS9oLe9dDrSk",
  authDomain: "walpaper-app-74f6d.firebaseapp.com",
  projectId: "walpaper-app-74f6d",
  storageBucket: "walpaper-app-74f6d.appspot.com",
  messagingSenderId: "454800262865",
  appId: "1:454800262865:web:79b76e96f8ed99cf9027f0",
  measurementId: "G-1SJSQ97Z4K"
};

// Initialize Firebase
if (firebase.apps.length > 0 === false) {
    firebase.initializeApp(firebaseConfig);
  }
  
  export { firebase };