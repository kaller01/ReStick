const mongoose = require('mongoose');
require('./Stack')

const UserSchema = mongoose.Schema({
    username: String,
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