const express = require('express');
const router = express.Router();
const { models } = require('../db/database.js');

router.post('/login', (req, res) => {
  models.user
    .findAll({
      where: {
        email: req.body.email,
      },
    })
    .then((data) => {
      // if (data.user.dataValues.password === req.body.password) {
      //   res.status(200).send();
      // } else {
      //   res.status(401).send();
      // }
    });
});

router.post('/register', async (req, res) => {
  // TODO encrypt password before savig to DB

  const user = models.user
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
    })
    .then((data) => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log('error' + err);
    });
});

module.exports = router;
