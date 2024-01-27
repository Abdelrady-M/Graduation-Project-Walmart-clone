const Wishlist = require('../models/wishlistModel');

// Controller function to create a new wishlist
const createWishlist = async (req, res) => {
    try {
        const body = req.body;

        const savedWishlist = await Wishlist.create(body);
        return res.status(201).json({ status: 201, data: savedWishlist });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

// Controller function to retrieve all wishlists
const getAllWishlists = async (req, res) => {
    try {
        const wishlists = await Wishlist.find();
        return res.status(200).json({ status: 200, data: wishlists });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

// Controller function to retrieve a wishlist by its ID
const getWishlistById = async (req, res) => {
    try {
        const { wishlist_id } = req.params;
        const wishlist = await Wishlist.findOne({ wishlist_id });

        if (!wishlist) {
            return res.status(404).json({ status: 404, message: 'Wishlist not found' });
        }

        return res.status(200).json({ status: 200, data: wishlist });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};
// Controller function to delete a wishlist by its ID
const deleteWishlistById = async (req, res) => {
    try {
        const { wishlist_id } = req.params;
        const deletedWishlist = await Wishlist.findOneAndDelete({ wishlist_id });

        if (!deletedWishlist) {
            return res.status(404).json({ status: 404, message: 'Wishlist not found' });
        }

        return res.status(200).json({ status: 200, data: deletedWishlist });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

// Controller function to update a wishlist by its ID
const updateWishlistById = async (req, res) => {
    try {
        const { wishlist_id } = req.params;
        const { product_ids } = req.body;

        const updatedWishlist = await Wishlist.findOneAndUpdate(
            { wishlist_id },
            { $set: { product_ids } },
            { new: true }
        );

        if (!updatedWishlist) {
            return res.status(404).json({ status: 404, message: 'Wishlist not found' });
        }

        return res.status(200).json({ status: 200, data: updatedWishlist });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};



module.exports = { createWishlist, getAllWishlists, getWishlistById, deleteWishlistById, updateWishlistById };
