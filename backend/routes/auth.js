var express = require('express');
var router = express.Router();
const googleVerifier = require('google-id-token-verifier');
const jwt = require('jsonwebtoken');
const keys = require("../config/secret-keys");
const User = require('../models/User')
const rug = require('random-username-generator');
const auth = require('../auth/index.js');


//Auth with google
//You should never expose a google users id token, therefore a new JWT is created to ensure that the user token is protected
router.post('/google', (req, res) => { 
    googleVerifier.verify(req.body.idToken, keys.google.clientID, async(err, tokenInfo) => {
        if(!err){
            let user = await User.findOne({googleID: tokenInfo.sub});
            if(!user){
                user = new User({
                    username: rug.generate(),
                    googleID: tokenInfo.sub,
                    picture: tokenInfo.picture,
                    name: tokenInfo.name
                });
                user = await user.save();
            }
            console.log(user)
            const id = user._id;
            const token = jwt.sign({
                id,
                username: user.username,
                picture: user.picture
            }, keys.jwt);
            res.send(token);
        }
    })
})

router.post('/verify', auth, (req, res) => {
    res.send(req.user);
})

module.exports = router;