const Category = require('../models/Category');

// Create Category
exports.createCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.status(201).json({ message: 'Category created successfully', newCategory });
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error });
  }
};

// Get All Categories
exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
};

// Update Category
exports.updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const updateData = req.body;

  try {
    const category = await Category.findByIdAndUpdate(categoryId, updateData, { new: true });
    res.status(200).json({ message: 'Category updated successfully', category });
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
};

// Delete Category
exports.deleteCategory = async (req, res) => {
  const { categoryId } = req.params;

  try {
    await Category.findByIdAndDelete(categoryId);
    res.status(200).json({ message: 'Category deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error });
  }
};
