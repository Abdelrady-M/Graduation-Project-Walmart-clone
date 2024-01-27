const express = require("express");
const router = express.Router();

const {
  getAllSubCategories,
  getSubCategory,
  updateSubCategory,
  createSubCategory,
  deleteSubCategory,
} = require("../controllers/subcategoryControl");

router.route("/").get(getAllSubCategories).post(createSubCategory);
router
  .route("/:id")
  .get(getSubCategory)
  .put(updateSubCategory)
  .delete(deleteSubCategory);

module.exports = router;
