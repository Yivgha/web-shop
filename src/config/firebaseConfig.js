import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4WrnBwlfyHWnII9eMSwabuTWMtt92QDQ",
  authDomain: "webshoptest-eb893.firebaseapp.com",
  projectId: "webshoptest-eb893",
  storageBucket: "webshoptest-eb893.appspot.com",
  messagingSenderId: "353969720862",
  appId: "1:353969720862:web:515fc513473d937cd8280f",
  measurementId: "G-MLG13DDVZM"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const fs = firebase.firestore();
const storage = firebase.storage();

export { auth, fs, storage };