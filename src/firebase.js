// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBpejz_jDkLKmaUG3qccbHJ52yaz5-2BJI",

  authDomain: "react-firebase-store-f7738.firebaseapp.com",

  projectId: "react-firebase-store-f7738",

  storageBucket: "react-firebase-store-f7738.appspot.com",

  messagingSenderId: "399247818734",

  appId: "1:399247818734:web:9835ba94df8dae088858ff"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db};