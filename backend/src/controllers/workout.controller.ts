import {Request, Response} from "express";

import Text from "../util/text.util";
import Workout from "../models/workout.model";

export default class WorkoutController
{
    constructor()
    {

    }

    compact(name: String)
    {
        return name.replace(/\s/g, '');
    }

    getLatest(req: Request, res: Response)
    {
        Workout.getLatest((data => {
            res.json(data);
        }));
    }

    getWorkout(req: Request, res: Response)
    {
        const username = req.params.user;
        const workout = req.params.name;

        Workout.getWorkoutFromAuthor(workout, username, (workout) => {
            res.json(workout);
        });
    }

    onCreate(req: Request, res: Response)
    {
        let user = req.user;

        const data = req.body.data;
        const username = user.username;
        const workouts = user.workouts.concat(data.settings.name);
        const workoutName = Text.optimize(data.settings.name);

        user.workouts = workouts;
        user.save(err => {
            Workout.create(workoutName, data.settings.desc, username, data.exercises);

            res.json({
                success: true,
                user: user,
                workoutName: workoutName
            });
        });
    }
}