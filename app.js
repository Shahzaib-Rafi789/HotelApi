var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var getAvaliableRoomsRouter = require('./routes/GetAvaliableRooms');
var getRoomsRouter = require('./routes/GetARoom');
var getEmployeesRouter = require('./routes/GetAllEmployees');
var getAllRoomsRouter = require('./routes/GetAllRooms');
var getDBDataRouter = require('./routes/GetDBData');
var database = require('./database/sql');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());
app.use( (req, res, next)=>{
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
  res.setHeader('Access-Control-Allow-Headers' , 'Content-Types') ;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/getAvaliableRooms', getAvaliableRoomsRouter);
app.use('/getARoom', getRoomsRouter);
app.use('/getAllRooms', getAllRoomsRouter);
app.use('/getEmployees', getEmployeesRouter);
app.use('/getDBData', getDBDataRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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

module.exports = app;
