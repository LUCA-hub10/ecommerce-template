const Product = require('../models/Product');

// GET all products
exports.getAllProducts = async (req, res) => {
    const products = await Product.find();
    res.json(products);
};

// CREATE product
exports.createProduct = async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
};

// UPDATE product
exports.updateProduct = async (req, res) => {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};

// DELETE product
exports.deleteProduct = async (req, res) => {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: 'Product deleted' });
};