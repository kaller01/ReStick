const rug = require("random-username-generator");
const User = require("../models/User");

module.exports = {
  randomizeUsername: async (req, res) => {
    req.user.username = await rug.generate();
    req.user.save();
    res.sendStatus(200);
  },
  leaveStack: async (req, res) => {
    // console.log(req.user.stacks, req.body.id);
    const index = req.user.stacks.indexOf(req.params.stackId);
    //If the user has access to the stack it will be in the array
    if (index != -1) {
      req.user.stacks.splice(index, 1);
      req.user.save();
      res.sendStatus(200);
    } else res.sendStatus(404);
  },
};
