const express = require('express');
const app = express();
require('dotenv/config');

// Import Routes

const UsersRoutes = require('./routes/users');

app.use('/user', UsersRoutes);

// DB connection

const db = require('./db/database');

// Test DB

db.authenticate()
  .then(() => {
    console.log('Connected to DB');
  })
  .catch((err) => {
    console.log('Error ' + err);
  });

const PORT = process.env.PORT || 4040;

app.listen(PORT, () => {
  console.log(`server is up on ${PORT}`);
});
