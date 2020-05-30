//const User = require('../model/User');
var Strategy = require('passport-local').Strategy;
var JwtStrategy = require('passport-jwt').Strategy;
var JWT = require('jsonwebtoken');
var ExtractJwt = require('passport-jwt').ExtractJwt;
var Config = require('../config/config');
var Auth = (function () {
    function Auth() {
    }
    return Auth;
}());
module.exports = Auth;
//# sourceMappingURL=auth.js.map