const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    id_product: Number,
    title: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    rating: Number,
    stock: Number,
    brand: String,
    category: String,
    thumbnail: String,
    images: [String],
    producer: {
        type: Schema.Types.ObjectId,
        ref: 'Producer',
        required: true
    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
