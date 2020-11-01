const Stack = require("../models/Stack");

module.exports = {
  newStack: async (req, res) => {
    const newStack = new Stack(req.body);

    if (newStack.picture == "")
      newStack.picture = "https://picsum.photos/seed/" + newStack._id + "/720";

    await newStack.save();

    const newAccess = {
      stack: newStack,
      permission: true,
      subscribed: true,
    };

    req.user.stacks.push(newAccess);
    // req.user.subs.push(newStack);
    req.user.save();

    res.sendStatus(201);
  },
  getStacks: async (req, res) => {
    //Multi layer populates are a bit more complicated, this does the trick
    await req.user
      .populate({
        path: "stacks",
        populate: {
          path: "stack",
        },
      })
      .execPopulate();

    res.send(req.user.stacks);
  },
  //Sends one stack
  getStack: async (req, res) => {
    await req.stack.populate("cards").execPopulate();
    const stack = req.stack.toObject();
    if (req.access) {
      stack.subscribed = req.access.subscribed;
      stack.permission = req.access.permission;
      stack.unknown = false;
    } else {
      stack.subscribed = false;
      stack.permission = false;
      stack.unknown = true;
    }
    console.log(req.access);
    res.send(stack);
  },
  updateStack: async (req, res, next) => {
    await Stack.update(req.stack, req.body);
    res.sendStatus(200);
  },
  unSub: async (req, res, next) => {
    if (req.access) {
      req.user.stacks[req.access.index].subscribed = false;
      await req.user.save();
      res.sendStatus(200);
    } else res.sendStatus(404);
  },
  sub: async (req, res, next) => {
    if (req.access) {
      req.user.stacks[req.access.index].subscribed = true;
      await req.user.save();
      res.sendStatus(200);
    } else res.sendStatus(404);
  },
  findAccess: async (req, res, next) => {
    let index = req.user.stacks
      .map((e) => {
        return e.stack; //id
      })
      .indexOf(req.params.stackId);
    if (index == -1) {
    } else {
      req.access = req.user.stacks[index].toObject();
      req.access.index = index;
    }
    next();
  },
  findAccessStack: async (req, res, next) => {
    if (req.stack) next();
    else {
      let index = req.user.stacks
        .map((e) => {
          return e.stack; //id
        })
        .indexOf(req.params.stackId);
      if (index == -1) {
      } else {
        req.stack = await Stack.findById(req.user.stacks[index].stack);
        req.access = req.user.stacks[index].toObject();
        req.access.index = index;
      }
      next();
    }
  },
  findPublicStack: async (req, res, next) => {
    if (req.stack) next();
    else {
      const stack = await Stack.findById(req.params.stackId).populate("cards");
      if (stack.isPublic) {
        req.stack = stack;
      }
      next();
    }
  },
  continueIfPermission: (req, res, next) => {
    if (req.access.permission) next();
    else res.sendStatus(401);
  },
  addStack: async (req, res, next) => {
    const newAccess = {
      stack: req.stack,
      permission: false,
      subscribed: true,
    };

    req.user.stacks.push(newAccess);
    req.user.save();

    res.sendStatus(201);
  },
};
