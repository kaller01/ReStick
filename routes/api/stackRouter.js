const stack = require("../../controllers/StackController");
const CardController = require("../../controllers/CardController");
const userController = require("../../controllers/userController");
var express = require("express");
var router = express.Router();

router.route("/").get(stack.getStacks).post(stack.newStack);

router
  .route("/:stackId")
  .get(stack.findAccessStack, stack.findPublicStack, stack.continueIfStack, stack.getStack)
  .post(
    stack.findAccessStack,
    stack.continueIfStack,
    stack.continueIfPermission,
    CardController.newCard
  )
  .put(stack.findAccessStack, stack.continueIfStack, stack.continueIfPermission, stack.updateStack)
  .delete(stack.findAccessStack, stack.continueIfStack, userController.leaveStack)
  .patch(stack.findAccessStack, stack.continueIfStack, stack.updateRepeats);

router.route("/:stackId/repeats").delete(stack.findAccessStack, stack.continueIfStack, stack.resetRepeats)

router
  .route("/:stackId/sub")
  .post(stack.findPublicStack, stack.continueIfStack, stack.addStack)
  .put(stack.findAccess, stack.sub)
  .delete(stack.findAccess, stack.unSub);

router
  .route("/:stackId/:cardId")
  .delete(
    stack.findAccessStack,
    stack.continueIfStack,
    stack.continueIfPermission,
    CardController.findCard,
    CardController.deleteCard
  )
  .put(
    stack.findAccessStack,
    stack.continueIfStack,
    stack.continueIfPermission,
    CardController.findCard,
    CardController.updateCard
  );

module.exports = router;
