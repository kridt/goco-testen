import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAr0iJbYcBVXX0HNnE7-mqce8YZYay2h_I",
    authDomain: "goco-test-a8701.firebaseapp.com",
    projectId: "goco-test-a8701",
    storageBucket: "goco-test-a8701.appspot.com",
    messagingSenderId: "384998849279",
    appId: "1:384998849279:web:7759a5c7433d242fb1eaca"
  };

const app = firebase.initializeApp(firebaseConfig);



    export const auth = app.auth()
    export default app