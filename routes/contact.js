const express = require('express');
const router = express.Router();
const { models } = require('../db/database.js');

router.post('/contact', (req, res) => {
  const contact = models.contact
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      phone: req.body.phone,
    })
    .then((data) => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log('error' + err);
    });
});

module.exports = router;
