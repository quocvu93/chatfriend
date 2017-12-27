var express = require('express');
var compression = require('compression');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var bodyParser = require('body-parser');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);
var index = require('./routes/index');

var app = express();

//set io connection

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(compression());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
/***
app.use(session({
  secret: '0FFD9D8D-78F1-4A30-9A4E-0940ADE81645',
  cookie:{ maxAge: new Date(Date.now() + 2592000000)},
  store: new MongoStore({
    url:"mongodb://vu:1234@ds135926.mlab.com:35926/app1234"
  }) 
}));**/
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', index);
 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/** io demo **/

module.exports = app;
