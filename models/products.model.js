const mongoose = require('../utils/db_mongo');

const productSchema = new mongoose.Schema({
    id_product: {
        type: Number,
        required: true
    },
    title:  {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    discountPercentage: {   
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        required: true},
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    thumbnail: {
        type: String,
        required: true
    },
    images: {
        type: String,
        validate: {
            validator: function (url) {
                return url.indexOf('.jpg' || '.png' || '.jpeg') != -1;
            },
            message: "Please, only .jpg, .png or .jpeg formats are allowed."
        }
    },
    producer_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Producer',
        required: true,

    }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;

/* title: {
    type: String,
    required: true
},
price: {
    type: Number,
    required: true
},
description: {
    type: String,
    required: true
},
image:{
    type: String,
    validate: {
        validator: function(url){
            return url.indexOf('.jpg') != -1;
        },
        message: "Porfa, sólo imágenes JPG"
    }
} */