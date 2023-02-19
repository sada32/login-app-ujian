import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAn0GbkO-PtGEuRDMUdszdwrE7ixsvJleE",
    authDomain: "login-register-exam-1392f.firebaseapp.com",
    projectId: "login-register-exam-1392f",
    storageBucket: "login-register-exam-1392f.appspot.com",
    messagingSenderId: "271786072932",
    appId: "1:271786072932:web:60fa6819d50d88f8ed3871"
};

const Fire = initializeApp(firebaseConfig);
const Auth = getAuth(Fire);
export {Fire, Auth};
