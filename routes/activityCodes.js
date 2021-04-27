const express = require('express');
const router = express.Router();
const { models } = require('../db/database.js');

router.post('/activity', (req, res) => {
  const activtyCodes = models.activityCodes
    .create({
      code: req.body.code,
      description: req.body.description,
    })
    .then((data) => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log('error' + err);
    });
});

module.exports = router;
