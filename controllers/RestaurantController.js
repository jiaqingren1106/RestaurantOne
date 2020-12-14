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

    if(!req.body.approval){
        req.body.approval = "false"
    }

    let found = false
    const newRestaurant = new restaurant(req.body);

    console.log(newRestaurant)
    restaurant.find({}, (err, restaurants) => {
        if (err) {
            res.send(err);
        }
        for(let i = 0; i < restaurants.length; i++){
            if(restaurants[i].name === newRestaurant.name){
                found = true
                res.send({"condition": "fail"})
            }
        }

        if(found === false){
            newRestaurant.save((err, user) => {
                if (err) {
                    res.send(err);
                }else{
                res.json({"condition": "success", "id": user['_id']});
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

const addmenu = (req, res) => {
    restaurant.findById(req.params.restaurantId, (err, rest) => {
        if (err) {
            res.send(err);
        }
        console.log(rest)
        let review_list = rest.menu
        review_list.push(req.params.menuid)
        console.log(review_list)

        restaurant.findByIdAndUpdate(
            req.params.restaurantId,
            {
              $set: {
                menu: review_list
              }
            },
            { new: true }
          )
            .then(json => {
              res.send(json);
            })
            .catch(error => {
              res.status(400).send(error);
            });

        // restaurant.findByIdAndUpdate(
        //     req.params.restaurantId,
        //     {
        //       $set: {
        //         menus: review_list
        //       }
        //     },
        //     { new: true }
        // ).then(rest => {
        //     res.json(rest)
        // })
    
    });
}

const addcoupon = (req, res) => {

    restaurant.findById(req.params.restaurantId, (err, rest) => {
        if (err) {
            res.send(err);
        }
        let review_list = rest.coupons
        review_list.push(req.params.couponid)

        restaurant.findByIdAndUpdate(
            req.params.restaurantId,
            {
              $set: {
                coupons: review_list
              }
            },
            { new: true }
        ).then(rest => {
            res.json(rest)
        })
    
    });
}


const deleteRestaurantPost = (req, res) => {
    
    restaurant.find({}, (err, restaurants) => {
        if (err) {
            res.send(err);
        }
        
        let index = 0;

        for(let i = 0; i < restaurants.length; i ++){

            let posts = restaurants[i].posts

            let found = false
            
            for(let j = 0; j < posts.length; j++){
                if(posts[j] == req.params.postid){
                    found = true
                }
            }
            
            if(found == true){
                let restaurantId = restaurants[i]['_id']
                
                let new_post = []

                for(let z = 0; z < posts.length; z++){
                    if(posts[z] != req.params.postid){
                        new_post.push(posts[z])
                    }

                }

                restaurant.findByIdAndUpdate(
                    restaurantId,
                    {
                    $set: {
                        posts: new_post
                    }
                    },
                    { new: true }
                ).then(p => {
                    res.send({p})                    
                })

            }      
        }
    })
    
}

const deleteRestaurantReview = (req, res) => {
    
    restaurant.find({}, (err, restaurants) => {
        if (err) {
            res.send(err);
        }
        
        let index = 0;

        for(let i = 0; i < restaurants.length; i ++){

            let reviews = restaurants[i].reviews
            let found = false

            for(let j = 0; j < reviews.length; j++){
                console.log(reviews[j])
                console.log(req.params.reviewid)
                if(reviews[j] == req.params.reviewid){
                    found = true
                }
            }
            
            if(found == true){
                let restaurantId = restaurants[i]['_id']
                
                let new_reviews = []

                for(let z = 0; z < reviews.length; z++){
                    if(reviews[z] != req.params.reviewid){
                        new_reviews.push(reviews[z])
                    }

                }

                restaurant.findByIdAndUpdate(
                    restaurantId,
                    {
                      $set: {
                        reviews: new_reviews
                      }
                    },
                    { new: true }
                ).then(p => {
                    res.send({p})                    
                })

            }      
        }
    })

}

const addFollowtoRestaurant = (req, res) => {

    const restaurantId = req.params.restaurantId
    const followid = req.params.followId

    restaurant.findById(restaurantId, (err, singleRestaurant) => {
        if (err) {
            res.send(err);
        }

        let review_list = singleRestaurant['follows']
        review_list.push(followid)

        restaurant.findByIdAndUpdate(
            restaurantId,
            {
              $set: {
                follows: review_list
              }
            },
            { new: true }
        ).then(singleRestaurant => {
            res.json(singleRestaurant)
        })
    
    });

}

const addImage = (req, res) => {

    const restaurantId = req.params.restaurantId
    const imageId = req.params.imageId

    restaurant.findById(restaurantId, (err, singleRestaurant) => {
        if (err) {
            res.send(err);
        }

        let review_list = singleRestaurant['image']
        review_list.push(imageId)

        restaurant.findByIdAndUpdate(
            restaurantId,
            {
              $set: {
                image: review_list
              }
            },
            { new: true }
        ).then(singleRestaurant => {
            res.json(singleRestaurant)
        })
    
    });
}


const deleteFollowtoRestaurant = (req, res) => {

    const restaurantId = req.params.restaurantId
    const followid = req.params.followId

    restaurant.findById(restaurantId, (err, singleRestaurant) => {
        if (err) {
            res.send(err);
        }

        let review_list = []

        for(let i = 0; i < singleRestaurant['follows'].length; i++){
            if(singleRestaurant['follows'][i] != followid){
                review_list.push(singleRestaurant['follows'][i])
            }
        }
    
        restaurant.findByIdAndUpdate(
            restaurantId,
            {
              $set: {
                follows: review_list
              }
            },
            { new: true }
        ).then(singleUser => {
            res.json(singleUser)
        })
    
    });

}

module.exports = {getAllRestaurants, getRestaurantById, createRestaurant,
     updateRestaurantById, deleteRestaurantById, addreview, addpost, addmenu,
     addcoupon, deleteRestaurantPost, deleteRestaurantReview, addFollowtoRestaurant,
     deleteFollowtoRestaurant, addImage}

