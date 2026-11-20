
import './BuyBox.css';

function BuyBox({ product }) {
  function handleBuy() {
    alert('Produto adicionado ao carrinho!');
  }

  return (
    <div className="buy-box">
      <p className="buy-box-price">
        R$ {product.price.toFixed(2).replace('.', ',')}
      </p>

      <p className="buy-box-installment">
        ou em até 3x sem juros
      </p>

      <button
        className="buy-button"
        onClick={handleBuy}
      >
        Comprar
      </button>
    </div>
  );
}

export default BuyBox;
