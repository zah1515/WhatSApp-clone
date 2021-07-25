import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDmTy8w-Wck6jvVN44xbg0t9mhguxUCB-o",
  authDomain: "whatsapp-clone-a2eea.firebaseapp.com",
  projectId: "whatsapp-clone-a2eea",
  storageBucket: "whatsapp-clone-a2eea.appspot.com",
  messagingSenderId: "735369721088",
  appId: "1:735369721088:web:b361b67025bc752423afe5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
