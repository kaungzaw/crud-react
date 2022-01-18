import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyALQyRe0EiIFau0zdNWLhZtESCeJBIu5Vc",
  authDomain: "azur-list.firebaseapp.com",
  projectId: "azur-list",
  storageBucket: "azur-list.appspot.com",
  messagingSenderId: "90869685249",
  appId: "1:90869685249:web:2e1e20ae16e782c2e8b400",
  measurementId: "G-XXWYK94F8F",
};

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const firestore = getFirestore(app);
