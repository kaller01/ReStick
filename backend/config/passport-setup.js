const passport = require("passport");
const GoogleStratergy = require("passport-google-oauth20");
const keys = require("./secret-keys");

passport.use(new GoogleStratergy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: '/auth/google/redirect'
}, (accessToken, refreshToken, profile, done) => {
    //passport callback function
    console.log(profile);
    done();
}))