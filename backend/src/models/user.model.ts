import * as mongoose from "mongoose";
import * as auth from "passport-local-mongoose";

let UserSchema = new mongoose.Schema({
    screenName: String,
    username: String,
    password: String,
    bio: String,
    dateCreated: Date,
    workouts: [String],
    workoutData: [{
        date: Date,
        data: {}
    }],

    savedWorkouts: [{
        user: String,
        workout: String
    }]
});

UserSchema.plugin(auth);

export default mongoose.model('User', UserSchema);
