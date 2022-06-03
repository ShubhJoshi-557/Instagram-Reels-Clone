import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6zZmSrcr6RuDTiyAQsOwNjr9FmTo_-sE",
  authDomain: "reels-34651.firebaseapp.com",
  projectId: "reels-34651",
  storageBucket: "reels-34651.appspot.com",
  messagingSenderId: "862963783534",
  appId: "1:862963783534:web:afd471db5696ceeb3f537f"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
    users : firestore.collection('users'),
    posts : firestore.collection('posts'),
    comments : firestore.collection('comments'),
    getTimeStamp : firebase.firestore.FieldValue.serverTimestamp,
}

export const storage = firebase.storage()