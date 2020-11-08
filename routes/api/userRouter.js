var express = require("express");
var router = express.Router();
const userController = require("../../controllers/userController");
const cardController = require("../../controllers/CardController");
const stackController = require("../../controllers/StackController");


router.get("/randomize", userController.randomizeUsername);

router.post("/", userController.newUsername);

router.get("/spaced", stackController.findStacks, cardController.getTodaysCards)
router.get("/spaced/:id", cardController.spaceCard)

module.exports = router;