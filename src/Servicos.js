import "./Servicos.css";
import instagram from "./img/img_instagram.png";
import fotografia from "./img/img_fotografia.png";
import site from "./img/img_site.png";

export default function Servicos() {
  return (
    <section>
      <div className="servicos">
        <h1 className="servicos_titulo">Serviços</h1>
        <div className="servicos_container">
          <div className="servicos_oferecidos">
            <img
              src={instagram}
              alt="icone do instagram"
              className="img_servicos"
            />
            <h2 className="titulo_servicos">
              Gerenciamento e Estratégia para Instagram
            </h2>
            <p className="descricao_servicos">
              Criação de conteúdo, análise de perfil e muito mais.
            </p>
          </div>
          <div className="servicos_oferecidos">
            <img
              src={fotografia}
              alt="icone de uma câmera"
              className="img_servicos"
            />
            <h2 className="titulo_servicos">Ensaio Fotográfico Profissional</h2>
            <p className="descricao_servicos">
              Ensaio fotográfico profissional. Elegância e sofisticação!
            </p>
          </div>
          <div className="servicos_oferecidos">
            <img src={site} alt="icone de um site" className="img_servicos" />
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
