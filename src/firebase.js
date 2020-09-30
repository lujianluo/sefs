import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'

var config = {
    apiKey: "AIzaSyAhitrrZx8RYkLR5kwC7gH_a3C36Ihklos",
    authDomain: "ad-project-9ed24.firebaseapp.com",
    databaseURL: "https://ad-project-9ed24.firebaseio.com",
    projectId: "ad-project-9ed24",
    storageBucket: "ad-project-9ed24.appspot.com",
    messagingSenderId: "1000226156535",
    appId: "1:1000226156535:web:fe1be0a2b5783c9a4fc8f2"
  };
  
const fb = firebase.initializeApp(config);

const db = firebase.firestore();

export {fb,db}