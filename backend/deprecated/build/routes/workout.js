var express = require('express');
var Workout = require('../model/Workout');
var User = require('../model/User');
var router = express.Router();
/*
    Returns the 4 newest workouts in the database
*/
router.get('/latest', function (req, res, next) {
    Workout.getLatest((function (data) {
        res.json(data);
    }));
});
/*
    Returns workout data of the given name
*/
router.get('/:user/:name', function (req, res, next) {
    console.log(req.params.name);
    console.log(req.params.user);
    Workout.getWorkoutFromAuthor(req.params.name, req.params.user, function (workout) {
        res.json(workout);
    });
});
/*
    Creates a workout & adds it to the current user
*/
router.post('/create', function (req, res, next) {
    var user = req.user;
    var data = req.body.data;
    var username = user.username;
    var workouts = user.workouts.concat(data.settings.name);
    user.workouts = workouts;
    /*
    *  Add a callback in Workout.create so that we can add the workout to the user AFTER it is validated and created
    * */
    user.save(function (err) {
        Workout.create(data.settings.name, data.settings.desc, username, data.exercises);
        res.json({
            success: true,
            user: user
        });
    });
});
module.exports = router;
//# sourceMappingURL=workout.js.map