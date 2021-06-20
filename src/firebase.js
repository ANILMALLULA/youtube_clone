import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbTbtsC7Bn10WDC6YXe0krIfFfI-1yzlY",
  authDomain: "ytclone-by-anil.firebaseapp.com",
  projectId: "ytclone-by-anil",
  storageBucket: "ytclone-by-anil.appspot.com",
  messagingSenderId: "662004472904",
  appId: "1:662004472904:web:5720d6ef0449dfbf94cc7d",
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
