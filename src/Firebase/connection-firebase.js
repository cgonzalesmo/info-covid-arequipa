import firebase from 'firebase';
import { } from 'firebase/database';
require('firebase/auth')

const firebaseConfig = {
    apiKey: "AIzaSyBJa3IhLeHmMRPrx_yod3CTMSyX4JpanNs",
    authDomain: "infoaqp-302b2.firebaseapp.com",
    databaseURL: "https://infoaqp-302b2-default-rtdb.firebaseio.com",
    projectId: "infoaqp-302b2",
    storageBucket: "infoaqp-302b2.appspot.com",
    messagingSenderId: "579730147143",
    appId: "1:579730147143:web:bb28212f7c738bd2db6e62",
    measurementId: "G-PFMN9WNSEC"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
//export const fire = data.auth();
export const db = fire.database();