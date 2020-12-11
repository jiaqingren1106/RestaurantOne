const restaurant = require('../models/Restaurant')
const log = console.log;


const getRestaurantById = (req, res) => {
    restaurant.findById(req.params.restaurantId, (err, restaurant) => {
        if (err) {
            res.send(err);
        }
        log("getRestaurantById: ", restaurant);

        res.json(restaurant);
    });
};

const getAllRestaurants = (req, res) => {
    restaurant.find({}, (err, restaurants) => {
        if (err) {
            res.send(err);
        }
        log("getAllRestaurants: ", restaurants);

        res.json(restaurants);
    });
};

const createRestaurant = (req, res) => {
    if(!req.body.posts){
        req.body.posts = []
    }

    const newRestaurant = new restaurant(req.body);

    newRestaurant.save((err, restaurant) => {
        if (err) {
            res.send(err);
        }
        log("createRestaurant: ", restaurant);

        res.json(restaurant);
    });
};

const updateRestaurantById = (req, res) => {
    restaurant.findOneAndUpdate({
        _id: req.params.restaurantId
    }, req.body,
        (err, restaurant) => {
            if (err) {
                res.send(err);
            }
            log("updateRestaurantById: ", restaurant);

            res.json(restaurant);
        });
};

const deleteRestaurantById = (req, res) => {
    restaurant.remove({
        _id: req.params.restaurantId
    }, (err, restaurant) => {
        if (err) {
            res.send(err);
        }
        log("deleteRestaurantById: ", restaurant);
        
        res.json({
            message: `restaurant ${req.params.restaurantId} successfully deleted`
        });
    });
};


const addreview = (req, res) => {

    restaurant.findById(req.params.restaurantId, (err, rest) => {
        if (err) {
            res.send(err);
        }
        let review_list = rest.reviews 
        review_list.push(req.params.reviewId)

        restaurant.findByIdAndUpdate(
            req.params.restaurantId,
            {
              $set: {
                reviews: review_list
              }
            },
            { new: true }
        ).then(rest => {
            res.json(rest)
        })
    
    });

}

module.exports = {getAllRestaurants, getRestaurantById, createRestaurant,
     updateRestaurantById, deleteRestaurantById, addreview}