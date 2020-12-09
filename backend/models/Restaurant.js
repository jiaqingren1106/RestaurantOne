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

    posts:[
        {  
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        }
    ], 

    reviews:[
        {  
            type: mongoose.Schema.Types.ObjectId,
            ref: "Review"
        }
    ],

});


const Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
