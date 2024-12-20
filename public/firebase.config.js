import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAIY4zKV4bRcpaYHxZrVnXtJAJpvHHfU9U",
  authDomain: "blog-cfb50.firebaseapp.com",
  projectId: "blog-cfb50",
  storageBucket: "blog-cfb50.firebasestorage.app",
  messagingSenderId: "762367923492",
  appId: "1:762367923492:web:84c1d019c7c7f26bafcfb1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
