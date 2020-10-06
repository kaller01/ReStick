
var express = require('express');
var router = express.Router();
const User = require('../../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("lamoooo");
});

router.get('/users', async(req,res)=>{
  let user = await User.find();
  res.send(user);
})

router.get('/user', async(req,res)=>{
  let user = await User.findById(req.user.id)
  res.send({user})
})

module.exports = router;