const passport = require("passport");
const GoogleStratergy = require("passport-google-oauth20");
const keys = require("./secret-keys");

passport.use(new GoogleStratergy({
    clientID: keys.google.clientID, 
    clientSecret: keys.google.clientSecret
}), ()=>{
    //passport callback function
})