import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: ""
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)