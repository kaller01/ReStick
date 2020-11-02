var express = require("express");
var router = express.Router();
const googleVerifier = require("google-id-token-verifier");
const jwt = require("jsonwebtoken");
const keys = require("../../config/secret-keys");
const User = require("../../models/User");
const rug = require("random-username-generator");
const auth = require("../middleware/auth.js");

//Auth with google
//You should never expose a google users id token, therefore a new JWT is created to ensure that the user token is protected
router.post("/", (req, res) => {
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
            stacks: [
              {
                //Tutorial stack
                stack: "5f985ad874f99206a13a8f19",
                permission: false,
                subscribed: false,
              },
              {
                //Intro stack
                stack: "5f985f2574f99206a13a8f20",
                permission: false,
                subscribed: false,
              },
            ],
          });

          user = await user.save();
        }
        const usernames = [
          user.username,
          rug.generate(),
          rug.generate(),
          rug.generate(),
          rug.generate()
        ]
        console.log(user);
        const id = user._id;
        const token = jwt.sign(
          {
            id,
            username: user.username,
            picture: user.picture,
            usernames: usernames
          },
          keys.jwt
        );
        res.send({ token,
        names: usernames
        });
      }
    }
  );
});

router.post("/verify", auth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
