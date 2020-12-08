const restaurantOwner = require('../models/restaurantOwner.js');
const log = console.log;

const getRestaurantOwnerById = (req, res) => {
    restaurantOwner.findById(req.params.restaurantOwnerId, (err, restaurantOwner) => {
        if (err) {
            res.send(err);
        }

        log("getRestaurantOwnerById: ", restaurantOwner);
        res.json(restaurantOwner);
    });
};

const getAllRestaurantOwners = (req, res) => {
    restaurantOwner.find({}, (err, restaurantOwners) => {
        if (err) {
            res.send(err);
        }
        log("getAllRestaurantOwners: ", restaurantOwners);

        res.json(restaurantOwners);
    });
};

const createRestaurantOwner = (req, res) => {
    const newRestaurantOwner = new restaurantOwner(req.body);

    newRestaurantOwner.save((err, restaurantOwner) => {
        if (err) {
            res.send(err);
        }
        log("createRestaurantOwner: ", restaurantOwner);
        
        res.json(restaurantOwner);
    });
};

const updateRestaurantOwnerById = (req, res) => {
    restaurantOwner.findOneAndUpdate({
        _id: req.params.restaurantOwnerId
    }, req.body,
        (err, restaurantOwner) => {
            if (err) {
                res.send(err);
            }
            log("updateRestaurantOwnerById: ", restaurantOwner);

            res.json(restaurantOwner);
        });
};

const deleteRestaurantOwnerById = (req, res) => {
    restaurantOwner.remove({
        _id: req.params.restaurantOwnerId
    }, (err, restaurantOwner) => {
        if (err) {
            res.send(err);
        }
        log("updateRestaurantOwnerById: ", restaurantOwner);

        res.json({
            message: `restaurantOwner ${req.params.restaurantOwnerId} successfully deleted`
        });
    });
};

module.exports = {getAllRestaurantOwners, getRestaurantOwnerById, createRestaurantOwner, updateRestaurantOwnerById, deleteRestaurantOwnerById}