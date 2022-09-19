import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAdA2HJ1okw2qsVEu-tF8EKaanzkNJ_IS8",
    authDomain: "react-yr.firebaseapp.com",
    projectId: "react-yr",
    storageBucket: "react-yr.appspot.com",
    messagingSenderId: "508604024547",
    appId: "1:508604024547:web:a154f9b04b5c6f7696a7d6"
  };
  


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) 




