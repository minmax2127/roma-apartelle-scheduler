// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-analytics.js";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "https://www.gstatic.com/firebasejs/11.8.0/firebase-auth.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
const analytics = getAnalytics(app);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
// Initialize Firebase Authentication and get a reference to the service

const googleLogin = document.getElementById("loginWithGoogle");

googleLogin.addEventListener("click", function() {
    signInWithPopup(auth, provider)
    .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const user = result.user;
        console.log(user);
        window.location.href = "logged.html";
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });
})




