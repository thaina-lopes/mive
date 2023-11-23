import "./SobreNos.css";
import sobrenos from "./img/sobrenos.png";

export default function SobreNos() {
  return (
    <section className="sobreNos">
      <div>
        <h2 className="titulo_SobreNos">Sobre nós</h2>
        <p className="paragrafo_SobreNos">
          Eu sou a Francieli, sou mãe de três meninas, esposa e apaixonada pela
          vida. Técnica em Publicidade e Propaganda, Fotógrafa por amor, já tive
          estúdio fotográfico onde o foco era fotografia infantil e gestante. Me
          considero uma pessoa criativa e apaixonada por criar. A Mivê nasceu do
          desejo de empreender, e nada melhor do que unir o útil ao agradável,
          unir a paixão pela fotografia e o amor por criar. Aqui criamos desde a
          identidade visual de uma marca, o ensaio fotográfico com fotos
          profissionais para as redes e sites, até a criação de conteúdos para
          as mídias sociais. Quero através do meu conhecimento auxiliar a sua
          marca a ser reconhecida no mundo digital.
        </p>
      </div>
      <div className="container_imagem">
        <img
          src={sobrenos}
          alt="Foto da Francieli e do logo da Mivê"
          className="Francieli"
        />
      </div>
    </section>
  );
}
