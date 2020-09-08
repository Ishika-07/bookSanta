import firebase from 'firebase'
require ('@firebase/firestore')

// Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyAYvNYYbi_IM5ECObeX0oM7Vylo9a9TevY",
    authDomain: "booksanta-1e15c.firebaseapp.com",
    databaseURL: "https://booksanta-1e15c.firebaseio.com",
    projectId: "booksanta-1e15c",
    storageBucket: "booksanta-1e15c.appspot.com",
    messagingSenderId: "1017338568918",
    appId: "1:1017338568918:web:1ee67a2cb802cfc945e977"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();