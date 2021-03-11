const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;

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
    manager: {
        type: Boolean,
        required: true
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
userSchema.pre('save', async function(next) {

    this.password = await bcrypt.hash(this.password, 12);

    this.confirmPassword = undefined;
    next();
})

// method to check password on entry
userSchema.methods.correctPassword = async function(candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
}

const User = mongoose.model('User', userSchema);
module.exports = User;