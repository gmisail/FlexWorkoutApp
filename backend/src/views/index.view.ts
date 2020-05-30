import userView from "./user.view";
import workoutView from "./workout.view";

import { Router } from 'express';

let router = Router();
router.use('/workout', workoutView);
router.use('/user', userView);

export default router;