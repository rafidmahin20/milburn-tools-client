// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN-WO-6ZrpTukvz1yUETP8V6mROadP1kU",
  authDomain: "milburn-tools.firebaseapp.com",
  projectId: "milburn-tools",
  storageBucket: "milburn-tools.appspot.com",
  messagingSenderId: "590159422618",
  appId: "1:590159422618:web:71302ca8dcda435269ab23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth