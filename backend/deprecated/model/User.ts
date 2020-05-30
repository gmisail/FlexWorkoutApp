const auth = require('passport-local-mongoose');

const db = require('../middleware/database');
const bcrypt = require('bcryptjs');

var UserSchema = new db.Schema({
    screenName: String,
    username: String,
    password: String,
    dateCreated: Date,
    workouts: [String],
    friends: [String]
});

UserSchema.plugin(auth);

module.exports = db.mongoose.model('User', UserSchema);
