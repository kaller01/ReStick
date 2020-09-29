const mongoose = require('mongoose');
const findOrCreate = require('mongoose-find-or-create')

const UserSchema = mongoose.Schema({
    googleID: {
        type: Number,
        required: true,
        unique: true,
        key: true
    },
    picture: {
        type: String,
        required: true
    },
    name: String
})

UserSchema.plugin(findOrCreate);
module.exports = mongoose.model('Users', UserSchema)