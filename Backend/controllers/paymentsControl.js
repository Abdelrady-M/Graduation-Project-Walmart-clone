const Payment = require('../models/paymentsModel');

const createPayment = async (req, res) => {
    try {
        const body = req.body;

        const savedPayment = await Payment.create(body);
        return res.status(201).json({ status: 201, data: savedPayment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

const getAllPayments = async (req, res) => {
    try {
        const payments = await Payment.find();
        return res.status(200).json({ status: 200, data: payments });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

const getPaymentById = async (req, res) => {
    try {
        const { payment_id } = req.params;
        const payment = await Payment.findOne({ payment_id });

        if (!payment) {
            return res.status(404).json({ status: 404, message: 'Payment not found' });
        }

        return res.status(200).json({ status: 200, data: payment });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

module.exports = { createPayment, getAllPayments, getPaymentById };
