const mongoose = require('mongoose');

const OrderStatus = [];
const PaymentMethod = [];

const orderSchema = new mongoose.Schema({
    prodcuts: [
        {
            productId: mongoose.Types.ObjectId,
            quantity: Number,
            commentMagicLink: String,
        },
    ],
    date: Date,
    totalPrice: Number,
    status: OrderStatus,
    delivery: mongoose.Types.ObjectId,
    paymentMethod: PaymentMethod,
});

commentModel = mongoose.model('comments', commentSchema);

module.exports = commentModel;
