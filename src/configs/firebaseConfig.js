// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCPKyhYg9UgPJOqW24KZT7OwVoWtGvXiu0',
  authDomain: 'we-care-69039.firebaseapp.com',
  projectId: 'we-care-69039',
  storageBucket: 'we-care-69039.appspot.com',
  messagingSenderId: '202733149610',
  appId: '1:202733149610:web:a8d861cef652e590f11fd3',
  measurementId: 'G-NY1N84E7JF',
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
