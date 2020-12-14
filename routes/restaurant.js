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


    app.route('/restaurants/:restaurantId/:postid/:postid1')
        .post(RestaurantController.addpost)

    app.route('/restaurants/:postid/:postid1')
        .delete(RestaurantController.deleteRestaurantPost)
    
    app.route('/restaurants/:reviewid/:reviewid1')
        .delete(RestaurantController.deleteRestaurantReview)

    app.route('/restaurants/:restaurantId/:menuid/:menuid1/:menuid2')
        .post(RestaurantController.addmenu)
        
    app.route('/restaurants/:restaurantId/:couponid/:couponid1/:couponid2/:couponid3')
        .post(RestaurantController.addcoupon)

    app.route('/restaurants/:restaurantId/:followId/:followId1/:followId2/:followId3/:followId4')
        .post(RestaurantController.addFollowtoRestaurant)
        .delete(RestaurantController.deleteFollowtoRestaurant)

    app.route('/restaurants/:restaurantId/:imageId/:imageId1/:imageId2/:imageId3/:imageId4/:imageId5')
        .post(RestaurantController.addImage)    
};

module.exports = restaurantRoutes;``