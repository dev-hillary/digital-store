
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <article className="product-card">
      <Link to={`/product/${product.id}`}>
        <div className="product-image">
          <img src={product.image} alt={product.name} />
        </div>

        <span className="product-category">
          {product.category}
        </span>

        <h2>{product.name}</h2>

        <p className="product-price">
          R$ {product.price.toFixed(2).replace('.', ',')}
        </p>
      </Link>

      <Link
        to={`/product/${product.id}`}
        className="product-button"
      >
        Ver produto
      </Link>
    </article>
  );
}

export default ProductCard;
