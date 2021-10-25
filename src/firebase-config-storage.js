// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "@firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-717edRle5-k9XrQhj6qLz47geoUrYT8",
  authDomain: "kids-78b1b.firebaseapp.com",
  projectId: "kids-78b1b",
  storageBucket: "kids-78b1b.appspot.com",
  messagingSenderId: "329160406324",
  appId: "1:329160406324:web:850f45a59f264e093ce161",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
