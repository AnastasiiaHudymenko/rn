import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDoQKAMgMM5rQbJDcoQ7tfdY9xotkl52gs",
  authDomain: "rn-project-51463.firebaseapp.com",
  projectId: "rn-project-51463",
  storageBucket: "rn-project-51463.appspot.com",
  messagingSenderId: "122526412904",
  appId: "1:122526412904:web:3a76f9f4db7c7ea6f5cbdd",
  measurementId: "G-6XE2R61RSK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
