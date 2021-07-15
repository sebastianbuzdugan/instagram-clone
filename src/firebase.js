 import firebase from "firebase";

 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC0xCLyEBDLj_HATiF_YS3U5KZne425uUA",
    authDomain: "instagram-clone-c6787.firebaseapp.com",
    projectId: "instagram-clone-c6787",
    storageBucket: "instagram-clone-c6787.appspot.com",
    messagingSenderId: "756269561898",
    appId: "1:756269561898:web:6326a8431eb2935bb12b53",
    measurementId: "G-DWRV9TRPN0"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db, auth, storage };



