import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
    apiKey: "AIzaSyDzhAxziSgS7OPA6ICC2BanA3bip_0XYRE",
    authDomain: "finale-24.firebaseapp.com",
    projectId: "finale-24",
    storageBucket: "finale-24.appspot.com",
    messagingSenderId: "580208279639",
    appId: "1:580208279639:web:f2c78ffce439a56c4d6312",
    measurementId: "G-E1SN8MK5P1"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
export const db = getFirestore(app);