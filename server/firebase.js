// server/firebase.js
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import dotenv from 'dotenv'
dotenv.config()

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
  measurementId: process.env.FIREBASE_MEASUREMENT_ID
}


// const firebaseConfig = {
//   apiKey: "AIzaSyCl1C3ucWseQMzR8lZ9QVFTQCPAmmsnsPg",
//   authDomain: "roma-apartelle-scheduler.firebaseapp.com",
//   projectId: "roma-apartelle-scheduler",
//   storageBucket: "roma-apartelle-scheduler.firebasestorage.app",
//   messagingSenderId: "365171614876",
//   appId: "1:365171614876:web:9c62f1d633a8db9a8a7959",
//   measurementId: "G-8NDVPVZQHP"
// };

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }