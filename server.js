const express = require('express');
const app = express();
require('dotenv/config');

app.use(express.json());
app.use(express.urlencoded());
// DB connection

const db = require('./db/database');

// Import Routes

const authenticationRoutes = require('./routes/authentication');
const activtyCodesRoutes = require('./routes/activityCodes');
const companyCapitalRoutes = require('./routes/companyCapital');
const companyInfoRoutes = require('./routes/companyInfo');
const contactRoutes = require('./routes/contact');
const headquarterRoutes = require('./routes/headquarter');
const personsRoutes = require('./routes/persons');

app.use('/api', authenticationRoutes);
app.use('/api', activtyCodesRoutes);
app.use('/api', companyCapitalRoutes);
app.use('/api', companyInfoRoutes);
app.use('/api', contactRoutes);
app.use('/api', headquarterRoutes);
app.use('/api', personsRoutes);

// Test DB connection

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
