

import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore'

const {
  VITE_API_KEY,
  VITE_AUTH_DOMAIN,
  VITE_PROJECT_ID,
  VITE_STORAGE_BUCKET,
  VITE_MESSAGING_SENDER_ID,
  VITE_APP_ID,
  VITE_MEASUREMENT_ID,
} = import.meta.env;



const firebaseConfig = {
  apiKey:'AIzaSyDrh-uRzNvN78tlHz2Up8fsNdsgxdj7kgA',
  authDomain:"netflix-clone-ce887.firebaseapp.com",
  projectId:"netflix-clone-ce887",
  storageBucket:"netflix-clone-ce887.appspot.com",
  messagingSenderId:"795708902832",
  appId:"1:795708902832:web:fb0fc9d7cbc136739f5a75",
  measurementId:'G-QGYF37CW4F',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



export const auth=getAuth(app)
export const db=getFirestore(app)