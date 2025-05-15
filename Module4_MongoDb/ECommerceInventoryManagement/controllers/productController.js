const Product = require('../models/Product');

// Create Product
exports.createProduct = async (req, res) => {
  const { name, description, price, quantity, category, supplier } = req.body;

  try {
    const newProduct = new Product({
      name,
      description,
      price,
      quantity,
      category,
      supplier,
    });

    await newProduct.save();
    res.status(201).json({ message: 'Product created successfully', newProduct });
  } catch (error) {
    res.status(500).json({ message: 'Error creating product', error });
  }
};

// Get All Products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate('category').populate('supplier');
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching products', error });
  }
};

// Update Product
exports.updateProduct = async (req, res) => {
  const { productId } = req.params;
  const updateData = req.body;

  try {
    const product = await Product.findByIdAndUpdate(productId, updateData, { new: true });
    res.status(200).json({ message: 'Product updated successfully', product });
  } catch (error) {
    res.status(500).json({ message: 'Error updating product', error });
  }
};

// Delete Product
exports.deleteProduct = async (req, res) => {
  const { productId } = req.params;

  try {
    await Product.findByIdAndDelete(productId);
    res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting product', error });
  }
};
