const review = require('../models/Review');
const log = console.log;

const getReviewById = (req, res) => {
    review.findById(req.params.reviewId, (err, review) => {
        if (err) {
            res.send(err);
        }
        log("getReviewById: ", review);
        res.json(review);
    });
};

const getAllReviews = (req, res) => {
    review.find({}, (err, reviews) => {
        if (err) {
            res.send(err);
        }
        log("getAllReviews: ", reviews);
        res.json(reviews);
    });
};

const createReview = (req, res) => {
    const newReview = new review(req.body);

    newReview.save((err, review) => {
        if (err) {
            res.send(err);
        }
        log("createReview: ", review);
        res.json(review);
    });
};

const updateReviewById = (req, res) => {
    review.findOneAndUpdate({
        _id: req.params.reviewId
    }, req.body,
        (err, review) => {
            if (err) {
                res.send(err);
            }

            log("updateReviewById: ", review);
            res.json(review);
        });
};

const deleteReviewById = (req, res) => {
    review.remove({
        _id: req.params.reviewId
    }, (err, review) => {
        if (err) {
            res.send(err);
        }

        log("deleteReviewById: ", review);
        res.json({
            message: `review ${req.params.reviewId} successfully deleted`
        });
    });
};

module.exports = {getAllReviews, getReviewById, createReview, updateReviewById, deleteReviewById}