// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBF5Q-F_xMM2C6RMZbWnTJjUEBtbCSdQvY",
  authDomain: "innovation-hackathon-398309.firebaseapp.com",
  projectId: "innovation-hackathon-398309",
  storageBucket: "innovation-hackathon-398309.appspot.com",
  messagingSenderId: "422998640921",
  appId: "1:422998640921:web:558edb1149373114849d88",
  measurementId: "G-8X8MMYFEV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
//const analytics = getAnalytics(app);

export default db;
