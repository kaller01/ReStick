var express = require("express");
var router = express.Router();
const userController = require("../../controllers/userController");
const subsRouter = require("./subscriptionRouter")

// router.use("/subs/", subsRouter)

router.get("/randomize", userController.randomizeUsername);

module.exports = router;