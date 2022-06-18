import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0QpzI54GO4NtKLi4qrp0rn1e86lfB7Cw",
  authDomain: "whatsclone-cf494.firebaseapp.com",
  databaseURL: "https://whatsclone-cf494-default-rtdb.firebaseio.com",
  projectId: "whatsclone-cf494",
  storageBucket: "whatsclone-cf494.appspot.com",
  messagingSenderId: "674733620926",
  appId: "1:674733620926:web:dc4807857a06f4280f28ef",
  measurementId: "G-DY1ZE42W75"
};
  const firebaseApp =firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const provider= new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;