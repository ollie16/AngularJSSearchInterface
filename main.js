
var App = angular.module("App", ['ngRoute']);

App.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'home.html',
      controller: 'Controller'
    })
    .when('/viewResults', {
      templateUrl: 'viewResults.html',
      controller: 'SecondController'
    })
    .otherwise({
      redirectTo: '/home'
    });
});



App.factory('mscService', function() {
 var savedData = {}
 function set(data) {
   savedData = data;
 }
 function get() {
  return savedData;
 }

 return {
  set: set,
  get: get
 }

});

     


























 
  