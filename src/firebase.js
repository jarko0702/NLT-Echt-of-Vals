import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD-cAWPPP56N3s6gU5zyDK6ZcDJtBuxn74",
  authDomain: "nlt-echt-of-vals.firebaseapp.com",
  projectId: "nlt-echt-of-vals",
  storageBucket: "nlt-echt-of-vals.appspot.com",
  messagingSenderId: "78065938392",
  appId: "1:78065938392:web:44562221a71d6fb878ccad",
};

const Firebase = firebase.initializeApp(firebaseConfig);
const db = Firebase.firestore();

export default db;
