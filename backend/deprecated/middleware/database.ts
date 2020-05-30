const mongoose = require('mongoose');

const database = 'mongodb://FlexAdmin:pepperpop34@ds349455.mlab.com:49455/flexapp';

var db = {};
db.mongoose = mongoose;
db.Schema = db.mongoose.Schema;

db.connect = function() {
    db.mongoose.connect(database);
    db.mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}

module.exports = db;