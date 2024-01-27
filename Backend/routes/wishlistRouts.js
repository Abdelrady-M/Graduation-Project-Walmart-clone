const express = require('express');
const router = express.Router()
const { createWishlist, getAllWishlists, getWishlistById, deleteWishlistById, updateWishlistById } = require('../controllers/wishlistControl')

router.route('/').get(getAllWishlists).post(createWishlist)
router.route('/:wishlist_id').get(getWishlistById).patch(updateWishlistById).delete(deleteWishlistById)
module.exports = router;
