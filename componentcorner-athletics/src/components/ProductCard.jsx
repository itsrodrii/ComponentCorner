import './ProductCard.css';

function ProductCard({ name, description, price, image, inCart, addToCart, removeFromCart }) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>

      {inCart ? (
        <button className="hero-btn" onClick={removeFromCart}>
          Remove from Cart
        </button>
      ) : (
        <button className="hero-btn" onClick={addToCart}>
          Add to Cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
