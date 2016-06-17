(function() {
  angular
    .module('happit')
    .factory('AuthInterceptor', AuthInterceptor)

    AuthInterceptor.$inject = ['$window', '$location', '$q'];

    function AuthInterceptor($window, $location, $q)  {

          return {
            request: function(routeHandler) {
              routeHandler.headers['X-Requested-With'] = 'XMLHttpRequest';
              var token = window.localStorage.getItem('token')
              if (token) {
                routeHandler.headers.Authorization = `Bearer ${token}`
              }
              return $q.resolve(routeHandler);
            },
            responseError: function(rejection) {
              if(rejection.data === 'invalid token' || rejection.data === 'invalid signature' || rejection.data === 'jwt malformed') {
                $location.path('/logout');
              }
              if (rejection.status === 401) {
                $location.path('/login');
              }
              return $q.reject(rejection);
            }
        };
    }
})();
