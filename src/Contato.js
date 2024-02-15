import "./Contato.css";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

export default function Contato() {
  return (
    <section className="contato">
      <h1 className="titulo_contato">Contato</h1>
      <div className="container_contato">
        <div className="contatos">
          <FaInstagram size={25} style={{ color: "purple" }} />
          <a
            className="texto_contato"
            href="https://www.instagram.com/mive.digitalmkt/"
            target="_blank"
            rel="noreferrer"
          >
            @mive.digitalmkt
          </a>
        </div>
        <div className="contatos">
          <MdOutlineEmail size={25} style={{ color: "purple" }} />
          <a
            className="texto_contato"
            href="mailto:mivedigital@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            mivedigital@gmail.com
          </a>
        </div>
        <div className="contatos">
          <FaWhatsapp size={25} style={{ color: "purple" }} />
          <a
            className="texto_contato"
            href="https://api.whatsapp.com/send?phone=5551995463448"
            target="_blank"
            rel="noreferrer"
          >
            (51)99546-3448
          </a>
        </div>
      </div>
    </section>
  );
}
