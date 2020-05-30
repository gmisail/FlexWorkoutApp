import * as mongoose from "mongoose";
import Log from "../util/log.util";

let workoutSchema = new mongoose.Schema({
    name: String,
    link: String,
    author: String,
    desc: String,
    date: Number,
    likes: Number,
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

let model = mongoose.model('Workout', workoutSchema);

export default class Workout
{
    static create(name, desc, author, exercises)
    {
        model.create({
            name: name,
            author: author,
            desc: desc,
            date: Date.now(),
            likes: 0,
            exercises: exercises
        }, (err, instance) => {
            if(err) console.log(err);

            Log.success("Workout " + name + " registered.");
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
