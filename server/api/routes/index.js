
 const mongoose = require('mongoose');
 const express = require('express');
 const User = require('../models/User');
const userRouter = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
const secret = 'simon';

/*
userRouter.route('/').post( (req,res)=>{
    let token = req.headers['x-access-token'] || req.headers['authorization'];
    token = token.slice(7, token.length).trimLeft();
    jwt.verify(token, secret, (err,dec)=>{
        console.log("verified", err, dec);
    })
    console.log("using new stuff", token);
    User.findOne({user: req.body.user }, (err,user)=>{
        console.log("user is found",req.body.pwd);
        const storedPwd =  bcrypt.compare(req.body.pwd, user.pwd, (err,valid)=>{
            console.log("err",err);
            const token =  jwt.sign({ id: user.user}, secret, {expiresIn: 80000 });
            res.status(200).json({token: token, pass: valid});
        }); // true
       
    });
});*/
userRouter.route('/').post( (req,res)=>{
   
    const password = req.body.pwd;

    User.findOne({user: req.body.user }, (err,user)=>{
        
        if(!user){
            console.log("user NOT found pwd is ");
            res.status(200).json({token: null, pass: false, error: true, 
                msg: 'User not found'});
        }
        if(user){
            console.log("user is found pwd is ",user);

            const storedPwd =  bcrypt.compare(req.body.pwd, user.pwd, (err,valid)=>{           
                
                const token =  jwt.sign({ id: user.user}, secret, {expiresIn: 80000 });
                
                const msg = valid?'':'Please try again';
                const error = valid?false:true;
                res.status(200).json({token: token, msg: msg, pass: valid , error: error});
            });
          
        }
       
    });
});

module.exports = userRouter;