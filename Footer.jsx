import { motion } from 'framer-motion';
import '../styles/Footer.css';

function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.footer
      className="footer"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="footer-content">
        <motion.div className="footer-section" variants={itemVariants}>
          <h3>LuxeCream</h3>
          <p>Premium skincare products for your face and body</p>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h4>Contact Info</h4>
          <p>Email: info@luxecream.com</p>
          <p>Phone: +94 70 123 4567</p>
          <p>Address: 123 Beauty Lane, Colombo</p>
        </motion.div>

        <motion.div className="footer-section" variants={itemVariants}>
          <h4>Follow Us</h4>
          <div className="social-links">
            <motion.a href="https://www.facebook.com" whileHover={{ scale: 1.2 }}>Facebook</motion.a>
            <motion.a href="https://www.instagram.com › ." whileHover={{ scale: 1.2 }}>Instagram</motion.a>
            <motion.a href="#" whileHover={{ scale: 1.2 }}>Twitter</motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <p>&copy; 2027 LuxeCream. All rights reserved.</p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;
