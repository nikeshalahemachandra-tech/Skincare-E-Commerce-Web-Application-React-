import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header({ cartCount, onCartClick }) {
  
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const logoVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 }
    },
    hover: { scale: 1.1, transition: { duration: 0.2 } }
  };

  const navItemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    hover: { color: '#d4a373', transition: { duration: 0.2 } }
  };

  return (
    <motion.header
      className="header"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="header-container"
        variants={logoVariants}
        whileHover="hover"
      >
        <h1 className="logo">✨ LuxeCream</h1>
      </motion.div>

    <nav className="nav">
        <motion.a href="/" variants={navItemVariants} whileHover="hover">Home</motion.a>
        <motion.a href="#products" variants={navItemVariants} whileHover="hover">Products</motion.a>
        <motion.div variants={navItemVariants} whileHover="hover">
          <Link to="/about">About Us</Link>
        </motion.div>
        <motion.div variants={navItemVariants} whileHover="hover">
          <Link to="/contact">Contact</Link>
        </motion.div>
      </nav>

      <motion.button
        className="cart-btn"
        onClick={onCartClick}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        🛒 Cart ({cartCount})
      </motion.button>
    </motion.header>
  ); 
}

export default Header;
