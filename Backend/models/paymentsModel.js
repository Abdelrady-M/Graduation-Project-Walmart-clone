const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    payment_id: {
        type: Number,
        required: true,
        unique: true
    },
    order_id: {
        type: Schema.Types.ObjectId,
        ref: "Orders",
        required: true,
    },
    payment_method: {
        type: String,
        required: true,
    },
    amount_paid: {
        type: Number,
        required: true,
    },
    payment_status: {
        type: String,
        required: true,
    },
    payment_date: {
        type: Date,
        required: true,
    },
}, {
    timestamps: true,
});

const paymentModel = mongoose.model('Payment', paymentSchema);

module.exports = paymentModel;
