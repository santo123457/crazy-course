import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyCVeXzokzt13hA5dlZ3J-SfX-yz9NgcWfE",
  authDomain: "crazy-course.firebaseapp.com",
  projectId: "crazy-course",
  storageBucket: "crazy-course.appspot.com",
  messagingSenderId: "234628442862",
  appId: "1:234628442862:web:acb8ea108913fd287061ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app; 


// Initialize Firebase Authentication and get a reference to the service
