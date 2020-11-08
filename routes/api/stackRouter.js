const stack = require("../../controllers/StackController");
const CardController = require("../../controllers/CardController");
const userController = require("../../controllers/userController");
var express = require("express");
var router = express.Router();

router.route("/").get(stack.getStacks).post(stack.newStack);

router.get("/test", stack.findStacks, CardController.getCards);
router
  .route("/:stackId")
  .get(stack.findAccessStack, stack.findPublicStack, stack.getStack)
  .post(
    stack.findAccessStack,
    stack.continueIfPermission,
    CardController.newCard
  )
  .put(stack.findAccessStack, stack.continueIfPermission, stack.updateStack)
  .delete(stack.findAccessStack, userController.leaveStack);

router
  .route("/:stackId/sub")
  .post(stack.findPublicStack, stack.addStack)
  .put(stack.findAccess, stack.sub)
  .delete(stack.findAccess, stack.unSub);

router
  .route("/:stackId/:cardId")
  .delete(
    stack.findAccessStack,
    stack.continueIfPermission,
    CardController.findCard,
    CardController.deleteCard
  )
  .put(
    stack.findAccessStack,
    stack.continueIfPermission,
    CardController.findCard,
    CardController.updateCard
  );

module.exports = router;
