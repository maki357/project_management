import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "projectmanagementtehnickaskola.firebaseapp.com",
  projectId: "projectmanagementtehnickaskola",
  storageBucket: "projectmanagementtehnickaskola.appspot.com",
  messagingSenderId: "484105139902",
  appId: API_ID,
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();
const projectStorage = firebase.storage();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, projectStorage, timestamp };
