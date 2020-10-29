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
    stacks: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'access'
    }],
    subs: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'stacks'
    }]
})

module.exports = mongoose.model('Users', UserSchema)