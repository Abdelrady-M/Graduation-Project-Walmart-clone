const Coupon = require("../models/couponsModel");
const CartsModel = require("../models/cartsModel");
const asyncHandler = require("express-async-handler");

exports.applyCoupon = asyncHandler(async (req, res) => {
  const { couponCode } = req.body;
  const coupon = await Coupon.findOne({ code: couponCode });

  if (!coupon) {
    return res.status(404).json({ message: "Coupon not found" });
  }

  // Check expiration date
  if (coupon.expirationDate && coupon.expirationDate < new Date()) {
    return res.status(400).json({ message: "Coupon has expired" });
  }

  // Check usage limit
  if (coupon.usageLimit && coupon.usageCount >= coupon.usageLimit) {
    return res
      .status(400)
      .json({ message: "Coupon has reached its usage limit" });
  }

  coupon.usageCount++;
  await coupon.save();

  const cart = await CartsModel.findOne({ user: req.user._id });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  // Apply the coupon discount
  const discountedTotal =
    cart.total - (cart.total * coupon.discountPercentage) / 100;

  // Update the cart
  cart.total = discountedTotal;
  await cart.save();

  res.json({ message: "Coupon applied successfully", discountedTotal });
});

exports.removeCoupon = asyncHandler(async (req, res) => {
  const cart = await CartsModel.findOne({ user: req.user._id });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  // Remove the coupon
  cart.total = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  await cart.save();

  res.json({ message: "Coupon removed successfully", total: cart.total });
});
