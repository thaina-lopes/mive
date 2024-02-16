import "./Cabecalho.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Cabecalho() {
  return (
    <header>
      <div className="cabecalho">
        <a href="#inicio" className="M-logo">
          m
        </a>
        <nav>
          <a href="#quemsomos" className="menu">
            Quem somos
          </a>
          <a href="#servicos" className="menu">
            Serviços
          </a>
          <a href="#contato" className="menu">
            Contato
          </a>
          <a
            className="whats"
            href="https://api.whatsapp.com/send?phone=5551995463448"
            target="_blank"
          >
            <FaWhatsapp size={35} />
            <span class="balao">Whatsapp</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
