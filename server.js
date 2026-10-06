const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

let products = [];
let cart = [];

try {
  const dataPath = path.join(__dirname, 'data.json');
  const rawData = fs.readFileSync(dataPath);
  products = JSON.parse(rawData);
} catch (error) {
  console.log('Error loading data.json:', error);
  products = [];
}

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
});

app.post('/api/cart', (req, res) => {
  const { productId, quantity } = req.body;
  const product = products.find(p => p.id === productId);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  
  const cartItem = cart.find(item => item.id === productId);
  if (cartItem) {
    cartItem.quantity += quantity;
  } else {
    cart.push({ ...product, quantity });
  }
  res.json(cart);
});

app.get('/api/cart', (req, res) => {
  res.json(cart);
});

app.delete('/api/cart/:id', (req, res) => {
  cart = cart.filter(item => item.id !== parseInt(req.params.id));
  res.json(cart);
});

app.post('/api/checkout', (req, res) => {
  const { customerInfo } = req.body;
  const order = {
    orderId: Date.now(),
    items: cart,
    customer: customerInfo,
    total: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  };
  cart = [];
  res.json({ success: true, order });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
