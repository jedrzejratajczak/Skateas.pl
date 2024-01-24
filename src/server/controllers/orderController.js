const orderModel = require('../models/store');

const createOrder = async (orderData) => {
    try {
        const newOrder = new orderModel(orderData);
        await newOrder.save();
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const getAllOrders = async () => {
    try {
        const orders = await orderModel.find();
        return orders;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const getOrderById = async (orderId) => {
    try {
        const order = await orderModel.findBy(orderId);
        if (!order) {
            return null;
        }
        return order;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const updateOrdertById = async (orderId, updates) => {
    try {
        const updatedOrder = await orderModel.findByIdAndUpdate(
            orderId,
            updates,
            {
                new: true,
            },
        );

        if (!updatedOrder) {
            return null;
        }
        return updatedOrder;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

const deleteOrderById = async (orderId) => {
    try {
        const deletedOrder = await orderModel.findByIdAndDelete(orderId);

        if (!deletedOrder) {
            return null;
        }
        return deletedOrder;
    } catch (err) {
        throw err;
    } finally {
        mongoose.connection.close();
    }
};

module.exports = {
    createOrder,
    getAllOrders,
    getOrderById,
    updateOrdertById,
    deleteOrderById,
};
