import firebase from "firebase"


//configuration keys for  message app
const firebaseConfig = {
    apiKey: "AIzaSyD-g1OYlsLtqsgUwbyc8WpUvpvmOdKn6OM",
    authDomain: "message-app-f4b82.firebaseapp.com",
    projectId: "message-app-f4b82",
    storageBucket: "message-app-f4b82.appspot.com",
    messagingSenderId: "943011993216",
    appId: "1:943011993216:web:60a0a0eb00b84096fa3865",
    measurementId: "G-9BLHQHNC02"
  };
  
  // code to initialise app
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // invoking our database
  const db =firebaseApp.firestore();

  // invoking our authentication service

  const auth =firebase.auth();

  // google auth provider setup
  const provider = new firebase.auth.GoogleAuthProvider()

  //exporting our instances so that we can use them any where in our project
    export {auth,provider};
    export default db;