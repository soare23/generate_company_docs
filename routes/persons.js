const express = require('express');
const router = express.Router();
const { models } = require('../db/database.js');

router.post('/persons', (req, res) => {
  const persons = models.personsInCompany
    .create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      CNP: req.body.CNP,
      IDnumber: req.body.IDnumber,
      address: req.body.address,
      releasedBy: req.body.releasedBy,
      releasedAtDate: req.body.releasedAtDate,
      admin: req.body.admin,
      associate: req.body.associate,
    })
    .then((data) => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log('error' + err);
    });
});

module.exports = router;
