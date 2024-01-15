const orderModel = require('../models/store');

// Create a new order
const createOrder = async (req, res) => {
    try {
        const newOrder = new orderModel(req.body);
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all orders
const getAllOrders = async (req, res) => {
    try {
        const orders = await orderModel.find();
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get order by Id
const getOrderById = async (req, res) => {
    try {
        const order = await orderModel.findBy(req.params.id);
        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update product by Id
const updateOrdertById = async (req, res) => {
    try {
        const orderId = req.params.id;
        const updates = req.body;

        const order = await orderModel.findByIdAndUpdate(orderId, updates, {
            new: true,
        });

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json(order);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete product by Id
const deleteOrderById = async (req, res) => {
    try {
        const orderId = req.params.id;

        const order = await orderModel.findByIdAndDelete(orderId);

        if (!order) {
            return res.status(404).json({ message: 'Order not found' });
        }

        res.status(200).json({ message: 'Order deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrdertById,
    deleteOrderById,
};
