const rug = require("random-username-generator");
const User = require("../models/User");

module.exports = {
  randomizeUsername: async (req, res) => {
    req.user.username = await rug.generate();
    req.user.save();
    res.sendStatus(200);
  },
  leaveStack: async (req, res) => {
    let index = req.user.stacks
      .map((e) => {
        return e.stack; //id
      })
      .indexOf(req.params.stackId);
    if (index != -1) {
      req.user.stacks.splice(index, 1);
      req.user.save();
      res.sendStatus(200);
    } else {
      res.sendStatus(401)
    }
  },
};
