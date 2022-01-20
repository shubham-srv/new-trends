// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "new-trends-f9d7d.firebaseapp.com",
  projectId: "new-trends-f9d7d",
  storageBucket: "new-trends-f9d7d.appspot.com",
  messagingSenderId: "454155196564",
  appId: "1:454155196564:web:3a963b765799da519b3c81",
  measurementId: "G-EXCD47G48G",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Google Sign in
const provider = new GoogleAuthProvider();
export const googleSignIn = async () => {
  try {
    await signInWithPopup(auth, provider);
  } catch (error) {
    console.log(error.code, error.message);
  }
};

// create user
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return null;
  }
  const { displayName, email, uid } = userAuth;
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
    } else {
      await setDoc(docRef, { displayName, email, uid, ...additionalData });
    }
    return docSnap;
  } catch (error) {
    console.log(error);
  }
};
