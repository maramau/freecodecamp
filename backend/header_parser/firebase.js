// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDq_Ri2qNjTNbwkT74vMDogVM2_md1meK4",
  authDomain: "headerparser-e0927.firebaseapp.com",
  projectId: "headerparser-e0927",
  storageBucket: "headerparser-e0927.appspot.com",
  messagingSenderId: "489045903393",
  appId: "1:489045903393:web:35bd65cc0708e90b8c7b60"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase
function init() {
    const appFirebase = initializeApp(firebaseConfig);
  
    return appFirebase;
  }
  
  export {init};