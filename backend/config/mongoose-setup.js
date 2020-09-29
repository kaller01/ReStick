const mongoose = require('mongoose');
const keys = require('./secret-keys')
mongoose.connect(keys.mongodb.connect, {useNewUrlParser: true,autoIndex: true,});