
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {initializeFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9K3hgu1-TpcCuYPF7hZidIZTmyraO4WU",
  authDomain: "userlistinreact.firebaseapp.com",
  projectId: "userlistinreact",
  storageBucket: "userlistinreact.appspot.com",
  messagingSenderId: "294013771963",
  appId: "1:294013771963:web:9b5b47d331e1d93986c99e"
};

// // Initialize Firebase
// initializeApp(firebaseConfig);
export default getFirestore();

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export {auth,db};