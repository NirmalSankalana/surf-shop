const express = require('express');
const router = express.Router();

/* GET post index /reviews */
router.get('/', (req, res, next) =>{
    res.send('INDEX /posts/:id/reviews')
  });

/* POST post create /reviews */
router.post('/', (req, res, next) =>{
    res.send('CREATE /reviews')
  });

/* GET post edit. /reviews/:id/edit */
router.get('/:review_id/edit', (req, res, next) =>{
    res.send('EDIT posts/:id/reviews/:review_id/edit')
  });

/* PUT post update. /reviews/:id */
router.put('/:review_id', (req, res, next) =>{
    res.send('UPDATE /posts/:id/reviews/:review_id')
  });

/* DELETE post destroy. /reviews/:id */
router.delete('/:review_id', (req, res, next) =>{
    res.send('DELETE posts/:id/reviews/:review_id')
  });
  
  
module.exports = router;