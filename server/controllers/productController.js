const productModel = require('../models/store');

// Create a new product
const createProduct = async (req, res) => {
    try {
        const newProduct = new productModel(req.body);
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get product by Id
const getProductById = async (req, res) => {
    try {
        const product = await productModel.findBy(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update product by Id
const updateProductById = async (req, res) => {
    try {
        const productId = req.params.id;
        const updates = req.body;

        const product = await productModel.findByIdAndUpdate(
            productId,
            updates,
            {
                new: true,
            },
        );

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete product by Id
const deleteProductById = async (req, res) => {
    try {
        const productId = req.params.id;

        const product = await productModel.findByIdAndDelete(productId);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProductById,
    deleteProductById,
};
