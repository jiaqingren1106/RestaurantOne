const CouponController = require("../controllers/CouponController");

const couponRoutes = (app) => {
    app.route('/coupon')
        .get(CouponController.getAllCoupon)
        .post(CouponController.createCoupon);

    app.route('/coupon/:couponId')
        .get(CouponController.getCouponbyId)
};

module.exports = couponRoutes;