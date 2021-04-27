const express = require('express');
const router = express.Router();
const { models } = require('../db/database.js');

router.post('/headquarter', (req, res) => {
  const headquarter = models.headquarter
    .create({
      social: req.body.social,
    })
    .then((data) => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log('error' + err);
    });
});

module.exports = router;
