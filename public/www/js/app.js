(function() {
  'use strict';

  angular
    .module('happit', ['ionic', 'ui.router', 'ngCordova', 'ngCordovaOauth', 'ionic-timepicker', 'chart.js', 'ngMaterial', 'materialCalendar'])
    .config(routeHandler)
    .run(runBlock);

    routeHandler.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
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
          url: '/habit/:id',
          templateUrl: 'partials/habit.html',
          controller: 'HabitCtrl as ctrl',
        })
        .state('new', {
          url: '/new',
          templateUrl: 'partials/new.html',
          controller: 'HabitCtrl as ctrl'
        })
        .state('edit', {
          url: '/edit/:id',
          templateUrl: 'partials/edit.html',
          controller: 'HabitCtrl as ctrl'
        })
      // $locationProvider.html5Mode(true);
    }

    function runBlock($ionicPlatform) {
      $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
          StatusBar.styleDefault();
        }
      });
    }

    function ionicTimePickerProvider() {
      var timePickerObj = {
        inputTime: ((new Date().getHours() *60 * 60) + ((new Date()).getMinutes * 60 )),
        format: 12,
        step: 15,
        setLabel: 'Set',
        closeLabel: 'Close'
      };
      ionicTimePickerProvider.configTimePicker(timePickerObj);
    }

})();
