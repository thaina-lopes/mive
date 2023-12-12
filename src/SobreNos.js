import "./SobreNos.css";
import sobrenos from "./img/sobrenos4.png";
import sobrenos2 from "./img/sobrenos3.png";

export default function SobreNos() {
  return (
    <section className="sobreNos">
      <div className="container_SobreNos">
        <h2 className="titulo_SobreNos">Quem Somos</h2>
        <p className="paragrafo_SobreNos">
          Muito mais que uma agência, somos especialistas em mídias digitais.
          Com atendimento único e diferenciado, cada cliente se torna um amigo
          ao qual trabalhamos juntos rumo ao sucesso. Criando estratégias para
          que você e sua empresa sejam reconhecidos e lembrados nas mídias,
          assim aumentando significativamente seus clientes.
        </p>
      </div>
      <div className="container_imagem">
        <img
          src={sobrenos}
          alt="Foto da Francieli e do logo da Mivê"
          className="Francieli"
        />
        <img
          src={sobrenos2}
          alt="Foto da Francieli e do logo da Mivê"
          className="Francieli2"
        />
      </div>
    </section>
  );
}
