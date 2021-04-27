const express = require('express');
const router = express.Router();
const { models } = require('../db/database.js');

router.post('/company', (req, res) => {
  const company = models.companyInfo
    .create({
      companyName: req.body.companyName,
      mainActivity: req.body.mainActivity,
    })
    .then((data) => {
      res.status(201).send();
    })
    .catch((err) => {
      console.log('error' + err);
    });
});


module.exports = router;