const Supplier = require('../models/Suppliers')

// Create Supplier
exports.createSupplier = async (req, res) => {
  const { name, contact, email, address } = req.body;

  try {
    const newSupplier = new Supplier({ name, contact, email, address });
    await newSupplier.save();
    res.status(201).json({ message: 'Supplier created successfully', newSupplier });
  } catch (error) {
    res.status(500).json({ message: 'Error creating supplier', error });
  }
};

// Get All Suppliers
exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching suppliers', error });
  }
};

// Update Supplier
exports.updateSupplier = async (req, res) => {
  const { supplierId } = req.params;
  const updateData = req.body;

  try {
    const supplier = await Supplier.findByIdAndUpdate(supplierId, updateData, { new: true });
    res.status(200).json({ message: 'Supplier updated successfully', supplier });
  } catch (error) {
    res.status(500).json({ message: 'Error updating supplier', error });
  }
};

// Delete Supplier
exports.deleteSupplier = async (req, res) => {
  const { supplierId } = req.params;

  try {
    await Supplier.findByIdAndDelete(supplierId);
    res.status(200).json({ message: 'Supplier deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting supplier', error });
  }
};
