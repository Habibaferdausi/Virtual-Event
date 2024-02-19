import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB3WKjNyCQ0l35PB3gmCO4RMlw6XN4smjM",
  authDomain: "virtual-event-space-27375.firebaseapp.com",
  projectId: "virtual-event-space-27375",
  storageBucket: "virtual-event-space-27375.appspot.com",
  messagingSenderId: "1098716865490",
  appId: "1:1098716865490:web:cc67e0d2b2ed9fc8315e0b",
  measurementId: "G-CZBZYEG4TX"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); 
export  {db,app};


