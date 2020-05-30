const db = require('../middleware/database');

let workoutSchema = new db.Schema({
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

let model = db.mongoose.model('Workout', workoutSchema);

class Workout
{
    static create(name, desc, author, exercises)
    {
        model.create({
            name: name,
            author: author,
            desc: desc,
            date: Date.now(),
            exercises: exercises
        }, (err, instance) => {
            if(err) console.log(err);
        });
    }

    static get(name, done)
    {
        model.findOne({'name': name}, (err, result) => {
            if(!err) done(result);
            else console.log('error');
        });
    }

    static getWorkoutFromAuthor(name, author, done)
    {
        model.findOne({'name': name, 'author': author}, (err, result) => {
            if(!err) done(result);
            else console.log('error');
        });
    }

    static getLatest(done)
    {
        model.find().sort({ 
            date: -1 
        }).limit(4).exec((err, data) => {
            done(data);
        });
    }
}

module.exports = Workout;