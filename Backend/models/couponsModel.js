// models/Coupon.js

const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  discountPercentage: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  usageLimit: {
    type: Number,
    required: true,
  },
  usageCount: {
    type: Number,
    default: 0,
  },
});

const Coupon = mongoose.model("Coupons", couponSchema);

module.exports = Coupon;
