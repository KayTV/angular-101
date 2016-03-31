angular.module('app', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.html',
        controller: 'HomeController'
      })
      .when('/newpage', {
        templateUrl: 'newpage/newpage.html',
        controller: 'NewPage'
      })
      .otherwise({redirectTo: '/'});
  });
