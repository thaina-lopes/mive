import "./Cabecalho.css";
import { FaWhatsapp } from "react-icons/fa";

export default function Cabecalho() {
  return (
    <header>
      <div className="cabecalho">
        <a className="M-logo">m</a>
        <nav>
          <a>Quem somos</a>
          <a>Serviços</a>
          <a>Contato</a>
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
