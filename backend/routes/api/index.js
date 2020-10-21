var express = require("express");
var router = express.Router();
const User = require("../../models/User");
const userController = require("../../controllers/userController");
const stackRouter = require("./stack");

router.use('/stacks', stackRouter);

router.get("/users", async (req, res) => {
  let user = await User.find();
  res.send(user);
});

router.get("/user", async (req, res) => {
  await req.user.populate("stacks").execPopulate();
  res.send(req.user);
});


router.get("/user/randomize", userController.randomizeUsername);

module.exports = router;
