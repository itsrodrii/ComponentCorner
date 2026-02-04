import Header from './components/Header';
import Hero from './components/Hero';
import ProductCard from './components/ProductCard';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header storeName="ComponentCorner" />

      <Hero />

      <h2 className="section-title">Featured Products</h2>

      <section className="product-grid">
        <ProductCard
          name="Wireless Headphones"
          description="High-quality wireless headphones with noise cancellation"
          price="99.99"
          image="https://via.placeholder.com/600x400"
        />

        <ProductCard
          name="Bluetooth Speaker"
          description="Portable speaker with premium sound quality"
          price="79.99"
          image="https://via.placeholder.com/600x400"
        />
      </section>

      <Footer />
    </div>
  );
}

export default App;
