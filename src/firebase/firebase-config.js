import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

//console.log(process.env);

const firebaseConfig = {
    apiKey: process.env.REACT_APP_APIKEY,
    authDomain: process.env.REACT_APP_AUTHDOMAIN,
    databaseURL: process.env.REACT_APP_DATABASEURL,
    projectId: process.env.REACT_APP_PROJECTID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
    appId: process.env.REACT_APP_APPID
};

firebase.initializeApp(firebaseConfig);

// const firebaseConfig = {
//     apiKey: "AIzaSyALanhOVLSYGYnYDm7oj7ViFWWey90N_eI",
//     authDomain: "react-app-demo-77b4e.firebaseapp.com",
//     databaseURL: "https://react-app-demo-77b4e.firebaseio.com",
//     projectId: "react-app-demo-77b4e",
//     storageBucket: "react-app-demo-77b4e.appspot.com",
//     messagingSenderId: "290391180819",
//     appId: "1:290391180819:web:047b3e6d2d53751f15a1e6"
// };

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyD98e7H241oQpAt5I0CZQwkW9RAOYdsp2o",
//     authDomain: "sql-demos-76bd5.firebaseapp.com",
//     databaseURL: "https://sql-demos-76bd5.firebaseio.com",
//     projectId: "sql-demos-76bd5",
//     storageBucket: "sql-demos-76bd5.appspot.com",
//     messagingSenderId: "503535714521",
//     appId: "1:503535714521:web:bc4840ab45324133bebec8"
// };

//console.log(process.env);
// if (process.env.NODE_ENV === 'test') {
//     //testing
//     firebase.initializeApp(firebaseConfigTesting);
// } else {
//     //dev/prod
//     firebase.initializeApp(firebaseConfig);
// }

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}