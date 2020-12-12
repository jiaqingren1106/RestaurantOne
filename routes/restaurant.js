const RestaurantController = require("../controllers/RestaurantController");

const restaurantRoutes = (app) => {
    app.route('/restaurants')
        .get(RestaurantController.getAllRestaurants)
        .post(RestaurantController.createRestaurant);

    app.route('/restaurants/:restaurantId')
        .get(RestaurantController.getRestaurantById)
        .put(RestaurantController.updateRestaurantById)
        .delete(RestaurantController.deleteRestaurantById);

    app.route('/restaurants/:restaurantId/:reviewId')
        .post(RestaurantController.addreview)
<<<<<<< Updated upstream
=======

    app.route('/restaurants/:restaurantId/:postid/:postid1')
        .post(RestaurantController.addpost)

    app.route('/restaurants/:restaurantId/:menuid/:menuid1/menuid2')
        .post(RestaurantController.addmenu)

    app.route('/restaurants/:restaurantId/:couponid/couponid1/couponid2/couponid3')
        .post(RestaurantController.addcoupon)
>>>>>>> Stashed changes
};

module.exports = restaurantRoutes;