const jwt = require('jsonwebtoken');
const keys = require("../config/secret-keys");
const User = require('../models/User')

function auth(req,res,next){
    jwt.verify(req.headers.authorization, keys.jwt, async(err, decoded)=>{
      if(!err){
          let user = await User.findById(decoded.id);
          if(user){
            req.user = user;
            console.log(user);
            next();
          } else {
            res.sendStatus(401);
          }
      } else {
          res.sendStatus(401);
      }
  })
}

module.exports = auth;