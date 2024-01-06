// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuUVFBwlEMdEc6WdyP7ZyzkkxMiPqHpts",
  authDomain: "headerparser-69092.firebaseapp.com",
  projectId: "headerparser-69092",
  storageBucket: "headerparser-69092.appspot.com",
  messagingSenderId: "321609985493",
  appId: "1:321609985493:web:be08f8c9d9c52ea274615c"
};

// Initialize Firebase
function init() {
  const appFirebase = initializeApp(firebaseConfig);

  return appFirebase;
}

export {init};