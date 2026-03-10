'use strict';

const express = require('express');
const passport = require('passport');
const router = express.Router();

// Google OAuth authentication route
router.get('/auth/google', passport.authenticate('google', {
  scope: ['profile', 'email']
}));

// Google OAuth callback route
router.get('/auth/google/callback', passport.authenticate('google', {
  failureRedirect: '/login'
}), (req, res) => {
  // Successful authentication, redirect home.
  res.redirect('/');
});

module.exports = router;
