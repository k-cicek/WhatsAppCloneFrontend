import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDMbzeKvBxP22NfFtzHpvESPd48K9Vkb0Q",
    authDomain: "whatsapp-mern-d68ef.firebaseapp.com",
    projectId: "whatsapp-mern-d68ef",
    storageBucket: "whatsapp-mern-d68ef.appspot.com",
    messagingSenderId: "554031522125",
    appId: "1:554031522125:web:7498e442a6359f6d8a1704"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;