const Wishlist = require('./wishlistModel');  // Adjust the path based on your project structure

// Controller functions
const createWishlist = async (wishlistData) => {
    try {
        const wishlist = new Wishlist(wishlistData);
        const savedWishlist = await wishlist.save();
        return savedWishlist;
    } catch (error) {
        throw error;
    }
};

const getWishlistById = async (wishlistId) => {
    try {
        const wishlist = await Wishlist.findOne({ wishlist_id: wishlistId });
        return wishlist;
    } catch (error) {
        throw error;
    }
};

const updateWishlist = async (wishlistId, updatedData) => {
    try {
        const updatedWishlist = await Wishlist.findOneAndUpdate(
            { wishlist_id: wishlistId },
            { $set: updatedData },
            { new: true }
        );
        return updatedWishlist;
    } catch (error) {
        throw error;
    }
};

const deleteWishlist = async (wishlistId) => {
    try {
        const deletedWishlist = await Wishlist.findOneAndDelete({ wishlist_id: wishlistId });
        return deletedWishlist;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createWishlist,
    getWishlistById,
    updateWishlist,
    deleteWishlist,
};
