import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyDvl464Tuf7lvCdqNKbI7zz5N6lQDrMS_g",
  authDomain: "yesnote-d5b9a.firebaseapp.com",
  projectId: "yesnote-d5b9a",
  storageBucket: "yesnote-d5b9a.appspot.com",
  messagingSenderId: "460859622538",
  appId: "1:460859622538:web:4f071e61f236c9528b1973"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

export { projectFirestore };

export default firebase;
