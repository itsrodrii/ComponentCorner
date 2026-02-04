import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Header storeName="ComponentCorner Athletics" />

      <Hero
        title="Train Hard. Wear Better."
        subtitle="Premium gym apparel built for performance."
        ctaText="Shop Apparel"
      />

      <main className="products">
        <ProductCard
          name="Performance Training Tee"
          price="34.99"
          image="https://placehold.co/600x400?text=Gym+Apparel"
          description="Lightweight, sweat-wicking tee for intense workouts."
        />

        <ProductCard
          name="Seamless Gym Leggings"
          price="59.99"
          image="https://placehold.co/600x400?text=Gym+Apparel"
          description="High-waisted leggings designed for comfort and mobility."
        />

        <ProductCard
          name="Athletic Shorts"
          price="39.99"
          image="https://placehold.co/600x400?text=Gym+Apparel"
          description="Breathable shorts perfect for lifting and cardio."
        />
      </main>

      <Footer
        storeName="ComponentCorner Athletics"
        email="support@componentcornerathletics.com"
      />
    </>
  );
}

export default App;
