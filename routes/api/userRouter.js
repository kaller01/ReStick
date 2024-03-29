var express = require("express");
var router = express.Router();
const userController = require("../../controllers/userController");
const cardController = require("../../controllers/CardController");
const stackController = require("../../controllers/StackController");


router.get("/randomize", userController.randomizeUsername);

router.post("/", userController.newUsername);

router.get("/spaced", stackController.findStacks, cardController.getTodaysCards)
router.post("/spaced/:id/:grade", cardController.spaceCard)

router.get("/spaced/countdown", stackController.findStacks, cardController.getNext)

module.exports = router;