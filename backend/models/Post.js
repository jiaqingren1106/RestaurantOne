const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    
    image:{
        type: Array,
        required: true
    },

    title:{
        type: String,
        required: true
    },

    date:{
        type: String,
        required: true
    },

    description:{
        type: String,
        required: true
    },

    reviews: {
        type: Array
    }
});


let Post = mongoose.model('Post', PostSchema);
module.exports = Post;