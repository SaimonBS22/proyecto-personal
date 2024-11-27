/* eslint-disable */
/* prettier-ignore */
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBObWnF1ET_VmFk9D34ciYkB_6UZ9yaj80",
  authDomain: "lodefacu-e8408.firebaseapp.com",
  projectId: "lodefacu-e8408",
  storageBucket: "lodefacu-e8408.firebasestorage.app",
  messagingSenderId: "554131549151",
  appId: "1:554131549151:web:35e8bebfffbd6f88a1326a"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db
