(function() {
  angular
  .module("happit")
  .factory("AuthServices", AuthServices);

  AuthServices.$inject = ['$http'];

  function AuthServices($http) {

      var auth_rte = '10.0.2.2:3000/login';

      function fb_exc(token) {
        return $http({
          url: auth_rte,
          data: {token: token},
          method: 'POST'
        }).then(function(success) {
          return success;
        }, function (err) {
          return err;
        });
      }

      return {
        fb_exc
      }
  };

})();
