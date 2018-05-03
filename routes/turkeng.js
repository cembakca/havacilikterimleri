const express = require('express');
const router = express.Router();

//models
const Turkeng = require('../models/Turkeng');


router.get('/', (req,res) => {
  const promise = Turkeng.find({ });
  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
});

router.get('/kayit', function(req, res, next) {
  res.render('turkform');
});

router.post('/', (req, res, next) => {
  const turkeng = new Turkeng(req.body);
  const promise = turkeng.save();

  promise.then((data) => {
    res.json(data);
  }).catch((err) => {
    res.json(err);
  });
  
});

module.exports = router;
