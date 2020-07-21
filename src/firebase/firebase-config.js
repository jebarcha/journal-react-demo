import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyALanhOVLSYGYnYDm7oj7ViFWWey90N_eI",
    authDomain: "react-app-demo-77b4e.firebaseapp.com",
    databaseURL: "https://react-app-demo-77b4e.firebaseio.com",
    projectId: "react-app-demo-77b4e",
    storageBucket: "react-app-demo-77b4e.appspot.com",
    messagingSenderId: "290391180819",
    appId: "1:290391180819:web:047b3e6d2d53751f15a1e6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}