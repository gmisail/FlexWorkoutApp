const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const database = require('./middleware/database');

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const flash = require('connect-flash');
const session = require('express-session');
const cors = require('cors');

const Config = require('./config/config');
const Auth = require('./middleware/auth');

const User = require('./model/User');
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

var router = require('./routes');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(require('body-parser').urlencoded({ extended: true }));
app.use(require('express-session')({ secret: Config.SECRET_KEY, resave: false, saveUninitialized: false }));
app.use(cors({
    origin: 'http://localhost:3001`',
    methods:['GET','POST'],
    credentials: true
}));

app.use(session({ secret: Config.SECRET_KEY, resave: false, saveUninitialized: false, cookie: { maxAge: 60000 } }));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

app.use('/', router);

database.connect();

module.exports = app;
