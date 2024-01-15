const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const {
    product,
    order,
    commentModel,
    deliveryModel,
    adminModel,
} = require('./models/Store');

const app = express();

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@${process.env.MONGODB_HOST}`;
console.log(uri);
mongoose.connect(uri);

run();
async function run() {
    try {
        const product = await product.create({
            name: 'board1',
            description: 'board',
            price: 300,
            isAvailable: true,
            photos: 'photo1',
            category: 'boards',
            priceHistory: [
                {
                    date: '10/01/2024',
                    price: 300,
                },
            ],
            tags: ['board'],
        });
        console.log(product);
    } catch (e) {
        console.log(e.message);
    }
}

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
