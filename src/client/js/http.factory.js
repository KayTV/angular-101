angular.module('app')
.factory('httpFactory', ['$http', function($http){
  var factory = {};

  factory.getMovies = function() {
    return $http({
      method: 'GET',
      url: '/movies'
    });
  };

  return factory;
}]);
