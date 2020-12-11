const mongoose = require('mongoose');

const RestaurantOwnerShema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    
    email:{
        type: String,
        required: true
    },

    password:{
        type: String,
        required: true
    },

    restaurant_id:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }

});


const RestaurantOwner = mongoose.model('RestaurantOwner', RestaurantOwnerShema);

module.exports = {RestaurantOwner};
