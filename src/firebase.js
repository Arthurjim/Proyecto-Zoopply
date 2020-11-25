import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/analytics'
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCjFHiduVZ8VFgEc5KldS3V5sJruWy4lQ4",
    authDomain: "zoopply-app.firebaseapp.com",
    databaseURL: "https://zoopply-app.firebaseio.com",
    projectId: "zoopply-app",
    storageBucket: "zoopply-app.appspot.com",
    messagingSenderId: "826844467649",
    appId: "1:826844467649:web:074065539ccbc3aca3df40",
    measurementId: "G-PTDX7PBKHH"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  export const db = fb.firestore()