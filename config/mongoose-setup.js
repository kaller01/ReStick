const mongoose = require('mongoose');
mongoose.connect(process.env.dbConnect, {useNewUrlParser: true,autoIndex: true, useUnifiedTopology: true});

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);
