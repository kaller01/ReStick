var express = require("express");
var router = express.Router();
const googleVerifier = require("google-id-token-verifier");
const jwt = require("jsonwebtoken");
const keys = require("../config/secret-keys");
const User = require("../models/User");
const Access = require("../models/Access");
const Stack = require("../models/Stack");
const rug = require("random-username-generator");
const auth = require("./middleware/auth.js");

//Auth with google
//You should never expose a google users id token, therefore a new JWT is created to ensure that the user token is protected
router.post("/google", (req, res) => {
  googleVerifier.verify(
    req.body.idToken,
    keys.google.clientID,
    async (err, tokenInfo) => {
      if (!err) {
        let user = await User.findOne({ googleID: tokenInfo.sub });
        if (!user) {
          user = new User({
            username: rug.generate(),
            googleID: tokenInfo.sub,
            picture: tokenInfo.picture,
            name: tokenInfo.name,
          });

          const tutorial = new Access({
            stack: '5f985ad874f99206a13a8f19',
            permission: false,
            subscribed: false,
          });
          const intro = new Access({
            stack: '5f985f2574f99206a13a8f20',
            permission: false,
            subscribed: false,
          });

          await tutorial.save();
          await intro.save();

          user = await user.save();

          user.stacks.push(tutorial);
          user.stacks.push(intro);
        }
        console.log(user);
        const id = user._id;
        const token = jwt.sign(
          {
            id,
            username: user.username,
            picture: user.picture,
          },
          keys.jwt
        );
        res.send(token);
      }
    }
  );
});

router.post("/verify", auth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
