const Product = require('../models/productsModel');
const Category = require('../models/categoriesModel');
const mongoose = require('mongoose');
const User = require('../models/usersModel');

const getAllProducts = async (req, res) => {
    try {
        const productsList = await Product.find().lean();
        const userIds = productsList.map(product => product.userId);
        const users = await User.find({ user_id: { $in: userIds } }).lean();
        const usersMap = {};
        users.forEach(user => {
            usersMap[user.user_id] = user;
        });
        productsList.forEach(product => {
            product.userId = usersMap[product.userId];
        });

        return res.json(productsList);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
};



const createProduct = async (req, res) => {
    try {
        const newProduct = req.body;
        const productCount = await Product.countDocuments();

        // Ensure req.user_id is present and convert it to a number
        if (!req.user_id) {
            return res.status(401).json({ message: 'Access denied. User not authenticated.' });
        }

        newProduct.product_id = productCount + 1;
        newProduct.userId = Number(req.user_id);  // Add userId to newProduct

        const createdProduct = await Product.create(newProduct);

        res.status(201).json(createdProduct);
    } catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};




const getProductById = async (req, res) => {
    const id = req.params.id;
    try {
        const foundProduct = await Product.findOne({ product_id: id });

        if (!foundProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json(foundProduct);
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};
const editProduct = async (req, res) => {
    const productId = parseInt(req.params.id, 10);
    const updateData = req.body;

    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { product_id: productId },
            { $set: updateData },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json({ updatedProduct });
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: error.message });
    }
};



const deleteProduct = async (req, res) => {
    const productId = parseInt(req.params.id, 10);

    try {
        const product = await Product.findOneAndDelete({ product_id: productId });

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.json({ message: 'Product deleted successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};



// const getProductsByCategory = async (req, res) => {
//     const { subCategory } = req.params;
//     try {
//         const category = await Category.findByPk(subCategory, {
//             include: Product,
//         });

//         if (!category) {
//             return res.status(404).json({ message: 'Category not found' });
//         }

//         res.json(category.products);

//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// }

module.exports = { getAllProducts, getProductById, editProduct, createProduct, deleteProduct };