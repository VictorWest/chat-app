import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore" 

const firebaseConfig = {
  apiKey: "AIzaSyCIJd_bkZJi0NqErphbwxROFZB-77agtAM",
  authDomain: "practice-app-9b71c.firebaseapp.com",
  projectId: "practice-app-9b71c",
  storageBucket: "practice-app-9b71c.appspot.com",
  messagingSenderId: "1048401524865",
  appId: "1:1048401524865:web:9f43744a25634d1011f580",
  measurementId: "G-WN4M0MTXFE"
};


export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app)