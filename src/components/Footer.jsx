
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-about">
          <h2>Digital Store</h2>
          <p>
            Sua loja online de produtos com qualidade,
            estilo e praticidade para o seu dia a dia.
          </p>
        </div>

        <div className="footer-links">
          <h3>Informações</h3>
          <a href="/">Home</a>
          <a href="/produtos">Produtos</a>
          <a href="/produtos">Categorias</a>
        </div>

        <div className="footer-contact">
          <h3>Atendimento</h3>
          <p>Entre em contato conosco.</p>
          <p>Segunda a sexta, das 8h às 18h.</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Digital Store. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
