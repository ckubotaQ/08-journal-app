import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyAe8bsVHmaGqNE5_RjQQ5AZKR0hLdMIguw",
    authDomain: "react-app-cursos-2ef23.firebaseapp.com",
    projectId: "react-app-cursos-2ef23",
    storageBucket: "react-app-cursos-2ef23.appspot.com",
    messagingSenderId: "369292047751",
    appId: "1:369292047751:web:bab593d59d4aae5e65cf22"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const db=firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export {
      db,
      googleAuthProvider,
      firebase
  }