var express = require('express');
var router = express.Router();
const googleVerifier = require('google-id-token-verifier');
const jwt = require('jsonwebtoken');
const keys = require("../config/secret-keys");


//Auth with google
//You should never expose a google users id token, therefore a new JWT is created to ensure that the user token is protected
router.post('/google', (req, res) => { 
    googleVerifier.verify(req.body.idToken, keys.google.clientID, (err, tokenInfo) => {
        if(!err){
            console.log(tokenInfo)
            const id = tokenInfo.sub;
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