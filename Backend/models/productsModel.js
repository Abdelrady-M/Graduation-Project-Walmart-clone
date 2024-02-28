const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    product_name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    subCategory: {
        type: String, // Change to String type
    },
    manufacturer: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
    },
    images: [
        {
            url: {
                type: String,
                required: true,
            },
        }
    ]
},
    {
        timestamps: true, collection: 'Products'
    });

const productModel = mongoose.model('Products', productSchema);

module.exports = productModel;
