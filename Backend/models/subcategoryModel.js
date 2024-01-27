const mongoose = require("mongoose");

const SubcategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      unique: [true, "SubCategory must be unique"],
      minlength: [2, "To short SubCategory name"],
      maxlength: [32, "To long SubCategory name"],
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Categories",
      required: [true, "SubCategory must be belong to parent category"],
    },
  },
  { timestamps: true }
);

const SubcategoryModel = new mongoose.model("subcategory", SubcategorySchema);

module.exports = SubcategoryModel;
