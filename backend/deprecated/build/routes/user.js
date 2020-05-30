var express = require('express');
var passport = require('passport');
var User = require('../model/User');
var Auth = require('../middleware/auth');
var router = express.Router();
/*
    Return current account
*/
router.get('/current', function (req, res, next) {
    if (req.isAuthenticated()) {
        res.json({
            user: req.user,
            auth: true
        });
    }
    else {
        res.json({
            user: null,
            auth: false
        });
    }
});
/*
    Attempt to login to account
*/
router.post('/login', passport.authenticate('local', { session: true, failureRedirect: '/' }), function (req, res) {
    res.json({
        success: true,
        user: req.user
    });
});
/*
    Log out of current account
*/
router.get('/logout', function (req, res) {
    console.log("logout");
    req.logOut();
    res.json({
        success: true
    });
});
/*
    Register new account
*/
router.post('/create', function (req, res, next) {
    var username = req.body.username;
    var password = req.body.password;
    User.register(new User({ username: username, screenName: username }), password, function (err) {
        if (err) {
            console.log('error while user register!', err);
            return next(err);
        }
        passport.authenticate('local')(req, res, function () {
            res.json({
                success: true
            });
        });
    });
});
/*
    Update user properties
*/
router.post('/update', function (req, res, next) {
    req.user.screenName = req.body.screenName;
    req.user.save(function (err) {
        res.json({
            user: req.user
        });
    });
});
module.exports = router;
//# sourceMappingURL=user.js.map