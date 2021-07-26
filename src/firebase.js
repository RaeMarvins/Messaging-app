import firebase from "firebase"

//Configuration keys for message app

const firebaseConfig = {
    apiKey: "AIzaSyDHvQyyT-2hq67lIvgrAS5FMZboCjRj6Lw",
    authDomain: "message-application-6b867.firebaseapp.com",
    projectId: "message-application-6b867",
    storageBucket: "message-application-6b867.appspot.com",
    messagingSenderId: "616083440893",
    appId: "1:616083440893:web:5b3cb6219bbc15734caa94",
    measurementId: "G-PRH4CQ0QFD"
  };


  //code to initialise app
  const firbaseApp = firebase.initializeApp(firebaseConfig);

  //invoking our database
  const db =firebase.firestore();

  //invoking our authentication service
  const auth =firebase.auth();

   // google auth provider setup
   const provider = new firebase.auth.GoogleAuthProvider()

   //exporting our instances so that we can use them any where in our project
     export {auth,provider};
     export default db;