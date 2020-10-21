const Stack = require("../models/Stack");

module.exports = {
  newStack: async (req, res) => {
    const newStack = new Stack(req.body);

    console.log(newStack);

    await newStack.save();

    req.user.stacks.push(newStack);
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
  updateStack: async(req,res,next) => {
    await Stack.update(req.stack, req.body)
    res.sendStatus(200) 
  },
  //Finds the stack and saves it in req.stacks for later use
  findStack: async(req,res,next)=>{
    if(req.params.stackId){
        const index = req.user.stacks.indexOf(req.params.stackId);

        if(index != -1){
            req.stack = await Stack.findOne(req.user.stacks[index])
            next();
        } else res.sendStatus(404)
    } else next();
  }
};
