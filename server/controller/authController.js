const mongoose = require('mongoose');
const User = mongoose.model('User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const SignUp = async (req, res) => {
  const { name, password, email, username } = req.body;
  if (!name || !password || !email || !username) {
    res.status(422).json({ error: 'Please enter all the fields' });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.status(422).json({ error: 'User already exist please login' });
    }
  });

  bcrypt.hash(password, 12).then((hashed_password) => {
    const user = new User({
      email,
      password: hashed_password,
      name,
      username
    });

    user
      .save()
      .then((user) => {
        res.json({ message: 'Account created successfully' });
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

const Login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(422).json({ error: 'please add email or password' });
  }

  User.findOne({ email: email }).then((savedUser) => {
    if (!savedUser) {
      return res.status(422).json({ error: 'Invalid email' });
    }

    bcrypt
      .compare(password, savedUser.password)
      .then((matched) => {
        if (matched) {
          const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
          const { _id, name, email, followers, following, profile_img } =
            savedUser;
          res.json({
            token,
            user: savedUser
          });
        } else {
          return res.status(422).json({ error: 'Wrong password' });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });
};

module.exports = { Login, SignUp };
