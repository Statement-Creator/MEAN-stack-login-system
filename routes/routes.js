const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const User = require('../model/user');

router.post('/register',(req,res,next)=>{
    const hashedPassword = req.body.password;
    bcrypt.hash(hashedPassword, saltRounds, function(err, hash) {
    let newUser = new User({
        Username : req.body.username,
        Password : hash,
        Cookie: req.body.username
    })
    newUser.save(function (err) {
        if (err) return handleError(err);
        // saved!
      });
    });
})

router.post('/login',(req,res,next)=>{
    const plainTextPassword= req.body.password;
    User.findOne({"Username": req.body.username},function(err,test1){if( test1==undefined || test1.length == 0){console.log("No users found");}else{
        const hashedPassword = test1.Password;
        const userName = req.body.username; 
        bcrypt.compare(plainTextPassword, hashedPassword, function(err, test) {
            if(test){
                const token = jwt.sign({
                    Username: userName
                },"the misty mountains core",
                {expiresIn:"1h"}
            );
            jwtArray.push(token);
            }
      });
    }})
})

const jwtArray=[];

const checkAuth = (req,res,next)=>{
    try{
    const decoded = jwt.verify(jwtArray[0], "the misty mountains core");
    const userData = decoded;
    decodedUserData.push(userData);
    next();
    }catch(error){
        console.log("Auth Failed");
        throw error;
    }
}

const decodedUserData = [];

router.get('/login',checkAuth,(req,res,next)=>{
    res.json("Welcome,user: "+ decodedUserData[0].Username + ".");
})

module.exports = router;