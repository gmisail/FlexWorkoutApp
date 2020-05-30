import WorkoutController from "../controllers/workout.controller";

import { Router } from 'express';

let router = Router();
let controller = new WorkoutController();

router.get("/latest", controller.getLatest);
router.get("/:user/:name", controller.getWorkout);
router.post("/create", controller.onCreate);

export default router;