const Review = require('./reviewModel');

// Controller functions
const createReview = async (reviewData) => {
    try {
        const review = new Review(reviewData);
        const savedReview = await review.save();
        return savedReview;
    } catch (error) {
        throw error;
    }
};

const getReviewById = async (reviewId) => {
    try {
        const review = await Review.findOne({ review_id: reviewId });
        return review;
    } catch (error) {
        throw error;
    }
};

const getReviewsByProductId = async (productId) => {
    try {
        const reviews = await Review.find({ product_id: productId });
        return reviews;
    } catch (error) {
        throw error;
    }
};

const updateReview = async (reviewId, updatedData) => {
    try {
        const updatedReview = await Review.findOneAndUpdate(
            { review_id: reviewId },
            { $set: updatedData },
            { new: true }
        );
        return updatedReview;
    } catch (error) {
        throw error;
    }
};

const deleteReview = async (reviewId) => {
    try {
        const deletedReview = await Review.findOneAndDelete({ review_id: reviewId });
        return deletedReview;
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createReview,
    getReviewById,
    getReviewsByProductId,
    updateReview,
    deleteReview,
};
