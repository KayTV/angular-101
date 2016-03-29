angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getMovies = function() {
    return $http({
      method: 'GET',
      url: '/movies'
    });
  };

  factory.addMovie = function(movie) {
    return $http ({
      method: 'POST',
      url: '/movie',
      data: {movie: movie}
    });
  };

  return factory;
}]);
