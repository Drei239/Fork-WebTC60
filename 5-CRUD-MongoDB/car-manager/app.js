var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

// 1. Kết nối đến cơ sở dữ liệu
const database = 'mongodb://127.0.0.1/car_management';
mongoose.connect(database).then(function () {
  console.log('Connect den database thanh cong');
}).catch(function (err) {
  console.log('Connect den database that bai', err);
  process.exit();
});

// 2. Tạo ít nhất 1 model tương ứng với 1 bảng (collection) trong database
// 2.1 - Trong model tạo schema tương ứng với cấu trúc của collection đó.

// M (model) V (view) (C) Controller

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const carsRouter = require('./routes/cars');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter);

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
