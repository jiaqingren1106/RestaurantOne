const log = console.log;
const coupon = require("../models/Coupon")


const getCouponbyId = (req, res) => {
    coupon.findById(req.params.couponId, (err, post) => {
        if (err) {
            res.send(err);
        }
        log("getPostById: ", post);

        res.json(post);
    });
};

const getAllCoupon = (req, res) => {
	coupon.find()
		.then(
			coupon => {
				res.json(coupon)
			},
			error => {
				res.status(500).send('Internal server error' + error)
			}
		)
}

const createCoupon = (req, res) => {
    const newCoupon = new coupon(req.body);
    newCoupon.save((err, post) => {
        if (err) {
            res.send(err);
        }
        res.json(post);
    });
};


module.exports = {getCouponbyId, createCoupon, getAllCoupon}