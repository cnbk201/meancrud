var config = require('./config'),
    express = require('express'),
    bodyParser = require('body-parser'),
    passport = require('passport'),
    flash = require('connect-flash'),
    session = require('express-session');
module.exports = function() {
    var app = express();
    //use this code before any route definitions
    app.use(passport.initialize());
    app.use(passport.session());
    // url parser 
    app.use(bodyParser.urlencoded({
        extended: false
    }));
    app.use(bodyParser.json());
    // session
    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: 'OurSuperSecretCookieSecret'
    }));
    app.use(flash());
    
    // indicating view folder
    app.set('views', './app/views');
    // indicating view engine
    app.set('view engine', 'ejs');
    // 
    require('../app/routes/index.server.routes.js')(app);
    require('../app/routes/users.server.routes.js')(app);
    /**
     * This is an example for parame with name route
     * with id as input param
     *
     * param method will take process function to process
     * what should be done with the id, db transection
     *
     * get or route will be to display the result of the db transection
     */
    app.param('id', function(req, res, next, id) {
        req.user = id;
        next();
    })
    app.get('/name/:id', function(req, res) {
        res.send('user ' + req.user);
    });
    
    app.use(express.static('./public'));
    return app;
};