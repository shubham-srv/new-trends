// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  setDoc,
  getDoc,
  doc,
  writeBatch,
  collection,
  getDocs,
  query,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBWZb382tiw5SFrFkAW0I6_uJR2syMDYFo",
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
export const googleProvider = new GoogleAuthProvider();
export const googleSignIn = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.log(error.code, error.message);
  }
};

// add new documents to shop collections
export const addCollectionsAndDocuments = async (collectionItemsArray) => {
  const batch = writeBatch(db);
  collectionItemsArray.forEach(async (eachItem) => {
    const { title, items } = eachItem;
    console.log(items);
    const docRef = doc(collection(db, "collections"));
    batch.set(docRef, { title, items });
  });

  await batch.commit();
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

// get collections from firebase and convert to required collections object

export const mapCollectionsToObject = async () => {
  const finalCollectionsObject = {};
  const collectionQuery = query(collection(db, "collections"));
  const allDocsRef = await getDocs(collectionQuery);
  allDocsRef.forEach((doc) => {
    const { title, items } = doc.data();
    const titleLower = title.toLowerCase();
    finalCollectionsObject[titleLower] = {
      id: doc.id,
      title,
      routeName: encodeURI(titleLower),
      items,
    };
  });

  return finalCollectionsObject;
};
