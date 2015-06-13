// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('lab67', [
  'ionic',
   'lab67.Controllers',
   'lab67.Services'

  ])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
      .state('list', {
        url: '/',
        templateUrl: 'views/list.html',
        controller: 'lab67.ListController'
      })
      .state('view', {
        url: '/view',
        templateUrl: 'views/view.html',
        controller: 'lab67.ViewController'
      })
      .state('userList', {
          url: '/list',
          templateUrl: 'views/user_list.html',
          controller: 'lab67.ListUserController'
      })
      .state('productsList', {
          url: '/list2',
          templateUrl: 'views/product_list.html',
          controller: 'lab67.ListProductsController'
      });

  $urlRouterProvider.otherwise('/');

});