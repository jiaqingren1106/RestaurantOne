const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const RestaurantOwnerShema = new mongoose.Schema({

    name:{
        type: String,
        required: true
    },
    
    email:{
        type: String,
		required: true,
		minlength: 1,
		trim: true,
        unique: true,
    },

    password:{
        type: String,
        required: true
    },

    isNewRestaurant:{
        type: Boolean,
        default: true
    },

    restaurant_id:{  
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant"
    }

});

RestaurantOwnerShema.pre('save', function(next) {
	const owner = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (owner.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(owner.password, salt, (err, hash) => {
				owner.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

// RestaurantOwnerShema.statics.findByEmailPassword = function(email, password) {
// 	const owner = this // binds this to the User model

// 	// First find the owner by their email
// 	return owner.findOne({ email: email }).then((owner) => {
// 		if (!owner) {
// 			return Promise.reject()  // a rejected promise
// 		}
// 		// if the owner exists, make sure their password is correct
// 		return new Promise((resolve, reject) => {
// 			bcrypt.compare(password, owner.password, (err, result) => {
// 				if (result) {
// 					resolve(owner)
// 				} else {
// 					reject()
// 				}
// 			})
// 		})
// 	})
// }


const RestaurantOwner = mongoose.model('RestaurantOwner', RestaurantOwnerShema);
module.exports = RestaurantOwner;
