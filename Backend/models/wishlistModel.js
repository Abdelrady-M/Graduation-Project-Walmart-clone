const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    wishlist_id: {
        type: Number,
        required: true,
        unique: true
    },
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
    },
    product_ids: {
        type: [Number],
        required: true,
    },
}, {
    timestamps: true, collection: 'Wishlist'
});

const wishlistModel = mongoose.model('Wishlist', wishlistSchema);

module.exports = wishlistModel;
