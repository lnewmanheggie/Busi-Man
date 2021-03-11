const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;
const SALT_WORK_FACTOR = 10;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Enter your first name']
    },
    lastName: {
        type: String,
        required: [true, 'Enter your last name']
    },
    email: {
        type: String,
        required: [true, 'Enter an email address'],
        unique: [true, 'Email address taken'],
        lowercase: true,
        validate: [validator.isEmail, 'Enter a valid email']
    },
    company: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: [true, 'Enter a password'],
        minLength: [4, 'Password should be at least 6 characters']
    },
    confirmPassword: {
        type: String,
        required: true,
        validate: {
            validator: function(pass) {
                return pass === this.password;
            }, message: 'Passwords do not match'
        }
    }
})

// hash password before saving
// userSchema.pre('save', function(next) {
//     const user = this;

//     // only hash password if modified or new
//     if (!user.isModified('password'))
//         return next();

//     // generate a salt
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if (err) return next(err);

//         // hash password with new salt
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if (err) return next(err);

//             // override cleartext password with hashed pass
//             user.password = hash;
//             // remove confirm password field
//             user.confirmPassword = undefined;
//             next();
//         })
//     })
// })

userSchema.pre('save', async function(next) {

    this.password = await bcrypt.hash(this.password, 12);

    this.confirmPassword = undefined;
    next();
})

userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model('User', userSchema);
module.exports = User;