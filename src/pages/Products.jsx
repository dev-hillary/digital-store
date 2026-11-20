
import { useState } from 'react';
import ProductListing from '../components/ProductListing';
import './Products.css';

const products = [
  {
    id: 1,
    name: 'Tênis Esportivo',
    category: 'Esporte e lazer',
    price: 199.90,
    image: '/produc-image-1.jpeg',
  },
  {
    id: 2,
    name: 'Tênis Casual',
    category: 'Casual',
    price: 249.90,
    image: '/produc-image-2.jpeg',
  },
  {
    id: 3,
    name: 'Tênis Moderno',
    category: 'Moda',
    price: 179.90,
    image: '/produc-image-3.jpeg',
  },
  {
    id: 4,
    name: 'Tênis Confortável',
    category: 'Conforto',
    price: 219.90,
    image: '/produc-image-4.jpeg',
  },
  {
    id: 5,
    name: 'Tênis Premium',
    category: 'Lançamentos',
    price: 299.90,
    image: '/produc-image-5.jpeg',
  },
];

function Products() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState('');
  const [sortOrder, setSortOrder] = useState('relevant');
  const [filtersOpen, setFiltersOpen] = useState(false);

  function handleCategoryChange(category) {
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  }

  const filteredProducts = products
    .filter((product) => {
      const matchesCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(product.category);

      const matchesPrice =
        priceRange === ''
          ? true
          : priceRange === 'upTo200'
            ? product.price <= 200
            : product.price > 200;

      return matchesCategory && matchesPrice;
    })
    .sort((a, b) => {
      if (sortOrder === 'lowest') {
        return a.price - b.price;
      }

      if (sortOrder === 'highest') {
        return b.price - a.price;
      }

      return a.id - b.id;
    });

  function clearFilters() {
    setSelectedCategories([]);
    setPriceRange('');
    setSortOrder('relevant');
  }

  return (
    <main className="products-page">
      <div className="products-heading">
        <div className="products-title">
          <h1>Produtos</h1>
          <p>Confira nossos produtos disponíveis.</p>
        </div>

        <div className="products-toolbar">
          <div className="sort-control">
            <label htmlFor="sort-products">Ordenar por:</label>
            <select
              id="sort-products"
              aria-label="Ordenar produtos"
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value)}
            >
              <option value="relevant">Mais relevantes</option>
              <option value="lowest">Menor preço</option>
              <option value="highest">Maior preço</option>
            </select>
          </div>

          <button
            className="mobile-filter-button"
            type="button"
            aria-expanded={filtersOpen}
            aria-controls="products-filters"
            onClick={() => setFiltersOpen((current) => !current)}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 7h16" />
              <path d="M7 12h10" />
              <path d="M10 17h4" />
            </svg>
            <span>Filtrar</span>
          </button>
        </div>
      </div>

      <div className="products-content">
        <aside
          id="products-filters"
          className={`filters ${filtersOpen ? 'filters-open' : ''}`}
        >
          <h2>Filtrar por</h2>

          <h3>Categoria</h3>

          {[
            'Esporte e lazer',
            'Casual',
            'Moda',
            'Conforto',
            'Lançamentos',
          ].map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                checked={selectedCategories.includes(category)}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}

          <h3>Preço</h3>

          <label>
            <input
              type="checkbox"
              checked={priceRange === 'upTo200'}
              onChange={() =>
                setPriceRange((current) =>
                  current === 'upTo200' ? '' : 'upTo200'
                )
              }
            />
            Até R$ 200
          </label>

          <label>
            <input
              type="checkbox"
              checked={priceRange === 'above200'}
              onChange={() =>
                setPriceRange((current) =>
                  current === 'above200' ? '' : 'above200'
                )
              }
            />
            Acima de R$ 200
          </label>

          <button
            className="clear-filters"
            type="button"
            onClick={clearFilters}
          >
            Limpar filtros
          </button>
        </aside>

        <section className="products-results">
          <p className="results-count">
            {filteredProducts.length} produto(s) encontrado(s)
          </p>

          {filteredProducts.length > 0 ? (
            <ProductListing
              products={filteredProducts}
              className="product-grid"
            />
          ) : (
            <p className="no-products">
              Nenhum produto encontrado com esses filtros.
            </p>
          )}
        </section>
      </div>
    </main>
  );
}

export default Products;
