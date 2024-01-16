const mongoose = require('mongoose');

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
    tags: [String],
});

productModel = mongoose.model('Product', productSchema);

module.exports = productModel;
