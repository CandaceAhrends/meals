const mongoose = require('mongoose');
const User = mongoose.Schema({
    user: String,
    pwd: String
});

module.exports = mongoose.model('User', User);