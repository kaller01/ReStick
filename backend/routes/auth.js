var express = require('express');
var router = express.Router();
const googleVerifier = require('google-id-token-verifier');
const jwt = require('jsonwebtoken');
const keys = require("../config/secret-keys");
const User = require('../models/User')


//Auth with google
//You should never expose a google users id token, therefore a new JWT is created to ensure that the user token is protected
router.post('/google', (req, res) => { 
    googleVerifier.verify(req.body.idToken, keys.google.clientID, async(err, tokenInfo) => {
        if(!err){
            let user = await User.findOne({googleID: tokenInfo.sub});
            if(!user){
                user = new User({
                    googleID: tokenInfo.sub,
                    picture: tokenInfo.picture,
                    name: tokenInfo.name
                });
                user = await user.save();
            }
            console.log(user)
            const id = user._id;
            const token = jwt.sign({id}, keys.jwt);
            res.send(token);
        }
    })
})

router.post('/google/test', (req, res) => {
    jwt.verify(req.headers.authorization, keys.jwt, (err, decoded)=>{
        if(!err){
            console.log(decoded)
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
            console.log('Forbidden')
        }
    })
})


module.exports = router;