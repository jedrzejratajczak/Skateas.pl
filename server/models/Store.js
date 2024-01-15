const mongoose = require('mongoose');
const { TagGroup } = require('rsuite');

const paymentMethod = [];
const deliveryMethod = [];
const orderStatus = [];

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    isAvailable: Boolean,
    photos: [String],
    category: String,
    priceHistory: [
        {
            date: Date,
            price: Number,
        },
    ],
    // tags: [mongoose.SchemaTypes.tags],
});

const orderSchema = new mongoose.Schema({
    products: {
        productId: mongoose.SchemaTypes.ObjectId,
        quantity: Number,
        commentMagicLink: String,
    },
    date: Date,
    totalPrice: Number,
    status: orderStatus,
    delivery: mongoose.SchemaTypes.ObjectId,
    paymentMethod: paymentMethod,
});

const commentSchema = new mongoose.Schema({
    date: Date,
    rating: Number,
    text: String,
    name: String,
});

const deliverySchema = new mongoose.Schema({
    method: deliveryMethod,
    description: String,
    price: Number,
});

const adminSchema = new mongoose.Schema({
    login: String,
    password: String,
});

productModel = mongoose.model('products', productSchema);
orderModel = mongoose.model('orders', orderSchema);
commentModel = mongoose.model('comments', commentSchema);
deliveryModel = mongoose.model('deliveries', deliverySchema);
adminModel = mongoose.model('admin', adminSchema);

module.exports = {
    productModel,
    orderModel,
    commentModel,
    deliveryModel,
    adminModel,
};
