import * as express from "express";
import * as cookieParser from "cookie-parser";
import * as logger from "morgan";
import * as bodyParser from "body-parser";
import * as session from "express-session";
import * as passport from "passport";
import * as compression from "compression";
import { Strategy } from "passport-local";
import * as flash from "connect-flash";
import * as cors from "cors";

import User from "./models/user.model";
import Views from "./views/index.view";
import Config from "./config";
import Database from "./util/database.util";
import Log from "./util/log.util";

export default class Server
{
    public express: express.Express;

    constructor()
    {
        this.express = express();
    }

    run()
    {
        Database.create();

        this.setupAuthentication();

        this.express.use(logger('dev'));
        this.express.use(express.json());
        this.express.use(cookieParser());
        this.express.use(compression());
        this.express.use(bodyParser.urlencoded({ extended: true }));
        this.express.use(cors({
            origin: 'http://localhost:3001',
            methods: ['GET', 'POST'],
            credentials: true
        }));

        this.express.use(session({
            secret: Config.SECRET_KEY,
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 60000 }
        }));

        this.express.use(passport.initialize());
        this.express.use(passport.session());

        this.express.use(flash());
        this.express.use('/', Views);

        Log.success("Server setup complete.");
    }

    listen()
    {
        this.express.listen(3000, () => {
            Log.info("Listening on port 3000.");
        });
    }

    setupAuthentication()
    {
        passport.use(new Strategy(User.authenticate()));
        passport.serializeUser(User.serializeUser());
        passport.deserializeUser(User.deserializeUser());
    }
}