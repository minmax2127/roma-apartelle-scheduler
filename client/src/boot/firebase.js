// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCl1C3ucWseQMzR8lZ9QVFTQCPAmmsnsPg",
  authDomain: "roma-apartelle-scheduler.firebaseapp.com",
  projectId: "roma-apartelle-scheduler",
  storageBucket: "roma-apartelle-scheduler.firebasestorage.app",
  messagingSenderId: "365171614876",
  appId: "1:365171614876:web:9c62f1d633a8db9a8a7959",
  measurementId: "G-8NDVPVZQHP"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

export { auth }
