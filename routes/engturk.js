const express = require('express');
const router = express.Router();

//models
const Engturk = require('../models/Engturk');


router.get('/', (req,res) => {
  const promise = Engturk.find({ });
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});
router.get('/kayit', function(req, res, next) {
  res.render('engform');
});

router.post('/', (req, res, next) => {
  const engturk = new Engturk(req.body);
  const promise = engturk.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
  
});

module.exports = router;
