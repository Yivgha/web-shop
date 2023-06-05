import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC4WrnBwlfyHWnII9eMSwabuTWMtt92QDQ",
  authDomain: "webshoptest-eb893.firebaseapp.com",
  projectId: "webshoptest-eb893",
  storageBucket: "webshoptest-eb893.appspot.com",
  messagingSenderId: "353969720862",
  appId: "1:353969720862:web:515fc513473d937cd8280f",
  measurementId: "G-MLG13DDVZM"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);
export { app, firestore, storage, auth }