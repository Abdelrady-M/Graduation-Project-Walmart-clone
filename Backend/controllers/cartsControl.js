const CartsModel = require("../models/cartsModel");
const Product = require("../models/productsModel");
const Order = require("../models/ordersModel");
//middleware catch error
const asyncHandler = require("express-async-handler");

exports.addItemToCart = asyncHandler(async (req, res) => {
  const { productId, quantity } = req.body;
  const product = await Product.findById(productId);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  const cartItem = {
    product: productId,
    quantity: quantity || 1,
    price: product.price,
  };

  const cart = await CartsModel.findOneAndUpdate(
    { user: req.user._id },
    { $push: { items: cartItem } },
    { new: true, upsert: true }
  );

  res.json(cart);
});

exports.updateCartItemQuantity = asyncHandler(async (req, res) => {
  const { cartItemId, quantity } = req.body;

  const cart = await CartsModel.findOneAndUpdate(
    { "items._id": cartItemId },
    { $set: { "items.$.quantity": quantity } },
    { new: true }
  );

  res.json(cart);
});

exports.removeItemFromCart = asyncHandler(async (req, res) => {
  const { cartItemId } = req.body;

  const cart = await Cart.findOneAndUpdate(
    { "items._id": cartItemId },
    { $pull: { items: { _id: cartItemId } } },
    { new: true }
  );

  res.json(cart);
});

exports.viewCart = asyncHandler(async (req, res) => {
  const cart = await CartsModel.findOne({ user: req.user._id }).populate(
    "items.product"
  );

  res.json(cart);
});

exports.clearCart = asyncHandler(async (req, res) => {
  const cart = await CartsModel.findOneAndUpdate(
    { user: req.user._id },
    { $set: { items: [] } },
    { new: true }
  );

  res.json(cart);
});

exports.calculateCartTotal = asyncHandler(async (req, res) => {
  const cart = await CartsModel.findOne({ user: req.user._id });

  if (!cart) {
    return res.status(404).json({ message: "Cart not found" });
  }

  const total = cart.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  res.json({ total });
});

exports.proceedToCheckout = asyncHandler(async (req, res) => {
  const cart = await CartsModel.findOne({ user: req.user._id });

  if (!cart || cart.items.length === 0) {
    return res.status(400).json({ message: "Cart is empty" });
  }

  // Create an order based on the items in the cart
  const order = new Order({
    user: req.user._id,
    items: cart.items.map((item) => ({
      product: item.product,
      quantity: item.quantity,
      price: item.price,
    })),
    total: cart.items.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    ),
  });

  // Save the order to the database
  await order.save();

  // Clear the user's cart
  await CartsModel.findOneAndUpdate(
    { user: req.user._id },
    { $set: { items: [] } }
  );

  res.json(order);
});
