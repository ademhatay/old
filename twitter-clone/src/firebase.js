import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebase from "./firebase";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA008YOzfFPj77272796NJ0ezFhDJja8lI",
  authDomain: "twitter-clone-9d68b.firebaseapp.com",
  projectId: "twitter-clone-9d68b",
  storageBucket: "twitter-clone-9d68b.appspot.com",
  messagingSenderId: "238535780094",
  appId: "1:238535780094:web:0ec21cb49c304e3d8c27af",
  measurementId: "G-7CJ7ZV25CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const db = firebase.firestore();

export default db;