var express = require("express");
var router = express.Router();
const stackRouter = require("./stackRouter");
const userRouter = require("./userRouter");
const auth = require("../middleware/auth");
const authRouter = require("./authRouter")

router.get("/test", (res, req) => {
    res.json("hello world")
})

//Public api, AUTH still required
router.use('/stacks/', auth, stackRouter);


//Private api
router.use("/user/", auth, userRouter);

router.use("/auth/", authRouter)

module.exports = router;
