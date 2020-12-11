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

    certificate:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Image"
    },

    owner_id:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },

    images:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ],

    rating:{
        type: Number
    },

    opentime:{
        type: String
    },

    isSafe:{
        type:Boolean
    }

});


let Restaurant = mongoose.model('Restaurant', RestaurantSchema);

module.exports = Restaurant;
