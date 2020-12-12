const mongoose = require('mongoose');

const CouponSchema = new mongoose.Schema({
    
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


let Coupon = mongoose.model('Coupon', CouponSchema);
module.exports = Coupon;