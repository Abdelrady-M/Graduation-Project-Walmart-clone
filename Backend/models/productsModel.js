const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    product_id: {
        type: Number,
        required: true,
        Unique: true
    },
    userId: {
        type: Schema.Types.ObjectId,
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
        type: Schema.Types.ObjectId,
        ref: "Categories",
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        required: true,
    },
},
    {
        timestamps: true,
    }
);

const productModel = mongoose.model('Products', productSchema);

module.exports = productModel;
