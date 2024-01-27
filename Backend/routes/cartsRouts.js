const express = require("express");
const router = express.Router();

const {
  addItemToCart,
  updateCartItemQuantity,
  removeItemFromCart,
  viewCart,
  clearCart,
  calculateCartTotal,
  proceedToCheckout,
} = require("../controllers/cartsControl");

router.post("/add-item", addItemToCart);

router.put("/update-item-quantity", updateCartItemQuantity);

router.delete("/remove-item", removeItemFromCart);

router.get("/view", viewCart);

router.delete("/clear", clearCart);

router.get("/total", calculateCartTotal);

router.post("/checkout", proceedToCheckout);

module.exports = router;
