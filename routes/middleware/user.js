const jwt = require('jsonwebtoken');
const keys = require("../../config/secret-keys");
const User = require('../../models/User')

function auth(req, res, next) {
    jwt.verify(req.headers.authorization, keys.jwt, async (err, decoded) => {
        if (!err) {
            let user = await User.findById(decoded.id);
            if (user) {
                req.user = user;
                console.log(user.name + " was authorized");
                next();
            } else {
                req.user = false;
            }
        } else {
            req.user = false;
        }
    })
}

module.exports = auth;