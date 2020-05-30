var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var database = require('./middleware/database');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var flash = require('connect-flash');
var session = require('express-session');
var cors = require('cors');
var Config = require('./config/config');
var Auth = require('./middleware/auth');
var User = require('./model/User');
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
    origin: 'http://localhost:3001',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(session({ secret: Config.SECRET_KEY, resave: false, saveUninitialized: false, cookie: { maxAge: 60000 } }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
app.use('/', router);
database.connect();

module.exports = app;
//# sourceMappingURL=app.js.map