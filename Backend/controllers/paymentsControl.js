const Order = require('../models/ordersModel');

const processPayment = async (req, res) => {
    try {
        const { user_id } = req.user;
        const { cardInfo } = req.body;

        const orderDetails = await Order.findOne({
            where: { user_id: user_id },
        });

        if (!orderDetails) {
            return res.status(404).json({ message: "Order not found" });
        }

        const totalPrice = orderDetails.totalPrice;

        const paymentSuccess = validatePayment(cardInfo);

        if (paymentSuccess) {
            await orderDetails.update({ status: 'paid' });
            return res.status(200).json({ message: "Payment successful", totalPrice });

        } else {
            return res.status(400).json({ message: 'Payment failed. Please try again.' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Internal server error' });
    }
}

const validatePayment = (cardInfo) => {
    const correctCardInfo = {
        cardNumber: '1234567890123456',
        expirationDate: '12/25',
        cardholderName: 'John Doe',
        cvv: '123'
    };


    if (
        cardInfo.cardNumber === correctCardInfo.cardNumber &&
        cardInfo.expirationDate === correctCardInfo.expirationDate &&
        cardInfo.cardholderName === correctCardInfo.cardholderName &&
        cardInfo.cvv === correctCardInfo.cvv
    ) {
        console.log("true!!");
        return true;
    } else {
        console.log("FALSE!!");
        return false;
    }
}

module.exports = { processPayment };