import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Cabecalho from "./Cabecalho";
import Banner from "./Banner";
import SobreNos from "./SobreNos";
import Servicos from "./Servicos";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Cabecalho />
    <Banner />
    <SobreNos />
    <Servicos />
  </React.StrictMode>
);
