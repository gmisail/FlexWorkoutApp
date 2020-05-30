//const User = require('../model/User');
const Strategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const JWT = require('jsonwebtoken');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const Config = require('../config/config');

class Auth
{
    /*static getToken(req, res, next)
    {
        var token = req.headers['x-access-token'] || req.headers['authorization'];
        if(token)
        {
            token = token.split(' ')[1];
            JWT.verify(token, Config.JWT_KEY, (err, decoded) => {
                if(err)
                {
                    return res.json({
                        success: false,
                        message: 'Invalid token'
                    });
                }
                else
                {
                    req.user = decoded;
                    next();
                }
            });
        }
        else
        {
            return res.json({
                success: false,
                message: "No authentication token was provided."
            });
        }
    }

    static configure(passport)
    {
        var options = {};
        options.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
        options.secretOrKey = Config.JWT_KEY;
        passport.use(new JwtStrategy(options, (payload, done) => {
            console.log(payload);
            User.getUserById(payload._id, (err, user) => {
                if(err) return done(err, false);
                if(user) return done(null, user);
                else return done(null, false);
            });
        }))
    }*/
}

module.exports = Auth;
