const User = require('../models/User');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/diet');

exports.register = (user)=>{
    const registerUser = new User({ user: 'Test', pwd: 'test'});    
    User.save( (err)=>{

    });

};
