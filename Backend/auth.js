// auth.js
const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcryptjs = require('bcryptjs');

const router = express.Router();

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, done) => {
  User.findOne({ username }, (err, user) => {
    if (err) return done(err);
    if (!user) return done(null, false);
    if (!user.comparePassword(password)) return done(null, false);
    return done(null, user);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

router.post('/login', (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.status(401).send({ message: 'Invalid credentials' });
    req.logIn(user, (err) => {
      if (err) return next(err);
      res.send({ message: 'Logged in successfully' });
    });
  })(req, res, next);
});

router.post('/register', (req, res, next) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  user.save((err) => {
    if (err) return next(err);
    res.send({ message: 'User created successfully' });
  });
});

module.exports = router;