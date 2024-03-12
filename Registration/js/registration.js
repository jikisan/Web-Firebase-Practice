// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
import { getDatabase, set, ref} from "https://www.gstatic.com/firebasejs/10.8.1/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

const fullNameInput = document.getElementById('fullNameInput');
const usernameInput = document.getElementById('usernameInput');
const emailInput = document.getElementById('email');
const phoneNumberInput = document.getElementById('phoneNumberInput');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');


function registerUser(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const fullName = fullNameInput.value;
    const username = usernameInput.value;
    const email = emailInput.value;
    const phoneNumber = phoneNumberInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput.value;

    console.log('email:', email); // Moved these log statements after variable assignments
    console.log('password:', password);


    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const userId = userCredential.user.uid; // Get the user ID

        // User successfully registered
        console.log('User successfully registered with ID: ' + userId)
        // You can redirect the user to a different page here

        const userData = {
            fullName: fullName,
            username: username,
            email: email,
            phoneNumber: phoneNumber,
            // Avoid storing password in plain text in the database
            // Only if necessary, consider hashing the password before storing it
          };

          // Uncomment the following line to store user data in the database
          const userRef = ref(db, 'Users/' + userId);
          set(userRef, userData);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Handle errors like invalid email or password
        console.error(errorCode, errorMessage);
        alert(errorMessage);
      });
  }

  document.getElementById('mainForm').addEventListener('submit', registerUser);