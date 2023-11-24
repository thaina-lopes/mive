import "./Cabecalho.css";
import logo from "./img/m.png";

export default function Cabecalho() {
  return (
    <header>
      <div className="cabecalho">
        <img src={logo} alt="Logo da Mivê" className="logo" />
        <nav>
          <a>Sobre nós</a>
          <a>Serviços</a>
          <a>Contato</a>
        </nav>
      </div>
    </header>
  );
}
