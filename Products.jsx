import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import '../styles/Products.css';
import rose from "../assets/images/rose.jpg"
import body from "../assets/images/body.jpg"
import night from "../assets/images/night.jpg"
import butter from "../assets/images/butter.jpg"
import skin from "../assets/images/skin.jpg"
import serum from "../assets/images/serum.jpg"


function Products({ onAddToCart }) {
  const products = [
    {
      id: 1,
      name: "Luxury Face Cream",
      category: "Face Care",
      price: 45.99,
      image: rose,
      description: "Premium moisturizing cream for face",
      ingredients: ["Hyaluronic Acid", "Rose", "Retinol"],
      rating: 4.8,
      reviews: 156
    },
    {
      id: 2,
      name: "Body Moisturizer Lotion",
      category: "Body Care",
      price: 32.99,
      image: body,
      description: "Smooth and hydrating body lotion",
      ingredients: ["Shea Butter", "Coconut Oil"],
      rating: 4.6,
      reviews: 203
    },
    {
      id: 3,
      name: "Night Repair Cream",
      category: "Face Care",
      price: 52.99,
      image: night,
      description: "Intensive night repair treatment",
      ingredients: ["Suger", "Omega-3", "Ceramides"],
      rating: 4.9,
      reviews: 189
    },
    {
      id: 4,
      name: "Body Butter Deluxe",
      category: "Body Care",
      price: 38.99,
      image: butter,
      description: "Rich and luxurious body butter",
      ingredients: ["Cocoa Butter", "Jojoba Oil", "Vitamin E"],
      rating: 4.7,
      reviews: 245
    },
    {
      id: 5,
      name: "Sensitive Skin Cream",
      category: "Face Care",
      price: 27.99,
      image: skin,
      description: "Gentle formula for sensitive skin",
      ingredients: ["Chamomile", "Oat Extract", "Panthenol"],
      rating: 4.8,
      reviews: 167
    },
    {
      id: 6,
      name: "Hydration Boosting Serum",
      category: "Face Care",
      price: 58.99,
      image: serum,
      description: "Intensive hydration serum",
      ingredients: ["Hyaluronic Acid", "Glycerin", "Green Tea"],
      rating: 4.9,
      reviews: 312
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      id="products"
      className="products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.div className="products-header" variants={titleVariants}>
        <h2>Our Premium Collection</h2>
        <p>Discover luxury skincare for face and body</p>
      </motion.div>

      <motion.div className="products-grid" variants={containerVariants}>
        {products.map((product) => (
          <motion.div key={product.id} variants={cardVariants}>
            <ProductCard
              product={product}
              onAddToCart={onAddToCart}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Products;