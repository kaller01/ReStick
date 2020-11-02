const mongoose = require('mongoose');
require('./Stack')

const UserSchema = mongoose.Schema({
    name: String,
    username: {
        type: String,
        required: true,
        unique: true
    },
    googleID: {
        type: Number,
        required: true,
        unique: true,
        key: true
    },
    picture: {
        type: String,
    },
    name: String,
    stacks: [
        {
            permission: Boolean,
            subscribed: Boolean,
            stack: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'stacks'
            }
        }
    ]
})

module.exports = mongoose.model('Users', UserSchema)