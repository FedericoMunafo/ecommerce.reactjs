import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO7XHbk0SC68cZpqM3zQY03CNLLMWl3wM",
  authDomain: "ecommerce-sweetnails.firebaseapp.com",
  projectId: "ecommerce-sweetnails",
  storageBucket: "ecommerce-sweetnails.appspot.com",
  messagingSenderId: "1050946368965",
  appId: "1:1050946368965:web:84cb7dc8f47028d474c7ac"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);