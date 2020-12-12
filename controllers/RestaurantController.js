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

    if(!req.body.reviews){
        req.body.reviews = []
    }

    if(!req.body.image){
        req.body.image = []
    }

    if(!req.body.rating){
        req.body.rating = "Not Available"
    }

    if(!req.body.opentime){
        req.body.opentime = "Not Available"
    }

    if(!req.body.safe){
        req.body.safe = "Not Available"
    }

    if(!req.body.owner){
        req.body.owner = "Not Available"
    } 

    if(!req.body.followers){
        req.body.followers = []
    }

    let found = false
    const newRestaurant = new restaurant(req.body);
    
    restaurant.find({}, (err, restaurants) => {
        if (err) {
            res.send(err);
        }
        for(let i = 0; i < restaurants.length; i++){
            if(restaurants[i].name === newRestaurant.name){
                found = true
                console.log(restaurants[i].name)
                res.send({"condition": "fail"})
            }
        }

        if(found === false){
            newRestaurant.save((err, user) => {
                if (err) {
                    res.send(err);
                }else{
                res.json({"condition": "success"});
                }
            });
        }
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

const addpost = (req, res) => {

    restaurant.findById(req.params.restaurantId, (err, rest) => {
        if (err) {
            res.send(err);
        }
        let review_list = rest.posts
        review_list.push(req.params.postid)

        restaurant.findByIdAndUpdate(
            req.params.restaurantId,
            {
              $set: {
                posts: review_list
              }
            },
            { new: true }
        ).then(rest => {
            res.json(rest)
        })
    
    });

}

module.exports = {getAllRestaurants, getRestaurantById, createRestaurant,
     updateRestaurantById, deleteRestaurantById, addreview, addpost}