
const express = require('express');
const app = express();
 
const bodyParser = require('body-parser');
const User = require('./api/models/User');
const bcrypt = require('bcrypt');
 const mongoose = require('mongoose');

 const nodemailer = require('nodemailer');
 const smtpTransport = require('nodemailer-smtp-transport');

 const userRouter = require('./api/routes');
 var jwt = require('jsonwebtoken');
const secret = 'simon';
mongoose.connect('mongodb://localhost/diet');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json());
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST');
    res.header('Access-Control-Allow-Headers','Content-Type, Authorization');
    console.log("cors");
    next();
});
 
app.post('/mail', (req,res)=>{

        const transporter = nodemailer.createTransport(smtpTransport({
            service: 'gmail',
            secure: false,
            auth:{
                user: 'candy.ahrends@gmail.com',
                pass: 'Luna!Cat!15'
            }
        }));

        const mailOptions = {
            from: 'candace.ahrends@gmail.com',
            to: 'candace.ahrends@me.com',
            subject: 'test',
            html: '<p>test</p>'

        };

        transporter.sendMail(mailOptions, (err,info)=>{
            console.log("err", err,info);
        })


});



app.use('/authenticate', userRouter);
   
    
   
 
app.post('/register',(req,res)=>{
    
    console.log("registering ", req.body);
    const user = {
        user: req.body.user,
        pwd: req.body.pwd
    }

    let userExists = false;
    let userSaved = false;

    User.findOne({user: req.body.user }, (err,foundUser)=>{
        
        if(foundUser){
             
            console.log("user was found as => ", foundUser);
            res.status(200).json({error: true, 
                msg: 'Username has been taken'});
        }
        else{
              console.log("user does not exist");
                const saltRounds = 10; 
            
                var salt = bcrypt.genSaltSync(saltRounds);
                var hash = bcrypt.hashSync(user.pwd, salt);
                user.pwd = hash;
                const registerUser = new User( user);
                registerUser.save( (err)=>{
                    const token =  jwt.sign({ id: user.user}, secret, {expiresIn: 80000 });
                    userSaved = true;
                    res.status(200).json({registered: true});
                   // res.status(200).json(err);
            
                });
            

        }
        
      
       
    }); 
    
    
});
 
const server = app.listen(3200, ()=>{
    console.log("listening... 3200");

});
 


 


 