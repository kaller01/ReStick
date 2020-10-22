const Stack = require("../models/Stack");

module.exports = {
  newStack: async (req, res) => {
    const newStack = new Stack(req.body);

    console.log(newStack);

    await newStack.save();

    req.user.stacks.push(newStack);
    req.user.subs.push(newStack);
    req.user.save();

    res.sendStatus(201);
  },
  getStacks: async (req, res) => {
    //Multi layer populates are a bit more complicated, this does the trick
    await req.user
      .populate({
        path: "stacks",
        populate: {
          path: "cards",
        },
      })
      .execPopulate();
    res.send(req.user.stacks);
  },
  //Sends one stack
  getStack: async (req, res) => {
    await req.stack.populate("cards").execPopulate();
    res.send(req.stack);
  },
  updateStack: async (req, res, next) => {
    await Stack.update(req.stack, req.body);
    res.sendStatus(200);
  },
  //Continue if the stack has access and save it for later use in req.stacks to avoid duplicate calls to DB.
  continueIfAccess: async (req, res, next) => {
    const index = req.user.stacks.indexOf(req.params.stackId);

    if (index != -1) {
      req.stack = await Stack.findOne(req.user.stacks[index]);
      next();
    } else res.sendStatus(404)
  },
  //If the stack is public, then send it. If not it will continue to the next method.
  sendIfPublic: async (req, res, next) => {
    const stack = await Stack.findById(req.params.stackId).populate("cards");
    if (stack.isPublic) {
      res.send(stack);
    } else next();
  },
  //This method is to check if a stack is Public OR the user has access to it
  continueIfAvailable: async (req,res,next) => {
    const stack = await Stack.findById(req.params.stackId);
    const index = req.user.stacks.indexOf(req.params.stackId);
    if (stack.isPublic) {
      req.stack = stack;
      next();
    } else if(index != -1){
      req.stack = await Stack.findOne(req.user.stacks[index]);
      next();
    } else res.sendStatus(404);
  }
};
