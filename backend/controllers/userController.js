const rug = require("random-username-generator");
const User = require("../models/User");

module.exports = {
  randomizeUsername: async (req, res) => {
    req.user.username = await rug.generate();
    req.user.save();
    res.sendStatus(200);
  },
  leaveStack: async (req, res) => {
    const index = req.user.stacks.indexOf(req.params.stackId);
    const subIndex = req.user.subs.indexOf(req.params.stackId);
    if(subIndex != -1){
      req.user.subs.splice(index,1);
      req.user.save();
    } 
    //If the user has access to the stack it will be in the array
    if (index != -1) {
      req.user.stacks.splice(index, 1);
      req.user.save();
      res.sendStatus(200)
    } else res.sendStatus(404);
  },
  getSubs: async (req, res) => {
    await req.user
      .populate({
        path: "subs",
      })
      .execPopulate();
    res.send(req.user.subs);
    // req.user.subs.populate("subs").execPopulate();
    // res.send(req.user.subs)
  },
  unSub: async (req, res) => {
    const index = req.user.subs.indexOf(req.params.stackId);
    req.user.subs.splice(index, 1);
    if (index != -1) req.user.save();
    res.sendStatus(200);
  },
  sub: async (req, res) => {
    if (req.user.subs.includes(req.params.stackId)) res.sendStatus(201);
    else {
      req.user.subs.push(req.stack);
      req.user.save();
      res.sendStatus(201);
    }
  },
};
