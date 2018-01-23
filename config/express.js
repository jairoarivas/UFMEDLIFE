//this is where we configure our application. This is where we add everything related to the Express configuration.
const path = require('path');
const config = require('./config');

//required express module and then used the commonjs module pattern to define a module function that initializes the express app. First it creates a new instance of an Express application and then it requires your routing file and calls it as a function, passing it the application instance as an arguement. The routing file will use the application instance to create a new routing configuration, and then it will call the controller's render() method. The module function ends by returning the application instance.
const express = require('express');

//morgan module provides a simple logger middleware, the compression module provides response compression, the body parser module provides several middleware to handle the request data, and the method-override module provides DELETE and PUT HTTP verbs legacysupport.
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

const flash = require('connect-flash');

//register passport middleware in Express application
const passport = require('passport');

module.exports = function(){
  const app = express();
  //used process.env.MODE_ENV var to determine our environement and congifure the express app accordinngly.
  if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
  }
  else if(process.env.NODE_ENV === 'production'){
    app.use(compress());
  }

  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
  app.use(methodOverride());

  app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: config.sessionSecret
  }));

  //configure express to use ejs as the default template engine
  app.set('views', './app/views');
  app.set('view engine', 'ejs');

  app.use(flash());
  //for passport
  //initialize bootstraps the the passport module
  //session uses Express session to keep track of your user session
  app.use(passport.initialize());
  app.use(passport.session());

  //adding static file support
  app.use('/', express.static(path.resolve('./public')));
  app.use('/lib', express.static(path.resolve('./node_modules')));

  require('../app/routes/users.server.routes.js')(app);
  require('../app/routes/events.server.routes.js')(app);
  require('../app/routes/index.server.routes.js')(app);

  return app;
};
