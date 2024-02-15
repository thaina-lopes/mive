import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cabecalho from "./Cabecalho";
import Banner from "./Banner";
import SobreNos from "./SobreNos";
import Servicos from "./Servicos";
import SuaMarca from "./SuaMarca";
import Contato from "./Contato";
import Rodape from "./Rodape";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-jjkv9xL4n0JlWRGpvEU1frg1QLGHsVE",
  authDomain: "mive-digital.firebaseapp.com",
  projectId: "mive-digital",
  storageBucket: "mive-digital.appspot.com",
  messagingSenderId: "233675956946",
  appId: "1:233675956946:web:7ac38574bfa785c57a030b",
  measurementId: "G-PE5X0HQMXS",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
getAnalytics(app);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Banner />
    <SobreNos />
    <Servicos />
    <SuaMarca />
    <Contato />
    <Rodape />
  </React.StrictMode>
);
