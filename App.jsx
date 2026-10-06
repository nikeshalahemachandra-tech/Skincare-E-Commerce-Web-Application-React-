// App.jsx - SETUP ROUTING PROPERLY
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Cart from './components/Cart';
import Footer from './components/Footer';
import About from './components/About';
import Contact from './components/Contact';
import './styles/global.css';

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  return (
    <Router>
      <div className="app">
        <Header 
          cartCount={cart.length} 
          onCartClick={() => setShowCart(!showCart)} 
        />

        <Routes>
          {/* Home Page */}
          <Route 
            path="/" 
            element={
              <>
                <Hero />
                <Products onAddToCart={addToCart} />
              </>
            } 
          />
          
          {/* About Page */}
          <Route path="/about" element={<About />} />
          
          {/* Contact Page */}
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {showCart && (
          <Cart items={cart} onRemove={removeFromCart} />
        )}
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;