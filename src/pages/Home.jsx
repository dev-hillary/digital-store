
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import './Home.css';

const products = [
  { id: 1, name: 'Tênis Esportivo', category: 'Esporte e lazer', price: 199.90, image: '/produc-image-1.jpeg' },
  { id: 2, name: 'Tênis Casual', category: 'Casual', price: 249.90, image: '/produc-image-2.jpeg' },
  { id: 3, name: 'Tênis Moderno', category: 'Moda', price: 179.90, image: '/produc-image-3.jpeg' },
  { id: 4, name: 'Tênis Confortável', category: 'Conforto', price: 219.90, image: '/produc-image-4.jpeg' },
  { id: 5, name: 'Tênis Premium', category: 'Lançamentos', price: 299.90, image: '/produc-image-5.jpeg' },
  { id: 6, name: 'Tênis Esportivo 2', category: 'Esporte e lazer', price: 189.90, image: '/produc-image-1.jpeg' },
  { id: 7, name: 'Tênis Casual 2', category: 'Casual', price: 229.90, image: '/produc-image-2.jpeg' },
  { id: 8, name: 'Tênis Moderno 2', category: 'Moda', price: 209.90, image: '/produc-image-3.jpeg' },
];

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-content">
          <span className="hero-tag">Melhores ofertas personalizadas</span>

          <h1>
            Queima de
            <br />
            estoque Nike 🔥
          </h1>

          <p>
            Descubra as melhores ofertas em calçados,
            roupas e acessórios. Renove seu estilo
            com produtos que combinam com você!
          </p>

          <a href="/products" className="hero-button">
            Ver Ofertas
          </a>
        </div>

        <img
          src="/home-slide-5.jpeg"
          alt="Tênis Nike branco e vermelho"
          className="hero-image"
        />

        <div className="hero-decoration"></div>

        <div className="hero-dots">
          <span className="active"></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <Section title="Coleções em destaque">
        <div className="collection-grid">
          <div className="collection-card">
            <img src="/collection-1.png" alt="Coleção Supreme" />
            <span className="discount">30% OFF</span>
            <a href="/products" className="buy-button">Comprar</a>
          </div>

          <div className="collection-card">
            <img src="/collection-2.png" alt="Coleção Adidas" />
            <span className="discount">30% OFF</span>
            <a href="/products" className="buy-button">Comprar</a>
          </div>

          <div className="collection-card">
            <img src="/collection-3.png" alt="Coleção Beats" />
            <span className="discount">30% OFF</span>
            <a href="/products" className="buy-button">Comprar</a>
          </div>
        </div>
      </Section>

      <section className="categories">
        <h2>Coleções em destaque</h2>

        <div className="category-list">
          <a href="/products" className="category-item">
            <div className="category-icon active">
              <span>👕</span>
            </div>
            <span>Camisetas</span>
          </a>

          <a href="/products" className="category-item">
            <div className="category-icon">
              <span>👖</span>
            </div>
            <span>Calças</span>
          </a>

          <a href="/products" className="category-item">
            <div className="category-icon">
              <span>🧢</span>
            </div>
            <span>Bonés</span>
          </a>

          <a href="/products" className="category-item">
            <div className="category-icon">
              <span>🎧</span>
            </div>
            <span>Headphones</span>
          </a>

          <a href="/products" className="category-item">
            <div className="category-icon">
              <span>👟</span>
            </div>
            <span>Tênis</span>
          </a>
        </div>
      </section>

      <Section title="Produtos em alta" link="/products">
        <ProductListing
          products={products}
          className="home-product-grid"
        />
      </Section>

      <section className="special-offer">
        <div className="special-offer-image">
          <img
            src="/home-slide-6.jpeg"
            alt="Tênis em oferta especial"
          />
        </div>

        <div className="special-offer-content">
          <span className="special-offer-tag">Oferta especial</span>

          <h2>
            Air Jordan edição de
            <br />
            colecionador
          </h2>

          <p>
            Descubra a exclusividade de um clássico que nunca sai de moda. Design icônico, detalhes marcantes e conforto para quem valoriza estilo em cada passo. Garanta o seu e destaque-se.
          </p>

          <a href="/products" className="special-offer-button">
            Ver Oferta
          </a>
        </div>
      </section>
    </main>
  );
}

export default Home;
