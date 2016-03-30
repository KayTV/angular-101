angular.module('app')
.controller('HomeController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Movie App x 1000';

  $scope.getMovies = function() {
    httpFactory.getMovies()
      .then(function(response){
        console.log(response);
        $scope.movies = response.data;
      });
  };
  $scope.addMovie = function() {
    httpFactory.addMovie($scope.newMovie)
    .then(function(response){
      console.log('success');
      $scope.successMessage = 'Successfully Added ' + $scope.newMovie.title;
      $scope.newMovie = {};
    })
    .catch(function(err){
      $scope.errorMessage = 'Failed to Add ' + $scope.newMovie.title;
    })
  }
  $scope.updateMovie = function(index) {
    // console.log(index);
  };

  $scope.deleteMovie = function(index) {

  };

}]);
