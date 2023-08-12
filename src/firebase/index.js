// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import {getStorage} from "firebase/storage"
import {getMessaging} from "firebase/messaging"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5QQbkcSdHlwxSZ4Ti_yoBEmtG5oVWTig",
  authDomain: "codebrew-contacts.firebaseapp.com",
  projectId: "codebrew-contacts",
  storageBucket: "codebrew-contacts.appspot.com",
  messagingSenderId: "238415444352",
  appId: "1:238415444352:web:04ae38370b5aa261ee2965",
  measurementId: "G-TXBXW801K6"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export default firebase; 
export const storage = getStorage(app);
export const messaging = getMessaging(app);

