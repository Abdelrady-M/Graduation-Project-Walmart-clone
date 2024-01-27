const CategoryModel = require("../models/categoriesModel");
//middleware catch error
const asyncHandler = require("express-async-handler");

exports.getAllCategory = asyncHandler(async (req, res) => {
  //pagination
  const page = req.query.page * 1 || 1;
  const limit = 5;
  const skip = (page - 1) * limit;
  const categories = await CategoryModel.find({}).skip(skip).limit(limit);
  res.status(200).json({ result: categories.length, page, data: categories });
});

exports.getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const category = await CategoryModel.findById(id);
  if (!category) {
    res.status(400).json({ msg: `No category for this id ${id}` });
  } else {
    res.status(200).json({ data: category });
  }
});

exports.createCategory = asyncHandler(async (req, res) => {
  const { name } = req.body;
  const category = await CategoryModel.create({ name });
  res.status(201).json({ data: category });
});

exports.updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const category = await CategoryModel.findOneAndUpdate(
    { _id: id },
    { name: name },
    { new: true }
  );

  if (!category) {
    res.status(400).json({ msg: `No category for this id ${id}` });
  } else {
    res.status(200).json({ data: category });
  }
});

exports.deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const category = await CategoryModel.findOneAndDelete(id);

  if (!category) {
    res.status(400).json({ msg: `No category for this id ${id}` });
  } else {
    res.status(200).send();
  }
});
