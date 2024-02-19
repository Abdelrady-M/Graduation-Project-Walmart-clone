const asyncHandler = require("express-async-handler");
const SubcategoryModel = require("../models/subcategoryModel");

exports.getAllSubCategories = asyncHandler(async (req, res) => {
  //pagination
  const page = req.query.page * 1 || 1;
  const limit = 5;
  const skip = (page - 1) * limit;
  const subcategories = await SubcategoryModel.find({}).skip(skip).limit(limit);
  res
    .status(200)
    .json({ result: subcategories.length, page, data: subcategories });
});

exports.getSubCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const SubCategory = await SubcategoryModel.findById(id);
  if (!SubCategory) {
    res.status(400).json({ msg: `No SubCategory for this id ${id}` });
  } else {
    res.status(200).json({ data: SubCategory });
  }
});

exports.createSubCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const SubCategory = await SubcategoryModel.create({ name });
  res.status(201).json({ data: SubCategory });
});

exports.updateSubCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const SubCategory = await SubcategoryModel.findOneAndUpdate(
    { _id: id },
    { name: name },
    { new: true }
  );

  if (!SubCategory) {
    res.status(400).json({ msg: `No SubCategory for this id ${id}` });
  } else {
    res.status(200).json({ data: SubCategory });
  }
});

exports.deleteSubCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const SubCategory = await SubcategoryModel.findOneAndDelete(id);

  if (!SubCategory) {
    res.status(400).json({ msg: `No SubCategory for this id ${id}` });
  } else {
    res.status(200).send();
  }
});
