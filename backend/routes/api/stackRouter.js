const stack = require("../../controllers/StackController");
const CardController = require("../../controllers/CardController");
const userController = require("../../controllers/userController");
var express = require("express");
var router = express.Router();

router.route("/").get(stack.getStacks).post(stack.newStack);

router
  .route("/:stackId")
  .get(stack.sendIfPublic, stack.continueIfAccess, stack.getStack)
  .post(stack.continueIfAccess, CardController.newCard)
  .put(stack.continueIfAccess, stack.updateStack)
  .delete(userController.leaveStack);

router
  .route("/:stackId/:cardId")
  .delete(
    stack.continueIfAccess,
    CardController.findCard,
    CardController.deleteCard
  )
  .put(
    stack.continueIfAccess,
    CardController.findCard,
    CardController.updateCard
  );

module.exports = router;
