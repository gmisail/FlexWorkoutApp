import {Request, Response} from "express";
import * as passport from "passport";

import User from "../models/user.model";

export default class UserController
{
    constructor()
    {

    }

    onCreate(req: Request, res: Response)
    {
        let username = req.body.username;
        let password = req.body.password;

        (User as any).register(new User({username: username, screenName: username}), password, function(err) {
            if (err) {
                console.log('error while user register!', err);
                //return next(err);
            }

            passport.authenticate('local')(req, res, function () {
                res.json({
                    success: true
                });
            })
        });
    }

    onUpdate(req: Request, res: Response)
    {
        console.log(req.body);
        req.user.screenName = req.body.screenName;
        req.user.bio = req.body.bio;
        req.user.save((err) => {
            res.json({
                user: req.user
            });
        });
    }

    onUpdateData(req: Request, res: Response)
    {
        
    }


    onLogin(req: Request, res: Response)
    {
        res.json({
            success: true,
            user: req.user
        });
    }

    onLogout(req: Request, res: Response)
    {
        req.logOut();
        res.json({
            success: true
        });
    }

    getCurrent(req: Request, res: Response)
    {
        if(req.isAuthenticated())
        {
            res.json({
                user: req.user,
                auth: true
            });
        }
        else
        {
            res.json({
                user: null,
                auth: false
            });
        }
    }
}
