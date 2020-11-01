var express = require("express");
var router = express.Router();
const userController = require("../../controllers/userController");
const StackController = require("../../controllers/StackController");

router.route("/").get(userController.getSubs);

router
  .route("/:stackId")
  .delete(userController.unSub)

module.exports = router;
