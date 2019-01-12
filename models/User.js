const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, parseInt(process.env.SALT)).then(hash => {
        this.password = hash;
        next();
    });
    //TODO: return error on fail.
});

module.exports = mongoose.model('User', UserSchema);
