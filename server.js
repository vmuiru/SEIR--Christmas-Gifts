const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 3000;

require('dotenv').config();

const app = express();

require('./config/database');
require('./config/passport');

const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const giftsRoutes = require('./routes/gifts');
const storesRoutes = require('./routes/stores');

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(morgan('dev'));
app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true

}));

app.use(passport.initialize());
app.use(passport.session());

//Passing user at every render
app.use(function (req, res, next) {
  res.locals.user = req.user;
  next();
});

app.use('/', indexRoutes);
app.use('/', usersRoutes);
app.use('/', giftsRoutes);
app.use('/', storesRoutes);

app.listen(port, () => {
  console.log(`Express is listening on port:${port}`);
});
