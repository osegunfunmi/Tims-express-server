// set up ======================================================================
//Add our npm packages
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

// local tools -- non-npm packages
var configDB = require('./config/database.js');
var routes = require('./app/routes/index');
var users = require('./app/routes/userProfile');

var app = express();

// configuration ===============================================================
mongoose.connect(configDB.url); // connect to the database

require('./config/passport')(passport); // configure passport

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//put a small icon on the top right of the browser tab
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

// log requests to the console
app.use(logger('dev')); 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());// read cookies for auth
app.use(express.static(path.join(__dirname, 'public')));

// required for passport
app.use(session({ secret: 'changeThisToWhatEverYouWant' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
//TODO find out what passing in the whole bodyParser does...
app.use(bodyParser()); // get information from html forms

// routes ======================================================================
require('./app/routes.js')(app, passport); // load all routes. give routes passport only after passport has been configured
//app.use('/', routes);
//app.use('/users', users);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

// export to www for launch ====================================================
module.exports = app;
