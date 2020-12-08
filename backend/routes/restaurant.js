const RestaurantController = require("../controllers/RestaurantController");

const restaurantRoutes = (app) => {
    app.route('/resturants')
        .get(RestaurantController.getAllRestaurants)
        .post(RestaurantController.createRestaurant);

    app.route('/resturants/:restaurantId')
        .get(RestaurantController.getRestaurantById)
        .put(RestaurantController.updateRestaurantById)
        .delete(RestaurantController.deleteRestaurantById);
};

module.exports = restaurantRoutes;