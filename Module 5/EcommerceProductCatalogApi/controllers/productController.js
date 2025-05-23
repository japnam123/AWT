const products = require('../data/products');

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProductById = (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).json({ message: 'Product not found' });
  res.json(product);
};

exports.getProductsByCategory = (req, res) => {
  const category = req.params.category.toLowerCase();
  const filtered = products.filter(p => p.category.toLowerCase() === category);
  res.json(filtered);
};
