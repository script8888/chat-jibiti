import { getApp, initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjpML1aZH5I4AcYOz9Kd8jA813A1IkL_A",
  authDomain: "chat-gpt-d4d1a.firebaseapp.com",
  projectId: "chat-gpt-d4d1a",
  storageBucket: "chat-gpt-d4d1a.appspot.com",
  messagingSenderId: "22606812211",
  appId: "1:22606812211:web:6f01914a65cdb0b25c3f46",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
