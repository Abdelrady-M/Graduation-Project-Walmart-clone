const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
        unique: true
    },
    userId: {
        // type: mongoose.Schema.Types.ObjectId,
        type: Number,
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
        // type: mongoose.Schema.Types.ObjectId,
        type: Number,
        ref: "Categories",
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
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
    }
);

const productModel = mongoose.model('Products', productSchema);

module.exports = productModel;
