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

    isSafe:{
        type:Boolean
    }
});


let Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
