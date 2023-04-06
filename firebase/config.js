import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getReactNativePersistence } from "firebase/auth/react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyDoQKAMgMM5rQbJDcoQ7tfdY9xotkl52gs",
  authDomain: "rn-project-51463.firebaseapp.com",
  projectId: "rn-project-51463",
  storageBucket: "rn-project-51463.appspot.com",
  messagingSenderId: "122526412904",
  appId: "1:122526412904:web:3a76f9f4db7c7ea6f5cbdd",
  measurementId: "G-6XE2R61RSK",
};

let app;
let auth;
if (getApps().length < 1) {
  app = initializeApp(firebaseConfig);
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
} else {
  app = getApp();
  auth = getAuth();
}
export { app, auth };
export const db = getFirestore(app);
export const storage = getStorage(app);
