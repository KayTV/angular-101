var express = require('express');
var router = express.Router();

var movies = [{
  name: 'Spiderman',
  genre: 'Win',
  description: 'The best hero around'
}, {
  name: 'X-Men',
  genre: 'Trash',
  description: 'This movie sucks'
}, {
  name: 'Mean Girls',
  genre: 'Comedy',
  description: 'Bitches be crazy'
}];

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/movies', function(req, res, next) {
  res.json(movies);
});

module.exports = router;
