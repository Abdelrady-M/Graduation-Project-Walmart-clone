const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    review_id: {
        type: Number,
        required: true,
        unique: true
    },
    product_id: {
        type: mongoose.Schema.Types.ObjectId,  // Corrected line
        ref: "Products",
        required: true,
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,  // Corrected line
        ref: "Users",
        required: true,
    },
    review_text: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
        min: 1,
        max: 5,
    },
},
    {
        timestamps: true,
        collection: "Reviews",
    });

const reviewModel = mongoose.model('Reviews', reviewSchema);

module.exports = reviewModel;
