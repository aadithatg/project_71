import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyBpyCyFb6Krf3spAH8xrK2jJHSuUZkhGLc",
    authDomain: "project-71-83243.firebaseapp.com",
    projectId: "project-71-83243",
    storageBucket: "project-71-83243.appspot.com",
    messagingSenderId: "267921661146",
    appId: "1:267921661146:web:a3f637bb6cba1013f099e3"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
