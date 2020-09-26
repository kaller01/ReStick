var express = require('express');
var router = express.Router();
const passport = require('passport');

//Auth with google
router.post('/google', passport.authenticate('google',{
    scope: ['profile']
}));

//Callback for google
router.get('/google/redirect', passport.authenticate('google'), (req,res) => {

    res.send('Hello!!')
})




module.exports = router;