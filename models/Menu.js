const mongoose = require('mongoose');

const MenuSchema = new mongoose.Schema({
    
    image:{
        type: Array,
        required: true
    },

    name:{
        type: String,
        required: true
    },


    price:{
        type: String,
        required: true
    }
});


let Menu = mongoose.model('Menu', MenuSchema);
module.exports = Menu;