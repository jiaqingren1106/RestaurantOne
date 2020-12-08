const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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

    images:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ]

});


let User = mongoose.model('User', UserSchema);

module.exports = User;
