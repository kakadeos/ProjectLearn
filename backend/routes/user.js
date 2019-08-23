const express = require('express');

const router = express.Router();

var user = [];

router.post("/signup",(req,res,next)=> {
    console.log(req.body);
    const userAccount = {email: req.body.emailAddress, password: req.body.password};
    user.push(userAccount);
    console.log(user);
    res.status(200).json({message: "Account Created successfully"});
});

router.post("/login", (req,res,next)=> {
   res.status(200).json({message: 'Login Successfully. Welcome!!!'});
});

module.exports = router;