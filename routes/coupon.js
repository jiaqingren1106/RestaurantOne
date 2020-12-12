const CouponController = require("../controllers/CouponController");

const couponRoutes = (app) => {
    app.route('/coupon')
        .post(CouponController.createCoupon);

    app.route('/coupon/:couponId')
        .get(CouponController.getCouponbyId)
};

module.exports = couponRoutes;