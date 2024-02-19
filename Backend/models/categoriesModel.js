const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category required"],
      unique: [true, "Category must be unique"],
      minlength: [3, "Too short category name"],
      maxlength: [32, "Too long category name"],
    },
    image: String,
  },
  { timestamps: true }
);

const CategoryModel = mongoose.model("Categories", CategorySchema);

module.exports = CategoryModel;
