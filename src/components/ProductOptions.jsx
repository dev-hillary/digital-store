
import { useState } from 'react';
import './ProductOptions.css';

function ProductOptions({ sizes = [], colors = [] }) {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  return (
    <div className="product-options">

      {sizes.length > 0 && (
        <div className="option-group">
          <h3>Tamanho</h3>

          <div className="option-list">
            {sizes.map((size) => (
              <button
                key={size}
                className={selectedSize === size ? 'selected' : ''}
                onClick={() => setSelectedSize(size)}
                type="button"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      )}

      {colors.length > 0 && (
        <div className="option-group">
          <h3>Cor</h3>

          <div className="option-list">
            {colors.map((color) => (
              <button
                key={color}
                className={selectedColor === color ? 'selected' : ''}
                onClick={() => setSelectedColor(color)}
                type="button"
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}

export default ProductOptions;
