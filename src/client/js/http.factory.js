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

  factory.updateMovie = function(movie) {
      return $http({
        method: 'PUT',
        url: '/movie/'+movie.id,
        data: {movie: movie}
      });
    }

  factory.deleteMovie = function(id) {
      return $http({
        method: 'DELETE',
        url: '/movie/'+id
      });
    }

  return factory;
}]);
