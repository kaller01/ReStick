const passport = require("passport");
const GoogleStratergy = require("passport-google-oauth20");

passport.use(new GoogleStratergy({
    clientID: '256693553552-p1nqj62a14e05e2gl37sa94r3vqig5p4.apps.googleusercontent.com',
    clientSecret: 'VgMfWf5qVFpo2gkphZQv40Vj'
}), ()=>{
    //passport callback function
})