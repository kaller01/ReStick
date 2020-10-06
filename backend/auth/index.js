const jwt = require('jsonwebtoken');
const keys = require("../config/secret-keys");

function auth(req,res,next){
    console.log(req)
    jwt.verify(req.headers.authorization, keys.jwt, (err, decoded)=>{
      if(!err){
          console.log(decoded)
          req.user = decoded;
          next();
          console.log('Auth verified')
      } else {
          res.sendStatus(401);
          console.log('Forbidden')
      }
  })
}

module.exports = auth;