const RestaurantOwnerController = require("../controllers/RestaurantOwnerController");

const restaurantOwnerRoutes = (app) => {
    app.route('/restaurantOwners')
        .get(RestaurantOwnerController.getAllRestaurantOwners)
        .post(RestaurantOwnerController.createRestaurantOwner);

    app.route('/restaurantOwners/:restaurantOwnerId')
        .get(RestaurantOwnerController.getRestaurantOwnerById)
        .put(RestaurantOwnerController.updateRestaurantOwnerById)
        .delete(RestaurantOwnerController.deleteRestaurantOwnerById);
};

module.exports = restaurantOwnerRoutes;