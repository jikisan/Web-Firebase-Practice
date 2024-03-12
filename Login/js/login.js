// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, get, ref, child} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAIyrWXgFEio2wjOmEq0X1wAiNcHnzxI40",
    authDomain: "web-firebase-practice-d9fcf.firebaseapp.com",
    projectId: "web-firebase-practice-d9fcf",
    storageBucket: "web-firebase-practice-d9fcf.appspot.com",
    messagingSenderId: "73876206695",
    appId: "1:73876206695:web:339a435e9f561f0571d0c2",
    measurementId: "G-ZHL7EZ6N7L"
  };

  // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase();

const usernameInput = document.getElementById('usernameInput');
const passwordInput = document.getElementById('password');

function loginUser(event) {
    event.preventDefault();

    const username = usernameInput.value;
    const password = passwordInput.value;

    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid; // Get the user ID

        // User successfully registered
        alert('User successfully logged in. ')

      
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors like invalid email or password
        console.error(errorCode, errorMessage);
        alert(errorMessage);
      });


}

document.getElementById('loginMainForm').addEventListener('submit', loginUser);
