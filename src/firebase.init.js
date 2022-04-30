// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD51wxFLuaDaVa79ghyJ6tO1gQps8wKLaM",
    authDomain: "routing-and-authenticati-95667.firebaseapp.com",
    projectId: "routing-and-authenticati-95667",
    storageBucket: "routing-and-authenticati-95667.appspot.com",
    messagingSenderId: "928456239247",
    appId: "1:928456239247:web:e291079bea375e46f428fa"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;