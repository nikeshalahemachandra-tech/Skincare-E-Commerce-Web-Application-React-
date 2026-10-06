import { motion } from 'framer-motion';
import '../styles/ProductCard.css';

function ProductCard({ product, onAddToCart }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const imageVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.1,
      transition: { duration: 0.4 }
    }
  };

  const overlayVariants = {
    rest: { opacity: 0 },
    hover: {
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const priceVariants = {
    rest: { y: 0 },
    hover: { y: -10 }
  };

  return (
    <motion.div
      className="product-card"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      whileHover="hover"
     
      animate="rest"
    >
      <motion.div className="product-image-container" variants={imageVariants}>
        <img src={product.image} alt={product.name} className="product-image" />
        <motion.div className="product-overlay" variants={overlayVariants}>
          <motion.button
            className="quick-view-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Quick View
          </motion.button>
        </motion.div>
      </motion.div>

      <motion.div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          <span className="stars">⭐ {product.rating}</span>
          <span className="reviews">({product.reviews} reviews)</span>
        </div>

        <motion.div className="product-footer" variants={priceVariants}>
          <motion.span className="product-price" layoutId={`price-${product.id}`}>
            ${product.price.toFixed(2)}
          </motion.span>
          <motion.button
            className="add-to-cart-btn"
            onClick={() => onAddToCart(product)}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(212, 163, 115, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default ProductCard;
