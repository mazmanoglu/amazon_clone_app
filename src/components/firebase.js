import firebase  from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDBFVlpnihYu6MFWtBCWD0YhPodcw4P1Gw",
  authDomain: "clone-4936d.firebaseapp.com",
  projectId: "clone-4936d",
  storageBucket: "clone-4936d.appspot.com",
  messagingSenderId: "580002962622",
  appId: "1:580002962622:web:afd9454942c506f1ec92ef",
  measurementId: "G-0LLL3X7N37",
};

const firebaseApp = firebase.initalizeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};
