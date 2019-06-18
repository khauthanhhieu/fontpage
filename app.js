var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var homeRouter = require('./routes/home');
var cartRouter = require('./routes/cart');
var orderRouter = require('./routes/order');
var checkoutRouter = require('./routes/checkout');
var contactRouter = require('./routes/contact')
var recoverRouter = require('./routes/recovery');
var productRouter = require('./routes/product');
var historyRouter = require('./routes/history');

var app = express();
 global.id = 0;

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/home', homeRouter);
app.use('/cart', cartRouter);
app.use('/user', usersRouter);
app.use('/order', orderRouter);
app.use('/checkout', checkoutRouter);
app.use('/contact', contactRouter);
app.use('/recovery', recoverRouter);
app.use('/product', productRouter);
app.use('/history', historyRouter);

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
