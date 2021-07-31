import firebase from 'firebase';
import 'firebase/firestore';
import 'firebase/auth';

//division de ambientes entre prod/dev y test
if(process.env.NODE_ENV==='test'){
    const firebaseConfigTest = {
        apiKey: "AIzaSyDxbvlZRlIb702-_V-9qkpmEo_26-M-D5w",
        authDomain: "sql-demos-d9348.firebaseapp.com",
        projectId: "sql-demos-d9348",
        storageBucket: "sql-demos-d9348.appspot.com",
        messagingSenderId: "568856225384",
        appId: "1:568856225384:web:76c0ec4f103118b0d83ddd"
      };
      firebase.initializeApp(firebaseConfigTest);
}else{
    const firebaseConfig = {
        apiKey: "AIzaSyAe8bsVHmaGqNE5_RjQQ5AZKR0hLdMIguw",
        authDomain: "react-app-cursos-2ef23.firebaseapp.com",
        projectId: "react-app-cursos-2ef23",
        storageBucket: "react-app-cursos-2ef23.appspot.com",
        messagingSenderId: "369292047751",
        appId: "1:369292047751:web:bab593d59d4aae5e65cf22"
      };
      firebase.initializeApp(firebaseConfig);
} 




  // Initialize Firebase
  
  const db=firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  export {
      db,
      googleAuthProvider,
      firebase
  }