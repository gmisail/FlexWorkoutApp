import UserController from "../controllers/user.controller";

import { Router } from 'express';

import * as passport from "passport";

let router = Router();
let controller = new UserController();

router.get("/current", controller.getCurrent);
router.get("/logout", controller.onLogout);

router.post("/update", controller.onUpdate);
router.post("/login", passport.authenticate('local', {session: true, failureRedirect: '/'}), controller.onLogin);
router.post("/register", controller.onCreate);
router.post("/update-data", controller.onUpdateData);

export default router;