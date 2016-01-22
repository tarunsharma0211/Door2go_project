var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// define the schema for our user model
var userSchema = mongoose.Schema({
    id: String,
    email: String,
    password: String,
    name: String,
    phone: Number,
    street: String,
    city: String,
    country: String,
    gender: String,
    birth: String,
    service: String,
    bio: String,
    detail: String

});


userSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

userSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

var User = mongoose.model('doorusers', userSchema);

module.exports.User = User;