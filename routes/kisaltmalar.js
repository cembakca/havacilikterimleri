const express = require('express');
const router = express.Router();

//models
const Kisaltmalar = require('../models/Kisaltmalar');


router.get('/', (req,res) => {
  const promise = Kisaltmalar.find({ });
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/kayit', function(req, res, next) {
  res.render('kisaltmaform');
});

router.post('/', (req, res, next) => {
  const kisaltmalar = new Kisaltmalar(req.body);
  const promise = kisaltmalar.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
  
});

module.exports = router;
