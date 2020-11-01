var express = require("express");
var router = express.Router();
const User = require("../../models/User");
const userController = require("../../controllers/userController");
const stackRouter = require("./stackRouter");
const userRouter = require("./userRouter");

//Public api, AUTH still required
router.use('/stacks/', stackRouter);


//Private api
router.use("/user/", userRouter);



module.exports = router;
