// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-analytics.js";
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCl1C3ucWseQMzR8lZ9QVFTQCPAmmsnsPg",
  authDomain: "roma-apartelle-scheduler.firebaseapp.com",
  projectId: "roma-apartelle-scheduler",
  storageBucket: "roma-apartelle-scheduler.firebasestorage.app",
  messagingSenderId: "365171614876",
  appId: "1:365171614876:web:9c62f1d633a8db9a8a7959",
  measurementId: "G-8NDVPVZQHP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();

const user = auth.currentUser;
function updateUserProfile(user) {
    const userName = user.displayName;
    const userEmail = user.email;
    const userPhoto = user.photoURL;
    // update the html
    document.getElementById("userName").textContent = userName;
    document.getElementById("userEmail").textContent = userEmail;
    document.getElementById("userProfilePicture").src = userPhoto;
}

onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, update the user profile
        updateUserProfile(user);
        const uid = user.uid;
        return uid;
    } else {
        // User is signed out, redirect to login page
        alert("Create account and login to continue");
    }
})