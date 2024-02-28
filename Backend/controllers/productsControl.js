const Product = require('../models/productsModel');

const getAllProducts = async (req, res) => {
    try {
        const productsList = await Product.find()
        return res.json(productsList);
    } catch (error) {
        res.status(500).json({ message: "Error fetching products" });
    }
};



const createProduct = async (req, res) => {
    try {
        const { userId } = req; // Assuming userId is set by your authentication middleware

        // Assuming req.body contains product details
        const newProduct = { ...req.body, userId: userId };

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
        const foundProduct = await Product.findById(id);

        if (!foundProduct) {
            return res.status(404).json({ error: "Product not found" });
        }

        res.status(200).json(foundProduct);
    } catch (err) {
        res.status(500).json({ message: "Internal server error" });
    }
};
const editProduct = async (req, res) => {
    const productId = req.params.id;
    const updateData = req.body;

    try {
        const updatedProduct = await Product.findByIdAndUpdate(
            productId,
            { $set: updateData },
            { new: true }
        );

        if (!updatedProduct) {
            return res.status(404).json({ error: 'Product not found' });
        }

        res.status(200).json(updatedProduct);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: error.message });
    }
};




const deleteProduct = async (req, res) => {
    const productId = req.params.id;

    try {
        const product = await Product.findByIdAndDelete(productId);

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