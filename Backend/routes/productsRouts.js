const express = require('express');
const router = express.Router()
const verifyJWT = require('../middlewares/verifyJWT')
const isAdmin = require('../middlewares/IsAdmin')
const { getAllProducts, createProduct, getProductById, editProduct, deleteProduct } = require('../controllers/productsControl')



router.route('/').get(getAllProducts).post(isAdmin, createProduct)
router.route('/:id').get(getProductById).delete(verifyJWT, deleteProduct).put(isAdmin, editProduct)
// router.route('/:category').get(getProductsByCategory)

module.exports = router