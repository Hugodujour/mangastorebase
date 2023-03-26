import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDhBs63XN8FUfZg0FxKj9TZmv2N46ij1qA",
  authDomain: "mangastore-1a6c0.firebaseapp.com",
  databaseURL: "https://mangastore-1a6c0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mangastore-1a6c0",
  storageBucket: "mangastore-1a6c0.appspot.com",
  messagingSenderId: "1052012637916",
  appId: "1:1052012637916:web:b1fe7297ae56d0fab00e19"
};

export default function initFirebase() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
}