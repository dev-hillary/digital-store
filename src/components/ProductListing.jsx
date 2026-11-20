
import ProductCard from './ProductCard';
import './ProductListing.css';

function ProductListing({ products = [], className = '' }) {
  return (
    <div className={`product-listing ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}

export default ProductListing;
