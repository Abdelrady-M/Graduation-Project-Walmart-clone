const express = require('express');
const router = express.Router()
const { createPayment, getAllPayments, getPaymentById } = require('../controllers/paymentsControl')

router.route('/').get(getAllPayments).post(createPayment)
router.route('/:payment_id').get(getPaymentById)
module.exports = router;
