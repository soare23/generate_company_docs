const express = require('express');
const router = express.Router();
const { models } = require('../db/database.js');

router.post('/capital', (req, res) => {
  const capital = models.companyCapital
    .create({
      social: req.body.social,
      total: req.body.total,
      socialPartValue: req.body.socialPartValue,
    })
    .then((data) => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log('error' + err);
    });
});

module.exports = router;
