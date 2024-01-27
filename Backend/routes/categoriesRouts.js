const express = require("express");
const router = express.Router();

const {
  getCategory,
  getAllCategory,
  createCategory,
  updateCategory,
  deleteCategory,
} = require("../controllers/categoriesControl");

router.route("/").get(getAllCategory).post(createCategory);
router
  .route("/:id")
  .get(getCategory)
  .put(updateCategory)
  .delete(deleteCategory);

module.exports = router;
