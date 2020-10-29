const mongoose = require('mongoose');
const keys = require('./secret-keys')
mongoose.connect(keys.mongodb.connect, {useNewUrlParser: true,autoIndex: true,});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

require('../models/Access');