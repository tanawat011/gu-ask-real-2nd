// Import the functions you need from the SDKs you need
import { getAnalytics } from 'firebase/analytics'
import { initializeApp } from 'firebase/app'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: window._env_.REACT_APP_FIREBASE_API_KEY,
  authDomain: window._env_.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: window._env_.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: window._env_.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: window._env_.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: window._env_.REACT_APP_FIREBASE_APP_ID,
  measurementId: window._env_.REACT_APP_FIREBASE_MEASUREMENT_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
