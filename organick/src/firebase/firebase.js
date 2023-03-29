// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAcuBYhzMt0WeWU5H5vCpGyhKms_w99foU',
  authDomain: 'organickdb.firebaseapp.com',
  projectId: 'organickdb',
  storageBucket: 'organickdb.appspot.com',
  messagingSenderId: '685744143866',
  appId: '1:685744143866:web:05b4f82fe0baeb6ce2f843',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
