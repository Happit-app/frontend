// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'

(function() {
  angular
    .module('happit', ['ionic', 'ui.router'])
    .config(routeHandler)
    .run(runBlock)

    routeHandler.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']
    runBlock.$inject = ['$ionicPlatform'];

    function routeHandler($stateProvider, $urlRouterProvider, $locationProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/',
          templateUrl: 'partials/home.html',
          controller: 'HabitsCtrl as ctrl'
        })
        .state('login', {
          url: '/login',
          templateUrl: 'partials/login.html',
          controller: 'AuthCtrl as ctrl'
        })
        .state('settings', {
          url: '/settings',
          templateUrl: 'partials/settings.html',
          controller: 'UserCtrl as ctrl'
        })
        .state('habit', {
          url: '/habit',
          templateUrl: 'partials/habit.html',
          controller: 'HabitCtrl as ctrl'
        })
        .state('new', {
          url: '/new',
          templateUrl: 'partials/new.html',
          controller: 'HabitCtrl as ctrl'
        })
        .state('edit', {
          url: '/edit',
          templateUrl: 'partials/edit.html',
          controller: 'HabitCtrl as ctrl'
        })
      $locationProvider.html5Mode(true);
    }

    function runBlock($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
          // for form inputs)
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

          // Don't remove this line unless you know what you are doing. It stops the viewport
          // from snapping when text inputs are focused. Ionic handles this internally for
          // a much nicer keyboard experience.
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    }



})();
