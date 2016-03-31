var express = require('express');
var router = express.Router();
var knex = require('../../../db/knex');
function movies() {
  return knex('movies');
}

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies', function(req, res, next) {
  movies().select()
  .then(function(movies){
    res.json(movies);
  })
});

router.get('/movie/:id', function(req, res, next){
  movies().select().where('id', req.params.id)
  .then(function(movie){
    res.json(movie);
  })
})

router.post('/movie', function(req, res, next){
  movies().insert(req.body.movie, 'id')
  .then(function(result){
    res.json(result);
  })
})

router.put('/movie/:id', function(req, res, next){
  movies().where('id', req.params.id).update(req.body.movie)
  .then(function(result){
    res.json(result);
  })
})

router.delete('/movie/:id', function(req, res, next){
  movies().where('id', req.params.id).del()
  .then(function(result){
    res.json(result);
  })
})

module.exports = router;
