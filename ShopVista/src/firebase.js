import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6dKP6xe-BvXrSHjg34_pS1LUlPFygvaU",
  authDomain: "shopvista-76917.firebaseapp.com",
  projectId: "shopvista-76917",
  storageBucket: "shopvista-76917.appspot.com",
  messagingSenderId: "552894607391",
  appId: "1:552894607391:web:94c508ca95767b0c82a52a",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
