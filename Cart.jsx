import { motion } from 'framer-motion';
import '../styles/Cart.css';

function Cart({ items, onRemove }) {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const cartVariants = {
    hidden: { x: 400, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 30 }
    },
    exit: {
      x: 400,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 20 }
  };

  return (
    <motion.div
      className="cart-sidebar"
      variants={cartVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h2>Your Cart</h2>

      <div className="cart-items">
        {items.length === 0 ? (
          <p className="empty-cart">Your cart is empty</p>
        ) : (
          items.map((item) => (
            <motion.div
              key={item.id}
              className="cart-item"
              variants={itemVariants}
              layout
            >
              <img src={item.image} alt={item.name} />
              <div className="item-details">
                <h4>{item.name}</h4>
                <p>${item.price.toFixed(2)} x {item.quantity}</p>
              </div>
              <motion.button
                className="remove-btn"
                onClick={() => onRemove(item.id)}
                whileHover={{ scale: 1.1, color: '#e74c3c' }}
                whileTap={{ scale: 0.95 }}
              >
                ✕
              </motion.button>
            </motion.div>
          ))
        )}
      </div>

      {items.length > 0 && (
        <motion.div className="cart-footer">
          <div className="cart-total">
            <span>Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <motion.button
            className="checkout-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Proceed to Checkout
          </motion.button>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Cart;
