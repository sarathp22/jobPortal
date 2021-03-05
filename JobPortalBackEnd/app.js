var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var logger = require('morgan');

const url = "mongodb://localhost:27017/JobPortal";
var passport = require('passport');
var mongoose = require('mongoose');

var authenticate = require('./authenticate');
var config = require('./config');
var cors = require('cors');

mongoose.connect(url).then((db)=>{
  console.log('Database connected successfully');
})

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/jobSeeker');
var employerRouter = require('./routes/employer');
var fileuploadRouter = require('./routes/fileupload');
var jobPostRouter = require('./routes/jobPost');
var jobApplyRouter = require('./routes/jobApply');
var adminRouter = require('./routes/admin');
var generalRouter = require('./routes/general');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/jobSeeker', usersRouter);
app.use('/employer', employerRouter);
app.use('/fileupload', fileuploadRouter);
app.use('/jobPost', jobPostRouter);
app.use('/jobApply', jobApplyRouter);
app.use('/admin', adminRouter);
app.use('/general', generalRouter);

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
