import "./Servicos.css";
import { FaInstagram } from "react-icons/fa";
import { IoCameraOutline } from "react-icons/io5";
import { TbWorldWww } from "react-icons/tb";

export default function Servicos() {
  return (
    <section>
      <div className="servicos">
        <h1 className="servicos_titulo">Serviços</h1>
        <div className="servicos_container">
          <div className="servicos_oferecidos">
            <FaInstagram size={40} />

            <h2 className="titulo_servicos">
              Gerenciamento e Estratégia para Instagram
            </h2>
            <p className="descricao_servicos">
              Criação de conteúdo, análise de perfil e muito mais.
            </p>
          </div>
          <div className="servicos_oferecidos">
            <IoCameraOutline size={40} />
            <h2 className="titulo_servicos">Ensaio Fotográfico Profissional</h2>
            <p className="descricao_servicos">
              Ensaio fotográfico profissional. Elegância e sofisticação!
            </p>
          </div>
          <div className="servicos_oferecidos">
            <TbWorldWww size={40} />
            <h2 className="titulo_servicos">Criação de sites responsivos</h2>
            <p className="descricao_servicos">
              Desenvolvimento de sites. Credibilidade e confiabilidade para o
              seu negócio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
