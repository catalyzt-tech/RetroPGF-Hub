
"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GithubAuthProvider, GoogleAuthProvider, getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

let FIREBASE_APIKEY:string | undefined = undefined;
let FIREBASE_AUTHDOMAIN:string | undefined = undefined;
let FIREBASE_PROJECT_ID:string | undefined = undefined;
let FIREBASE_STORAGE_BUCKET:string | undefined = undefined;
let FIREBASE_MSG_SENDER:string | undefined = undefined;
let FIREBASE_APP_ID:string | undefined = undefined;
let FIREBASE_MEASURE:string | undefined = undefined;

if(process.env.NEXT_PUBLIC_FIREBASE_APIKEY) {
  FIREBASE_APIKEY = process.env.NEXT_PUBLIC_FIREBASE_APIKEY
}
if(process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN) {
    FIREBASE_AUTHDOMAIN = process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN
}
if(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
  FIREBASE_PROJECT_ID = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID
}
if(process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET) {
  FIREBASE_STORAGE_BUCKET = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET
}
if(process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER) {
  FIREBASE_MSG_SENDER = process.env.NEXT_PUBLIC_FIREBASE_MSG_SENDER
}
if(process.env.NEXT_PUBLIC_FIREBASE_APP_ID) {
  FIREBASE_APP_ID = process.env.NEXT_PUBLIC_FIREBASE_APP_ID
}
if(process.env.NEXT_PUBLIC_FIREBASE_MEASURE) {
  FIREBASE_MEASURE = process.env.NEXT_PUBLIC_FIREBASE_MEASURE
}

const firebaseConfig = {
  apiKey: FIREBASE_APIKEY,
  authDomain: FIREBASE_AUTHDOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MSG_SENDER,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASURE,
};
// console.log(firebaseConfig)

// console.log(process.env.FIREBASE_APIKEY)
// console.log(process.env.FIREBASE_AUTHDOMAIN)
// console.log(process.env.FIREBASE_PROJECT_ID)
// console.log(process.env.FIREBASE_STORAGE_BUCKET)
// console.log(process.env.FIREBASE_MSG_SENDER)
// console.log(process.env.FIREBASE_APP_ID)
// console.log(process.env.FIREBASE_MEASUREMEN)
// console.log("end")

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
// const analytics = getAnalytics(app);