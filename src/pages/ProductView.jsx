
import Section from '../components/Section';
import ProductListing from '../components/ProductListing';
import ProductOptions from '../components/ProductOptions';
import { useParams, Link } from 'react-router-dom';
import Gallery from '../components/Gallery';
import './ProductView.css';
import BuyBox from '../components/BuyBox';

const products = [
  {
    id: 1,
    name: 'Tênis Esportivo',
    category: 'Esporte e lazer',
    price: 199.90,
    image: '/produc-image-1.jpeg',
    description: 'Um produto desenvolvido para oferecer conforto, qualidade e estilo para o seu dia a dia.',
    gallery: [
      '/produc-image-1.jpeg',
      '/product-thumb-1.jpeg',
    ],
  },
  {
    id: 2,
    name: 'Tênis Casual',
    category: 'Casual',
    price: 249.90,
    image: '/produc-image-2.jpeg',
    description: 'Uma opção versátil para acompanhar diferentes momentos da sua rotina.',
    gallery: [
      '/produc-image-2.jpeg',
      '/product-thumb-2.jpeg',
    ],
  },
  {
    id: 3,
    name: 'Tênis Moderno',
    category: 'Moda',
    price: 179.90,
    image: '/produc-image-3.jpeg',
    description: 'Design moderno e confortável para quem procura praticidade e estilo.',
    gallery: [
      '/produc-image-3.jpeg',
      '/product-thumb-3.jpeg',
    ],
  },
  {
    id: 4,
    name: 'Tênis Confortável',
    category: 'Conforto',
    price: 219.90,
    image: '/produc-image-4.jpeg',
    description: 'Conforto e qualidade para acompanhar você em suas atividades.',
    gallery: [
      '/produc-image-4.jpeg',
      '/product-thumb-4.jpeg',
    ],
  },
  {
    id: 5,
    name: 'Tênis Premium',
    category: 'Lançamentos',
    price: 299.90,
    image: '/produc-image-5.jpeg',
    description: 'Um produto especial que combina qualidade, conforto e personalidade.',
    gallery: [
      '/produc-image-5.jpeg',
      '/product-thumb-5.jpeg',
    ],
  },
];

function ProductView() {
  const { id } = useParams();
  const product = products.find((item) => item.id === Number(id));

  const recommendedProducts = products.filter(
    (item) => item.id !== Number(id)
  );

  if (!product) {
    return (
      <main className="product-view">
        <h1>Produto não encontrado</h1>
        <Link to="/products">Voltar para produtos</Link>
      </main>
    );
  }

  const galleryImages = product.gallery.map((image, index) => ({
    src: image,
    alt: `${product.name} - imagem ${index + 1}`,
  }));

  return (
    <main className="product-view">
      <div className="product-breadcrumb">
        <Link to="/">Home</Link> /{' '}
        <Link to="/products">Produtos</Link> / {product.name}
      </div>

      <section className="product-details">
        <div className="product-details-image">
          <Gallery
            images={galleryImages}
            width="100%"
            height="clamp(240px, 35vw, 400px)"
            showThumbs={true}
          />
        </div>

        <div className="product-details-info">
          <span>{product.category}</span>

          <h1>{product.name}</h1>

          <p className="details-description">
            {product.description}
          </p>

          <ProductOptions
            sizes={['38', '39', '40', '41', '42', '43']}
            colors={['Preto', 'Branco', 'Azul']}
          />

          <BuyBox product={product} />

          <Link to="/products" className="back-link">
            Voltar para produtos
          </Link>
        </div>
      </section>

      <Section
        title="Produtos recomendados"
        titleAlign="left"
        link={{
          text: 'Ver todos',
          href: '/products',
        }}
      >
        <ProductListing products={recommendedProducts} />
      </Section>
    </main>
  );
}

export default ProductView;
