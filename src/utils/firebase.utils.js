import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore"; 


const firebaseConfig = {
  apiKey: "AIzaSyBWiBr_AWewILoGGjsdXS5PakoThbxarCA",
  authDomain: "trackfit-e328c.firebaseapp.com",
  projectId: "trackfit-e328c",
  storageBucket: "trackfit-e328c.appspot.com",
  messagingSenderId: "799033105052",
  appId: "1:799033105052:web:d476474813bd915ad66b59",
  measurementId: "G-DEQG55FBGM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const saveExerciseToLocalStorage = async ()=>{
    let exObj ={}
    const querySnapshot = await getDocs(collection(db, "defaultExercises"));
    querySnapshot.forEach((doc) => {
        exObj =  doc.data()
    });
    return exObj
} 



