const StackController = require("../../controllers/StackController");
const CardController = require("../../controllers/CardController");
const userController = require("../../controllers/userController");
var express = require("express");
var router = express.Router();

router.route("/").get(StackController.getStacks).post(StackController.newStack);

router
  .route("/:stackId")
  .get(StackController.findStack, StackController.getStack)
  .post(StackController.findStack, CardController.newCard)
  .put(StackController.findStack, StackController.updateStack)
  .delete(userController.leaveStack);

router
  .route("/:stackId/:cardId")
  .delete(
    StackController.findStack,
    CardController.findCard,
    CardController.deleteCard
  )
  .put(
    StackController.findStack,
    CardController.findCard,
    CardController.updateCard
  );

module.exports = router;
