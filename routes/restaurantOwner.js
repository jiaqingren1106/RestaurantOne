const RestaurantOwnerController = require("../controllers/RestaurantOwnerController");
const { authenticate } = require("../authentication/authMiddleware");

const restaurantOwnerRoutes = (app) => {
    app.route('/restaurantOwners')
        .get(authenticate, RestaurantOwnerController.getAllRestaurantOwners)
        .post(RestaurantOwnerController.createRestaurantOwner);

    app.route('/restaurantOwners/:restaurantOwnerId')
        .get(authenticate, RestaurantOwnerController.getRestaurantOwnerById)
        .put(authenticate, RestaurantOwnerController.updateRestaurantOwnerById)
        .delete(authenticate, RestaurantOwnerController.deleteRestaurantOwnerById);
};

module.exports = restaurantOwnerRoutes;