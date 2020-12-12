const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    
    address:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    certificate:{
        type: String,
    },

    coupons: {
        type: Array
    },

    menus: {
        type: Array
    },

    posts:{
        type: Array
    }, 

    reviews:{
        type: Array
    },

    image:{
        type: Array
    },

    rating:{
        type: String,
    },

    safe:{
        type: String,
    },

    owner:{
        type: String,
    },

    opentime:{
        type: String,
    },

    followers: {
        type: Array,
    }
});


let Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
