import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyArbz9qmQCWODfAt8-r9oSr17u_VADtxyM",
  authDomain: "turnin-211e8.firebaseapp.com",
  projectId: "turnin-211e8",
  storageBucket: "turnin-211e8.appspot.com",
  messagingSenderId: "900727271623",
  appId: "1:900727271623:web:041f652e00e58c0a820ee2",
};
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(config);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
