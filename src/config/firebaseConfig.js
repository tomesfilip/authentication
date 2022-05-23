import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "authentication-350120.firebaseapp.com",
  projectId: "authentication-350120",
  storageBucket: "authentication-350120.appspot.com",
  messagingSenderId: "511841896855",
  appId: "1:511841896855:web:415ef92399ddcd3bd45cd2",
  measurementId: "G-JBSWTBVNDC"
}

const firebase = initializeApp(firebaseConfig)
const analytics = getAnalytics(firebase)

export default firebase