import "./Rodape.css";

export default function Rodape() {
  return (
    <footer>
      <div className="rodape">
        <a
          href="https://agencia-mive.vercel.app/"
          target="_blank"
          class="rodape-mive"
          rel="noreferrer"
        >
          ©<p class="assinatura"> mivê - Digital Marketing</p>
        </a>
      </div>
    </footer>
  );
}
