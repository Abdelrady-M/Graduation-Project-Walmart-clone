const express = require("express");
const router = express.Router();

const { removeCoupon, applyCoupon } = require("../controllers/couponsControl");

router.post("/apply-coupon", applyCoupon);

router.delete("/remove-coupon", removeCoupon);

module.exports = router;
