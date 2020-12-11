const ReviewController = require("../controllers/ReviewController");

const reviewRoutes = (app) => {
    app.route('/reviews')
        .get(ReviewController.getAllReviews)
        .post(ReviewController.createReview);

    app.route('/reviews/:reviewId')
        .get(ReviewController.getReviewById)
        .put(ReviewController.updateReviewById)
        .delete(ReviewController.deleteReviewById);
};

module.exports = reviewRoutes;