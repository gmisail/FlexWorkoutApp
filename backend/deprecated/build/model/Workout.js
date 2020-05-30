var db = require('../middleware/database');
var workoutSchema = new db.Schema({
    name: String,
    author: String,
    desc: String,
    date: Number,
    exercises: [{
            name: String,
            desc: String,
            reps: Number,
            sets: Number,
            time: Number,
            distance: String,
            exerciseType: String,
            id: Number
        }]
});
var model = db.mongoose.model('Workout', workoutSchema);
var Workout = (function () {
    function Workout() {
    }
    Workout.create = function (name, desc, author, exercises) {
        model.create({
            name: name,
            author: author,
            desc: desc,
            date: Date.now(),
            exercises: exercises
        }, function (err, instance) {
            if (err)
                console.log(err);
        });
    };
    Workout.get = function (name, done) {
        model.findOne({ 'name': name }, function (err, result) {
            if (!err)
                done(result);
            else
                console.log('error');
        });
    };
    Workout.getWorkoutFromAuthor = function (name, author, done) {
        model.findOne({ 'name': name, 'author': author }, function (err, result) {
            if (!err)
                done(result);
            else
                console.log('error');
        });
    };
    Workout.getLatest = function (done) {
        model.find().sort({
            date: -1
        }).limit(4).exec(function (err, data) {
            done(data);
        });
    };
    return Workout;
}());
module.exports = Workout;
//# sourceMappingURL=Workout.js.map