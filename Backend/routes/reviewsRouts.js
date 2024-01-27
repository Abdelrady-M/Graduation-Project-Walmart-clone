const express = require('express');
const router = express.Router()
const { createReview, getAllReviews, getReviewById, getReviewsByProductId, updateReview, deleteReview } = require('../controllers/reviewsControl')

router.route('/').get(getAllReviews).post(createReview)
router.route('/:review_id').get(getReviewById).patch(updateReview).delete(deleteReview)
router.route('/:product/:productId').post(getReviewsByProductId);
module.exports = router;
