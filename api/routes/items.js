const express = require('express');
const router = express.Router();
const queries = require('../db/queries');
const knex = require('../db/connection');

router.get('/', (req, res, next) => {
  queries.getAllItems()
  .then((item) => {
    res.json({
      status: 'success',
      data: item
    });
  })
  .catch((err) => {
      console.log('They see me routing dirty!');
      return next(err);
     //res.json(err);
  });
});

router.get('/:id', (req, res, next) => {
  console.log(req.params.id);
  queries.getItem(req.params.id)
  .then((item) => {
    res.json({
      status: 'success',
      data: item
    });
  })
  .catch((err) => {
      console.log('They see me routing dirty!');
      return next(err);
     //res.json(err);
  });
});



module.exports = router;
