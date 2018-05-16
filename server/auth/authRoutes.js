const router = require('express').Router();

const User = require('../users/User');

const secret = 'that is what I shared yesterday lol';

router.post('/register', function(req, res) {
  console.log('posting', req.body);
  User.create(req.body)
    .then(user => {
      res.status(201).json(user);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;

function makeToken(user) {
  const timestamp = new Date().getTime();
  const payload = {
    sub: user._id,
    iat: timestamp,
    username: user.username
  };

  return jwt.sign(payload, secret, options);
}

module.exports = router;