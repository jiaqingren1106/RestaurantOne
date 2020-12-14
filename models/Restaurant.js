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

    opentime:{
        type:String
    },

    certificate:{
        type: String,
    },

    coupons: {
        type: Array
    },

    menu: {
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
        type:String
    },

    approval:{
        type: String
    },

    follows:{
        type: Array
    },

    longitude: {
        type: String
    },

    latitude: {
        type: String
    }
});


let Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
