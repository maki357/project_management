import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDdAuJ-SH1uLGDRvN5mPF0Li_ctPPa41n0",
  authDomain: "projectmanagementtehnickaskola.firebaseapp.com",
  projectId: "projectmanagementtehnickaskola",
  storageBucket: "projectmanagementtehnickaskola.appspot.com",
  messagingSenderId: "484105139902",
  appId: "1:484105139902:web:b2c7de14466f4a9bd510ef",
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
