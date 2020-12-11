const mongoose = require('mongoose');
const bcrypt = require('bcryptjs')

const UserSchema = new mongoose.Schema({
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

    images:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Image"
        }
    ],

    isAdmin:{
        type: Boolean,
        default: false,
        required: true
    }

});

UserSchema.pre('save', function(next) {
	const user = this; // binds this to User document instance

	// checks to ensure we don't hash password more than once
	if (user.isModified('password')) {
		// generate salt and hash the password
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(user.password, salt, (err, hash) => {
				user.password = hash
				next()
			})
		})
	} else {
		next()
	}
})

const User = mongoose.model('User', UserSchema);
module.exports = User;
