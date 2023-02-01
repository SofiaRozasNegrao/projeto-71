import firebase from "firebase";
require("@firebase/firestore");

  const firebaseConfig = {
    apiKey: "AIzaSyBRLpR9DI0nNxDzf8q-u1d0jg92xhFT9KU",
    authDomain: "area71.firebaseapp.com",
    projectId: "area71",
    storageBucket: "area71.appspot.com",
    messagingSenderId: "323798698493",
    appId: "1:323798698493:web:a21d811fedbcd3940c7194"
  };


firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
