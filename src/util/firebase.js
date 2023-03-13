import Firebase from "firebase";
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAZ6vsDa3onE3-q6A8jyTWw6JydF9eK-bk",
    authDomain: "quality-study-de42b.firebaseapp.com",
    projectId: "quality-study-de42b",
    storageBucket: "quality-study-de42b.appspot.com",
    messagingSenderId: "370763238882",
    appId: "1:370763238882:web:f7d533f93998c4e19d3dbb",
    measurementId: "G-G6TVZSS0FR"
};

if(!Firebase.apps.length){
    Firebase.initializeApp(firebaseConfig);
}

export default Firebase;