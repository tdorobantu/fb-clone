import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBN3oW4XZvUKI29y0zAkYigd0A1IOEuDBE",
    authDomain: "facebook-clone-c95e9.firebaseapp.com",
    projectId: "facebook-clone-c95e9",
    storageBucket: "facebook-clone-c95e9.appspot.com",
    messagingSenderId: "1011457550057",
    appId: "1:1011457550057:web:c20734244a5e993b573278",
    measurementId: "G-NB1C2XF3RS"
  };
  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;