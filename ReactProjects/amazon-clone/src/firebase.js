import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_w4MdgxGTv53_y5OJne-NoSgkRqvs82o",
  authDomain: "ecommerce-638a2.firebaseapp.com",
  projectId: "ecommerce-638a2",
  storageBucket: "ecommerce-638a2.appspot.com",
  messagingSenderId: "380816803356",
  appId: "1:380816803356:web:941f02ec4726459c9801d9",
  measurementId: "G-P7R3XDLH5G",
};

// create firebaseapp instance
const firebaseApp = firebase.initializeApp(firebaseConfig);

// ready db
const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
