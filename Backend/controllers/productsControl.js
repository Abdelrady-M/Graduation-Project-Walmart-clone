const Product = require('../models/productsModel');
const Category = require('../models/categoriesModel');

const getAllProducts = async (req, res) => {
    try {
        const productsList = await Product.findAll();
        return res.json(productsList);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const storeNewProduct = async (req, res) => {
    const { product_name, description, price, category, manufacturer, subCategory, images } = req.body;
    const categories = await Category.findByPk(category);

    if (!categories) return res.status(400).json({ message: 'Category not found' });

    try {
        const newProduct = await Product.create(
            {
                product_name: product_name,
                product_price: price,
                category_id: subCategory,
                description: description,
                manufacturer: manufacturer,
                images: images
            });

        res.status(201).json({ newProduct });

    } catch (error) {
        console.log("ERROR: ", error.message);
        res.status(500).json({ error: error.message });
    }
};

const getProductById = async (req, res) => {
    const { product_id } = req.params;

    try {
        const product = await Product.findByPk(product_id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        return res.status(201).json(product);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const editProduct = async (req, res) => {
    const { product_id } = req.params;
    const { product_name, price } = req.body;

    try {
        const updatedProduct = await Product.update(
            {
                product_name: product_name,
                product_price: price
            },
            { where: { product_id: product_id } }
        );

        return res.status(200).json(updatedProduct);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteProduct = async (req, res) => {
    const { product_id } = req.params;

    try {
        const product = await Product.findByPk(product_id);

        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }

        await Product.destroy({
            where: { product_id: index }
        });

        res.json({ message: 'Product deleted successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getProductsByCategory = async (req, res) => {
    const { subCategory } = req.params;
    try {
        const category = await Category.findByPk(subCategory, {
            include: Product,
        });

        if (!category) {
            return res.status(404).json({ message: 'Category not found' });
        }

        res.json(category.products);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getAllProducts, getProductById, editProduct, storeNewProduct, deleteProduct, getProductsByCategory };