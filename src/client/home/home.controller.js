angular.module('app')
.controller('HomeController', ['$scope', 'httpFactory', function($scope, httpFactory){
  $scope.title = 'Movie App x 1000';

  activate();

  function activate() {
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
      $scope.newMovie.id = response.data[0];
      $scope.successMessage = 'Successfully Added ' + $scope.newMovie.title;
      $scope.movies.push($scope.newMovie);
      $scope.newMovie = {};
    })
    .catch(function(err){
      $scope.errorMessage = 'Failed to Add ' + $scope.newMovie.title;
    })
  }
  $scope.updateMovie = function(index) {
    httpFactory.updateMovie($scope.movies[index])
    .then(function(response){
      console.log(response);
      $scope.successMessage = 'Updated ' + $scope.movies[index].title;
    });
  };

  $scope.deleteMovie = function(index) {
    httpFactory.deleteMovie($scope.movies[index].id)
    .then(function(response){
      console.log('deleted movie');
      $scope.movies.splice(index, 1);
    })
  };

}]);
