const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).json({ error: 'You must be logged' });
  }

  const token = authorization.replace('Bearer ', '');
  jwt.verify(token, JWT_SECRET, (error, payload) => {
    if (error) {
      return res.status(401).json({ error: 'You must be logged in 2' });
    }

    const { _id } = payload;

    User.findById(_id).then((userData) => {
      req.user = userData;

      next();
    });
  });
};
