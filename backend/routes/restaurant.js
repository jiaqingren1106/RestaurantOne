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
};

module.exports = restaurantRoutes;