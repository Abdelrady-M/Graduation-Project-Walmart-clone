const express = require('express');
const router = express.Router()
const { getAllProducts, createProduct, getProductById, editProduct, deleteProduct } = require('../controllers/productsControl')



router.route('/').get(getAllProducts).post(createProduct)
router.route('/:id').get(getProductById).delete(deleteProduct).put(editProduct)
// router.route('/:category').get(getProductsByCategory)

module.exports = router