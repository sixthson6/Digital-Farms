import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyBvQu_bvXDsWKbqtpyQsJiYgouyBMBSP-4",
  authDomain: "digifarms-db.firebaseapp.com",
  projectId: "digifarms-db",
  storageBucket: "digifarms-db.appspot.com",
  messagingSenderId: "876065472529",
  appId: "1:876065472529:web:1bde595e5a63d0637731b0",
  measurementId: "G-QB2VKT41EN"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;