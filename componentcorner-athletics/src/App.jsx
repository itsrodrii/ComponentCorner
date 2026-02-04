import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Example products
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      description: "High-quality wireless headphones with noise cancellation",
      price: 99.99,
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 2,
      name: "Bluetooth Speaker",
      description: "Portable speaker with premium sound quality",
      price: 79.99,
      image: "https://via.placeholder.com/600x400",
    },
    {
      id: 3,
      name: "Smartwatch",
      description: "Track your fitness and notifications on the go",
      price: 149.99,
      image: "https://via.placeholder.com/600x400",
    }
  ];

  // Add to cart
  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // Remove from cart
  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  // Total price using reduce
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="app">
      <Header storeName="ComponentCorner" cartCount={cartItems.length} />

      <Hero />

      <h2 className="section-title">Featured Products</h2>

      <section className="product-grid">
        {products.map(product => (
          <ProductCard
            key={product.id}
            name={product.name}
            description={product.description}
            price={product.price}
            image={product.image}
            inCart={cartItems.some(item => item.id === product.id)}
            addToCart={() => addToCart(product)}
            removeFromCart={() => removeFromCart(product.id)}
          />
        ))}
      </section>

      <h2 className="section-title">Shopping Cart</h2>
      {cartItems.length > 0 ? (
        <section className="product-grid">
          {cartItems.map(item => (
            <ProductCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              image={item.image}
              inCart={true}
              removeFromCart={() => removeFromCart(item.id)}
            />
          ))}
          <div style={{ textAlign: 'center', width: '100%', marginTop: '20px', fontWeight: '600' }}>
            Total: ${totalPrice.toFixed(2)}
          </div>
        </section>
      ) : (
        <div className="empty-feed">
          <p>Your cart is empty! Add some products to get started.</p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
