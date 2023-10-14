// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCXRzd5RhGW8xEBarKlG-rptqcuwZ3TbAg",
  authDomain: "code-collab-app.firebaseapp.com",
  projectId: "code-collab-app",
  storageBucket: "code-collab-app.appspot.com",
  messagingSenderId: "467667855472",
  appId: "1:467667855472:web:2b0f76ac86930a5a07acb5",
  measurementId: "G-1LY38MWB82"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
