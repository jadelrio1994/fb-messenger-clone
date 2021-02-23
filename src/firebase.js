import firebase from 'firebase'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA0aU4oRwHCUmVQydY7O536Vsa79Ep0KtI",
  authDomain: "facebook-messenger-clone-33a3c.firebaseapp.com",
  projectId: "facebook-messenger-clone-33a3c",
  storageBucket: "facebook-messenger-clone-33a3c.appspot.com",
  messagingSenderId: "847665658667",
  appId: "1:847665658667:web:ece33aa357a90169d2636e",
  measurementId: "G-5KNW8XQBTB"
});

const db = firebaseApp.firestore();

export default db;