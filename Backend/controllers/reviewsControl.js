
const Review = require('../models/reviewsModel');


const createReview = async (req, res, next) => {
    let addReview = req.body;

    try {
        let newReview = await Review.create(addReview);
        res.status(200).json({ message: "Success", data: newReview });
    } catch (error) {
        if (error.code === 11000) {
            // Duplicate key error (unique index violation)
            res.status(400).json({ message: "Duplicate review_id", error });
        } else {
            // Other errors
            res.status(400).json(error);
        }
    }
};

const getAllReviews = async (req, res) => {
    try {
        const allReviews = await Review.find();
        res.status(200).json(allReviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getReviewById = async (req, res, next) => {
    const { review_id } = req.params;

    try {
        console.log(`Searching for review with review_id: ${review_id}`);

        const reviewRecord = await Review.findOne({ review_id });

        if (!reviewRecord) {
            console.log(`Review not found for review_id: ${review_id}`);
            return res.status(404).json({ error: 'Review not found' });
        }

        console.log(`Review found: ${JSON.stringify(reviewRecord)}`);
        res.status(200).json(reviewRecord);
    } catch (error) {
        console.error(`Error during getReviewById: ${error.message}`);
        res.status(500).json({ error: error.message });
    }
};



const getReviewsByProductId = async (req, res) => {
    try {
        const { productId } = req.params;
        const reviews = await Review.find({ product_id: productId });
        res.status(200).json(reviews);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};


const updateReview = async (req, res) => {
    try {
        const { review_id } = req.params;
        const updatedData = req.body;
        const updatedReview = await Review.findOneAndUpdate(
            { review_id },
            { $set: updatedData },
            { new: true }
        );

        if (updatedReview) {
            return res.status(200).json({ status: 200, data: updatedReview });
        } else {
            return res.status(404).json({ status: 404, data: { message: 'Review not found' } });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

const deleteReview = async (req, res) => {
    try {
        const { review_id } = req.params;

        const deletedReview = await Review.findOneAndDelete({ review_id });

        if (deletedReview) {
            return res.status(200).json({ status: 200, data: deletedReview });
        } else {
            return res.status(404).json({ status: 404, data: { message: 'Review not found' } });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: 500, message: 'Internal Server Error' });
    }
};

module.exports = {
    createReview,
    getReviewById,
    getReviewsByProductId,
    updateReview,
    deleteReview,
    getAllReviews
};
