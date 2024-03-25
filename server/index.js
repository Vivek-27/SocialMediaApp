const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const { PORT, MONGO_URI } = process.env;

mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
  console.log('Connected to db');
});

mongoose.connection.on('error', () => {
  console.log('error connecting to db');
});

require('./model/userModel.js');
require('./model/postImageModel.js');

app.use(cors());
app.use(express.json());

app.use(require('./routes/auth.js'));
app.use(require('./routes/post.js'));
app.use(require('./routes/user.js'));

app.use('/check', (req, res) => {
  res.render('<h1>Working fine!!!</h1>');
});

app.listen(PORT, () => {
  console.log('Server running on PORT ' + process.env.PORT);
});
