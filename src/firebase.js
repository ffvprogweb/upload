// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYsXfSnZpvum0pb6NAC_8CS2MWbBOCUPo",
  authDomain: "imagemupload-38e1d.firebaseapp.com",
  projectId: "imagemupload-38e1d",
  storageBucket: "imagemupload-38e1d.appspot.com",
  messagingSenderId: "683840502278",
  appId: "1:683840502278:web:ac2e46780c4ecb86caa187",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
