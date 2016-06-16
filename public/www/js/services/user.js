(function() {
  'use strict';

  angular
    .module("happit")
    .factory("UserServices", UserServices)

  UserServices.$inject = ['$window']

  function UserServices($window) {

    function current(user, token) {
      $window.localStorage.setItem('user', user);
      $window.localStorage.setItem('token', token);
    }

    return { current }

  };
})();
